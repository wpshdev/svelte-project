import { c as create_ssr_component, e as escape, v as validate_component, q as add_styles, f as each, g as add_attribute } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { A as ArticleSection, S as SvelteMasonryGrid } from './MasonryCard.svelte_svelte_type_style_lang-2395c6d7.js';
import { C as Cta } from './Cta-4dbd70c7.js';
import { P as PageBanner } from './PageBanner-c548a1ff.js';
import axios from 'axios';

const banner = "/_app/immutable/assets/first-section.6089220b.svg";
const css$2 = {
  code: ".slider-caption.svelte-9lh9zk.svelte-9lh9zk{height:100%;display:flex;align-items:center;flex-wrap:wrap}.slider-caption__heading.svelte-9lh9zk.svelte-9lh9zk{margin-bottom:1rem;width:100%}@media(max-width: 767px){.slider-caption__heading.svelte-9lh9zk.svelte-9lh9zk{text-align:center}}.slider-caption__heading.svelte-9lh9zk span.svelte-9lh9zk{font-size:1.5rem;margin-bottom:2rem;color:#00ADEE}.slider-container.svelte-9lh9zk.svelte-9lh9zk{width:100%;overflow:hidden;position:relative}.slider-container__carousel-cell.svelte-9lh9zk.svelte-9lh9zk{width:40%;height:auto;padding:0 0.5rem;box-sizing:border-box;height:70vh;overflow:hidden}@media(max-width: 767px){.slider-container__carousel-cell.svelte-9lh9zk.svelte-9lh9zk{width:80%}}@media(max-width: 767px){.slider-container__carousel-cell.svelte-9lh9zk.svelte-9lh9zk{height:50vh}}.slider-container__carousel-cell.svelte-9lh9zk img.svelte-9lh9zk{display:block;width:auto;object-fit:cover;height:100%}.slider-btn.svelte-9lh9zk.svelte-9lh9zk{margin:2rem 5rem 0;text-align:right}@media(max-width: 767px){.slider-btn.svelte-9lh9zk.svelte-9lh9zk{text-align:center;margin:2rem 0 0}}.progress-ring-container.svelte-9lh9zk.svelte-9lh9zk{margin-top:1rem;position:relative;bottom:10px;left:10px;z-index:1;box-shadow:0px 4px 5px rgba(0, 0, 0, 0.15);display:inline-block;border-radius:2rem}@media(max-width: 767px){.progress-ring-container.svelte-9lh9zk.svelte-9lh9zk{margin-top:3rem;left:0}}.progress-ring__border.svelte-9lh9zk.svelte-9lh9zk{transition:stroke-dashoffset 0.5s ease-out}.progress-ring__arrow.svelte-9lh9zk.svelte-9lh9zk{font-family:Arial, sans-serif;cursor:pointer;user-select:none}",
  map: null
};
const domain$1 = "https://strapi.ulfbuilt.com:1337";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { preHeading } = $$props;
  let { heading } = $$props;
  let { btnTitle } = $$props;
  let { btnUrl } = $$props;
  let { featuredProjects } = $$props;
  if ($$props.preHeading === void 0 && $$bindings.preHeading && preHeading !== void 0)
    $$bindings.preHeading(preHeading);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle !== void 0)
    $$bindings.btnTitle(btnTitle);
  if ($$props.btnUrl === void 0 && $$bindings.btnUrl && btnUrl !== void 0)
    $$bindings.btnUrl(btnUrl);
  if ($$props.featuredProjects === void 0 && $$bindings.featuredProjects && featuredProjects !== void 0)
    $$bindings.featuredProjects(featuredProjects);
  $$result.css.add(css$2);
  return `
  ${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
    default: () => {
      return `<div class="slider-caption svelte-9lh9zk"><div class="slider-caption__heading svelte-9lh9zk"><span class="svelte-9lh9zk">${escape(preHeading)}</span>
        <h2><!-- HTML_TAG_START -->${heading}<!-- HTML_TAG_END --></h2></div>
      ${``}</div>`;
    }
  })}	
  ${validate_component(Col, "Col").$$render($$result, { md: "9" }, {}, {
    default: () => {
      return `<div class="slider-container svelte-9lh9zk">${each(featuredProjects.data, (project) => {
        return `<div class="slider-container__carousel-cell svelte-9lh9zk"><img src="${escape(domain$1, true) + escape(project.attributes.featuredImage.data.attributes.url, true)}"${add_attribute("alt", project.attributes.featuredImage.data.attributes.alternativeText, 0)} class="svelte-9lh9zk">
        </div>`;
      })}</div>
    ${``}       
    <div class="slider-btn svelte-9lh9zk"><a${add_attribute("href", btnUrl, 0)} class="btn btn-secondary">${escape(btnTitle)}</a></div>`;
    }
  })}`;
});
const tr = "/_app/immutable/assets/tnr.4278ef87.svg";
const css$1 = {
  code: ".masonry-items.svelte-1eamxik.svelte-1eamxik{width:33%;overflow:hidden;position:absolute;color:white;text-align:center;height:60vh}@media(max-width: 767px){.masonry-items.svelte-1eamxik.svelte-1eamxik{height:30vh}}.masonry-items.svelte-1eamxik a.svelte-1eamxik{display:block;height:100%;width:98%;overflow:hidden}.masonry-items.svelte-1eamxik a img.svelte-1eamxik{transition:0.5s;height:100%;object-fit:cover}.masonry-items.svelte-1eamxik:hover img.svelte-1eamxik{transition:0.5s;scale:1.2}@media(max-width: 767px){}",
  map: null
};
const gap = 0;
const defaultDirection = "end";
const align = "end";
const column = 3;
const columnSize = 0;
const columnSizeRatio = 0;
const MasonryCardGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let projects;
  const cache = /* @__PURE__ */ new Map();
  let { propCount } = $$props;
  console.log(propCount);
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
  if ($$props.propCount === void 0 && $$bindings.propCount && propCount !== void 0)
    $$bindings.propCount(propCount);
  $$result.css.add(css$1);
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
          return `${index < propCount ? `<div class="masonry-items svelte-1eamxik"><a data-sveltekit-reload href="${"/portfolio/" + escape(project.attributes.slug, true)}" class="svelte-1eamxik"><img src="${"https://strapi.ulfbuilt.com:1337/" + escape(project.attributes.featuredImage.data.attributes.url, true)}" alt="modern" class="svelte-1eamxik">
                            </a>
                    </div>` : ``}`;
        })}`;
      }
    }
  )}` : `<div class="col text-center">Loading...</div>`}`;
});
const css = {
  code: '@media(max-width: 767px){.loc-gallery p{text-align:left}}.loc-gallery .h3 span{color:#00ADEE}.loc-gallery.svelte-1owk26e.svelte-1owk26e{margin:80rem 0}.loc-gallery__cwrapper.svelte-1owk26e h2.svelte-1owk26e{font-family:"Cormorant", sans-serif;margin-bottom:1rem;color:#263A63;margin-bottom:3rem}.loc-gallery__cwrapper.svelte-1owk26e .h3.svelte-1owk26e{text-transform:uppercase;margin-bottom:2rem;font-size:2.5rem}@media(max-width: 767px){.loc-gallery__cwrapper.svelte-1owk26e .h3.svelte-1owk26e{font-size:2rem}}.categories.svelte-1owk26e h2.svelte-1owk26e{margin-bottom:2rem}.categories.svelte-1owk26e .view-all.svelte-1owk26e{margin-bottom:2rem}.categories.svelte-1owk26e .view-all span.svelte-1owk26e{color:#263A63}.categories.svelte-1owk26e .view-all span.svelte-1owk26e:hover{cursor:pointer}.categories__tabs__heading.svelte-1owk26e ul.svelte-1owk26e{display:flex;flex-wrap:wrap;margin-bottom:2rem;padding-left:0}@media(max-width: 575px){.categories__tabs__heading.svelte-1owk26e ul.svelte-1owk26e{flex-wrap:nowrap;padding:1rem 0}}@media(max-width: 767px){.categories__tabs__heading.svelte-1owk26e ul.svelte-1owk26e{overflow-x:scroll}}.categories__tabs__heading.svelte-1owk26e ul li.svelte-1owk26e{list-style:none;width:25%}@media(max-width: 767px){.categories__tabs__heading.svelte-1owk26e ul li.svelte-1owk26e{width:10rem;padding:0 1rem}}.categories__tabs__heading.svelte-1owk26e ul li span.svelte-1owk26e{font-family:"Cormorant", sans-serif;font-size:2rem;color:#D8D7D7;text-transform:uppercase;margin-bottom:2em;border-bottom:3px solid #D8D7D7;font-weight:500;cursor:pointer}@media(max-width: 767px){.categories__tabs__heading.svelte-1owk26e ul li span.svelte-1owk26e{font-size:1.2rem}}.categories__tabs__heading.svelte-1owk26e ul li span.active.svelte-1owk26e{color:#00ADEE;border-bottom-color:#00ADEE}.tnr.svelte-1owk26e.svelte-1owk26e{background-image:var(--tp-banner);height:40vw;display:flex;flex-wrap:wrap;align-items:center;background-position:center;background-size:cover;position:relative}@media(max-width: 767px){.tnr.svelte-1owk26e.svelte-1owk26e{height:80vh;align-items:end;padding-bottom:2rem}}.tnr.svelte-1owk26e.svelte-1owk26e::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:1}.tnr.svelte-1owk26e .tnr__wrapper.svelte-1owk26e{z-index:2;position:relative;color:#fff}.tnr.svelte-1owk26e .tnr__wrapper span.svelte-1owk26e{font-size:1.5rem}.tnr.svelte-1owk26e .tnr__wrapper h2.svelte-1owk26e{font-family:"Raleway", open sans;margin:1rem 0 2rem;text-transform:uppercase}.tnr.svelte-1owk26e .tnr__wrapper .btn.svelte-1owk26e{background-color:#1E2D39}.featured-projects.svelte-1owk26e.svelte-1owk26e{margin:10rem 0;overflow:hidden}.reputation.svelte-1owk26e.svelte-1owk26e{margin:7rem 0 3.75rem}@media(max-width: 767px){.reputation.svelte-1owk26e.svelte-1owk26e{margin:0;padding:1.5rem 0}}.reputation__content.svelte-1owk26e.svelte-1owk26e{height:35vw;display:flex;align-items:center;position:relative}@media(max-width: 767px){.reputation__content.svelte-1owk26e.svelte-1owk26e{height:auto}}.reputation__content.svelte-1owk26e.svelte-1owk26e:after{position:absolute;background:#E5EEF2;width:130%;top:0;content:"";height:100%}@media(max-width: 767px){.reputation__content.svelte-1owk26e.svelte-1owk26e:after{width:100vw;top:-5vh;margin-left:calc(50% - 50vw);height:160%}}.reputation__content__wrapper.svelte-1owk26e.svelte-1owk26e{max-width:29rem;z-index:2;padding-left:4rem}@media(max-width: 767px){.reputation__content__wrapper.svelte-1owk26e.svelte-1owk26e{padding-left:0;margin-bottom:2rem}}.reputation__content__wrapper.svelte-1owk26e span.svelte-1owk26e{color:#00ADEE;margin-bottom:1rem}.reputation__content__wrapper.svelte-1owk26e h2.svelte-1owk26e{margin:1rem 0 2rem}.reputation__content__wrapper.svelte-1owk26e p.svelte-1owk26e{line-height:2rem;margin-bottom:2rem}@media(max-width: 767px){.reputation__content__wrapper.svelte-1owk26e .btn.svelte-1owk26e{margin:0 auto;display:inherit}}.reputation.svelte-1owk26e img.svelte-1owk26e{position:relative;z-index:5}.process.svelte-1owk26e.svelte-1owk26e{margin:7rem 0}.process__top-image.svelte-1owk26e.svelte-1owk26e{text-align:right;margin-bottom:-3rem}@media(max-width: 767px){.process__top-image.svelte-1owk26e.svelte-1owk26e{text-align:left;margin-bottom:0}}.process__top-image.svelte-1owk26e img.svelte-1owk26e{max-width:25rem}@media(max-width: 767px){.process__top-image.svelte-1owk26e img.svelte-1owk26e{max-width:70vw}}.process__content.svelte-1owk26e.svelte-1owk26e{height:40vw;display:flex;align-items:center;position:relative}@media(max-width: 767px){.process__content.svelte-1owk26e.svelte-1owk26e{height:auto;margin-top:3rem}}.process__content.svelte-1owk26e.svelte-1owk26e:after{position:absolute;background:#F2F2F2;width:130%;content:"";height:100%}@media(max-width: 767px){.process__content.svelte-1owk26e.svelte-1owk26e:after{width:100vw;margin-left:calc(50% - 50vw);height:150%}}.process__content__wrapper.svelte-1owk26e.svelte-1owk26e{max-width:40rem;z-index:2;padding-left:4rem}@media(max-width: 767px){.process__content__wrapper.svelte-1owk26e.svelte-1owk26e{padding-left:0}}.process__content__wrapper.svelte-1owk26e span.svelte-1owk26e{color:#00ADEE;margin-bottom:1rem}.process__content__wrapper.svelte-1owk26e h2.svelte-1owk26e{margin:1rem 0 2rem}@media(max-width: 767px){.process__content__wrapper.svelte-1owk26e .btn.svelte-1owk26e{display:inherit;margin:3rem auto}}@media(max-width: 767px){.process__bottom.svelte-1owk26e.svelte-1owk26e{text-align:right}}@media(max-width: 767px){.process__bottom.svelte-1owk26e img.svelte-1owk26e{max-width:70vw}}.process.svelte-1owk26e img.svelte-1owk26e{position:relative;z-index:5}.story.svelte-1owk26e.svelte-1owk26e{margin:7rem 0 3.75rem}.story__content.svelte-1owk26e.svelte-1owk26e{height:35vw;display:flex;align-items:center;position:relative}@media(max-width: 767px){.story__content.svelte-1owk26e.svelte-1owk26e{height:auto}}.story__content.svelte-1owk26e.svelte-1owk26e:after{position:absolute;background:#E5EEF2;width:130%;content:"";height:100%}@media(max-width: 767px){.story__content.svelte-1owk26e.svelte-1owk26e:after{top:-10vw;width:100vw;margin-left:calc(50% - 50vw);height:160%}}.story__content__wrapper.svelte-1owk26e.svelte-1owk26e{max-width:43rem;z-index:2;padding-left:4rem}@media(max-width: 767px){.story__content__wrapper.svelte-1owk26e.svelte-1owk26e{padding:0}}.story__content__wrapper.svelte-1owk26e span.svelte-1owk26e{color:#00ADEE;margin-bottom:1rem}.story__content__wrapper.svelte-1owk26e h2.svelte-1owk26e{margin:1rem 0 2rem}.story__content__wrapper.svelte-1owk26e p{line-height:2rem;margin-bottom:2rem}.story__content__wrapper.svelte-1owk26e .accordion span.svelte-1owk26e{font-family:"Raleway";font-style:normal;font-weight:600;font-size:2rem;color:#ACA7A7;margin-right:1rem}.story.svelte-1owk26e img.svelte-1owk26e{position:relative;z-index:5}.section--bannerOnly.svelte-1owk26e.svelte-1owk26e{background-image:var(--lrbg);background-size:cover;height:90vh;width:90vw;margin:auto}@media(max-width: 767px){.section--bannerOnly.svelte-1owk26e.svelte-1owk26e{height:40vh}}',
  map: null
};
const domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let y = 0;
  const home = data.data.attributes;
  let propCount = 3;
  let activeTab = home.categories.data[0].id;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `
${$$result.head += `<!-- HEAD_svelte-1byjgrp_START -->${$$result.title = `<title>${escape(home.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1byjgrp_END -->`, ""}


${validate_component(PageBanner, "PageBanner").$$render(
    $$result,
    {
      title: home.topBanner.heading,
      subTitle: home.topBanner.paragraph,
      banner,
      extraClass: "homebanner"
    },
    {},
    {}
  )}
<section class="loc-gallery svelte-1owk26e">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
            default: () => {
              return `<div class="loc-gallery__cwrapper svelte-1owk26e"${add_styles({
                "transform": `translateY(${y * 0.6 - 1100}px)`
              })}><h2 class="svelte-1owk26e">${escape(home.homeBuilderHeading)}</h2>
					<div class="h3 svelte-1owk26e"><!-- HTML_TAG_START -->${home.homeBuilderSubHeading}<!-- HTML_TAG_END --></div>
					<!-- HTML_TAG_START -->${home.homeBuilderParagraph}<!-- HTML_TAG_END --></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="section--bannerOnly svelte-1owk26e" style="${"--lrbg: url(" + escape(domain, true) + escape(home.homeBuilderBanner.data.attributes.url, true) + ")"}"></section>

<section class="categories svelte-1owk26e">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
            default: () => {
              return `<h2 class="svelte-1owk26e">what are you looking for?</h2>
				<div class="categories__tabs"><div class="categories__tabs__heading svelte-1owk26e"><ul class="svelte-1owk26e">${each(home.categories.data, (heading) => {
                return `<li class="svelte-1owk26e">
									<span${add_attribute("data-category", heading.id, 0)} class="${["svelte-1owk26e", activeTab === heading.id ? "active" : ""].join(" ").trim()}">${escape(heading.attributes.Title)}</span>
								</li>`;
              })}</ul></div>
					<p class="text-center view-all svelte-1owk26e">${`<span class="svelte-1owk26e">View All Projects</span>`}</p>					
					<div class="categories__tabs__gallery"><div id="modern" class="masonry__tabs__gallery__imgs"${add_attribute("data-test", activeTab, 0)}>${validate_component(MasonryCardGrid, "MasonryCardGrid").$$render($$result, { id: activeTab, propCount }, {}, {})}</div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="featured-projects svelte-1owk26e">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Carousel, "Carousel").$$render(
            $$result,
            {
              preHeading: home.featuredProjectsPreHeading,
              heading: home.featuredProjectsHeading,
              btnTitle: home.featurePropertyBtnTitle,
              btnUrl: home.featuredPropertyBtnUrl,
              featuredProjects: home.featuredProjects
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}</section>

<section class="tnr svelte-1owk26e" style="${"--tp-banner: url(" + escape(tr, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="tnr__wrapper svelte-1owk26e"><div class="tnr__wrapper__captions"><span class="svelte-1owk26e">${escape(home.midBanner.paragraph)}</span>
						<h2 class="svelte-1owk26e">${escape(home.midBanner.heading)}</h2>
						<a${add_attribute("href", home.midBanner.btnUrl, 0)} class="btn btn-secondary svelte-1owk26e">${escape(home.midBanner.btnTitle)}</a></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="reputation svelte-1owk26e">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "8", class: "" }, {}, {
            default: () => {
              return `<div class="reputation__content svelte-1owk26e"><div class="reputation__content__wrapper svelte-1owk26e"><span class="svelte-1owk26e">${escape(home.reputation.preHeading)}</span>
						<h2 class="svelte-1owk26e">${escape(home.reputation.heading)}</h2>
						<p class="svelte-1owk26e"><!-- HTML_TAG_START -->${home.reputation.content}<!-- HTML_TAG_END --></p>
						<a${add_attribute("href", home.reputation.btnUrl, 0)} class="btn btn-secondary svelte-1owk26e">${escape(home.reputation.btnTitle)}</a></div></div>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "4", class: "my-auto" }, {}, {
            default: () => {
              return `<img src="${escape(domain, true) + escape(home.reputation.image.data.attributes.url, true)}"${add_attribute("alt", home.reputation.image.data.attributes.alternativeText, 0)} class="svelte-1owk26e">`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="process svelte-1owk26e">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
            default: () => {
              return `<div class="process__top-image svelte-1owk26e"><img src="${escape(domain, true) + escape(home.ourProcessTopImage.data[0].attributes.url, true)}"${add_attribute("alt", home.ourProcessTopImage.data[0].attributes.alternativeText, 0)} class="svelte-1owk26e"></div>`;
            }
          })}`;
        }
      })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "8", class: "" }, {}, {
            default: () => {
              return `<div class="process__content svelte-1owk26e"><div class="process__content__wrapper svelte-1owk26e"><span class="svelte-1owk26e">${escape(home.ourProcessPreHeading)}</span>
						<h2 class="svelte-1owk26e">${escape(home.ourProcessHeading)}</h2>
						<!-- HTML_TAG_START -->${home.ourProcessParagraph}<!-- HTML_TAG_END -->
						<a${add_attribute("href", home.ourProcessButtonUrl, 0)} class="btn btn-secondary svelte-1owk26e">${escape(home.ourProcessButtonTitle)}</a></div></div>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "4", class: "my-auto " }, {}, {
            default: () => {
              return `<div class="process__bottom svelte-1owk26e"><img src="${escape(domain, true) + escape(home.ourProcessRightImage.data.attributes.url, true)}"${add_attribute("alt", home.ourProcessRightImage.data.attributes.alternativeText, 0)} class="svelte-1owk26e"></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="story svelte-1owk26e">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "8", class: "" }, {}, {
            default: () => {
              return `<div class="story__content svelte-1owk26e"><div class="story__content__wrapper svelte-1owk26e"><span class="svelte-1owk26e">${escape(home.ourStoryPreHeading)}</span>
						<h2 class="svelte-1owk26e">${escape(home.ourStoryHeading)}</h2>
						<!-- HTML_TAG_START -->${home.ourStoryParagraph}<!-- HTML_TAG_END -->
						
						</div></div>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "4", class: "my-auto" }, {}, {
            default: () => {
              return `<img src="${escape(domain, true) + escape(home.ourStoryRightImage.data.attributes.url, true)}"${add_attribute("alt", home.ourStoryRightImage.data.attributes.alternativeText, 0)} class="svelte-1owk26e">`;
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
//# sourceMappingURL=_page.svelte-cbab998d.js.map
