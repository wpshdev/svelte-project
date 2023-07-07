import axios from '$lib/axios';
// import axios from "axios";

import { STRAPI_API } from '$env/static/private';
export async function load() {
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API
    }
    const url = 'https://strapi.ulfbuilt.com:1337/api/article?populate=deep';
    const response = await axios.get(url, { headers });
    // const urlblog = 'https://strapi.ulfbuilt.com:1337/api/blogs?populate=deep';
    // const blogs = await axios.get(urlblog, { headers }); 
    const urlCategories = 'https://strapi.ulfbuilt.com:1337/api/blog-categories?populate=deep';
    const categories = await axios.get(urlCategories, { headers }); 
    return {
        page: response.data,
        categories: categories.data
    }
}