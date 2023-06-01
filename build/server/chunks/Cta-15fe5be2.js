import { L, C, b, d, z, P } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import e from 'axios';

const h={code:".home-cta.svelte-ogsb9l.svelte-ogsb9l{margin:0;background-image:var(--cta-banner);background-size:cover}@media(max-width: 767px){.home-cta.svelte-ogsb9l.svelte-ogsb9l{padding-left:0;padding-right:0}}.home-cta__container.svelte-ogsb9l.svelte-ogsb9l{height:70vh;width:100%;display:flex;align-items:center;justify-content:center}.home-cta.svelte-ogsb9l h2.svelte-ogsb9l{color:#000;margin-bottom:2rem}@media(max-width: 767px){.home-cta.svelte-ogsb9l h2.svelte-ogsb9l{font-size:2rem}}.home-cta.svelte-ogsb9l .btn.svelte-ogsb9l{margin-top:1rem;color:#fff}",map:null},u="https://strapi.ulfbuilt.com:1337",w=L((a,v,_,$)=>{let n=c();async function c(){const t="https://strapi.ulfbuilt.com:1337/api/global-cta?populate=deep,2",e$1={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};try{return (await e.get(t,{headers:e$1})).data.data.attributes}catch(r){console.error("Error fetching data:",r);}}return a.css.add(h),`${function(t){return C(t)?(t.then(null,b),`
`):function(e){return ` 
	<section class="home-cta svelte-ogsb9l" style="${"--cta-banner: url("+d(u,!0)+d(e.backgroundImage.data.attributes.formats.large.url,!0)+")"}">${z(E,"Container").$$render(a,{},{},{default:()=>`${z(M,"Row").$$render(a,{},{},{default:()=>`${z(R,"Col").$$render(a,{class:"text-center"},{},{default:()=>`<div class="home-cta__container svelte-ogsb9l"><div class="home-cta__wrapper"><h2 class="svelte-ogsb9l">${d(e.heading)}</h2>
							<!-- HTML_TAG_START -->${e.paragraph}<!-- HTML_TAG_END -->
							<a${P("href",e.btnUrl,0)} class="btn btn-secondary svelte-ogsb9l">${d(e.btnTitle)}</a></div></div>`})}`})}`})}</section>	
`}(t)}(n)}`});

export { w };
//# sourceMappingURL=Cta-15fe5be2.js.map
