type Env = {
  IMAGES: R2Bucket
}

const ALLOWED_EXTENSION = /\.(jpe?g|png|webp|avif|gif|svg)$/i

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 })
    }

    const url = new URL(request.url)
    const key = decodeURIComponent(url.pathname.replace(/^\/+/, ''))

    if (!key || key.includes('..') || key.startsWith('/') || !ALLOWED_EXTENSION.test(key)) {
      return new Response('Not found', { status: 404 })
    }

    const object = await env.IMAGES.get(key)
    if (!object) {
      return new Response('Not found', { status: 404 })
    }

    const headers = new Headers()
    object.writeHttpMetadata(headers)
    headers.set('etag', object.httpEtag)
    headers.set('cache-control', 'public, max-age=31536000, immutable')
    headers.set('access-control-allow-origin', '*')
    headers.set('x-content-type-options', 'nosniff')

    if (request.method === 'HEAD') {
      return new Response(null, { headers })
    }

    return new Response(object.body, { headers })
  },
} satisfies ExportedHandler<Env>
