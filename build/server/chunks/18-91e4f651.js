import axios from 'axios';

async function load(params) {
  const url = "https://strapi.ulfbuilt.com:1337/api/properties?filters[slug][$eq]=" + params.params.slug + "&populate=deep";
  const headers = {
    Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
  };
  await axios.get(url, { headers });
  const response = await fetch(url, {
    headers: { "Authorization": "bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072" }
  });
  return response.json();
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
const component = async () => (await import('./_page.svelte-730d992c.js')).default;
const file = '_app/immutable/entry/portfolio-_slug_-page.svelte.5667d78d.js';
const universal_id = "src/routes/portfolio/[slug]/+page.ts";
const imports = ["_app/immutable/entry/portfolio-_slug_-page.svelte.5667d78d.js","_app/immutable/chunks/index.eb34a208.js","_app/immutable/entry/portfolio-_slug_-page.ts.c653d673.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/_page.7a0c7cb0.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=18-91e4f651.js.map
