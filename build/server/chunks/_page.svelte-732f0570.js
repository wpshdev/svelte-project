import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute, f as each } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { A as ArticleSection, S as SvelteMasonryGrid } from './MasonryCard.svelte_svelte_type_style_lang-2395c6d7.js';
import axios from 'axios';
import { C as Cta } from './Cta-4dbd70c7.js';
import { P as PageBanner } from './PageBanner-c548a1ff.js';

const css$2 = {
  code: ".masonry-items.svelte-hwy2mv.svelte-hwy2mv{width:50%;overflow:hidden;position:absolute;color:white;text-align:center;padding-top:0.8rem}@media(max-width: 767px){.masonry-items.svelte-hwy2mv.svelte-hwy2mv{width:100%;padding-top:1rem}}.masonry-items.svelte-hwy2mv a.svelte-hwy2mv{display:block;height:100%;width:98%;overflow:hidden}@media(max-width: 767px){.masonry-items.svelte-hwy2mv a.svelte-hwy2mv{width:100%}}.masonry-items.svelte-hwy2mv a img.svelte-hwy2mv{transition:0.5s;height:100%;object-fit:cover}.masonry-items.svelte-hwy2mv:hover img.svelte-hwy2mv{transition:0.5s;scale:1.2}.masonry-items.svelte-hwy2mv.svelte-hwy2mv:nth-child(2){padding-top:4rem}@media(max-width: 767px){.masonry-items.svelte-hwy2mv.svelte-hwy2mv:nth-child(2){padding-top:1rem}}.masonry-items__text.svelte-hwy2mv.svelte-hwy2mv{background-color:#263A63;color:#fff;padding:0.5rem;position:absolute;z-index:2;bottom:1rem;left:0;width:65%;text-align:left}@media(max-width: 767px){.masonry-items__text.svelte-hwy2mv.svelte-hwy2mv{margin:0;width:90%;bottom:0.5rem}}.masonry-items__text.svelte-hwy2mv span.svelte-hwy2mv{color:#00ADEE;font-size:1.2rem;margin:0 0.8rem 0}@media(max-width: 767px){.masonry-items__text.svelte-hwy2mv span.svelte-hwy2mv{margin:0}}",
  map: null
};
const gap = 0;
const defaultDirection = "end";
const align = "end";
const column = 0;
const columnSize = 0;
const columnSizeRatio = 0;
const MasonryCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let projects;
  const cache = /* @__PURE__ */ new Map();
  async function getProjects(id2) {
    if (cache.has(id2)) {
      projects = cache.get(id2);
      return;
    }
    const url = "https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]=" + id2 + "&populate=deep,2";
    const headers = {
      Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
    };
    const response = await axios.get(url, { headers });
    projects = response.data;
    cache.set(id2, projects);
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$2);
  {
    if (id) {
      (async () => {
        await getProjects(id);
        console.log(projects);
      })();
    }
  }
  return `${projects ? `${validate_component(SvelteMasonryGrid, "MasonryGrid").$$render(
    $$result,
    {
      class: "container",
      defaultDirection,
      gap,
      align,
      column,
      columnSize,
      columnSizeRatio
    },
    {},
    {
      default: () => {
        return `${each(projects.data, (project, index) => {
          return `<div class="masonry-items svelte-hwy2mv"><a href="${"/portfolio/" + escape(project.attributes.slug, true)}" class="svelte-hwy2mv"><img src="${"https://strapi.ulfbuilt.com:1337/" + escape(project.attributes.featuredImage.data.attributes.url, true)}" alt="modern" class="svelte-hwy2mv">
                    <div class="masonry-items__text svelte-hwy2mv"><span class="svelte-hwy2mv">${escape(index + 1)}</span>
                        ${escape(project.attributes.title)}
                    </div></a>
             </div>`;
        })}`;
      }
    }
  )}` : `<div class="col text-center">Loading...</div>`}`;
});
const css$1 = {
  code: '.masonry.svelte-1fsgjmx.svelte-1fsgjmx{min-height:30vw}.masonry__tabs__heading.svelte-1fsgjmx ul.svelte-1fsgjmx{display:flex;flex-wrap:wrap;margin-bottom:2rem;padding-left:0}@media(max-width: 1199px){.masonry__tabs__heading.svelte-1fsgjmx ul.svelte-1fsgjmx{flex-wrap:nowrap;padding:1rem 0;overflow-x:scroll}}.masonry__tabs__heading.svelte-1fsgjmx ul li.svelte-1fsgjmx{list-style:none;width:25%}@media(max-width: 767px){.masonry__tabs__heading.svelte-1fsgjmx ul li.svelte-1fsgjmx{width:10rem;padding:0 1rem}}.masonry__tabs__heading.svelte-1fsgjmx ul li span.svelte-1fsgjmx{font-family:"Cormorant", sans-serif;font-size:2rem;color:#D8D7D7;text-transform:uppercase;margin-bottom:2em;border-bottom:3px solid #D8D7D7;font-weight:500;cursor:pointer}@media(max-width: 1199px){.masonry__tabs__heading.svelte-1fsgjmx ul li span.svelte-1fsgjmx{font-size:1.5rem}}@media(max-width: 991px){.masonry__tabs__heading.svelte-1fsgjmx ul li span.svelte-1fsgjmx{font-size:1.2rem}}.masonry__tabs__heading.svelte-1fsgjmx ul li span.active.svelte-1fsgjmx{color:#00ADEE;border-bottom-color:#00ADEE}.masonry__tabs__link.svelte-1fsgjmx.svelte-1fsgjmx{margin-bottom:4rem}.masonry__tabs__link.svelte-1fsgjmx a.svelte-1fsgjmx{color:#263A63;text-decoration:none}',
  map: null
};
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  console.log(items);
  let activeTab = items[0].id;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$1);
  return `<div class="masonry svelte-1fsgjmx"><div class="masonry__tabs"><div class="masonry__tabs__heading svelte-1fsgjmx"><ul class="svelte-1fsgjmx">${each(items, (heading) => {
    return `<li class="svelte-1fsgjmx">
                        <span${add_attribute("data-category", heading.id, 0)} class="${["svelte-1fsgjmx", activeTab === heading.id ? "active" : ""].join(" ").trim()}">${escape(heading.attributes.Title)}</span>
                    </li>`;
  })}</ul></div>
        <div class="masonry__tabs__link text-center svelte-1fsgjmx"><a href="#" class="svelte-1fsgjmx">View All Projects</a></div>
        <div class="masonry__tabs__gallery"><div id="modern" class="masonry__tabs__gallery__imgs"${add_attribute("data-test", activeTab, 0)}>${validate_component(MasonryCard, "MasonryCard").$$render($$result, { id: activeTab }, {}, {})}</div></div></div>
</div>`;
});
const css = {
  code: ".portfolio-masonry.svelte-1cu9faw h2.svelte-1cu9faw{margin-bottom:1.5rem}@media(max-width: 767px){.portfolio-masonry.svelte-1cu9faw h2.svelte-1cu9faw{display:none}}.portfolio-masonry.svelte-1cu9faw p.svelte-1cu9faw{max-width:1100px;margin:0 auto 3rem}.portfolio-cta.svelte-1cu9faw.svelte-1cu9faw{min-height:40vw;min-width:40vw;display:flex;align-items:center;justify-content:center;position:relative}.portfolio-cta__content.svelte-1cu9faw span.svelte-1cu9faw{color:#00ADEE}.portfolio-cta__btns.svelte-1cu9faw.svelte-1cu9faw{margin:2rem 0}@media(max-width: 767px){.portfolio-cta__btns.svelte-1cu9faw.svelte-1cu9faw{display:flex;flex-direction:column;align-items:center}}.portfolio-cta__btns.svelte-1cu9faw .btn-secondary.svelte-1cu9faw{margin-right:1.5rem}@media(max-width: 767px){.portfolio-cta__btns.svelte-1cu9faw .btn-secondary.svelte-1cu9faw{margin:0 0 1rem}}.portfolio-cta__btns.svelte-1cu9faw .btn-inverted.svelte-1cu9faw{border-color:#263A63;color:#263A63}",
  map: null
};
let domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let portfolio = data.portfolio.data.attributes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-bvol6u_START -->${$$result.title = `<title>${escape(portfolio.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-bvol6u_END -->`, ""}

${validate_component(PageBanner, "PageBanner").$$render(
    $$result,
    {
      title: portfolio.title,
      subTitle: portfolio.subTitle,
      banner: domain + portfolio.featuredImage.data.attributes.url
    },
    {},
    {}
  )}
<section class="portfolio-masonry svelte-1cu9faw">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
            default: () => {
              return `<h2 class="svelte-1cu9faw">${escape(portfolio.masonryGallery.masonryHeading)}</h2>
                <p class="svelte-1cu9faw">${escape(portfolio.masonryGallery.masonrySubheading)}</p>
                ${validate_component(Masonry, "Masonry").$$render(
                $$result,
                {
                  items: portfolio.masonryGallery.masonryItems.data
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="portfolio-cta svelte-1cu9faw">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "text-center " }, {}, {
            default: () => {
              return `<div class="portfolio-cta__content svelte-1cu9faw"><span class="svelte-1cu9faw">${escape(portfolio.ourApproachPreHeading)}</span>
                    <h2><!-- HTML_TAG_START -->${portfolio.ourApproachHeading}<!-- HTML_TAG_END --></h2></div>
                <div class="portfolio-cta__btns svelte-1cu9faw"><a${add_attribute("href", portfolio.ourApproachLeftBtnUrl, 0)} class="btn btn-secondary svelte-1cu9faw">${escape(portfolio.ourApproachLeftBtnTitle)}</a>
                    <a${add_attribute("href", portfolio.ourApproachRightBtnUrl, 0)} class="btn btn-inverted svelte-1cu9faw">${escape(portfolio.ourApproachRightBtnTitle)}</a></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
${validate_component(ArticleSection, "ArticleSection").$$render($$result, {}, {}, {})}

${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-732f0570.js.map
