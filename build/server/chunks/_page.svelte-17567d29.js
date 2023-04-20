import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute, o as each } from './index3-802fbda3.js';
import { F as Form, a as FormGroup, I as Input, B as Button } from './Input-52f111de.js';
import { R as Row, C as Col } from './Row-541efe16.js';
import { C as Container } from './Container-1c1b82fa.js';
import { I as ImageSlider } from './ImageSlider-23efeeb9.js';
import './index2-1a921d2a.js';

const leftImg = "/_app/immutable/assets/left-img.a2d77421.png";
const topImg = "/_app/immutable/assets/top-img.f6153ebc.jpg";
const bottomImg = "/_app/immutable/assets/bottom-img.ea513a80.jpg";
const banner = "/_app/immutable/assets/first-section.6089220b.svg";
const galImg = "/_app/immutable/assets/gal-img.c9b03f8e.jpg";
const firstImg = "/_app/immutable/assets/gal-img1.8a226b44.png";
const scndImg = "/_app/immutable/assets/gal-img2.9158ef0a.jpg";
const thirdImg = "/_app/immutable/assets/gal-img3.7f201b5c.jpg";
const stairs = "/_app/immutable/assets/stairs.e6f0118e.jpg";
const livingRoom = "/_app/immutable/assets/living-room.8b52e29d.jpg";
const lvThropy = "/_app/immutable/assets/lvThropy.a25d985d.jpg";
const panther = "/_app/immutable/assets/panther.cd387c2c.png";
const css$2 = {
  code: '.testimonial.svelte-igq2s.svelte-igq2s{padding:3rem 0}.testimonial.svelte-igq2s p.svelte-igq2s{font-size:1.3rem;font-weight:300;position:relative;padding:0 3rem}.testimonial.svelte-igq2s p.svelte-igq2s:before{content:url("/left-quote.png");vertical-align:top;position:absolute;top:0;left:0}.testimonial.svelte-igq2s p.svelte-igq2s:after{content:url("/right-quote.png");vertical-align:top;position:absolute;bottom:0;right:0}',
  map: null
};
const Testimonial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonial } = $$props;
  if ($$props.testimonial === void 0 && $$bindings.testimonial && testimonial !== void 0)
    $$bindings.testimonial(testimonial);
  $$result.css.add(css$2);
  return `<section class="testimonial testimonialA svelte-igq2s">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: { size: 8, offset: 2 } }, {}, {
            default: () => {
              return `<p class="text-center svelte-igq2s">${escape(testimonial)}</p>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});
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
const css$1 = {
  code: ".slider-container.svelte-18ldh91.svelte-18ldh91{width:100%;overflow:hidden;position:relative}.slider-container.svelte-18ldh91 .carousel-cell.svelte-18ldh91{width:33%;height:auto;padding:0 2rem;box-sizing:border-box}.slider-container.svelte-18ldh91 .carousel-cell img.svelte-18ldh91{display:block;width:100%;height:auto}.progress-ring-container.svelte-18ldh91.svelte-18ldh91{position:relative;bottom:10px;left:10px;z-index:1}.progress-ring-border.svelte-18ldh91.svelte-18ldh91{transition:stroke-dashoffset 0.5s ease-out}.arrow.svelte-18ldh91.svelte-18ldh91{font-family:Arial, sans-serif;cursor:pointer;user-select:none}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let progressPercentage = 0;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-15qbian_START --><script src="flickity/flickity.pkgd.min.js"><\/script><link rel="stylesheet" href="flickity/flickity.min.css"><!-- HEAD_svelte-15qbian_END -->`, ""}
  
  <div class="slider-container svelte-18ldh91">${each(images, (image) => {
    return `<div class="carousel-cell svelte-18ldh91"><img${add_attribute("src", image, 0)} alt="Slider image" class="svelte-18ldh91">
      </div>`;
  })}</div>
  <div class="progress-ring-container svelte-18ldh91"><svg class="progress-ring" width="110" height="54"><rect class="progress-ring__bg" x="2" y="2" rx="25" ry="25" width="106" height="50" fill="white"></rect><rect class="progress-ring-border svelte-18ldh91" x="2" y="2" width="106" height="50" rx="25" ry="25" fill="transparent" stroke-width="4" stroke="red" stroke-dasharray="305"${add_attribute("stroke-dashoffset", 305 * (1 - progressPercentage / 100), 0)}></rect><text class="arrow arrow-left svelte-18ldh91" x="27" y="27" font-size="18" text-anchor="middle" dominant-baseline="central">←</text><text class="arrow arrow-right svelte-18ldh91" x="82" y="27" font-size="18" text-anchor="middle" dominant-baseline="central">→</text></svg>
  </div>`;
});
const css = {
  code: '.homebanner.svelte-1ugsyag.svelte-1ugsyag{background-image:var(--banner);background-size:cover;min-height:100vh;background-position:bottom;background-size:cover;padding-top:9rem;margin:0}.homebanner__content.svelte-1ugsyag.svelte-1ugsyag{position:absolute;bottom:20%;max-width:750px}.homebanner__content__text.svelte-1ugsyag h1.svelte-1ugsyag{color:#fff;text-transform:uppercase;font-family:"Roboto";font-weight:900;font-size:5rem;margin-bottom:2rem}.homebanner__content__btn.svelte-1ugsyag.svelte-1ugsyag{border:1px solid #fff;padding:1.5rem 4rem;text-decoration:none;color:#fff;font-family:"Times New Roman", Times, serif;text-transform:lowercase;display:inline-block}.gallery__container.svelte-1ugsyag.svelte-1ugsyag{display:grid;grid-template-columns:repeat(2, 2fr);grid-template-rows:repeat(2, 20vw);grid-gap:1.5rem}.gallery__container__figure.svelte-1ugsyag.svelte-1ugsyag{margin-bottom:0;position:relative;overflow:hidden}.gallery__container__figure.svelte-1ugsyag img.svelte-1ugsyag{transition:0.3s}.gallery__container__figure.svelte-1ugsyag:hover .gallery__container__figure__overlay.svelte-1ugsyag{opacity:1;background-color:rgba(0, 0, 0, 0.15)}.gallery__container__figure.svelte-1ugsyag:hover img.svelte-1ugsyag{transform:scale(1.2);transition:0.3s}.gallery__container__figure__overlay.svelte-1ugsyag.svelte-1ugsyag{position:absolute;transition:0.5s;height:100%;width:100%;display:flex;opacity:0;align-items:center;justify-content:center;text-align:center;top:0;z-index:2;left:0}.gallery__container__figure__overlay.svelte-1ugsyag a.svelte-1ugsyag{color:#fff;text-decoration:unset}.gallery__container__figure__overlay.svelte-1ugsyag a span.svelte-1ugsyag{font-size:4rem}.gallery__container__figure__overlay.svelte-1ugsyag a p.svelte-1ugsyag{font-size:1.2rem;text-transform:uppercase;position:relative}.gallery__container__figure__overlay.svelte-1ugsyag a p.svelte-1ugsyag:after{margin:0 auto;content:"";height:5px;background:#E977C9;width:50%;position:absolute;bottom:-1rem;left:0;right:0}.gallery__container__figure.svelte-1ugsyag img.svelte-1ugsyag{width:100%;height:100%;object-fit:cover}.gallery__container--first-img.svelte-1ugsyag.svelte-1ugsyag{grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:3}.gallery__container--top-img.svelte-1ugsyag.svelte-1ugsyag{grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:1}.gallery__container--bottom-img.svelte-1ugsyag.svelte-1ugsyag{grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2}.sticky-content.svelte-1ugsyag div.svelte-1ugsyag{background-color:#fff}.sticky-content__heading.svelte-1ugsyag.svelte-1ugsyag{margin-top:4%;background:#fff;font-weight:300;letter-spacing:0.5rem;margin-bottom:3rem}.sticky-content__img.svelte-1ugsyag.svelte-1ugsyag{background:#fff;margin-bottom:5rem;position:sticky;top:20%}.sticky-content__img.svelte-1ugsyag img.svelte-1ugsyag{width:100%}.sticky-content--top-text.svelte-1ugsyag.svelte-1ugsyag{z-index:-4;height:50rem}.sticky-content--top-text.svelte-1ugsyag p.svelte-1ugsyag{line-height:2rem}.sticky-content--first-img.svelte-1ugsyag.svelte-1ugsyag{z-index:-2}.sticky-content--canvass.svelte-1ugsyag.svelte-1ugsyag{z-index:-3;height:80rem;width:100%}.sticky-content--scnd-img.svelte-1ugsyag.svelte-1ugsyag{z-index:-1}.sticky-content--third-img.svelte-1ugsyag.svelte-1ugsyag{z-index:1}.sticky-content__left_img.svelte-1ugsyag.svelte-1ugsyag{position:sticky;top:20%;margin-bottom:0rem;z-index:0}.sticky-content__left_img.svelte-1ugsyag img.svelte-1ugsyag{width:100%}.sticky-content__texts.svelte-1ugsyag.svelte-1ugsyag{position:sticky;top:20%;margin-top:80rem;z-index:2;background-color:#fff;height:45rem}.sticky-content__texts.svelte-1ugsyag h3.svelte-1ugsyag{font-size:2rem;font-weight:300;color:#00ADEE;margin-bottom:3rem}.sticky-content__texts.svelte-1ugsyag p.svelte-1ugsyag{line-height:2}@media(min-width: 768px){.sticky-content__texts.svelte-1ugsyag p.svelte-1ugsyag{margin-left:1rem}}.sticky-content2__bg.svelte-1ugsyag.svelte-1ugsyag{width:100%;margin-bottom:7rem}.sticky-content2__img.svelte-1ugsyag.svelte-1ugsyag{background:#fff;margin-bottom:10rem;position:sticky;top:20%}.sticky-content2__img.svelte-1ugsyag img.svelte-1ugsyag{width:100%}.sticky-content2--first-img.svelte-1ugsyag.svelte-1ugsyag{z-index:-2}.sticky-content2--scnd-img.svelte-1ugsyag.svelte-1ugsyag{z-index:-1}.sticky-content2--third-img.svelte-1ugsyag.svelte-1ugsyag{z-index:1}.sticky-content2--canvass.svelte-1ugsyag.svelte-1ugsyag{z-index:-3;height:50rem;width:100%}.sticky-content2__texts.svelte-1ugsyag.svelte-1ugsyag{position:sticky;top:20%;z-index:2;background-color:#fff;height:45rem}@media(min-width: 768px){.sticky-content2__texts.svelte-1ugsyag.svelte-1ugsyag{margin-left:1rem}}.sticky-content2__texts.svelte-1ugsyag h3.svelte-1ugsyag{font-size:2rem;font-weight:300;color:#00ADEE;margin-bottom:3rem}.sticky-content2__texts.svelte-1ugsyag p.svelte-1ugsyag{line-height:2}.sticky-content2__texts__cta.svelte-1ugsyag.svelte-1ugsyag{border:1px solid #ACA7A7;padding:1.5rem;text-align:center}.sticky-content2__texts__cta.svelte-1ugsyag h4.svelte-1ugsyag{font-size:1.2rem;font-weight:400;color:#00ADEE;margin-bottom:1rem}.sticky-content2__texts__cta.svelte-1ugsyag a.svelte-1ugsyag{padding:1rem 1.8rem;background:#00adee;color:#fff;text-decoration:none;margin-bottom:-20%;border-radius:0}.living-room.svelte-1ugsyag.svelte-1ugsyag{height:30vw}.section--bannerOnly.svelte-1ugsyag.svelte-1ugsyag{background-image:var(--lrbg);background-size:cover}.lv-thropy.svelte-1ugsyag.svelte-1ugsyag{height:45vw}.contact-form__form.svelte-1ugsyag.svelte-1ugsyag{padding:2rem;margin:0 auto;max-width:500px;text-align:center}.contact-form__form.svelte-1ugsyag h2.svelte-1ugsyag{font-weight:300;margin-bottom:2rem;text-transform:uppercase}.img-section.svelte-1ugsyag.svelte-1ugsyag{margin:5rem 0}.home-cta.svelte-1ugsyag.svelte-1ugsyag{margin:10rem 0}.home-cta.svelte-1ugsyag h2.svelte-1ugsyag{color:#00ADEE}.home-cta.svelte-1ugsyag .btn.svelte-1ugsyag{margin-top:3rem;color:#fff;padding:0.8rem 4rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const images = [
    "https://source.unsplash.com/uFdRfAkM1DM",
    "https://source.unsplash.com/RQOABS5RH0M",
    "https://source.unsplash.com/YhPYgb8ZCBw",
    "https://source.unsplash.com/E5lK_COkD2E"
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-d9byc7_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-d9byc7_END -->`, ""}

<section class="homebanner svelte-1ugsyag" style="${"--banner: url(" + escape(banner, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: { size: 7, offset: -5 } }, {}, {
            default: () => {
              return `<div class="homebanner__content svelte-1ugsyag"><div class="homebanner__content__text svelte-1ugsyag">${validate_component(Animate, "Animate").$$render($$result, { section: ".homebanner" }, {}, {
                default: () => {
                  return `<h1 class="ml3 svelte-1ugsyag">${validate_component(TextTransition, "TextTransition").$$render(
                    $$result,
                    {
                      text: "We Build Serene Dreams",
                      transitionDelay: "600"
                    },
                    {},
                    {}
                  )}</h1>`;
                }
              })}</div>
					${validate_component(Animate, "Animate").$$render($$result, { section: ".homebanner" }, {}, {
                default: () => {
                  return `<a href="/" class="homebanner__content__btn homebanner__content--btn btn btn-inverted svelte-1ugsyag">Learn what makes us different</a>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `${validate_component(Carousel, "Carousel").$$render($$result, { images }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}
<section class="gallery">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<div class="gallery__container svelte-1ugsyag">${validate_component(Animate, "Animate").$$render($$result, { section: ".gallery" }, {}, {
                default: () => {
                  return `<figure class="gallery__container__figure gallery__container--first-img svelte-1ugsyag"><div class="gallery__container__figure__overlay svelte-1ugsyag"><a href="/" class="gallery__container__overlay__link svelte-1ugsyag"><span class="svelte-1ugsyag">4</span>
									<p class="svelte-1ugsyag">New Construction</p></a></div>
							<img${add_attribute("src", leftImg, 0)} alt="Mountain Top" class="svelte-1ugsyag"></figure>`;
                }
              })}
					${validate_component(Animate, "Animate").$$render($$result, { section: ".gallery" }, {}, {
                default: () => {
                  return `<figure class="gallery__container__figure gallery__container--top-img svelte-1ugsyag"><img${add_attribute("src", topImg, 0)} alt="Mountain Top Interior" class="svelte-1ugsyag"></figure>`;
                }
              })}
					${validate_component(Animate, "Animate").$$render($$result, { section: ".gallery" }, {}, {
                default: () => {
                  return `<figure class="gallery__container__figure gallery__container--bottom-img svelte-1ugsyag"><img${add_attribute("src", bottomImg, 0)} alt="Lakehouse" class="svelte-1ugsyag"></figure>`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="sticky-content svelte-1ugsyag">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
            default: () => {
              return `<h2 class="sticky-content__heading text-center svelte-1ugsyag"><h1 class="ml3">${validate_component(Animate, "Animate").$$render($$result, { section: ".sticky-content" }, {}, {
                default: () => {
                  return `${validate_component(TextTransition, "TextTransition").$$render(
                    $$result,
                    {
                      text: "Jagdschloss Vail",
                      transitionDelay: "150"
                    },
                    {},
                    {}
                  )}`;
                }
              })}</h1></h2>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "5" }, {}, {
            default: () => {
              return `<div class="sticky-content__img sticky-content--top-text svelte-1ugsyag"><p class="svelte-1ugsyag">&quot;This Castle in Colorado exudes grandeur with its rugged, locally sourced stone walls and curved, wood and wrought iron staircases. </p>
					<p class="svelte-1ugsyag">Its traditional design is further enhanced by a mountain lion sculpture that guards the property. </p>
					<p class="svelte-1ugsyag">Inside, you&#39;ll find reclaimed wood cabinetry in the kitchen and unique details like rough-cut granite countertops, seamlessly blending light and dark stone for a cohesive old-world mountain home aesthetic.&quot;</p></div>
				<div class="sticky-content__img sticky-content--first-img svelte-1ugsyag"><img${add_attribute("src", firstImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>
				<div class="sticky-content__img sticky-content--canvass svelte-1ugsyag"></div>				
				<div class="sticky-content__img sticky-content--scnd-img svelte-1ugsyag"><img${add_attribute("src", scndImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>
				<div class="sticky-content__img sticky-content--canvass svelte-1ugsyag"></div>					
				<div class="sticky-content__img sticky-content--third-img svelte-1ugsyag"><img${add_attribute("src", thirdImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "7" }, {}, {
            default: () => {
              return `<div class="sticky-content__left_img svelte-1ugsyag"><img${add_attribute("src", galImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>
				<div class="sticky-content__texts svelte-1ugsyag">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h3 class="text-center svelte-1ugsyag">Jagdschloss Vail</h3>`;
                    }
                  })}`;
                }
              })}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="svelte-1ugsyag">Notice intricate details like reclaimed wood kitchen cabinetry, covering the stainless appliances. The rough finished edges on the slab granite countertops, tie together the dark granite with the light natural stone. Grain matching countertops and thoughtful stonework are built throughout this old world style mountain house.						</p>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="svelte-1ugsyag">Notice intricate details like reclaimed wood kitchen cabinetry, covering the stainless appliances. The rough finished edges on the slab granite countertops, tie together the dark granite with the light natural stone. Grain matching countertops and thoughtful stonework are built throughout this old world style mountain house.						</p>`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="sticky-content2">${validate_component(Animate, "Animate").$$render($$result, { section: ".sticky-content2" }, {}, {
    default: () => {
      return `<img${add_attribute("src", stairs, 0)} alt="stairs" class="sticky-content2__bg svelte-1ugsyag">`;
    }
  })}
	${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "5" }, {}, {
            default: () => {
              return `<div class="sticky-content2__img sticky-content2--first-img svelte-1ugsyag"><img${add_attribute("src", firstImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>			
				<div class="sticky-content2__img sticky-content2--canvass svelte-1ugsyag"></div>					
				<div class="sticky-content2__img sticky-content2--scnd-img svelte-1ugsyag"><img${add_attribute("src", scndImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>
				<div class="sticky-content2__img sticky-content2--canvass svelte-1ugsyag"></div>					
				<div class="sticky-content2__img sticky-content2--third-img svelte-1ugsyag"><img${add_attribute("src", thirdImg, 0)} alt="gallery" class="svelte-1ugsyag"></div>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "7" }, {}, {
            default: () => {
              return `<div class="sticky-content2__texts svelte-1ugsyag">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `<h3 class="svelte-1ugsyag">Hand Hewn Wood Beams</h3>`;
                    }
                  })}`;
                }
              })}
					${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="svelte-1ugsyag">We love solid, exposed hand hewn wood beams. Old-world building styles makes for strong and remarkable ceiling lines and lifted roofs. </p>
							<p class="svelte-1ugsyag">Lifting and opening the architecture of a home with natural elements like finished logs and exposed beams is our builder signature. On this project, our team worked with the Owner’s Architect to build this incredible home.</p>
							<p class="svelte-1ugsyag">I can elaborate about how we schedule, and the frequency of meetings, and how we load photos and walk-throughs and aerial drone video for owners positioned around the world.</p>`;
                    }
                  })}
						${validate_component(Col, "Col").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p class="svelte-1ugsyag">We can talk about the strength of our team, and how we successfully manage teams of Stonemasons, Ironworkers and Woodworkers.</p>
							<p class="svelte-1ugsyag">Together we built a Traditional Old World style European Castle with durable natural materials, fused with modern materials. A Colorado Castle built with natural stone to withstand the elements. A true asset of heritage and culture, Built with the team at ULFBUILT.</p>
							<div class="sticky-content2__texts__cta svelte-1ugsyag"><h4 class="svelte-1ugsyag">Tell us about your project</h4>
								<p class="svelte-1ugsyag">We want to know about you and building your dream home</p>
								<a href="/" class="btn svelte-1ugsyag">Talk to Us</a></div>`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="living-room section--bannerOnly svelte-1ugsyag" style="${"--lrbg: url(" + escape(livingRoom, true) + ")"}"></section>
${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      testimonial: "This is pinnacle Colorado Castle. From the rough cut local stone that covers the interior and exterior walls, to the curved torched wood and wrought iron staircases, this is a traditional castle."
    },
    {},
    {}
  )}

<section class="lv-thropy section--bannerOnly svelte-1ugsyag" style="${"--lrbg: url(" + escape(lvThropy, true) + ")"}"></section>

${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      testimonial: "Lifting and opening the architecture of a home with natural elements like finished logs and exposed beams is our builder signature."
    },
    {},
    {}
  )}

<section class="carousel">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(ImageSlider, "ImageSlider").$$render($$result, { images }, {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      testimonial: "Together we built a Traditional Old World style European Castle with durable natural materials, fused with modern materials. A true asset of heritage and culture, Built with the team at ULFBUILT."
    },
    {},
    {}
  )}

<section class="contact-form">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
            default: () => {
              return `<p>Lifting and opening the architecture of a home with natural elements like finished logs and exposed beams is our builder signature. On this project, our team worked with the Owner’s Architect to build this incredible home.</p>
				<p>I can elaborate about how we schedule, and the frequency of meetings, and how we load photos and walk-throughs and aerial drone video for owners positioned around the world. But most importantly, I want to share why we think exposed beams are such an important part of a beautiful luxury home.</p>
				<p>The natural patterns in wood are unique and striking, adding beauty and texture to any space. And because wood is a natural material, it breathes, which means it helps keep your home comfortable and healthy. When you choose Vail Valley house remodeler ULFBUILT, you’re getting a team of experts with years of experience in creating beautiful homes with exposed beams.</p>
				<p>We’ll work with you every step of the way to make sure your home is everything you dream it can be.</p>`;
            }
          })}
			${validate_component(Col, "Col").$$render($$result, { md: "6" }, {}, {
            default: () => {
              return `<div class="contact-form__form svelte-1ugsyag"><h2 class="svelte-1ugsyag">Get in touch with us</h2>
					${validate_component(Form, "Form").$$render($$result, { method: "post", class: "" }, {}, {
                default: () => {
                  return `${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Input, "Input").$$render($$result, { placeholder: "Full Name" }, {}, {})}`;
                    }
                  })}
						${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Input, "Input").$$render($$result, { type: "email", placeholder: "Email" }, {}, {})}`;
                    }
                  })}
						${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Input, "Input").$$render($$result, { type: "tel", placeholder: "Phone Number" }, {}, {})}`;
                    }
                  })}
						${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "textarea",
                          id: "yourMessage",
                          placeholder: "Tell us about your project..",
                          rows: "5"
                        },
                        {},
                        {}
                      )}`;
                    }
                  })}
						${validate_component(Button, "Button").$$render($$result, {}, {}, {
                    default: () => {
                      return `Send Email`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="img-section svelte-1ugsyag">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<img${add_attribute("src", panther, 0)} alt="">`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>

<section class="home-cta svelte-1ugsyag">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
            default: () => {
              return `<h2 class="svelte-1ugsyag">Tell us about your project</h2>
				<p>We want to know about yo and building your dream home</p>
				<a href="#" class="btn button svelte-1ugsyag">Talk to Us</a>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-17567d29.js.map
