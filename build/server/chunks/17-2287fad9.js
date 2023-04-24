import axios from 'axios';

async function load() {
  const url = "https://strapi.ulfbuilt.com:1337/api/portfolio?populate=deep";
  const headers = {
    Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
  };
  const response = await axios.get(url, { headers });
  const urlProperties = "https://strapi.ulfbuilt.com:1337/api/properties?populate=deep";
  const properties = await axios.get(urlProperties, { headers });
  return {
    portfolio: response.data,
    properties: properties.data
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
const component = async () => (await import('./_page.svelte-8551ec5b.js')).default;
const file = '_app/immutable/entry/portfolio-page.svelte.881d592c.js';
const universal_id = "src/routes/portfolio/+page.ts";
const imports = ["_app/immutable/entry/portfolio-page.svelte.881d592c.js","_app/immutable/chunks/index.eb34a208.js","_app/immutable/chunks/Row.2a042fb8.js","_app/immutable/chunks/Container.2ce4905a.js","_app/immutable/entry/portfolio-page.ts.a9043fbf.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/_page.0a462137.js"];
const stylesheets = ["_app/immutable/assets/_page.53963f63.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=17-2287fad9.js.map