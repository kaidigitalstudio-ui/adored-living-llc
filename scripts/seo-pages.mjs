// Post-build: give every route its own HTML file with real <title>, description, canonical,
// and Open Graph / Twitter tags, since link-preview crawlers don't run JavaScript.
// Also writes sitemap.xml and robots.txt. Page data lives in src/seo.json.
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const { siteUrl, siteName, pages } = JSON.parse(readFileSync(join(root, 'src/seo.json'), 'utf8'))
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const PHONE = '+1-248-931-9009'
const homes = [
  { name: 'Adored Living – Rochester Hills', street: '185 E South Blvd', city: 'Rochester Hills', zip: '48307' },
  { name: 'Adored Living – Clarkston', street: '5111 Heath Ave', city: 'Clarkston', zip: '48346' },
]
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': homes.map(h => ({
    '@type': 'LocalBusiness',
    name: h.name,
    url: `${siteUrl}/locations`,
    telephone: PHONE,
    email: 'adoredlivingllc@gmail.com',
    image: `${siteUrl}/og/home.jpg`,
    address: { '@type': 'PostalAddress', streetAddress: h.street, addressLocality: h.city, addressRegion: 'MI', postalCode: h.zip, addressCountry: 'US' },
  })),
}

const head = (route, p) => {
  const url = siteUrl + (route === '/' ? '/' : route)
  const img = siteUrl + p.image
  return [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${siteName}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(p.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(p.title)}" />`,
    `<meta name="twitter:description" content="${esc(p.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    ...(route === '/' ? [`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`] : []),
  ].join('\n    ')
}

const MARKER = /<!-- seo:start -->[\s\S]*<!-- seo:end -->/
if (!MARKER.test(template)) throw new Error('index.html is missing the seo:start/seo:end markers')

for (const [route, p] of Object.entries(pages)) {
  const html = template.replace(MARKER, head(route, p))
  // /care -> dist/care.html, served at /care via "cleanUrls" in vercel.json
  writeFileSync(join(dist, route === '/' ? 'index.html' : `${route.slice(1)}.html`), html)
}

const today = new Date().toISOString().slice(0, 10)
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pages).map(r => `  <url><loc>${siteUrl}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`SEO: wrote ${Object.keys(pages).length} pages, sitemap.xml, robots.txt`)
