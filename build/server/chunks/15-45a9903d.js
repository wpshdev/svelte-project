import e from 'axios';

async function b(){const a={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};return (await e.get("https://strapi.ulfbuilt.com:1337/api/our-team?populate=deep",{headers:a})).data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: b
});

const index = 15;
const component = async () => (await import('./_page.svelte-17a5711e.js')).default;
const server_id = "src/routes/our-team/+page.server.ts";
const imports = ["_app/immutable/nodes/15.007f31bd.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/Row.8ec63af8.js","_app/immutable/chunks/Animate.c085a481.js","_app/immutable/chunks/PageBanner.fd3ec07b.js","_app/immutable/chunks/index.97123c66.js","_app/immutable/chunks/Contactform.c801e860.js","_app/immutable/chunks/Button.5819af8e.js","_app/immutable/chunks/Input.fab271ea.js"];
const stylesheets = ["_app/immutable/assets/15.fa04bad2.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/PageBanner.dd9cb63b.css","_app/immutable/assets/Contactform.98e8de2c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-45a9903d.js.map