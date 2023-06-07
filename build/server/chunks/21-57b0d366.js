import { a } from './private-f2b600c9.js';

async function e(){return (await fetch("https://strapi.ulfbuilt.com:1337/api/privacy-policy-page?populate=*",{headers:{Authorization:"bearer "+a}})).json()}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: e
});

const index = 21;
const component = async () => (await import('./_page.svelte-e16c3745.js')).default;
const file = '_app/immutable/entry/privacy-page.svelte.55d42590.js';
const server_id = "src/routes/privacy/+page.server.ts";
const imports = ["_app/immutable/entry/privacy-page.svelte.55d42590.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/PageBanner.0df617d5.js"];
const stylesheets = ["_app/immutable/assets/_page.c7b90e79.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Cta.fccf1b3b.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=21-57b0d366.js.map
