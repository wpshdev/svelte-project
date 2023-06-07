import { STRAPI_API } from '$env/static/private';

export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/about-us?populate=*';
    const response = await fetch(url, {
        headers: { 'Authorization': 'bearer ' + STRAPI_API },
    });
    return response.json();
}