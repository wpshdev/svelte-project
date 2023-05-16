import { c as create_ssr_component, e as escape, v as validate_component, f as each, g as add_attribute } from './index2-234acb26.js';
import { B as Button } from './Button-85485de3.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { F as Form, a as FormGroup, I as Input } from './Input-b9d86e28.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const css$2 = {
  code: ".slider-container.svelte-1jiko9z.svelte-1jiko9z{display:flex;width:150vw;position:relative;height:100vh}.slider-container__carousel-cell.svelte-1jiko9z.svelte-1jiko9z{flex-shrink:0;width:auto;height:70vh;margin:15vh 0.5rem 15vh;overflow:hidden;transition:0.5s;position:relative}@media(max-width: 767px){.slider-container__carousel-cell.svelte-1jiko9z.svelte-1jiko9z{margin:30vh 0.5rem 30vh}}@media(max-width: 767px){.slider-container__carousel-cell.svelte-1jiko9z.svelte-1jiko9z{height:40vh}}.slider-container__carousel-cell.svelte-1jiko9z .download.svelte-1jiko9z{position:absolute;bottom:1rem;right:1rem}.slider-container__carousel-cell.svelte-1jiko9z img.svelte-1jiko9z{width:100%;transition:0.5s;object-fit:cover;height:70vh}@media(max-width: 767px){.slider-container__carousel-cell.svelte-1jiko9z img.svelte-1jiko9z{height:40vh}}.slider-container__carousel-cell.svelte-1jiko9z img.svelte-1jiko9z:hover{transition:0.5s;scale:1.2}",
  map: null
};
const domain$1 = "https://strapi.ulfbuilt.com:1337";
const PortfolioCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.registerPlugin(ScrollTrigger);
  let { images = [] } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css$2);
  return `

  ${validate_component(Col, "Col").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="slider-container svelte-1jiko9z">${each(images, (image) => {
        return `<div class="slider-container__carousel-cell svelte-1jiko9z"><img src="${escape(domain$1, true) + escape(image.attributes.url, true)}"${add_attribute(
          "alt",
          image.attributes.alternativeText ? image.attributes.alternativeText : "",
          0
        )} class="svelte-1jiko9z">         
          <a href="${escape(domain$1, true) + escape(image.attributes.url, true)}" class="download svelte-1jiko9z" download><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.501" cy="27.5" r="27.5" fill="#1E2D39"></circle><path d="M28.501 16.5C28.501 15.9477 28.0533 15.5 27.501 15.5C26.9487 15.5 26.501 15.9477 26.501 16.5L28.501 16.5ZM26.7939 39.2071C27.1844 39.5976 27.8176 39.5976 28.2081 39.2071L34.572 32.8431C34.9626 32.4526 34.9626 31.8195 34.572 31.4289C34.1815 31.0384 33.5484 31.0384 33.1578 31.4289L27.501 37.0858L21.8441 31.4289C21.4536 31.0384 20.8204 31.0384 20.4299 31.4289C20.0394 31.8195 20.0394 32.4526 20.4299 32.8431L26.7939 39.2071ZM26.501 16.5L26.501 38.5L28.501 38.5L28.501 16.5L26.501 16.5Z" fill="white"></path></svg></a>
        </div>`;
      })}</div>`;
    }
  })}
  `;
});
const livingRoom = "/_app/immutable/assets/living-room.8b52e29d.jpg";
const lvThropy = "/_app/immutable/assets/lvThropy.a25d985d.jpg";
const firePlace = "/_app/immutable/assets/firePlace.287d1d35.jpg";
const css$1 = {
  code: ".testimonial.svelte-j1myjc.svelte-j1myjc{padding:3rem 0}.testimonial.svelte-j1myjc p.svelte-j1myjc{font-size:1.3rem;font-weight:300;position:relative;padding:0 3rem}@media(max-width: 767px){.testimonial.svelte-j1myjc p.svelte-j1myjc{padding:0}}",
  map: null
};
const Testimonial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonial } = $$props;
  if ($$props.testimonial === void 0 && $$bindings.testimonial && testimonial !== void 0)
    $$bindings.testimonial(testimonial);
  $$result.css.add(css$1);
  return `<section class="testimonial testimonialA svelte-j1myjc">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<p class="text-center svelte-j1myjc">${escape(testimonial)}</p>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});
const contactBG = "/_app/immutable/assets/ContactBG.2a4398dc.jpg";
const css = {
  code: ".portfolio-gallery.svelte-vy1huw.svelte-vy1huw{padding:10vw 0;margin-top:0;background-color:#EFEFF0;margin-bottom:0;overflow-x:hidden}@media(max-width: 767px){.portfolio-gallery.svelte-vy1huw.svelte-vy1huw{padding:20vh 0 0}}.portfolio-gallery__content.svelte-vy1huw span.svelte-vy1huw{color:#00ADEE}.portfolio-gallery__content.svelte-vy1huw h1.svelte-vy1huw{margin:1rem 0}.portfolio-gallery__content.svelte-vy1huw p.svelte-vy1huw{line-height:2;max-width:800px;margin:0 auto}.about-property.svelte-vy1huw.svelte-vy1huw{background-color:#fff;margin-top:-4rem;padding:4rem 0}.about-property.svelte-vy1huw h2.svelte-vy1huw{margin-bottom:2rem}.about-property__content.svelte-vy1huw.svelte-vy1huw{background-color:#E5EEF2;padding:2rem}@media(max-width: 767px){.about-property__content.svelte-vy1huw.svelte-vy1huw{padding:2rem 0.5rem}}.about-property__content__heading.svelte-vy1huw.svelte-vy1huw{margin-bottom:3rem}@media(max-width: 767px){.about-property__content__heading.svelte-vy1huw.svelte-vy1huw{margin-bottom:1.5rem}}.about-property__content__heading.svelte-vy1huw div.svelte-vy1huw{display:inline-block}.about-property__content__heading.svelte-vy1huw div.svelte-vy1huw:first-child{margin-right:3rem}@media(max-width: 767px){.about-property__content__heading.svelte-vy1huw div.svelte-vy1huw:first-child{margin-right:0.5rem}}.about-property__content__heading.svelte-vy1huw div i.svelte-vy1huw{margin-right:1rem}@media(max-width: 767px){.about-property__content__heading.svelte-vy1huw div i.svelte-vy1huw{margin-right:0rem}}.about-property__content__heading.svelte-vy1huw div i svg.svelte-vy1huw{height:2rem}@media(max-width: 767px){.about-property__content__heading.svelte-vy1huw div i svg.svelte-vy1huw{height:1.5rem}}.about-property__content__paragraph.svelte-vy1huw.svelte-vy1huw{display:flex;flex-wrap:wrap}.about-property__content__paragraph.svelte-vy1huw p.svelte-vy1huw{width:50%;padding:0 3rem;line-height:2}@media(max-width: 767px){.about-property__content__paragraph.svelte-vy1huw p.svelte-vy1huw{width:100%;padding:0}}@media(max-width: 767px){.about-property__content__paragraph.svelte-vy1huw p.svelte-vy1huw:last-child{margin-bottom:0}}.fireplace.svelte-vy1huw.svelte-vy1huw{height:45vw}.living-room.svelte-vy1huw.svelte-vy1huw{height:45vw}.section--bannerOnly.svelte-vy1huw.svelte-vy1huw{background-image:var(--lrbg);background-size:cover;background-position:center}.lv-thropy.svelte-vy1huw.svelte-vy1huw{height:45vw}.portfolio-cta.svelte-vy1huw.svelte-vy1huw{min-height:40vw;min-width:40vw;display:flex;align-items:center;justify-content:center;position:relative}.portfolio-cta__content.svelte-vy1huw h2.svelte-vy1huw{margin-bottom:2rem}.portfolio-cta__content.svelte-vy1huw p.svelte-vy1huw{max-width:45rem;margin:0 auto;line-height:2}.portfolio-cta__btns.svelte-vy1huw.svelte-vy1huw{margin:2rem 0;display:flex;justify-content:center}.portfolio-cta__btns.svelte-vy1huw .btn-secondary.svelte-vy1huw{margin-right:1.5rem}@media(max-width: 767px){.portfolio-cta__btns.svelte-vy1huw .btn-secondary.svelte-vy1huw{margin-right:0.5rem}}.portfolio-cta__btns.svelte-vy1huw .btn-inverted.svelte-vy1huw{border-color:#263A63;color:#263A63}.related.svelte-vy1huw.svelte-vy1huw{background-color:#E5EEF2;padding:5rem 0;margin-bottom:0}.related.svelte-vy1huw h2.svelte-vy1huw{text-align:center;margin-bottom:2rem}.related__article.svelte-vy1huw.svelte-vy1huw{overflow:hidden;position:relative}.related__article.svelte-vy1huw img.svelte-vy1huw{transition:0.5s;object-fit:cover}.related__article.svelte-vy1huw:hover img.svelte-vy1huw{transition:0.5s;scale:1.2}.related__article__text.svelte-vy1huw.svelte-vy1huw{background-color:#263A63;color:#fff;padding:0.5rem;position:absolute;z-index:2;bottom:1rem;left:0;width:65%;text-align:left}@media(max-width: 767px){.related__article__text.svelte-vy1huw.svelte-vy1huw{margin:0;font-size:0.6rem;width:90%;bottom:0.5rem}}.related__article__text.svelte-vy1huw span.svelte-vy1huw{color:#00ADEE;font-size:1.2rem;margin:0 0.8rem 0}@media(max-width: 767px){.related__article__text.svelte-vy1huw span.svelte-vy1huw{margin:0;font-size:0.6rem}}.contact.svelte-vy1huw.svelte-vy1huw{padding:10rem 0;background-image:var(--contactBG);background-size:cover;margin:0}.contact__content.svelte-vy1huw.svelte-vy1huw{display:flex;height:100%;align-items:end}.contact__content__wrapper.svelte-vy1huw h2.svelte-vy1huw{margin-bottom:2rem}.contact__form.svelte-vy1huw #yourMessage{height:15rem}",
  map: null
};
const domain = "https://strapi.ulfbuilt.com:1337";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const portfolio = data.portfolio;
  const rPortfolios = data.rPortfolios;
  console.log(portfolio);
  const images = portfolio.data[0].attributes.images.data;
  let name = "", email = "", subject = "", message = "", result = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1901xmx_START -->${$$result.title = `<title>${escape(portfolio.data[0].attributes.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1901xmx_END -->`, ""}

<section class="portfolio-gallery svelte-vy1huw">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `<div class="portfolio-gallery__content svelte-vy1huw"><span class="svelte-vy1huw">Project</span>
					<h1 class="h2 svelte-vy1huw">Modern Mountain White</h1>
					<p class="svelte-vy1huw">The Modern Mountain White Brown home offers a spacious and stylish major house remodel.
						Notice the lines of sight from different positions of the photographer,
						and how rooms are separated yet easily accessible with interesting angles.						
					</p></div>`;
              }
            })}`;
          }
        })}
		${validate_component(Row, "Row").$$render($$result, { class: "portfolio-gallery__slider" }, {}, {
          default: () => {
            return `${validate_component(PortfolioCarousel, "PortfolioCarousel").$$render($$result, { images }, {}, {})}`;
          }
        })}`;
      }
    })}</section>
<section class="about-property svelte-vy1huw">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
              default: () => {
                return `<h2 class="svelte-vy1huw">About this Property</h2>`;
              }
            })}`;
          }
        })}
		${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
              default: () => {
                return `<div class="about-property__content svelte-vy1huw"><div class="about-property__content__heading svelte-vy1huw"><div class="svelte-vy1huw"><i class="svelte-vy1huw"><svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-vy1huw"><path d="M15.6096 37.8677C20.0675 33.9757 23.5067 30.1012 25.927 26.2444C28.3473 22.3875 29.5575 19.1275 29.5575 16.4644C29.5575 12.2585 28.224 8.8114 25.5571 6.12313C22.8901 3.43486 19.5749 2.09072 15.6115 2.09072C11.648 2.09072 8.33983 3.43541 5.68687 6.12478C3.03387 8.81415 1.70737 12.2637 1.70737 16.4733C1.70737 19.1389 2.92251 22.398 5.35279 26.2507C7.78308 30.1033 11.202 33.9757 15.6096 37.8677ZM15.6096 39.9999C10.3993 35.391 6.51964 31.1032 3.97077 27.1365C1.4219 23.1698 0.147461 19.6073 0.147461 16.4492C0.147461 11.5999 1.70689 7.73451 4.82575 4.85301C7.9446 1.97151 11.5414 0.530762 15.6161 0.530762C19.6907 0.530762 23.293 1.97167 26.4228 4.85348C29.5526 7.73529 31.1175 11.602 31.1175 16.4537C31.1175 19.6055 29.8354 23.1656 27.2713 27.134C24.7072 31.1024 20.8199 35.391 15.6096 39.9999ZM10.6397 21.5153H13.6304V16.3585H17.6345V21.5153H20.6252V13.2228L15.6096 9.95987L10.6397 13.2228V21.5153Z" fill="#00ADEE"></path></svg></i>
							<span>Colorado
							</span></div>
						<div class="svelte-vy1huw"><i class="svelte-vy1huw"><svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-vy1huw"><path d="M27.9993 28.4985L19.8204 20.3196V10.2102H21.5043V19.6804L29.1855 27.3616L27.9993 28.4985ZM2.81702 29.1785C2.14492 27.9186 1.62726 26.5791 1.26405 25.1598C0.900837 23.7405 0.692052 22.293 0.637695 20.8173H2.30009C2.35586 22.1471 2.56107 23.4384 2.91573 24.6911C3.27035 25.9438 3.7401 27.1672 4.32498 28.3612L2.81702 29.1785ZM0.637695 19.1334C0.692052 17.682 0.907994 16.2466 1.28552 14.8273C1.66304 13.4081 2.19929 12.0378 2.89426 10.7164L4.32498 11.5616C3.72151 12.7556 3.24712 13.9929 2.90179 15.2735C2.55642 16.554 2.35586 17.8407 2.30009 19.1334H0.637695ZM9.92339 36.9391C8.64786 36.1068 7.48099 35.1826 6.42277 34.1666C5.36459 33.1507 4.43795 31.9884 3.64286 30.6799L5.13577 29.7919C5.82504 30.9259 6.65267 31.9795 7.61864 32.9526C8.58458 33.9257 9.6417 34.7569 10.79 35.4462L9.92339 36.9391ZM5.13577 10.103L3.65574 9.2857C4.4508 8.03876 5.38244 6.88833 6.45065 5.83443C7.51887 4.78053 8.67645 3.85603 9.92339 3.06093L10.79 4.46165C9.65601 5.21239 8.60962 6.06502 7.65082 7.01954C6.69199 7.97406 5.85364 9.00187 5.13577 10.103ZM19.8204 40C18.3361 39.9456 16.8843 39.7297 15.465 39.3522C14.0458 38.9746 12.6919 38.4384 11.4035 37.7434L12.2486 36.3127C13.4098 36.9162 14.6306 37.3906 15.9112 37.7359C17.1917 38.0813 18.4948 38.2818 19.8204 38.3376V40ZM12.2486 3.6444L11.4035 2.20721C12.6919 1.54514 14.0458 1.02535 15.465 0.647824C16.8843 0.270298 18.3361 0.0543571 19.8204 0V1.61309C18.4948 1.70173 17.1917 1.91873 15.9112 2.26409C14.6306 2.60942 13.4098 3.06952 12.2486 3.6444ZM21.5043 40V38.3376C22.797 38.2818 24.0836 38.0813 25.3642 37.7359C26.6448 37.3906 27.8821 36.9162 29.0761 36.3127L29.9213 37.7434C28.5999 38.4384 27.2296 38.9746 25.8104 39.3522C24.3911 39.7297 22.9557 39.9456 21.5043 40ZM29.0761 3.6444C27.8821 3.06952 26.6448 2.60942 25.3642 2.26409C24.0836 1.91873 22.797 1.70173 21.5043 1.61309V0C22.9557 0.0543571 24.3911 0.268142 25.8104 0.641355C27.2296 1.0146 28.5999 1.53656 29.9213 2.20721L29.0761 3.6444ZM31.352 36.9391L30.5347 35.4462C31.6358 34.7569 32.6636 33.935 33.6181 32.9805C34.5727 32.0259 35.4253 30.9817 36.176 29.8477L37.5768 30.7143C36.7817 31.9612 35.8572 33.1081 34.8033 34.1549C33.7494 35.2016 32.5989 36.1297 31.352 36.9391ZM36.1482 10.0815C35.4303 8.94755 34.5906 7.91151 33.6289 6.97342C32.6672 6.03533 31.6358 5.19808 30.5347 4.46165L31.352 3.06093C32.5989 3.87031 33.7437 4.79123 34.7861 5.82372C35.8286 6.85617 36.7545 7.99587 37.5639 9.24281L36.1482 10.0815ZM39.0246 19.1334C38.936 17.7892 38.7097 16.4897 38.3457 15.2349C37.9818 13.9801 37.5053 12.7485 36.9161 11.5401L38.4305 10.6735C39.0869 11.9949 39.6052 13.3652 39.9856 14.7844C40.366 16.2037 40.5833 17.6534 40.6377 19.1334H39.0246ZM38.4305 29.2342L36.9933 28.417C37.5682 27.2372 38.0283 26.0117 38.3736 24.7404C38.719 23.4692 38.936 22.1615 39.0246 20.8173H40.6377C40.5833 22.3016 40.3674 23.7534 39.9899 25.1727C39.6123 26.5919 39.0926 27.9458 38.4305 29.2342Z" fill="#00ADEE"></path></svg></i>
							<span>12 Month Build
							</span></div></div>
					<div class="about-property__content__paragraph svelte-vy1huw"><p class="svelte-vy1huw">The Modern Mountain White Brown home offers a spacious and stylish major house remodel. Notice the lines of sight from different positions of the photographer, and how rooms are separated yet easily accessible with interesting angles.							
						</p>
						<p class="svelte-vy1huw">The Modern Mountain White Brown home offers a spacious and stylish major house remodel. Notice the lines of sight from different positions of the photographer, and how rooms are separated yet easily accessible with interesting angles.							
						</p></div></div>`;
              }
            })}`;
          }
        })}`;
      }
    })}</section>
<section class="fireplace section--bannerOnly svelte-vy1huw" style="${"--lrbg: url(" + escape(firePlace, true) + ")"}"></section>
${validate_component(Testimonial, "Testimonial").$$render(
      $$result,
      {
        testimonial: "The opulent fireplace was the centerpiece of the grand living room, radiating warmth and elegance throughout the sprawling mansion."
      },
      {},
      {}
    )}
<section class="living-room section--bannerOnly svelte-vy1huw" style="${"--lrbg: url(" + escape(livingRoom, true) + ")"}"></section>
${validate_component(Testimonial, "Testimonial").$$render(
      $$result,
      {
        testimonial: "The living room's grandeur was accentuated by its expansive windows, which offered an unobstructed view of the snow-capped mountainscape, while the expensive home decors added a touch of elegance and sophistication to the already magnificent space"
      },
      {},
      {}
    )}
<section class="lv-thropy section--bannerOnly svelte-vy1huw" style="${"--lrbg: url(" + escape(lvThropy, true) + ")"}"></section>
${validate_component(Testimonial, "Testimonial").$$render(
      $$result,
      {
        testimonial: "Lifting and opening the architecture of a home with natural elements"
      },
      {},
      {}
    )}

<section class="portfolio-cta svelte-vy1huw">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { class: "text-center " }, {}, {
              default: () => {
                return `<div class="portfolio-cta__content svelte-vy1huw"><h2 class="svelte-vy1huw">Experience Living your Dreams</h2>       
					<p class="svelte-vy1huw">This Castle in Colorado exudes grandeur with its rugged, locally sourced stone walls and curved, wood and wrought iron staircases. Its traditional design is further enhanced by a mountain lion sculpture that guards the property. 						
					</p></div>
                <div class="portfolio-cta__btns svelte-vy1huw"><a href="#" class="btn btn-secondary svelte-vy1huw">Talk to Us</a>
                    <a href="#" class="btn btn-inverted svelte-vy1huw">Back to Portfolio</a></div>`;
              }
            })}`;
          }
        })}`;
      }
    })}</section>

<section class="related svelte-vy1huw">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
              default: () => {
                return `<h2 class="svelte-vy1huw">Experience Living Your Dreams</h2>`;
              }
            })}			
			${each(rPortfolios, (rPortfolio, index) => {
              return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="related__article svelte-vy1huw"><a${add_attribute("href", rPortfolio.attributes.slug, 0)}><img src="${escape(domain, true) + escape(rPortfolio.attributes.featuredImage.data.attributes.url, true)}"${add_attribute("alt", rPortfolio.attributes.featuredImage.data.attributes.alternativeText, 0)} class="svelte-vy1huw">
							<div class="related__article__text svelte-vy1huw"><span class="svelte-vy1huw">0${escape(index + 1)}</span>
								${escape(rPortfolio.attributes.title)}</div>
						</a></div>
				`;
                }
              })}`;
            })}
			`;
          }
        })}`;
      }
    })}</section>

<section class="contact svelte-vy1huw" style="${"--contactBG: url(" + escape(contactBG, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
              default: () => {
                return `<div class="contact__content svelte-vy1huw"><div class="contact__content__wrapper svelte-vy1huw"><h2 class="svelte-vy1huw">Ready to Start<br> your Dream Project?</h2>
						<p>Let&#39;s discuss it!</p></div></div>`;
              }
            })}
			${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
              default: () => {
                return `<div class="contact__form svelte-vy1huw">${validate_component(Form, "Form").$$render($$result, { method: "post" }, {}, {
                  default: () => {
                    return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "input-icon-box" }, {}, {
                      default: () => {
                        return `${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            class: "input-user",
                            placeholder: "Full Name",
                            value: name
                          },
                          {
                            value: ($$value) => {
                              name = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}
							<div class="input-icon input-icon-user"></div>`;
                      }
                    })}
						${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "input-icon-box" }, {}, {
                      default: () => {
                        return `${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            class: "input-email",
                            placeholder: "Email address",
                            value: email
                          },
                          {
                            value: ($$value) => {
                              email = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}
							<div class="input-icon input-icon-email"></div>`;
                      }
                    })}
						${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "input-icon-box" }, {}, {
                      default: () => {
                        return `${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            class: "input-phone",
                            placeholder: "Phone Number",
                            value: subject
                          },
                          {
                            value: ($$value) => {
                              subject = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}
							<div class="input-icon input-icon-phone"></div>`;
                      }
                    })}
						${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            type: "textarea",
                            id: "yourMessage",
                            placeholder: "Tell us about you project...",
                            value: message
                          },
                          {
                            value: ($$value) => {
                              message = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}
						${validate_component(Button, "Button").$$render($$result, { type: "btn is-primary" }, {}, {
                      default: () => {
                        return `Send`;
                      }
                    })}`;
                  }
                })}</div>
                ${escape(result)}`;
              }
            })}`;
          }
        })}`;
      }
    })}
</section>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8cc8da60.js.map
