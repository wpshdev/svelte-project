import { a } from './private-f2b600c9.js';

async function e(){return (await fetch("https://strapi.ulfbuilt.com:1337/api/contact-page?populate=*",{headers:{Authorization:"bearer "+a}})).json()}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: e
});

const index = 13;
const component = async () => (await import('./_page.svelte-ad7c44c8.js')).default;
const file = '_app/immutable/entry/contact-us-page.svelte.6bce698e.js';
const server_id = "src/routes/contact-us/+page.server.ts";
const imports = ["_app/immutable/entry/contact-us-page.svelte.6bce698e.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Button.55b0fd81.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Input.2badc3b7.js","_app/immutable/chunks/PageBanner.0df617d5.js"];
const stylesheets = ["_app/immutable/assets/_page.c1373a1f.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-b0d3a1ba.js.map
