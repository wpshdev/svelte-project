import axios from 'axios';

export async function load(params) {
    const url = 'https://strapi.ulfbuilt.com:1337/api/portfolios?filters[slug][$eq]='+params.params.slug+'&populate=deep,2';
    const headers = {
        Authorization: 'Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072' 
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