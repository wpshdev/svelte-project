import { c as create_ssr_component, e as escape, v as validate_component } from './index2-234acb26.js';
import { C as Container } from './Row-4a1db562.js';
import { C as Cta } from './Cta-4dbd70c7.js';
import 'axios';

const css = {
  code: "p{line-height:1.7rem !important}",
  map: null
};
const url = "https://strapi.ulfbuilt.com:1337/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ugnjr_START -->${$$result.title = `<title>${escape(data.data.attributes.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`, ""}
<div class="cover" style="${"background-image: url(" + escape(url, true) + escape(data.data.attributes.Cover.data.attributes.formats.large.url, true) + ");"}"><h2>${escape(data.data.attributes.title)}</h2>
    <p>${escape(data.data.attributes.Subheading)}</p></div>
<section>${validate_component(Container, "Container").$$render($$result, { class: "mw-1000" }, {}, {
    default: () => {
      return `<h2 class="text-center mb-5">${escape(data.data.attributes.Heading)}</h2>
        <!-- HTML_TAG_START -->${data.data.attributes.Content}<!-- HTML_TAG_END -->`;
    }
  })}</section>
${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d6f74c9c.js.map
