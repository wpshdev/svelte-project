import { a as a$1 } from './private-f2b600c9.js';

async function a(){return (await fetch("https://strapi.ulfbuilt.com:1337/api/about-us?populate=*",{headers:{Authorization:"bearer "+a$1}})).json()}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: a
});

const index = 9;
const component = async () => (await import('./_page.svelte-b39cb0db.js')).default;
const file = '_app/immutable/entry/about-us-page.svelte.73ec82a2.js';
const server_id = "src/routes/about-us/+page.server.ts";
const imports = ["_app/immutable/entry/about-us-page.svelte.73ec82a2.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/PageBanner.0df617d5.js","_app/immutable/chunks/Contactform.b624116f.js","_app/immutable/chunks/Button.55b0fd81.js","_app/immutable/chunks/Input.2badc3b7.js"];
const stylesheets = ["_app/immutable/assets/_page.ea9a0bf3.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/PageBanner.4581ec8f.css","_app/immutable/assets/Contactform.5e50abd8.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-9cecebcf.js.map
