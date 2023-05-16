import { c as create_ssr_component, e as escape, v as validate_component, f as each } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';

const Animate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  let y;
  let position;
  let pY = 0;
  function enableAnimation(val) {
    pY = val > pY ? val : pY;
    return pY;
  }
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  return `	
${enableAnimation(y) > position - 500 ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const TextTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { transitionDelay } = $$props;
  const splitText = text.split("");
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.transitionDelay === void 0 && $$bindings.transitionDelay && transitionDelay !== void 0)
    $$bindings.transitionDelay(transitionDelay);
  return `${each(splitText, (letter, i) => {
    return `${letter != " " ? `<span style="display: inline-block;">${escape(letter)}</span>` : ` `}`;
  })}`;
});
const css = {
  code: '.banner.svelte-10ditrk.svelte-10ditrk{background-image:var(--banner);background-size:cover;min-height:60vh;background-position:bottom;background-size:cover;margin:0;text-align:center;display:flex;justify-content:center;align-items:center;position:relative}.banner.homebanner.svelte-10ditrk.svelte-10ditrk{height:100vh}.banner.svelte-10ditrk.svelte-10ditrk:after{content:"";background-color:rgba(0, 0, 0, 0.5);left:0;top:0;height:100%;width:100%;position:absolute;z-index:0}.banner__content.svelte-10ditrk.svelte-10ditrk{position:relative;z-index:2}.banner__content__text.svelte-10ditrk h1.svelte-10ditrk{color:#fff;font-weight:400;font-size:5rem;margin-bottom:2rem}@media(max-width: 767px){.banner__content__text.svelte-10ditrk h1.svelte-10ditrk{font-size:3rem}}.banner__content__paragraph.svelte-10ditrk.svelte-10ditrk{color:#fff;font-size:1.5rem}@media(max-width: 767px){.banner__content__paragraph.svelte-10ditrk.svelte-10ditrk{font-size:1.2rem}}.banner__content__btn.svelte-10ditrk.svelte-10ditrk{border:1px solid #fff;padding:1.5rem 4rem;text-decoration:none;color:#fff;font-family:"Cormorant", sans-serif;text-transform:lowercase;display:inline-block}',
  map: null
};
const PageBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { banner } = $$props;
  let { title } = $$props;
  let { subTitle } = $$props;
  let { extraClass } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.extraClass === void 0 && $$bindings.extraClass && extraClass !== void 0)
    $$bindings.extraClass(extraClass);
  $$result.css.add(css);
  return `<section class="${"banner " + escape(extraClass, true) + " svelte-10ditrk"}" style="${"--banner: url(" + escape(banner, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="banner__content svelte-10ditrk"><div class="banner__content__text svelte-10ditrk">${validate_component(Animate, "Animate").$$render($$result, { section: ".banner" }, {}, {
                default: () => {
                  return `<h1 class="ml3 svelte-10ditrk">${validate_component(TextTransition, "TextTransition").$$render($$result, { text: title, transitionDelay: "200" }, {}, {})}</h1>`;
                }
              })}</div>
					${validate_component(Animate, "Animate").$$render($$result, { section: ".banner" }, {}, {
                default: () => {
                  return `<p class="banner__content__paragraph svelte-10ditrk">${escape(subTitle)}</p>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { PageBanner as P };
//# sourceMappingURL=PageBanner-c548a1ff.js.map
