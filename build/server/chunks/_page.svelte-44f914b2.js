import { c as create_ssr_component, e as escape, v as validate_component, f as each } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { C as Cta } from './Cta-4dbd70c7.js';
import 'axios';

const css = {
  code: ".cover.svelte-dtq6bo.svelte-dtq6bo{padding-top:100px;margin-bottom:100px}.cover.svelte-dtq6bo .covertitle.svelte-dtq6bo{width:100%;max-width:800px}.cover.svelte-dtq6bo .coverimg.svelte-dtq6bo{height:100vh;width:100%;max-width:1200px;margin-bottom:-100px;background-size:cover;align-self:flex-start}.related-articles.svelte-dtq6bo.svelte-dtq6bo{background:#e5eef3;margin-bottom:0;padding:50px}.blog-img.svelte-dtq6bo.svelte-dtq6bo{min-height:260px;max-height:260px;object-fit:cover;-o-object-fit:cover}.easein-container.svelte-dtq6bo.svelte-dtq6bo{overflow:hidden}",
  map: null
};
const url = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let { data } = $$props;
  console.log(data);
  let title = data.page.data[0].attributes.title;
  let content = data.page.data[0].attributes.blogtext;
  let num = Math.ceil(Math.random() * 10);
  let num2 = num + 3;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  filteredItems = data.blogs.data.slice(num, num2);
  return `${$$result.head += `<!-- HEAD_svelte-g9668b_START -->${$$result.title = `<title>${escape(title)} - Article</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-g9668b_END -->`, ""}
<div class="cover svelte-dtq6bo" style="background:#E5EEF2;"><div class="covertitle svelte-dtq6bo"><p class="pfont ptc mb-1">Article</p>
        <h2 class="pfont stc mb-4">${escape(title)}</h2></div>
    <div class="coverimg svelte-dtq6bo" style="${"background-image:url(" + escape(url, true) + escape(data.page.data[0].attributes.featuredimage.data.attributes.url, true) + ");"}"></div></div>
${validate_component(Container, "Container").$$render($$result, { class: "py-5" }, {}, {
    default: () => {
      return `<h2>${escape(title)}</h2>
    <div class="two-columns"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END -->
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p></div>`;
    }
  })}
<section class="related-articles svelte-dtq6bo">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-center pb-4">Related Articles</h2>
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(filteredItems, (blog, i) => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
              default: () => {
                return `<div class="easein-container svelte-dtq6bo"><div class="easein-img"><img src="${escape(url, true) + escape(blog.attributes.featuredimage.data.attributes.formats.medium.url, true)}" alt="blogtitle" class="blog-img w-100 svelte-dtq6bo">
                    </div></div>
                <h3 class="text-center pt-3">${escape(blog.attributes.title)}</h3>
                <p class="ptc text-center">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
            `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</section>
${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-44f914b2.js.map
