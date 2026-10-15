// Site checks: run with `npm test` (builds first so dist/ output can be verified).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const read = p => readFileSync(join(root, p), 'utf8')
const seo = JSON.parse(read('src/seo.json'))
const vercel = JSON.parse(read('vercel.json'))
const pages = Object.keys(seo.pages)
const appRoutes = [...read('src/App.tsx').matchAll(/<Route path="([^"]+)"/g)].map(m => m[1])

function walk(dir) {
  return readdirSync(dir).flatMap(f => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

// Reads width/height from a JPEG's SOF marker.
function jpegSize(file) {
  const b = readFileSync(file)
  let i = 2
  while (i < b.length) {
    const marker = b[i + 1]
    const len = b.readUInt16BE(i + 2)
    if (marker >= 0xc0 && marker <= 0xc3) return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
    i += 2 + len
  }
  throw new Error(`no size marker in ${file}`)
}

test('every image and video referenced in the source exists in public/', () => {
  const sources = [...walk(join(root, 'src')), join(root, 'index.html')].map(f => readFileSync(f, 'utf8')).join('\n')
  const refs = new Set([...sources.matchAll(/['"`](\/[\w./-]+\.(?:jpe?g|png|webp|avif|svg|mp4|mov))['"`]/g)].map(m => m[1]))
  assert.ok(refs.size > 20, 'expected to find asset references')
  // Video posters are derived from the video name in Locations.tsx, so check them explicitly.
  for (const r of [...refs]) if (/\.(mp4|mov)$/.test(r)) refs.add(r.replace(/\.\w+$/, '-poster.jpg'))
  const missing = [...refs].filter(r => !existsSync(join(root, 'public', r)))
  assert.deepEqual(missing, [])
})

test('every SEO page is a real route in the app', () => {
  for (const p of pages) assert.ok(appRoutes.includes(p), `${p} missing from App.tsx routes`)
})

test('every page has a title, description, and a 1200x630 share image', () => {
  for (const [route, p] of Object.entries(seo.pages)) {
    assert.ok(p.title && p.title.length <= 70, `${route}: title missing or too long`)
    assert.ok(p.description && p.description.length <= 170, `${route}: description missing or too long`)
    const file = join(root, 'public', p.image)
    assert.ok(existsSync(file), `${route}: ${p.image} missing (run npm run og)`)
    assert.deepEqual(jpegSize(file), { width: 1200, height: 630 }, `${route}: share image size`)
  }
})

test('redirects point at real pages', () => {
  for (const r of vercel.redirects) {
    const dest = r.destination.split('#')[0]
    assert.ok(pages.includes(dest), `${r.source} -> ${r.destination} is not a page`)
  }
})

test('SPA fallback rewrites to "/" (cleanUrls hides /index.html)', () => {
  assert.equal(vercel.cleanUrls, true)
  assert.deepEqual(vercel.rewrites, [{ source: '/(.*)', destination: '/' }])
})

test('build output has per-page share tags, sitemap, and robots.txt', () => {
  const dist = join(root, 'dist')
  assert.ok(existsSync(dist), 'run npm run build first')
  for (const [route, p] of Object.entries(seo.pages)) {
    const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
    const html = readFileSync(join(dist, file), 'utf8')
    const url = seo.siteUrl + (route === '/' ? '/' : route)
    assert.match(html, new RegExp(`<link rel="canonical" href="${url}"`), `${file}: canonical`)
    assert.ok(html.includes(`<meta property="og:image" content="${seo.siteUrl}${p.image}"`), `${file}: og:image`)
    assert.ok(html.includes('og:title') && html.includes('twitter:card'), `${file}: share tags`)
  }
  const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8')
  for (const route of pages) assert.ok(sitemap.includes(`<loc>${seo.siteUrl}${route === '/' ? '/' : route}</loc>`), `sitemap: ${route}`)
  assert.match(readFileSync(join(dist, 'robots.txt'), 'utf8'), /Sitemap: /)
})
