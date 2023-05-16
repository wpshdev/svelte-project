import axios from 'axios';

async function load(params) {
  const url = "https://strapi.ulfbuilt.com:1337/api/team-members?filters[slug][$eq]=" + params.params.slug + "&populate=deep";
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

const index = 15;
const component = async () => (await import('./_page.svelte-3b1ca785.js')).default;
const file = '_app/immutable/entry/our-team-_slug_-page.svelte.67b35523.js';
const server_id = "src/routes/our-team/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/our-team-_slug_-page.svelte.67b35523.js","_app/immutable/chunks/index.8c538c3a.js","_app/immutable/chunks/Row.0f786142.js"];
const stylesheets = ["_app/immutable/assets/_page.575a98cb.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-b65e569b.js.map
