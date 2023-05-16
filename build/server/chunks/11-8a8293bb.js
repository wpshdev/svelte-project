import axios from 'axios';

const load = async ({ params, fetch }) => {
  const url = "https://strapi.ulfbuilt.com:1337/api/blogs?filters[slug][$eq]=" + params.slug + "&populate=deep";
  const headers = {
    Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
  };
  const response = await axios.get(url, { headers });
  const urlblog = "https://strapi.ulfbuilt.com:1337/api/blogs?populate=deep";
  const blogs = await axios.get(urlblog, { headers });
  return {
    page: response.data,
    blogs: blogs.data
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-44f914b2.js')).default;
const file = '_app/immutable/entry/articles-_slug_-page.svelte.ea5e6521.js';
const server_id = "src/routes/articles/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/articles-_slug_-page.svelte.ea5e6521.js","_app/immutable/chunks/index.8c538c3a.js","_app/immutable/chunks/Row.0f786142.js","_app/immutable/chunks/Cta.7330acff.js","_app/immutable/chunks/axios.aba6f0e0.js"];
const stylesheets = ["_app/immutable/assets/_page.54416ef1.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Cta.6e243a44.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-8a8293bb.js.map
