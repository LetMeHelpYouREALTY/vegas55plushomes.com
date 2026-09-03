import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const schemaPath = resolve(root, 'lib/structured-data.ts')
const configPath = resolve(root, 'lib/site-config.ts')
const pagePath = resolve(root, 'app/image-license/page.tsx')

const schema = readFileSync(schemaPath, 'utf8')
const config = readFileSync(configPath, 'utf8')
const fnStart = schema.indexOf('export function generateImageObjectSchema')
const fnEnd = schema.indexOf('export function generateOrganizationSchema')
const imageFn = schema.slice(fnStart, fnEnd)

const checks = [
  ['site-config IMAGE_LICENSE_URL', config.includes("IMAGE_LICENSE_PATH = '/image-license'")],
  ['site-config getImageCopyrightNotice', config.includes('export function getImageCopyrightNotice')],
  ['ImageObject license URL field', /license:\s*IMAGE_LICENSE_URL/.test(imageFn)],
  ['ImageObject copyrightNotice field', /copyrightNotice:\s*getImageCopyrightNotice\(/.test(imageFn)],
  ['ImageObject acquireLicensePage', imageFn.includes('acquireLicensePage')],
  ['ImageObject contentUrl', imageFn.includes('contentUrl')],
  ['ImageObject creator', imageFn.includes('creator:')],
  ['ImageObject creditText', imageFn.includes('creditText')],
  ['crawlable /image-license page', existsSync(pagePath)],
]

const failed = checks.filter(([, ok]) => !ok)
for (const [name, ok] of checks) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`)
}

if (failed.length > 0) {
  console.error(`\n${failed.length} Image Metadata check(s) failed.`)
  process.exit(1)
}

console.log('\nAll Image Metadata checks passed (license + copyrightNotice).')
