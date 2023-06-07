import axios from '$lib/axios';
import { STRAPI_API } from '$env/static/private';

export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/our-process?populate=deep,2';
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API
    }    
    const response = await axios.get(url, { headers });
    return response.data;
}                                                                     