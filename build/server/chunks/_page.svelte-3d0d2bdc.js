import { c as create_ssr_component, v as validate_component, e as escape, o as each } from './index3-802fbda3.js';
import { R as Row, C as Col } from './Row-541efe16.js';
import { C as Container } from './Container-1c1b82fa.js';

const css = {
  code: ".our-team.svelte-xdvuvi img.svelte-xdvuvi{width:100%;max-width:100%;height:auto}.our-team__member.svelte-xdvuvi.svelte-xdvuvi{position:relative;margin-top:1.5rem}.our-team__member.svelte-xdvuvi:hover a.svelte-xdvuvi{opacity:1;background-color:rgba(8, 161, 216, 0.3);transition:0.3s}.our-team__member.svelte-xdvuvi a.svelte-xdvuvi{opacity:0;position:absolute;width:100%;height:100%;left:0;top:0;transition:0.3s}.our-team__member_caption.svelte-xdvuvi.svelte-xdvuvi{position:absolute;bottom:0;text-align:left;width:100%;opacity:1;color:#fff;padding:0.8rem}.our-team__member_caption.svelte-xdvuvi h2.svelte-xdvuvi{font-size:1.2rem;font-weight:300;margin-bottom:0}.our-team__member_caption.svelte-xdvuvi span.svelte-xdvuvi{font-weight:300}",
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
  return `${$$result.head += `<!-- HEAD_svelte-dmrein_START -->${$$result.title = `<title>Our Team</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-dmrein_END -->`, ""}

<section class="our-team svelte-xdvuvi">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "8", class: "mx-auto text-center" }, {}, {
            default: () => {
              return `<h1>${escape(ourTeam.title)}</h1>
                <!-- HTML_TAG_START -->${ourTeam.content}<!-- HTML_TAG_END -->`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${each(ourTeam.team_members.data, (member) => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
              default: () => {
                return `<div class="our-team__member svelte-xdvuvi"><img src="${escape(domain, true) + escape(member.attributes.memberPhoto.data.attributes.url, true)}" alt="member" class="svelte-xdvuvi">
                        <a href="${"/our-team/" + escape(member.attributes.slug, true)}" class="svelte-xdvuvi"><div class="our-team__member_caption svelte-xdvuvi"><h2 class="svelte-xdvuvi">${escape(member.attributes.name)}</h2>
                                <span class="svelte-xdvuvi">${escape(member.attributes.position)}</span></div>                        
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
//# sourceMappingURL=_page.svelte-3d0d2bdc.js.map
