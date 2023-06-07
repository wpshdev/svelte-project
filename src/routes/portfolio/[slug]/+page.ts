import axios from 'axios';
import { STRAPI_API } from '$env/static/private';

export async function load(params) {
    const url = 'https://strapi.ulfbuilt.com:1337/api/portfolios?filters[slug][$eq]='+params.params.slug+'&populate=deep,2';
    const headers = {
        Authorization: 'Bearer ' + STRAPI_API 
    }    
    const response = await axios.get(url, { headers });

	let randomCat = response.data.data[0].attributes.categories.data;
	randomCat = randomCat[Math.floor(Math.random() * randomCat.length ) ].id;

    const rpUrl = 'https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]='+randomCat+'&populate=deep,2';
    const rData = await axios.get(rpUrl, { headers });
    const rPortfolios = getRandomPortfolios(rData.data.data, 2);
    console.log(rData.data.data.length);
    const portfolio = response.data;
    return {
        portfolio,
        rPortfolios
    };

    function getRandomPortfolios(arr, count) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}