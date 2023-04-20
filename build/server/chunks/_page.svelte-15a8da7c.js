import { c as create_ssr_component, e as escape, v as validate_component } from './index3-802fbda3.js';
import { C as Container } from './Container-1c1b82fa.js';

const css = {
  code: ".blog-1.svelte-1f56rvk.svelte-1f56rvk{min-height:50vh;background-position:bottom;background-size:cover;padding-top:200px}.blog-1.svelte-1f56rvk h1.svelte-1f56rvk{background-color:rgba(0, 0, 0, 0.6);color:#fff;padding:1rem 3rem;display:inline;font-size:3rem;font-weight:900}",
  map: null
};
const url = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let title = data.data[0].attributes.title;
  let content = data.data[0].attributes.blogtext;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1i4el01_START -->${$$result.title = `<title>${escape(title)} - Blog</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1i4el01_END -->`, ""}
<section class="blog-1 text-center svelte-1f56rvk" style="${"background-image:url(" + escape(url, true) + escape(data.data[0].attributes.featuredimage.data.attributes.url, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="svelte-1f56rvk">${escape(title)}</h1>`;
    }
  })}</section>
${validate_component(Container, "Container").$$render($$result, { class: "py-5" }, {}, {
    default: () => {
      return `<div class="two-columns"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-15a8da7c.js.map
