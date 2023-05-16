import { c as create_ssr_component, i as is_promise, n as noop, e as escape, v as validate_component, g as add_attribute } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import axios from 'axios';

const css = {
  code: ".home-cta.svelte-1xsksj2.svelte-1xsksj2{margin:0;background-image:var(--cta-banner);background-size:cover}.home-cta__container.svelte-1xsksj2.svelte-1xsksj2{height:70vh;width:100%;display:flex;align-items:center;justify-content:center}.home-cta.svelte-1xsksj2 h2.svelte-1xsksj2{color:#000;margin-bottom:2rem}@media(max-width: 767px){.home-cta.svelte-1xsksj2 h2.svelte-1xsksj2{font-size:2rem}}.home-cta.svelte-1xsksj2 .btn.svelte-1xsksj2{margin-top:1rem;color:#fff}",
  map: null
};
const domain = "https://strapi.ulfbuilt.com:1337";
const Cta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = fetchCta();
  async function fetchCta() {
    const url = "https://strapi.ulfbuilt.com:1337/api/global-cta?populate=deep,2";
    const headers = {
      Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
    };
    try {
      const response = await axios.get(url, { headers });
      return response.data.data.attributes;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  $$result.css.add(css);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
`;
    }
    return function(ctaData) {
      return ` 
	<section class="home-cta svelte-1xsksj2" style="${"--cta-banner: url(" + escape(domain, true) + escape(ctaData.backgroundImage.data.attributes.url, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `<div class="home-cta__container svelte-1xsksj2"><div class="home-cta__wrapper"><h2 class="svelte-1xsksj2">${escape(ctaData.heading)}</h2>
							<!-- HTML_TAG_START -->${ctaData.paragraph}<!-- HTML_TAG_END -->
							<a${add_attribute("href", ctaData.btnUrl, 0)} class="btn btn-secondary svelte-1xsksj2">${escape(ctaData.btnTitle)}</a></div></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}</section>	
`;
    }(__value);
  }(promise)}`;
});

export { Cta as C };
//# sourceMappingURL=Cta-4dbd70c7.js.map
