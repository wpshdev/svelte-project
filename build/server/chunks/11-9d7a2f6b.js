import e from 'axios';

const l=async({params:t,fetch:s})=>{const c="https://strapi.ulfbuilt.com:1337/api/blogs?filters[slug][$eq]="+t.slug+"&populate=deep",a={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},b=await e.get(c,{headers:a}),d="https://strapi.ulfbuilt.com:1337/api/blogs?populate=deep",o=await e.get(d,{headers:a});return {page:b.data,blogs:o.data}};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: l
});

const index = 11;
const component = async () => (await import('./_page.svelte-1f7362d8.js')).default;
const server_id = "src/routes/articles/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.afbab1ce.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/Row.8ec63af8.js","_app/immutable/chunks/Cta.4f7d58e9.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Animate.c085a481.js"];
const stylesheets = ["_app/immutable/assets/11.61b0eb97.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Cta.7f0933f9.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-9d7a2f6b.js.map