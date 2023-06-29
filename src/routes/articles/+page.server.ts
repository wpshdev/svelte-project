import axios from '$lib/axios';
// import axios from "axios";

import { STRAPI_API } from '$env/static/private';
export async function load() {
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API
    }
    const url = 'https://strapi.ulfbuilt.com:1337/api/article?populate=deep'; //Page
    const res = await axios.get(url, { headers });
    const url1 = 'https://strapi.ulfbuilt.com:1337/api/blogs?populate=deep'; //Articles and Articles data
    const res1 = await axios.get(url1, { headers }); 
    const url2 = 'https://strapi.ulfbuilt.com:1337/api/blog-categories?populate=deep'; //Articles and Articles data
    const res2 = await axios.get(url2, { headers }); 
    return {
        page: res.data,
        blogs: res1.data,
        category: res2.data
    }
}