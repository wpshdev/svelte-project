import axios from 'axios';
import { STRAPI_API } from '$env/static/private';


export async function load() {
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API 
    }
    const response = await axios.get("https://strapi.ulfbuilt.com:1337/api/our-team?populate=deep", { headers });
    return response.data;
}                                                                     