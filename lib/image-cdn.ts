/**
 * Cloudflare R2 is the live image origin. Git copies in /public are the backup.
 * Set NEXT_PUBLIC_IMAGE_CDN to the Worker or R2 custom domain (no trailing slash).
 * Leave unset to serve the Git copies from Vercel during local/dev.
 */
export const IMAGE_CDN_ORIGIN = (process.env.NEXT_PUBLIC_IMAGE_CDN ?? '').replace(/\/$/, '')

export const CLOUDFLARE_IMAGE_HOSTS = [
  'images.vegas55plushomes.com',
  'imagedelivery.net',
] as const

export function toPublicSrc(localSrc: string): string {
  if (localSrc.startsWith('http://') || localSrc.startsWith('https://')) {
    return localSrc
  }
  if (!IMAGE_CDN_ORIGIN) {
    return localSrc
  }
  return `${IMAGE_CDN_ORIGIN}${localSrc.startsWith('/') ? localSrc : `/${localSrc}`}`
}

export function isRemoteImageSrc(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://')
}

export function imageCdnHostname(): string | null {
  if (!IMAGE_CDN_ORIGIN) return null
  try {
    return new URL(IMAGE_CDN_ORIGIN).hostname
  } catch {
    return null
  }
}
