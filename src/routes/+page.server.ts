import axios from "$lib/axios";
// import axios from "axios";
import { STRAPI_API } from '$env/static/private';

export async function load() {
    const url = 'https://strapi.ulfbuilt.com:1337/api/home-page?populate=deep,3';
    
    const headers = {
        rel: 'preconnect',
        Authorization: 'Bearer ' + STRAPI_API
    }    
    const response = await axios.get(url, { headers });

    const urlSiteSettings = 'https://strapi.ulfbuilt.com:1337/api/site-setting?populate=deep,3';
    const siteSettings = await axios.get(urlSiteSettings, { headers }); 

    if (response.fromCache) {
        console.log("Response from cache");
      } else {
        console.log("Response from server");
      }    

    // return response.data;
    return {
      home: response.data,
      fallback: siteSettings.data
  }
}                                                                     