import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute } from './index2-234acb26.js';
import { C as Cta } from './Cta-4dbd70c7.js';
import { P as PageBanner } from './PageBanner-c548a1ff.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import 'axios';

const css = {
  code: '.our-process__heading.svelte-vaxjnb.svelte-vaxjnb{margin-bottom:7vh}.our-process__heading.svelte-vaxjnb p span{color:#00ADEE}.our-process__heading.svelte-vaxjnb h2.svelte-vaxjnb{font-size:3rem;margin-bottom:1rem}.our-process__paragraph.svelte-vaxjnb.svelte-vaxjnb{background-color:#F2F2F2;padding:3rem;max-width:40rem;margin-top:-5rem;z-index:2;position:relative}@media(max-width: 767px){.our-process__paragraph.svelte-vaxjnb.svelte-vaxjnb{width:85vw;font-size:1.3rem;padding:3rem 1.5rem}}.phase-heading.svelte-vaxjnb.svelte-vaxjnb{background-color:#F2F2F2;padding:3rem 0}@media(max-width: 767px){.phase-heading.svelte-vaxjnb h3.svelte-vaxjnb{font-size:1.2rem}}.phase1-img.svelte-vaxjnb.svelte-vaxjnb{background-image:var(--phs1);background-size:cover;height:90vh}@media(max-width: 767px){.phase1-img.svelte-vaxjnb.svelte-vaxjnb{height:40vh}}.phase2-img.svelte-vaxjnb.svelte-vaxjnb{background-image:var(--phs2);background-size:cover;height:90vh}@media(max-width: 767px){.phase2-img.svelte-vaxjnb.svelte-vaxjnb{height:40vh}}.phase.svelte-vaxjnb.svelte-vaxjnb{margin-bottom:0}.phase.svelte-vaxjnb h3.svelte-vaxjnb{font-weight:400}@media(max-width: 767px){.phase.svelte-vaxjnb h3.svelte-vaxjnb{font-size:1.2rem}}.phase.svelte-vaxjnb .phase__row{margin-top:-12.3rem;justify-content:center;align-items:center;position:relative;z-index:1}@media(max-width: 767px){.phase.svelte-vaxjnb .phase__row{margin-top:-8.8rem}}.phase.svelte-vaxjnb .num.svelte-vaxjnb{font-size:10rem;font-family:"Cormorant", sans-serif;color:#263A63}@media(max-width: 767px){.phase.svelte-vaxjnb .num.svelte-vaxjnb{font-size:6rem}}.phase__heading.svelte-vaxjnb.svelte-vaxjnb{background-color:#263A63;padding:1rem 0;width:100%;margin-top:1rem}.phase__heading.svelte-vaxjnb h3.svelte-vaxjnb{text-transform:uppercase;font-family:"Raleway", open sans;color:#fff;margin-bottom:0}.phase__grid.svelte-vaxjnb.svelte-vaxjnb{display:grid;grid-template-columns:repeat(2, 1fr);margin-top:-6.5rem}@media(max-width: 767px){.phase__grid.svelte-vaxjnb.svelte-vaxjnb{grid-template-columns:repeat(1, 1fr);margin-top:0}}.phase__grid__item.svelte-vaxjnb.svelte-vaxjnb{padding:6rem 4rem}@media(max-width: 767px){.phase__grid__item.svelte-vaxjnb.svelte-vaxjnb{padding:1rem 0}}.phase__grid__item.svelte-vaxjnb.svelte-vaxjnb:nth-child(odd){padding-left:8vw;line-height:2;font-style:italic}@media(max-width: 767px){.phase__grid__item.svelte-vaxjnb.svelte-vaxjnb:nth-child(odd){padding:3rem 1rem}}.phase__grid__item.svelte-vaxjnb:nth-child(odd) span.svelte-vaxjnb{color:#00ADEE;font-style:normal}.phase__grid__item.svelte-vaxjnb:nth-child(odd) h4.svelte-vaxjnb{margin:2rem 0;font-style:normal}.phase__grid__item.svelte-vaxjnb.svelte-vaxjnb:nth-child(even){padding-top:8.5vw;background-color:#F2F2F2}.phase__grid__item.svelte-vaxjnb:nth-child(even) p:last-child{margin-bottom:0}@media(max-width: 767px){.phase__grid__item.svelte-vaxjnb.svelte-vaxjnb:nth-child(even){padding:3rem 1.5rem;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}}.phase__grid.scnd-row.svelte-vaxjnb.svelte-vaxjnb{margin-top:0}.phase__banner.svelte-vaxjnb.svelte-vaxjnb{background-image:var(--phs1Banner);background-size:cover;height:90vh}.phase__banner.banner2.svelte-vaxjnb.svelte-vaxjnb{background-image:var(--phs2Banner1)}.phase__banner.banner3.svelte-vaxjnb.svelte-vaxjnb{background-image:var(--phs2Banner2)}@media(max-width: 767px){.phase__banner.svelte-vaxjnb.svelte-vaxjnb{height:40vh}}.phase-banner-separator.svelte-vaxjnb.svelte-vaxjnb{background-image:var(--phsSeparator);background-size:cover;height:90vh;margin:0}@media(max-width: 767px){.phase-banner-separator.svelte-vaxjnb.svelte-vaxjnb{height:40vh}}.phase-banner-paragraph.svelte-vaxjnb.svelte-vaxjnb{display:block;margin-top:0;background-color:#F2F2F2}.phase-banner-paragraph.svelte-vaxjnb div.svelte-vaxjnb{padding:3rem 0;text-align:center;max-width:70rem;margin:0 auto}',
  map: null
};
const domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const processData = data.data.attributes;
  console.log(processData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-71tqxp_START -->${$$result.title = `<title>${escape(processData.section1heading)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-71tqxp_END -->`, ""}

${validate_component(PageBanner, "PageBanner").$$render(
    $$result,
    {
      title: "Our Process",
      subTitle: "Home Builder and Remodeler in Vail, Colorado",
      banner: domain + processData.Cover.data[0].attributes.url
    },
    {},
    {}
  )}
<section class="our-process">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "md-12 text-center" }, {}, {
            default: () => {
              return `<div class="our-process__heading svelte-vaxjnb"><h2 class="svelte-vaxjnb">${escape(processData.section1heading)}</h2>
                    <!-- HTML_TAG_START -->${processData.section1text}<!-- HTML_TAG_END --></div>`;
            }
          })}`;
        }
      })}
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "md-12" }, {}, {
            default: () => {
              return `<img src="${escape(domain, true) + escape(processData.section2image.data.attributes.url, true)}"${add_attribute("alt", processData.section2image.data.attributes.alternativeText, 0)}>
                <div class="our-process__paragraph mx-auto svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section2text}<!-- HTML_TAG_END --></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="phase-heading svelte-vaxjnb">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render(
            $$result,
            {
              md: { size: "6", offset: 3 },
              class: "text-center"
            },
            {},
            {
              default: () => {
                return `<h3 class="svelte-vaxjnb">${escape(processData.section3heading)}</h3>`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</section>
<section class="phase1-img svelte-vaxjnb" style="${"--phs1: url(" + escape(domain, true) + escape(processData.section3image.data.attributes.url, true) + ")"}"></section> 
<section class="phase svelte-vaxjnb">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "text-center phase__row" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: "2" }, {}, {
            default: () => {
              return `<span class="num svelte-vaxjnb">1</span>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { xs: "10" }, {}, {
            default: () => {
              return `<div class="phase__heading svelte-vaxjnb"><h3 class="svelte-vaxjnb">${escape(processData.section3phase1mainheading)}</h3></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="phase__grid svelte-vaxjnb"><div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section4heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section4subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section4text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section4righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section5heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section5subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section5text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section5righttext}<!-- HTML_TAG_END --></div></div>`;
    }
  })}
        <div class="phase__banner svelte-vaxjnb" style="${"--phs1Banner: url(" + escape(domain, true) + escape(processData.section6image.data.attributes.url, true) + ")"}"></div>     
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="phase__grid scnd-row svelte-vaxjnb"><div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section7heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section7subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section7text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section7righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section8heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section8subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section8text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section8righttext}<!-- HTML_TAG_END --></div></div>`;
    }
  })}</section>
<section class="phase-banner-separator svelte-vaxjnb" style="${"--phsSeparator: url(" + escape(domain, true) + escape(processData.section9image.data.attributes.url, true) + ")"}"></section>
<secton class="phase-banner-paragraph svelte-vaxjnb">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section9text}<!-- HTML_TAG_END --></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</secton>

<section class="phase2-img svelte-vaxjnb" style="${"--phs2: url(" + escape(domain, true) + escape(processData.section10phase2image.data.attributes.url, true) + ")"}"></section> 

<section class="phase svelte-vaxjnb">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "text-center phase__row" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { xs: "10" }, {}, {
            default: () => {
              return `<div class="phase__heading svelte-vaxjnb"><h3 class="svelte-vaxjnb">${escape(processData.section10phase2heading)}</h3></div>`;
            }
          })}            
            ${validate_component(Col, "Col").$$render($$result, { xs: "2" }, {}, {
            default: () => {
              return `<span class="num svelte-vaxjnb">2</span>`;
            }
          })}`;
        }
      })}`;
    }
  })}
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="phase__grid svelte-vaxjnb"><div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section11heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section11subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section11text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section11righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section12heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section12subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section12text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section11text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section13heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section13subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section13righttext}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section12text}<!-- HTML_TAG_END --></div></div>`;
    }
  })}
        <div class="phase__banner banner2 svelte-vaxjnb" style="${"--phs2Banner1: url(" + escape(domain, true) + escape(processData.section14image.data.attributes.url, true) + ")"}"></div>     
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="phase__grid scnd-row svelte-vaxjnb"><div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section15heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section15subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section15text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section15righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section16heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section16subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section16text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section16righttext}<!-- HTML_TAG_END --></div>         
            <div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section17heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section17subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section17text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section17righttext}<!-- HTML_TAG_END --></div></div>`;
    }
  })}    
    <div class="phase__banner banner3 svelte-vaxjnb" style="${"--phs2Banner2: url(" + escape(domain, true) + escape(processData.section18image.data.attributes.url, true) + ")"}"></div>             
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="phase__grid scnd-row svelte-vaxjnb"><div class="phase__grid__item svelte-vaxjnb"><span class="svelte-vaxjnb">${escape(processData.section19heading)}</span>
                <h4 class="svelte-vaxjnb">${escape(processData.section19subheading)}</h4>
                <!-- HTML_TAG_START -->${processData.section19text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section19righttext}<!-- HTML_TAG_END --></div></div>`;
    }
  })}</section>
<secton class="phase-banner-paragraph svelte-vaxjnb">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="svelte-vaxjnb"><!-- HTML_TAG_START -->${processData.section20text}<!-- HTML_TAG_END --></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</secton>
${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0267e640.js.map
