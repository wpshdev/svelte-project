import { c as create_ssr_component, e as escape, v as validate_component } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';

const css = {
  code: ".page__title.svelte-ok5qwn{font-weight:400;margin-bottom:1rem}.page__content.svelte-ok5qwn{min-height:30vw}@media(max-width: 767px){.page__content.svelte-ok5qwn{min-height:auto}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let page = data.data[0].attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-q1uha9_START -->${$$result.title = `<title>${escape(page.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-q1uha9_END -->`, ""}

<section class="page">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<h1 class="page__title svelte-ok5qwn">${escape(page.title)}</h1>
                <div class="page__content svelte-ok5qwn"><!-- HTML_TAG_START -->${page.content}<!-- HTML_TAG_END --></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-56d96963.js.map
