// Renders 1200x630 social share cards for each page in src/seo.json into public/og/.
// Run with: npm run og   (needs Google Chrome installed; re-run after changing seo.json)
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, resolve } from 'node:path'
import { tmpdir } from 'node:os'

const root = resolve(import.meta.dirname, '..')
const seo = JSON.parse(readFileSync(join(root, 'src/seo.json'), 'utf8'))
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const tmp = mkdtempSync(join(tmpdir(), 'og-'))

const card = ({ photo, pos, eyebrow, heading }) => `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@600&family=Hanken+Grotesk:wght@500;600&display=block" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;display:grid;grid-template-columns:600px 600px;background:#fbfaf6;font-family:'Hanken Grotesk',sans-serif;color:#2b2925}
  .photo{background:url('${join(root, 'public', photo)}') ${pos}/cover}
  .panel{padding:64px 60px 56px;display:flex;flex-direction:column}
  .brand{display:flex;align-items:center;gap:14px}
  .mark{width:44px;height:44px;border:2px solid #4f7361;border-radius:50%;display:grid;place-items:center}
  .mark i{width:17px;height:17px;border-radius:50%;background:#4f7361}
  .brand b{font-family:'Schibsted Grotesk';font-size:26px;font-weight:600;display:block;line-height:1}
  .brand small{font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:#a6a199;font-weight:600}
  .eyebrow{margin-top:auto;font-size:16px;letter-spacing:.18em;text-transform:uppercase;color:#395546;font-weight:600}
  h1{font-family:'Schibsted Grotesk';font-weight:600;font-size:54px;line-height:1.08;letter-spacing:-.02em;margin-top:18px}
  h1 em{font-style:normal;color:#395546}
  .foot{margin-top:auto;padding-top:22px;border-top:1px solid #2b29251c;font-size:19px;color:#6e6960;font-weight:500}
</style></head>
<body>
  <div class="photo"></div>
  <div class="panel">
    <div class="brand"><span class="mark"><i></i></span><span><b>Adored Living</b><small>Assisted Living</small></span></div>
    <div class="eyebrow">${eyebrow}</div>
    <h1>${heading}</h1>
    <div class="foot">Rochester Hills &amp; Clarkston, MI · (248) 931-9009</div>
  </div>
</body></html>`

for (const [route, page] of Object.entries(seo.pages)) {
  const html = join(tmp, 'card.html')
  const png = join(tmp, 'card.png')
  writeFileSync(html, card(page.card))
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--allow-file-access-from-files', '--virtual-time-budget=5000', '--window-size=1200,630', `--screenshot=${png}`, `file://${html}`],
    { stdio: 'ignore' })
  const out = join(root, 'public', page.image)
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '85', png, '--out', out], { stdio: 'ignore' })
  console.log(`${route} -> ${page.image}`)
}
rmSync(tmp, { recursive: true, force: true })
