import axios from 'axios';
import { STRAPI_API } from '$env/static/private';

export async function load(params) {
    const url = 'https://strapi.ulfbuilt.com:1337/api/pages?filters[slug][$eq]='+params.params.slug+'&populate=deep';
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API
    }
    const response = await axios.get(url, { headers });

    return response.data;
}                                                                     