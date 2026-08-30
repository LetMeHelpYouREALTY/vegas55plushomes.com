#!/usr/bin/env node
/**
 * Upload Git-backed originals in /public to Cloudflare R2.
 * Primary store: R2 bucket vegas55plus-images
 * Backup: the same files remain in git under public/
 *
 * Requires: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID
 * Optional: R2_BUCKET (default vegas55plus-images)
 */
import { execFileSync } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const bucket = process.env.R2_BUCKET || 'vegas55plus-images'
const publicDir = join(root, 'public')

const CONTENT_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
}

function walk(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(full))
      continue
    }
    if (CONTENT_TYPES[extname(entry.name).toLowerCase()]) {
      files.push(full)
    }
  }
  return files
}

function putObject(localFile) {
  const key = relative(publicDir, localFile).split('\\').join('/')
  const contentType = CONTENT_TYPES[extname(localFile).toLowerCase()]
  const dest = `${bucket}/${key}`
  console.log(`PUT ${dest} (${contentType})`)
  execFileSync(
    'npx',
    [
      'wrangler',
      'r2',
      'object',
      'put',
      dest,
      '--file',
      localFile,
      '--content-type',
      contentType,
      '--remote',
    ],
    { stdio: 'inherit', cwd: root },
  )
}

if (!process.env.CLOUDFLARE_API_TOKEN || !process.env.CLOUDFLARE_ACCOUNT_ID) {
  console.log(
    'Skipping R2 sync: set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID to upload. Git copies in public/ remain the backup.',
  )
  process.exit(0)
}

const files = walk(publicDir).filter((file) => {
  const rel = relative(publicDir, file)
  return (
    rel.startsWith('images/') ||
    rel === 'og-image.jpg' ||
    rel === 'logo.png'
  )
})

if (files.length === 0) {
  console.error('No image files found under public/images, public/og-image.jpg, or public/logo.png')
  process.exit(1)
}

console.log(`Syncing ${files.length} Git backup images to R2 bucket ${bucket}`)
for (const file of files) {
  if (!statSync(file).isFile()) continue
  putObject(file)
}
console.log('R2 sync complete. Point NEXT_PUBLIC_IMAGE_CDN at the Worker or custom domain.')
