import { STRAPI_API } from '$env/static/private';
import axios from '$lib/axios';

export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/contact-page?populate=*';

    const headers = {
        Authorization: 'Bearer ' + STRAPI_API 
    }  
    const response = await axios.get(url, { headers });

    const contactDetailsURL = 'https://strapi.ulfbuilt.com:1337/api/site-setting?populate=deep,3';
    const contactDetails = await axios.get(contactDetailsURL, { headers }); 

    // const response = await fetch(url, {
    //     headers: { 'Authorization': 'bearer ' + STRAPI_API },
    // });
    // return response.json();

    return {
        contact: response.data,
        contactDetails: contactDetails.data,
    }
}

