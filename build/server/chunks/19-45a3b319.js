import axios from 'axios';

async function load(params) {
  const url = "https://strapi.ulfbuilt.com:1337/api/portfolios?filters[slug][$eq]=" + params.params.slug + "&populate=deep,2";
  const headers = {
    Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
  };
  const response = await axios.get(url, { headers });
  let randomCat = response.data.data[0].attributes.categories.data;
  randomCat = randomCat[Math.floor(Math.random() * randomCat.length)].id;
  const rpUrl = "https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]=" + randomCat + "&populate=deep,2";
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

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 19;
const component = async () => (await import('./_page.svelte-8cc8da60.js')).default;
const file = '_app/immutable/entry/portfolio-_slug_-page.svelte.23e5c15e.js';
const universal_id = "src/routes/portfolio/[slug]/+page.ts";
const imports = ["_app/immutable/entry/portfolio-_slug_-page.svelte.23e5c15e.js","_app/immutable/chunks/index.8c538c3a.js","_app/immutable/chunks/Button.503991bb.js","_app/immutable/chunks/Row.0f786142.js","_app/immutable/chunks/Input.4f946a96.js","_app/immutable/entry/portfolio-_slug_-page.ts.1ae85379.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/_page.c1284534.js"];
const stylesheets = ["_app/immutable/assets/_page.40655fe9.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=19-45a3b319.js.map
