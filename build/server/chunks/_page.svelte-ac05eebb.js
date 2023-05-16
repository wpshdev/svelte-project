import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';

const css = {
  code: ".mx-8.svelte-gvnmmk{margin:8rem auto}section.svelte-gvnmmk{margin:8rem auto}",
  map: null
};
let url = "https://strapi.ulfbuilt.com:1337/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let abouttitle = data.data.attributes.Title;
  let aboutimage = data.data.attributes.featuredimage.data.attributes.formats.large.url;
  let aboutsubheading = data.data.attributes.Aboutsubheading;
  let about = data.data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-356b5t_START -->${$$result.title = `<title>${escape(abouttitle)} - changes</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-356b5t_END -->`, ""}

<div class="cover" style="${"background-image: url(" + escape(url, true) + escape(aboutimage, true) + ");"}"><h2 class="pfont">${escape(abouttitle)}</h2>
    <p class="pfont">${escape(aboutsubheading)}</p></div>
<section class="mw-1000 text-center svelte-gvnmmk"><h2><!-- HTML_TAG_START -->${about.AboutHeading}<!-- HTML_TAG_END --></h2>
        <p><!-- HTML_TAG_START -->${about.abouttext}<!-- HTML_TAG_END --></p></section>
<section class="svelte-gvnmmk">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", class: "align-self-center" }, {}, {
            default: () => {
              return `<h3 class="mb-4"><!-- HTML_TAG_START -->${about.Section1heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${about.Section1text}<!-- HTML_TAG_END --></p>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "5" }, {}, {
            default: () => {
              return `
                <div><img${add_attribute("src", url + about.Section1image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section1heading, 0)} class="w-100"></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}`;
        }
      })}`;
    }
  })}</section>
<section class="svelte-gvnmmk">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "5" }, {}, {
            default: () => {
              return `<div><img${add_attribute("src", url + about.Section2image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section2heading, 0)} class="w-100"></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", class: "align-self-center" }, {}, {
            default: () => {
              return `<h3 class="mb-4"><!-- HTML_TAG_START -->${about.Section2heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${about.Section2text}<!-- HTML_TAG_END --></p>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}`;
        }
      })}`;
    }
  })}</section>
<section class="svelte-gvnmmk">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", class: "align-self-center" }, {}, {
            default: () => {
              return `<h3 class="mb-4"><!-- HTML_TAG_START -->${about.Section3heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${about.Section3text}<!-- HTML_TAG_END --></p>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "5" }, {}, {
            default: () => {
              return `<div><img${add_attribute("src", url + about.Section3image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section3heading, 0)} class="w-100"></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}`;
        }
      })}`;
    }
  })}</section>
<section class="mx-8 svelte-gvnmmk">
    <div style="width:80vw;margin:auto;min-width:80vw;max-width:100vw;">${about.Section4image.data ? `<img${add_attribute("src", url + about.Section4image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section3heading, 0)}>` : ``}
        <p class="text-center"><i>${escape(about.Section4text)}</i></p></div></section>
<section class="mw-1000 mx-8 svelte-gvnmmk">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="mb-5 text-center">${escape(about.Section5heading)}</h2>
        <p class="text-left"><!-- HTML_TAG_START -->${about.Section5text}<!-- HTML_TAG_END --></p>`;
    }
  })}</section>
<section class="svelte-gvnmmk">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<h2 class="text-center mb-5"><!-- HTML_TAG_START -->${about.Section6heading}<!-- HTML_TAG_END --></h2>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render(
            $$result,
            {
              md: "5",
              class: "align-self-center blue-color-background p-5",
              style: "min-height: 440px;"
            },
            {},
            {
              default: () => {
                return `<h3 class="mb-4 text-right"><!-- HTML_TAG_START -->${about.Section6subheading}<!-- HTML_TAG_END --></h3>
                <p class="text-right"><!-- HTML_TAG_START -->${about.Section6text}<!-- HTML_TAG_END --></p>`;
              }
            }
          )}
            ${validate_component(Col, "Col").$$render($$result, { md: "5", style: "margin-left:-30px;" }, {}, {
            default: () => {
              return `<div>
                <img${add_attribute("src", url + about.Section6image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section6subheading, 0)} class="w-100"></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}`;
        }
      })}`;
    }
  })}
    ${validate_component(Container, "Container").$$render($$result, { class: "mx-10" }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render($$result, { md: "5" }, {}, {
            default: () => {
              return `<div>
                    <img${add_attribute("src", url + about.Section7image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section7heading, 0)} class="w-100"></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render(
            $$result,
            {
              md: "5",
              class: "align-self-center silver-color-background p-5",
              style: "margin-left:-30px;min-height: 440px;"
            },
            {},
            {
              default: () => {
                return `<h3 class="mb-4"><!-- HTML_TAG_START -->${about.Section7heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${about.Section7text}<!-- HTML_TAG_END --></p>`;
              }
            }
          )}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}`;
        }
      })}`;
    }
  })}
    ${validate_component(Container, "Container").$$render($$result, { class: "mx-10" }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}
            ${validate_component(Col, "Col").$$render(
            $$result,
            {
              md: "5",
              class: "align-self-center blue-color-background p-5",
              style: "min-height: 440px;"
            },
            {},
            {
              default: () => {
                return `<h3 class="mb-4 text-right"><!-- HTML_TAG_START -->${about.Section8heading}<!-- HTML_TAG_END --></h3>
                <p class="text-right"><!-- HTML_TAG_START -->${about.Section8text}<!-- HTML_TAG_END --></p>`;
              }
            }
          )}
            ${validate_component(Col, "Col").$$render($$result, { md: "5", style: "margin-left:-30px;" }, {}, {
            default: () => {
              return `<div>
                <img${add_attribute("src", url + about.Section8image.data.attributes.formats.large.url, 0)}${add_attribute("alt", about.Section8heading, 0)} class="w-100"></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "1" }, {}, {})}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ac05eebb.js.map
