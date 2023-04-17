import { c as create_ssr_component, e as escape, v as validate_component, o as each, g as add_attribute } from './index3-802fbda3.js';
import { R as Row, C as Col } from './Row-541efe16.js';
import { C as Container } from './Container-1c1b82fa.js';

/* empty css                                                       */const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { className = "" } = $$props;
  let { width = "auto" } = $$props;
  let { height = "auto" } = $$props;
  let img;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<img${add_attribute("alt", alt, 0)}${add_attribute("class", className, 0)}${add_attribute("this", img, 0)}>`;
});
const css = {
  code: ".portfolio__property.svelte-hjclcj.svelte-hjclcj{position:relative;margin-top:1.5rem}.portfolio__property.svelte-hjclcj:hover a.svelte-hjclcj{opacity:1;background-color:rgba(8, 161, 216, 0.3);transition:0.3s}.portfolio__property.svelte-hjclcj a.svelte-hjclcj{opacity:0;position:absolute;width:100%;height:100%;left:0;top:0;transition:0.3s}.portfolio__property__caption.svelte-hjclcj.svelte-hjclcj{position:absolute;bottom:0;text-align:left;width:100%;opacity:1;color:#fff;padding:0.8rem}.portfolio__property__caption.svelte-hjclcj h2.svelte-hjclcj{font-size:1.2rem;font-weight:300;margin-bottom:0}",
  map: null
};
let domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let portfolio = data.portfolio.data.attributes;
  let properties = data.properties.data;
  console.log(properties);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-bvol6u_START -->${$$result.title = `<title>${escape(portfolio.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-bvol6u_END -->`, ""}

<section class="portfolio">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "8", class: "mx-auto text-center" }, {}, {
            default: () => {
              return `<h1>${escape(portfolio.title)}</h1>
                <!-- HTML_TAG_START -->${portfolio.content}<!-- HTML_TAG_END -->`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(properties, (property) => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
              default: () => {
                return `<div class="portfolio__property svelte-hjclcj">${validate_component(LazyImage, "LazyImage").$$render(
                  $$result,
                  {
                    src: domain + property.attributes.featuredImage.data.attributes.url,
                    alt: "member",
                    className: "portfolio__property__img"
                  },
                  {},
                  {}
                )}
                        <a href="${"/portfolio/" + escape(property.attributes.slug, true)}" class="svelte-hjclcj"><div class="portfolio__property__caption svelte-hjclcj"><h2 class="svelte-hjclcj">${escape(property.attributes.title)}</h2></div>                        
                        </a></div>
                `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8551ec5b.js.map
