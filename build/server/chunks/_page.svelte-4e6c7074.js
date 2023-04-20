import { c as create_ssr_component, v as validate_component, g as add_attribute, o as each, e as escape } from './index3-802fbda3.js';
import { R as Row, C as Col } from './Row-541efe16.js';
import { C as Container } from './Container-1c1b82fa.js';

const css = {
  code: ".blog-img.svelte-kbr9qu{min-height:300px;max-height:300px;object-fit:cover;-o-object-fit:cover}",
  map: null
};
let url = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchBlogs;
  let { data } = $$props;
  let blogs = data.data;
  let searchTerm = "";
  data.data[0].attributes.title;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  searchBlogs = blogs.filter((blog) => {
    return blog.attributes.title.includes(searchTerm);
  });
  {
    console.log(searchBlogs);
  }
  return `${$$result.head += `<!-- HEAD_svelte-11dxhax_START -->${$$result.title = `<title>News/Blogs</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-11dxhax_END -->`, ""}
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<h1 class="text-center">BLOG</h1>`;
            }
          })}
        ${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<input type="text" placeholder="search"${add_attribute("value", searchTerm, 0)}>`;
            }
          })}`;
        }
      })}
    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(searchBlogs, (blog) => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
              default: () => {
                return `<a href="${"/blog/" + escape(blog.attributes.slug, true)}" class="text-decoration-none text-black">${blog.attributes.featuredimage.data.attributes.formats == null ? `<img${add_attribute("src", url + blog.attributes.featuredimage.data.attributes.url, 0)} alt="blogtitle" class="blog-img w-100 svelte-kbr9qu">` : `<img${add_attribute("src", url + blog.attributes.featuredimage.data.attributes.formats.small.url, 0)} alt="blogtitle" class="blog-img w-100 svelte-kbr9qu">`}
                <h4 class="text-center">${escape(blog.attributes.title)}</h4>
                <p class="text-center">${escape(blog.attributes.shorttext)}</p></a>
        `;
              }
            })}`;
          })}
`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4e6c7074.js.map
