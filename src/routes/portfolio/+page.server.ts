import axios from "$lib/axios";
// import axios from "axios";
import { STRAPI_API } from '$env/static/private';

export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/portfolio-page?populate=deep,5';
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API 
    }    
    const response = await axios.get(url, { headers });


    // const urlProperties = 'https://strapi.ulfbuilt.com:1337/api/portfolios?populate=deep';
    // const properties = await axios.get(urlProperties, { headers }); 

    // console.log(response.json());
    return {
        portfolio: response.data
        // properties: properties.data
    }
}                                                                     