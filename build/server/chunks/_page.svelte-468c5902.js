import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute, f as each, h as compute_rest_props, j as spread, l as escape_attribute_value, k as escape_object } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';

const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cssClass;
  let $$restProps = compute_rest_props($$props, ["placeholder", "src", "alt", "options"]);
  let { placeholder } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  let { options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
  } } = $$props;
  let imgElement;
  let path;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  path = placeholder;
  cssClass = $$props.class || "";
  return `<img${spread(
    [
      { src: escape_attribute_value(path) },
      { alt: escape_attribute_value(alt) },
      escape_object($$restProps),
      {
        class: "svelte-lazy-image " + escape(cssClass, true)
      }
    ],
    {
      classes: ""
    }
  )}${add_attribute("this", imgElement, 0)}>`;
});
const css = {
  code: "section.svelte-1n12jwi.svelte-1n12jwi{margin:10rem 0}.our-team.svelte-1n12jwi.svelte-1n12jwi{margin-top:5rem}.our-team__member.svelte-1n12jwi.svelte-1n12jwi{position:relative;margin-top:1.5rem}.tm-img{position:relative}.tm-box.svelte-1n12jwi.svelte-1n12jwi{position:absolute;z-index:6;bottom:2rem;background-color:#1E2D39;padding:1rem 2rem}@media(max-width: 767px){.tm-box.svelte-1n12jwi.svelte-1n12jwi{position:relative;text-align:center;bottom:0}}.tm-box.svelte-1n12jwi h3.svelte-1n12jwi,.tm-box.svelte-1n12jwi h4.svelte-1n12jwi{margin-bottom:0;font-weight:400}.owner-quote-container{padding:2rem 0}@media(max-width: 767px){.owner-quote-container{padding:0}}.owner-quote.svelte-1n12jwi.svelte-1n12jwi{background-color:#E3CEB5;height:100%;display:flex}.owner-quote.svelte-1n12jwi h3.svelte-1n12jwi{display:flex;justify-content:center;flex-direction:column}@media(max-width: 767px){.owner-quote.svelte-1n12jwi h3.svelte-1n12jwi{padding:2rem 1rem}}",
  map: null
};
let domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let ourTeam = data.data.attributes;
  console.log(ourTeam);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1gs2fsz_START -->${$$result.title = `<title>Our Team</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1gs2fsz_END -->`, ""}
<div class="cover" style="${"background-image: url(" + escape(domain, true) + escape(data.data.attributes.Cover.data.attributes.formats.large.url, true) + ");"}"><h2 class="pfont">${escape(data.data.attributes.title)}</h2>
    <p class="pfont">${escape(data.data.attributes.Subheading)}</p></div>
<section class="our-team svelte-1n12jwi">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "10", class: "mx-auto" }, {}, {
            default: () => {
              return `<h2 class="stc pb-4 text-center">${escape(ourTeam.SecondSectionTitle)}</h2>
                <p class="two-columns"><!-- HTML_TAG_START -->${ourTeam.content}<!-- HTML_TAG_END --></p>
                <div>${validate_component(LazyImage, "LazyImage").$$render(
                $$result,
                {
                  src: domain + ourTeam.SecondSectionImage.data.attributes.formats.large.url,
                  placeholder: domain + ourTeam.SecondSectionImage.data.attributes.formats.small.url,
                  alt: "Team Philosophy"
                },
                {},
                {}
              )}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="owner svelte-1n12jwi">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { noGutters: true }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "6", class: "tm-img" }, {}, {
            default: () => {
              return `<img${add_attribute("alt", ourTeam.team_member_owner.data.attributes.name, 0)} src="${escape(domain, true) + escape(ourTeam.team_member_owner.data.attributes.memberPhoto.data.attributes.formats.large.url, true)}">
            <div class="tm-box wtc svelte-1n12jwi"><h3 class="pfont svelte-1n12jwi">${escape(ourTeam.team_member_owner.data.attributes.name)}</h3>
                <h4 class="pfont svelte-1n12jwi">${escape(ourTeam.team_member_owner.data.attributes.position)}</h4></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "6", class: "owner-quote-container" }, {}, {
            default: () => {
              return `<div class="owner-quote svelte-1n12jwi"><h3 class="stc line-height-2 text-center svelte-1n12jwi"><!-- HTML_TAG_START -->${ourTeam.ownerquote}<!-- HTML_TAG_END --></h3></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="team-members svelte-1n12jwi">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `<h2 class="sfont ptc mb-5 text-center">${escape(ourTeam.title)}</h2>
        ${validate_component(Col, "Col").$$render($$result, { md: { size: 8, offset: 2 } }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(ourTeam.team_members.data, (member) => {
                    return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
                      default: () => {
                        return `<a href="${"/our-team/" + escape(member.attributes.slug, true)}"><div class="our-team__member svelte-1n12jwi"><img src="${escape(domain, true) + escape(member.attributes.memberPhoto.data.attributes.url, true)}" alt="member">
                        <div class="tm-box wtc px-5 py-3 svelte-1n12jwi" style="bottom: 1rem;">
                            <h5 class="pfont">${escape(member.attributes.name)}</h5>
                            <span class="pfont gtc">${escape(member.attributes.position)}</span></div>
                    </div></a>
                `;
                      }
                    })}`;
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="svelte-1n12jwi">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<h2 class="text-center">${escape(ourTeam.para2)}</h2>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-468c5902.js.map
