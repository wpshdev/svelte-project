import { STRAPI_API } from '$env/static/private';

export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/contact-page?populate=*';
    const response = await fetch(url, {
        headers: { 'Authorization': 'bearer ' + STRAPI_API },
    });
    return response.json();
}