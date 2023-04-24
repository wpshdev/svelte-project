const load = async ({ params, fetch }) => {
  const url = "https://strapi.ulfbuilt.com:1337/api/blogs?filters[slug][$eq]=" + params.slug + "&populate=deep";
  const response = await fetch(url, {
    headers: { "Authorization": "bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072" }
  });
  return response.json();
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-15a8da7c.js')).default;
const file = '_app/immutable/entry/blog-_slug_-page.svelte.6dee07ca.js';
const server_id = "src/routes/blog/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/blog-_slug_-page.svelte.6dee07ca.js","_app/immutable/chunks/index.eb34a208.js","_app/immutable/chunks/Container.2ce4905a.js"];
const stylesheets = ["_app/immutable/assets/_page.b4e47452.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-91b0df02.js.map