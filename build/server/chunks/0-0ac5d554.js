import axios from 'axios';

async function load() {
  const url = "https://strapi.ulfbuilt.com:1337/api/menus/1?nested&populate=*";
  const headers = {
    Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-0fc54b34.js')).default;
const file = '_app/immutable/entry/_layout.svelte.2e45135d.js';
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/entry/_layout.svelte.2e45135d.js","_app/immutable/chunks/index.8c538c3a.js","_app/immutable/chunks/Row.0f786142.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/paths.29b6cca4.js","_app/immutable/chunks/index.0c1ef8f9.js","_app/immutable/chunks/Button.503991bb.js"];
const stylesheets = ["_app/immutable/assets/_layout.1faf6564.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-0ac5d554.js.map
