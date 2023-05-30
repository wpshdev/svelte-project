import e from 'axios';

async function s(a){const e$1="https://strapi.ulfbuilt.com:1337/api/team-members?filters[slug][$eq]="+a.params.slug+"&populate=deep",d={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};return (await e.get(e$1,{headers:d})).data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: s
});

const index = 16;
const component = async () => (await import('./_page.svelte-530d3c5b.js')).default;
const server_id = "src/routes/our-team/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/16.5c3aee39.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/Row.8ec63af8.js"];
const stylesheets = ["_app/immutable/assets/16.575a98cb.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-3b5aae21.js.map
