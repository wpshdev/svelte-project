import { L as L$1, d, z, N, P as P$1 } from './index2-8ecb42f0.js';
import { E as E$1, M as M$1, R as R$1 } from './Row-a840427f.js';
import { a } from './Animate-9cc2ed0c.js';
import { E as E$2, v } from './MasonryGrid-84354e9e.js';
import { y } from './Cta-f1a2fc95.js';
import { u } from './PageBanner-99b6c060.js';
import o from 'axios';

const $={code:".progress-ring__arrow.svelte-bxmbit rect.svelte-bxmbit{transition:fill 1s}.progress-ring__arrow.svelte-bxmbit:hover rect.svelte-bxmbit{fill:rgba(129, 129, 129, 0.191)}.slider-caption.svelte-bxmbit.svelte-bxmbit{height:100%;display:flex;align-items:flex-start;flex-direction:column;gap:5rem}.slider-caption__heading.svelte-bxmbit.svelte-bxmbit{margin-top:5rem;margin-bottom:1rem;width:100%}@media(max-width: 767px){.slider-caption__heading.svelte-bxmbit.svelte-bxmbit{text-align:center;margin-top:0}}.slider-caption__heading.svelte-bxmbit span.svelte-bxmbit{font-size:1.5rem;margin-bottom:1.5rem;color:#00ADEE;font-weight:500}.slider-container.svelte-bxmbit.svelte-bxmbit{width:100%;overflow:hidden;position:relative}.slider-container__carousel-cell.svelte-bxmbit.svelte-bxmbit{width:42%;position:relative;height:auto;margin:0 0.5rem;box-sizing:border-box;height:70vh;overflow:hidden}@media(max-width: 768px){.slider-container__carousel-cell.svelte-bxmbit.svelte-bxmbit{height:50vh;width:80%}}@media(max-width: 767px){.slider-container__carousel-cell.svelte-bxmbit.svelte-bxmbit{height:50vh;width:80%}}.slider-container__carousel-cell__text.svelte-bxmbit.svelte-bxmbit{background-color:#1E2D39;color:#fff;padding:0.5rem;position:absolute;z-index:2;bottom:1rem;left:0;width:90%;text-align:left}@media(max-width: 767px){.slider-container__carousel-cell__text.svelte-bxmbit.svelte-bxmbit{margin:0;width:90%;bottom:0.5rem}}.slider-container__carousel-cell__text.svelte-bxmbit span.svelte-bxmbit{color:#00ADEE;font-size:1.2rem;margin:0 0.8rem 0}@media(max-width: 767px){.slider-container__carousel-cell__text.svelte-bxmbit span.svelte-bxmbit{margin:0}}.slider-container__carousel-cell__text.svelte-bxmbit i.svelte-bxmbit{position:absolute;top:20%;right:1rem}.slider-container__carousel-cell.svelte-bxmbit img.svelte-bxmbit{display:block;width:auto;object-fit:cover;height:100%}.slider-btn.svelte-bxmbit.svelte-bxmbit{margin:2rem 5rem 0;text-align:right}@media(max-width: 767px){.slider-btn.svelte-bxmbit.svelte-bxmbit{text-align:center;margin:2rem 0 0}}.progress-ring-container.svelte-bxmbit.svelte-bxmbit{margin-top:1rem;position:relative;bottom:10px;left:10px;z-index:1;box-shadow:0px 4px 5px rgba(0, 0, 0, 0.15);display:inline-block;border-radius:2rem}@media(max-width: 767px){.progress-ring-container.svelte-bxmbit.svelte-bxmbit{margin-top:3rem;left:0}}.progress-ring__border.svelte-bxmbit.svelte-bxmbit{transition:stroke-dashoffset 0.5s ease-out}.progress-ring__arrow.svelte-bxmbit.svelte-bxmbit{font-family:Arial, sans-serif;cursor:pointer;user-select:none;fill:#00ADEE}",map:null},C="https://strapi.ulfbuilt.com:1337",E=L$1((t,o,s,k)=>{let{preHeading:l}=o,{heading:e}=o,{btnTitle:v}=o,{btnUrl:n}=o,{featuredProjects:p}=o;return o.preHeading===void 0&&s.preHeading&&l!==void 0&&s.preHeading(l),o.heading===void 0&&s.heading&&e!==void 0&&s.heading(e),o.btnTitle===void 0&&s.btnTitle&&v!==void 0&&s.btnTitle(v),o.btnUrl===void 0&&s.btnUrl&&n!==void 0&&s.btnUrl(n),o.featuredProjects===void 0&&s.featuredProjects&&p!==void 0&&s.featuredProjects(p),t.css.add($),`
  ${z(R$1,"Col").$$render(t,{md:"3"},{},{default:()=>`<div class="slider-caption svelte-bxmbit"><div class="slider-caption__heading svelte-bxmbit"><span class="svelte-bxmbit">${d(l)}</span>
        <h2><!-- HTML_TAG_START -->${e}<!-- HTML_TAG_END --></h2></div>
      </div>`})}	
  ${z(R$1,"Col").$$render(t,{md:"9"},{},{default:()=>`<div class="slider-container svelte-bxmbit">${N(p.data,(d$1,b)=>`<div class="slider-container__carousel-cell zoomImg svelte-bxmbit"><img src="${d(C,!0)+d(d$1.attributes.featuredImage.data.attributes.formats.large.url,!0)}"${P$1("alt",d$1.attributes.featuredImage.data.attributes.alternativeText,0)} class="svelte-bxmbit">
          <div class="slider-container__carousel-cell__text svelte-bxmbit"><span class="svelte-bxmbit">0${d(b+1)}</span>
            ${d(d$1.attributes.title)}
            <i class="svelte-bxmbit"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.29004 12.3459L6.29004 6.84595L1.29004 1.34595" stroke="#00ADEE" stroke-width="2" stroke-linecap="round"></path></svg>
              </i></div>        
        </div>`)}</div>
           
    <div class="slider-btn svelte-bxmbit"><a${P$1("href",n,0)} class="btn btn-secondary">${d(v)}</a></div>`})}`});const P={code:".masonry-items.svelte-1e7spsr.svelte-1e7spsr{width:33%;overflow:hidden;position:absolute;color:white;text-align:center;height:60vh}@media(max-width: 768px){.masonry-items.svelte-1e7spsr.svelte-1e7spsr{height:20vh}}@media(max-width: 767px){.masonry-items.svelte-1e7spsr.svelte-1e7spsr{height:20vh}}.masonry-items.svelte-1e7spsr a.svelte-1e7spsr{display:block;height:100%;width:98%;overflow:hidden}.masonry-items.svelte-1e7spsr a img.svelte-1e7spsr{height:100%;object-fit:cover}@media(max-width: 767px){}",map:null},H=0,D="end",R="end",B=3,M=0,S=0,G=L$1((t,o$1,s,k)=>{let{id:l}=o$1,e;const v$1=new Map;let{propCount:n}=o$1;async function p(d){if(v$1.has(d)){e=v$1.get(d);return}const b="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+d+"&populate=deep,2",x={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};e=(await o.get(b,{headers:x})).data,v$1.set(d,e);}return o$1.id===void 0&&s.id&&l!==void 0&&s.id(l),o$1.propCount===void 0&&s.propCount&&n!==void 0&&s.propCount(n),t.css.add(P),l&&(async()=>(await p(l),console.log(e)))(),`${e?`${z(v,"MasonryGrid").$$render(t,{class:"container",defaultDirection:D,gap:H,align:R,column:B,columnSize:M,columnSizeRatio:S},{},{default:()=>`${N(e.data,(d$1,b)=>`${b<n?`<div class="masonry-items svelte-1e7spsr"><a data-sveltekit-reload href="${"/portfolio/"+d(d$1.attributes.slug,!0)}" class="zoomImg svelte-1e7spsr"><img src="${"https://strapi.ulfbuilt.com:1337/"+d(d$1.attributes.featuredImage.data.attributes.formats.large.url,!0)}" alt="modern" class="svelte-1e7spsr">
                            </a>
                    </div>`:""}`)}`})}`:'<div class="col text-center">Loading...</div>'}`});const L={code:'section.svelte-o3arzk.svelte-o3arzk{min-height:20vh}@media(max-width: 767px){.loc-gallery p{text-align:left}}.loc-gallery .h3 span{color:#00ADEE}.loc-gallery.svelte-o3arzk h2.svelte-o3arzk{font-family:"Times New Roman", sans-serif;margin-bottom:1rem;color:#263A63;margin-bottom:3rem;text-align:center}@media(max-width: 767px){.loc-gallery.svelte-o3arzk h2.svelte-o3arzk{text-align:center;font-size:2.813rem}}.loc-gallery__cwrapper.svelte-o3arzk .h3.svelte-o3arzk{text-transform:uppercase;margin-bottom:2rem;font-size:2.5rem;font-weight:600}@media(max-width: 767px){.loc-gallery__cwrapper.svelte-o3arzk .h3.svelte-o3arzk{font-size:2rem}}.loc-gallery__cwrapper.svelte-o3arzk a{color:#00ADEE;text-decoration:none}.categories.svelte-o3arzk.svelte-o3arzk{margin-top:0}.categories.svelte-o3arzk h2.svelte-o3arzk{margin-bottom:2rem}.categories.svelte-o3arzk .view-all.svelte-o3arzk{margin-bottom:2rem}.categories.svelte-o3arzk .view-all span.svelte-o3arzk{color:#263A63}.categories.svelte-o3arzk .view-all span.svelte-o3arzk:hover{cursor:pointer}.categories__tabs__heading.svelte-o3arzk ul.svelte-o3arzk{display:flex;margin-bottom:2rem;padding-left:0}@media(max-width: 575px){.categories__tabs__heading.svelte-o3arzk ul.svelte-o3arzk{flex-wrap:nowrap;padding:1rem 0}}@media(max-width: 767px){.categories__tabs__heading.svelte-o3arzk ul.svelte-o3arzk{overflow-x:scroll}}.categories__tabs__heading.svelte-o3arzk ul li.svelte-o3arzk{list-style:none;width:25%;border-right:3px solid #D8D7D7}@media(max-width: 767px){.categories__tabs__heading.svelte-o3arzk ul li.svelte-o3arzk{width:10rem;padding:0 1rem}}.categories__tabs__heading.svelte-o3arzk ul li.svelte-o3arzk:last-child{border:none}.categories__tabs__heading.svelte-o3arzk ul li span.svelte-o3arzk{font-family:"Times New Roman", sans-serif;font-size:2rem;color:#D8D7D7;text-transform:uppercase;margin-bottom:2em;font-weight:500;cursor:pointer}@media(max-width: 1199px){.categories__tabs__heading.svelte-o3arzk ul li span.svelte-o3arzk{font-size:1.2rem}}.categories__tabs__heading.svelte-o3arzk ul li span.active.svelte-o3arzk{color:#263A63;border-bottom-color:#263A63}.tnr.svelte-o3arzk.svelte-o3arzk{background-image:var(--tp-banner);height:40vw;display:flex;flex-wrap:wrap;align-items:center;background-position:center;background-size:cover;position:relative}@media(max-width: 767px){.tnr.svelte-o3arzk.svelte-o3arzk{height:80vh;align-items:end;padding-bottom:2rem}}.tnr.svelte-o3arzk.svelte-o3arzk::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:1}.tnr.svelte-o3arzk .tnr__wrapper.svelte-o3arzk{z-index:2;position:relative;color:#fff}.tnr.svelte-o3arzk .tnr__wrapper span.svelte-o3arzk{font-size:1.5rem}.tnr.svelte-o3arzk .tnr__wrapper h2.svelte-o3arzk{font-family:"Raleway", open sans;margin:1rem 0 2rem;text-transform:uppercase;font-size:2.688rem}@media(max-width: 767px){.tnr.svelte-o3arzk .tnr__wrapper h2.svelte-o3arzk{font-size:2rem}}.featured-projects.svelte-o3arzk.svelte-o3arzk{margin:10rem 0;overflow:hidden}@media(max-width: 767px){.featured-projects.svelte-o3arzk.svelte-o3arzk{margin:0}}.reputation.svelte-o3arzk.svelte-o3arzk{margin:7rem 0 3.75rem}@media(max-width: 767px){.reputation.svelte-o3arzk.svelte-o3arzk{margin:0;padding:1.5rem 0}}.reputation__content.svelte-o3arzk.svelte-o3arzk{height:35vw;display:flex;align-items:center;position:relative}@media(max-width: 767px){.reputation__content.svelte-o3arzk.svelte-o3arzk{height:auto}}.reputation__content.svelte-o3arzk.svelte-o3arzk:after{position:absolute;background:#E5EEF2;width:130%;top:5%;content:"";height:90%}@media(max-width: 1599px){.reputation__content.svelte-o3arzk.svelte-o3arzk:after{top:0;height:100%}}@media(max-width: 767px){.reputation__content.svelte-o3arzk.svelte-o3arzk:after{width:100vw;top:-5vh;margin-left:calc(50% - 50vw);height:160%}}.reputation__content__wrapper.svelte-o3arzk.svelte-o3arzk{max-width:38rem;z-index:2;padding-left:10rem}@media(max-width: 1199px){.reputation__content__wrapper.svelte-o3arzk.svelte-o3arzk{padding-left:5rem}}@media(max-width: 767px){.reputation__content__wrapper.svelte-o3arzk.svelte-o3arzk{padding-left:0;margin-bottom:2rem}}.reputation__content__wrapper.svelte-o3arzk span.svelte-o3arzk{color:#00ADEE;margin-bottom:1rem;font-weight:500}.reputation__content__wrapper.svelte-o3arzk h2.svelte-o3arzk{margin:1rem 0 2rem;line-height:4rem}.reputation__content__wrapper.svelte-o3arzk p.svelte-o3arzk{line-height:2rem;margin-bottom:2rem}@media(max-width: 767px){.reputation__content__wrapper.svelte-o3arzk .btn.svelte-o3arzk{margin:0 auto;display:inherit}}.reputation.svelte-o3arzk img.svelte-o3arzk{position:relative;z-index:5}.process.svelte-o3arzk.svelte-o3arzk{margin:7rem 0}.process__top-image.svelte-o3arzk.svelte-o3arzk{text-align:right;margin-bottom:-3rem}@media(max-width: 767px){.process__top-image.svelte-o3arzk.svelte-o3arzk{text-align:left;margin-bottom:0}}.process__top-image.svelte-o3arzk img.svelte-o3arzk{max-width:25rem}@media(max-width: 767px){.process__top-image.svelte-o3arzk img.svelte-o3arzk{max-width:70vw}}.process__content.svelte-o3arzk.svelte-o3arzk{height:40vw;display:flex;align-items:center;position:relative}@media(max-width: 991px){.process__content.svelte-o3arzk.svelte-o3arzk{height:50vw}}@media(max-width: 768px){.process__content.svelte-o3arzk.svelte-o3arzk{height:55vw}}@media(max-width: 767px){.process__content.svelte-o3arzk.svelte-o3arzk{height:auto;margin-top:3rem}}.process__content.svelte-o3arzk.svelte-o3arzk:after{position:absolute;background:#F2F2F2;width:130%;content:"";height:100%}@media(max-width: 767px){.process__content.svelte-o3arzk.svelte-o3arzk:after{width:100vw;margin-left:calc(50% - 50vw);height:150%}}.process__content__wrapper.svelte-o3arzk.svelte-o3arzk{max-width:40rem;z-index:2;padding-left:4rem}@media(max-width: 767px){.process__content__wrapper.svelte-o3arzk.svelte-o3arzk{padding-left:0}}.process__content__wrapper.svelte-o3arzk span.svelte-o3arzk{color:#00ADEE;margin-bottom:1rem;font-weight:500}.process__content__wrapper.svelte-o3arzk h2.svelte-o3arzk{margin:1rem 0 2rem;line-height:4rem}@media(max-width: 767px){.process__content__wrapper.svelte-o3arzk .btn.svelte-o3arzk{display:inherit;margin:3rem auto}}@media(max-width: 767px){.process__bottom.svelte-o3arzk.svelte-o3arzk{text-align:right}}@media(max-width: 767px){.process__bottom.svelte-o3arzk img.svelte-o3arzk{max-width:70vw}}.process.svelte-o3arzk img.svelte-o3arzk{position:relative;z-index:5}.story.svelte-o3arzk.svelte-o3arzk{margin:7rem 0 3.75rem}.story__content.svelte-o3arzk.svelte-o3arzk{height:35vw;display:flex;align-items:center;position:relative}@media(max-width: 767px){.story__content.svelte-o3arzk.svelte-o3arzk{height:auto}}.story__content.svelte-o3arzk.svelte-o3arzk:after{position:absolute;background:#E5EEF2;width:130%;content:"";height:100%}@media(max-width: 767px){.story__content.svelte-o3arzk.svelte-o3arzk:after{top:-10vw;width:100vw;margin-left:calc(50% - 50vw);height:160%}}.story__content__wrapper.svelte-o3arzk.svelte-o3arzk{max-width:43rem;z-index:2;padding-left:4rem}@media(max-width: 767px){.story__content__wrapper.svelte-o3arzk.svelte-o3arzk{padding:0}}.story__content__wrapper.svelte-o3arzk span.svelte-o3arzk{color:#00ADEE;margin-bottom:1rem;font-weight:500}.story__content__wrapper.svelte-o3arzk h2.svelte-o3arzk{margin:1rem 0 2rem}.story__content__wrapper.svelte-o3arzk p{line-height:2rem;margin-bottom:2rem}.story__content__wrapper.svelte-o3arzk .accordion span.svelte-o3arzk{font-family:"Raleway";font-style:normal;font-weight:600;font-size:2rem;color:#ACA7A7;margin-right:1rem}.story.svelte-o3arzk img.svelte-o3arzk{position:relative;z-index:5}.section--bannerOnly.svelte-o3arzk.svelte-o3arzk{background-image:var(--lrbg);background-size:cover;height:90vh;width:90vw;margin:0 auto 3.75rem auto}@media(max-width: 768px){.section--bannerOnly.svelte-o3arzk.svelte-o3arzk{height:40vh}}@media(max-width: 767px){.section--bannerOnly.svelte-o3arzk.svelte-o3arzk{height:40vh}}@media(max-width: 767px){section.m-0.svelte-o3arzk.svelte-o3arzk{padding-left:0;padding-right:0}}',map:null},g="https://strapi.ulfbuilt.com:1337",J=L$1((t,o,s,k)=>{let{data:l}=o;const e=l.data.attributes;let v=3,n=e.categories.data[0].id;return console.log(e),o.data===void 0&&s.data&&l!==void 0&&s.data(l),t.css.add(L),`
${t.head+=`<!-- HEAD_svelte-1byjgrp_START -->${t.title=`<title>${d(e.title)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1byjgrp_END -->`,""}

${z(u,"PageBanner").$$render(t,{title:e.topBanner.heading,subTitle:e.topBanner.paragraph,banner:g+e.topBanner.background.data.attributes.formats.large.url,bannerMobile:g+e.topBanner.background.data.attributes.formats.medium.url,extraClass:"homebanner"},{},{})}

<section class="loc-gallery svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{xs:"12",class:"pb-4"},{},{default:()=>`<h2 class="svelte-o3arzk">${d(e.homeBuilderHeading)}</h2>`})}
				${z(R$1,"Col").$$render(t,{xs:"12",md:{size:6,offset:3}},{},{default:()=>`<div class="loc-gallery__cwrapper svelte-o3arzk"><div class="h3 svelte-o3arzk"><!-- HTML_TAG_START -->${e.homeBuilderSubHeading}<!-- HTML_TAG_END --></div>
						<div><!-- HTML_TAG_START -->${e.homeBuilderParagraph}<!-- HTML_TAG_END --></div></div>`})}`})}`})}`})}</section>	



${z(a,"Animate").$$render(t,{},{},{default:()=>`<section class="section--bannerOnly svelte-o3arzk" style="${"--lrbg: url("+d(g,!0)+d(e.homeBuilderBanner.data.attributes.formats.large.url,!0)+")"}"></section>`})}

<section class="categories svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{class:"text-center"},{},{default:()=>`<h2 class="svelte-o3arzk">${d(e.categoryGalleryTabHeading)}</h2>
					<div class="categories__tabs"><div class="categories__tabs__heading svelte-o3arzk"><ul class="svelte-o3arzk">${N(e.categories.data,p=>`<li class="svelte-o3arzk">
										<span${P$1("data-category",p.id,0)} class="${["svelte-o3arzk",n===p.id?"active":""].join(" ").trim()}">${d(p.attributes.Title)}</span>
									</li>`)}</ul></div>
						<p class="text-center view-all svelte-o3arzk"><span class="svelte-o3arzk">View All Projects</span></p>					
						<div class="categories__tabs__gallery"><div id="modern" class="masonry__tabs__gallery__imgs"${P$1("data-test",n,0)}>${z(G,"MasonryCardGrid").$$render(t,{id:n,propCount:v},{},{})}</div></div></div>`})}`})}`})}`})}</section>



<section class="featured-projects svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`<div>${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(E,"Carousel").$$render(t,{preHeading:e.featuredProjectsPreHeading,heading:e.featuredProjectsHeading,btnTitle:e.featurePropertyBtnTitle,btnUrl:e.featuredPropertyBtnUrl,featuredProjects:e.featuredProjects},{},{})}`})}`})}</div>`})}</section>


<section class="tnr svelte-o3arzk" style="${"--tp-banner: url("+d(g,!0)+d(e.midBanner.background.data.attributes.formats.large.url,!0)+")"}">${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{},{},{default:()=>`${z(a,"Animate").$$render(t,{},{},{default:()=>`<div class="tnr__wrapper svelte-o3arzk"><div class="tnr__wrapper__captions"><span class="svelte-o3arzk">${d(e.midBanner.paragraph)}</span>
							<h2 class="svelte-o3arzk">${d(e.midBanner.heading)}</h2>
							<a${P$1("href",e.midBanner.btnUrl,0)} class="btn btn-secondary">${d(e.midBanner.btnTitle)}</a></div></div>`})}`})}`})}`})}</section>



<section class="reputation svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{md:"8",class:""},{},{default:()=>`<div class="reputation__content svelte-o3arzk"><div class="reputation__content__wrapper svelte-o3arzk"><span class="svelte-o3arzk">${d(e.reputation.preHeading)}</span>
							<h2 class="svelte-o3arzk">${d(e.reputation.heading)}</h2>
							<p class="svelte-o3arzk"><!-- HTML_TAG_START -->${e.reputation.content}<!-- HTML_TAG_END --></p>
							<a${P$1("href",e.reputation.btnUrl,0)} class="btn btn-secondary svelte-o3arzk">${d(e.reputation.btnTitle)}</a></div></div>`})}
				${z(R$1,"Col").$$render(t,{md:"4",class:"my-auto"},{},{default:()=>`<img src="${d(g,!0)+d(e.reputation.image.data.attributes.formats.large.url,!0)}"${P$1("alt",e.reputation.image.data.attributes.alternativeText,0)} class="svelte-o3arzk">`})}`})}`})}`})}</section>

<section class="process svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{md:"6"},{},{default:()=>`<div class="process__top-image svelte-o3arzk"><img src="${d(g,!0)+d(e.ourProcessTopImage.data[0].attributes.formats.large.url,!0)}"${P$1("alt",e.ourProcessTopImage.data[0].attributes.alternativeText,0)} class="svelte-o3arzk"></div>`})}`})}
			${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{md:"8",class:""},{},{default:()=>`<div class="process__content svelte-o3arzk"><div class="process__content__wrapper svelte-o3arzk"><span class="svelte-o3arzk">${d(e.ourProcessPreHeading)}</span>
							<h2 class="svelte-o3arzk">${d(e.ourProcessHeading)}</h2>
							<!-- HTML_TAG_START -->${e.ourProcessParagraph}<!-- HTML_TAG_END -->
							<a${P$1("href",e.ourProcessButtonUrl,0)} class="btn btn-secondary svelte-o3arzk">${d(e.ourProcessButtonTitle)}</a></div></div>`})}
				${z(R$1,"Col").$$render(t,{md:"4",class:"my-auto "},{},{default:()=>`<div class="process__bottom svelte-o3arzk"><img src="${d(g,!0)+d(e.ourProcessRightImage.data.attributes.formats.large.url,!0)}"${P$1("alt",e.ourProcessRightImage.data.attributes.alternativeText,0)} class="svelte-o3arzk"></div>`})}`})}`})}`})}</section>


<section class="story svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`${z(E$1,"Container").$$render(t,{},{},{default:()=>`${z(M$1,"Row").$$render(t,{},{},{default:()=>`${z(R$1,"Col").$$render(t,{md:"8",class:""},{},{default:()=>`<div class="story__content svelte-o3arzk"><div class="story__content__wrapper svelte-o3arzk"><span class="svelte-o3arzk">${d(e.ourStoryPreHeading)}</span>
							<h2 class="svelte-o3arzk">${d(e.ourStoryHeading)}</h2>
							<!-- HTML_TAG_START -->${e.ourStoryParagraph}<!-- HTML_TAG_END -->
							
							</div></div>`})}
				${z(R$1,"Col").$$render(t,{md:"4",class:"my-auto"},{},{default:()=>`<img src="${d(g,!0)+d(e.ourStoryRightImage.data.attributes.formats.large.url,!0)}"${P$1("alt",e.ourStoryRightImage.data.attributes.alternativeText,0)} class="svelte-o3arzk">`})}`})}`})}`})}</section>

<section class="m-0 svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`<div>${z(E$2,"ArticleSection").$$render(t,{},{},{})}</div>`})}</section>

<section class="m-0 svelte-o3arzk">${z(a,"Animate").$$render(t,{},{},{default:()=>`<div>${z(y,"Cta").$$render(t,{},{},{})}</div>`})}
</section>`});

export { J as default };
//# sourceMappingURL=_page.svelte-6a8cad04.js.map
