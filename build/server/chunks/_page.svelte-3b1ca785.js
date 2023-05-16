import { c as create_ssr_component, e as escape, v as validate_component } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';

const css = {
  code: ".member__info.svelte-1gmjfxb{padding:0 3rem}.member__img.svelte-1gmjfxb{background-image:var(--banner);background-size:cover;height:50vw;width:100%;margin-right:-1rem;margin-left:1rem}",
  map: null
};
let domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let member = data.data[0].attributes;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-o3yhl9_START -->${$$result.title = `<title>${escape(member.name)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-o3yhl9_END -->`, ""}

<section class="member">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="member__info svelte-1gmjfxb"><h1>${escape(member.name)}</h1>
                    <span>${escape(member.position)}</span>
                    <div class="member__info__content"><!-- HTML_TAG_START -->${member.content}<!-- HTML_TAG_END --></div></div>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="member__img svelte-1gmjfxb" style="${"--banner: url(" + escape(domain, true) + "/" + escape(member.memberPhoto.data.attributes.url, true) + ")"}"></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3b1ca785.js.map
