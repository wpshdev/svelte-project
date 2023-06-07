<<<<<<< Updated upstream
import axios from 'axios';
import { STRAPI_API } from '$env/static/private';
=======
import axios from '$lib/axios';
>>>>>>> Stashed changes

export async function load(params: { params: { slug: string; }; }) {
    const url = 'https://strapi.ulfbuilt.com:1337/api/team-members?filters[slug][$eq]='+params.params.slug+'&populate=deep';
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API
    }
    const response = await axios.get(url, { headers });
    return response.data;
}                                                                     