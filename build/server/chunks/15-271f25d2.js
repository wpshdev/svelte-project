import { e } from './axios-e3741e97.js';
import { a } from './private-f2b600c9.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function i(){const t={Authorization:"Bearer "+a};return (await e.get("https://strapi.ulfbuilt.com:1337/api/our-team?populate=deep",{headers:t})).data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: i
});

const index = 15;
const component = async () => (await import('./_page.svelte-ae2fb8f2.js')).default;
const file = '_app/immutable/entry/our-team-page.svelte.d3b2c224.js';
const server_id = "src/routes/our-team/+page.server.ts";
const imports = ["_app/immutable/entry/our-team-page.svelte.d3b2c224.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/PageBanner.0df617d5.js","_app/immutable/chunks/Contactform.b624116f.js","_app/immutable/chunks/Button.55b0fd81.js","_app/immutable/chunks/Input.2badc3b7.js"];
const stylesheets = ["_app/immutable/assets/_page.fa04bad2.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/PageBanner.4581ec8f.css","_app/immutable/assets/Contactform.5e50abd8.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-271f25d2.js.map
