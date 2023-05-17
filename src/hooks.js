export async function handle({ request, resolve }) {
    const response = await resolve(request);

    if (request.path.startsWith('/assets')) {
        response.headers['cache-control'] = 'public, max-age=31536000, immutable';
    }

    return response;
}
