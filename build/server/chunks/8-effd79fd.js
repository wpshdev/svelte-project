import axios from 'axios';

async function load() {
  const url = "https://strapi.ulfbuilt.com:1337/api/home-page?populate=deep,3";
  const headers = {
    Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
const component = async () => (await import('./_page.svelte-cbab998d.js')).default;
const file = '_app/immutable/entry/_page.svelte.322de14c.js';
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/entry/_page.svelte.322de14c.js","_app/immutable/chunks/index.8c538c3a.js","_app/immutable/chunks/index.0c1ef8f9.js","_app/immutable/chunks/Row.0f786142.js","_app/immutable/chunks/MasonryCard.svelte_svelte_type_style_lang.bb67ed86.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/Cta.7330acff.js","_app/immutable/chunks/PageBanner.63bc4128.js"];
const stylesheets = ["_app/immutable/assets/_page.c9e80a7b.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryCard.963c0e80.css","_app/immutable/assets/Cta.6e243a44.css","_app/immutable/assets/PageBanner.99b5f765.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-effd79fd.js.map
