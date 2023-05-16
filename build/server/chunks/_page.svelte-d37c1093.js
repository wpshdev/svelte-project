import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { C as Cta } from './Cta-4dbd70c7.js';
import 'axios';

const css = {
  code: ".service-box.svelte-1wob8vd.svelte-1wob8vd{padding:3rem}.service-box.svelte-1wob8vd .service-box-inner.svelte-1wob8vd{display:flex;margin-bottom:20px}.service-box.svelte-1wob8vd .service-icon.svelte-1wob8vd{background-color:#263A63;padding:20px;color:#fff;box-shadow:3px 3px 3px #aaa;border-radius:10px}.service-box.svelte-1wob8vd h4.svelte-1wob8vd{align-self:center;padding-left:20px}",
  map: null
};
const url = "https://strapi.ulfbuilt.com:1337/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let page = data.data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1m5qggx_START -->${$$result.title = `<title>${escape(page.Title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1m5qggx_END -->`, ""}
<div class="cover" style="${"background-image: url(" + escape(url, true) + escape(page.Cover.data[0].attributes.formats.large.url, true) + ");"}"><h2>${escape(page.Title)}</h2>
    <p>${escape(page.Subheading)}</p></div>
<section class="service-b">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-center mb-5 py-3">${escape(page.section1heading)}</h2>
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "4", sm: "6", xs: "12" }, {}, {
            default: () => {
              return `<div class="service-box svelte-1wob8vd"><div class="service-box-inner svelte-1wob8vd"><div class="service-icon svelte-1wob8vd">${escape(page.section1item1icon)}</div><h4 class="svelte-1wob8vd">${escape(page.section1item1heading)}</h4></div>
                    <p>${escape(page.section1item1text)}</p></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", sm: "6", xs: "12" }, {}, {
            default: () => {
              return `<div class="service-box svelte-1wob8vd"><div class="service-box-inner svelte-1wob8vd"><div class="service-icon svelte-1wob8vd">${escape(page.section1item2icon)}</div><h4 class="svelte-1wob8vd">${escape(page.section1item2heading)}</h4></div>
                    <p>${escape(page.section1item2text)}</p></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", sm: "6", xs: "12" }, {}, {
            default: () => {
              return `<div class="service-box svelte-1wob8vd"><div class="service-box-inner svelte-1wob8vd"><div class="service-icon svelte-1wob8vd">${escape(page.section1item3icon)}</div><h4 class="svelte-1wob8vd">${escape(page.section1item3heading)}</h4></div>
                    <p>${escape(page.section1item3text)}</p></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", sm: "6", xs: "12" }, {}, {
            default: () => {
              return `<div class="service-box svelte-1wob8vd"><div class="service-box-inner svelte-1wob8vd"><div class="service-icon svelte-1wob8vd">${escape(page.section1item4icon)}</div><h4 class="svelte-1wob8vd">${escape(page.section1item4heading)}</h4></div>
                    <p>${escape(page.section1item4text)}</p></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", sm: "6", xs: "12" }, {}, {
            default: () => {
              return `<div class="service-box svelte-1wob8vd"><div class="service-box-inner svelte-1wob8vd"><div class="service-icon svelte-1wob8vd">${escape(page.section1item5icon)}</div><h4 class="svelte-1wob8vd">${escape(page.section1item5heading)}</h4></div>
                    <p>${escape(page.section1item5text)}</p></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", sm: "6", xs: "12" }, {}, {
            default: () => {
              return `<div class="service-box svelte-1wob8vd"><div class="service-box-inner svelte-1wob8vd"><div class="service-icon svelte-1wob8vd">${escape(page.section1item6icon)}</div><h4 class="svelte-1wob8vd">${escape(page.section1item6heading)}</h4></div>
                    <p>${escape(page.section1item6text)}</p></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="mx-10">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-center mb-5 py-3">${escape(page.section2mainheading)}</h2>
            ${validate_component(Row, "Row").$$render(
        $$result,
        {
          noGutters: true,
          class: "mw-1000 justify-content-center"
        },
        {},
        {
          default: () => {
            return `${validate_component(Col, "Col").$$render(
              $$result,
              {
                md: "5",
                style: "display:flex;flex-direction:column;justify-content:center;"
              },
              {},
              {
                default: () => {
                  return `<h4 class="text-right pfont px-5 py-3" style="font-weight: 400;text-transform:uppercase;"><!-- HTML_TAG_START -->${page.section2heading}<!-- HTML_TAG_END --></h4>
                    <p class="text-right px-5 py-3 blue-color-background"><!-- HTML_TAG_START -->${page.section2text}<!-- HTML_TAG_END --></p>`;
                }
              }
            )}
                ${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
              default: () => {
                return `<img src="${escape(url, true) + escape(page.section2image.data.attributes.formats.medium.url, true)}"${add_attribute("alt", page.section2heading, 0)} class="w-100">`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</section>
<section class="mx-10">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render(
        $$result,
        {
          noGutters: true,
          class: "mw-1000 justify-content-center"
        },
        {},
        {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
              default: () => {
                return `<img src="${escape(url, true) + escape(page.section3image.data.attributes.formats.medium.url, true)}"${add_attribute("alt", page.section3heading, 0)} class="w-100">`;
              }
            })}
            ${validate_component(Col, "Col").$$render(
              $$result,
              {
                md: "5",
                style: "display:flex;flex-direction:column;justify-content:center;"
              },
              {},
              {
                default: () => {
                  return `<h4 class="px-5 py-3 pfont" style="font-weight: 400;text-transform:uppercase;"><!-- HTML_TAG_START -->${page.section3heading}<!-- HTML_TAG_END --></h4>
                <p class="px-5 py-3 blue-color-background"><!-- HTML_TAG_START -->${page.section3text}<!-- HTML_TAG_END --></p>`;
                }
              }
            )}`;
          }
        }
      )}`;
    }
  })}</section>
<section class="mx-10">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render(
        $$result,
        {
          noGutters: true,
          class: "mw-1000 justify-content-center"
        },
        {},
        {
          default: () => {
            return `${validate_component(Col, "Col").$$render(
              $$result,
              {
                md: "5",
                style: "display:flex;flex-direction:column;justify-content:center;"
              },
              {},
              {
                default: () => {
                  return `<h4 class="text-right pfont px-5 py-3" style="font-weight: 400;text-transform:uppercase;"><!-- HTML_TAG_START -->${page.section4heading}<!-- HTML_TAG_END --></h4>
                    <p class="text-right px-5 py-3 blue-color-background"><!-- HTML_TAG_START -->${page.section4text}<!-- HTML_TAG_END --></p>`;
                }
              }
            )}
                ${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
              default: () => {
                return `<img src="${escape(url, true) + escape(page.section4image.data.attributes.formats.medium.url, true)}"${add_attribute("alt", page.section4heading, 0)} class="w-100">`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</section>
<section class="height-100vh"><img src="${escape(url, true) + escape(page.section5image.data.attributes.formats.medium.url, true)}"${add_attribute("alt", page.title, 0)} class="w-100"></section>
<section>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-center mb-3 py-3">${escape(page.section6heading)}</h2>
        <p class="mb-2 py-3 two-columns"><!-- HTML_TAG_START -->${page.section6text}<!-- HTML_TAG_END --></p>
        <div class="text-right"><a class="btn btn-secondary" href="/contact">${escape(page.section6btn)}</a></div>`;
    }
  })}</section>
${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d37c1093.js.map
