import { L, C, E, d, z, P } from './index2-8ecb42f0.js';
import { E as E$1, M, R } from './Row-a840427f.js';
import o from 'axios';

const u={code:".home-cta.svelte-e3xt6s.svelte-e3xt6s{margin:0;background-image:var(--cta-banner);background-size:cover;min-height:20vh}@media(max-width: 767px){.home-cta.svelte-e3xt6s.svelte-e3xt6s{padding-left:0;padding-right:0}}.home-cta__container.svelte-e3xt6s.svelte-e3xt6s{height:70vh;width:100%;display:flex;align-items:center;justify-content:center}.home-cta__wrapper.svelte-e3xt6s h2.svelte-e3xt6s{color:#000;margin-bottom:2rem;font-size:2.5rem}@media(max-width: 767px){.home-cta__wrapper.svelte-e3xt6s h2.svelte-e3xt6s{font-size:3rem}}.home-cta__wrapper.svelte-e3xt6s p{font-size:1.25rem}.home-cta__wrapper.svelte-e3xt6s .btn.svelte-e3xt6s{margin-top:1rem;color:#fff;padding:0.7rem 3.125rem;font-size:1.25rem}",map:null},v="https://strapi.ulfbuilt.com:1337",y=L((a,x,_,g)=>{let o$1=c();async function c(){const t="https://strapi.ulfbuilt.com:1337/api/global-cta?populate=deep,2",e={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};try{return (await o.get(t,{headers:e})).data.data.attributes}catch(n){console.error("Error fetching data:",n);}}return a.css.add(u),`${function(t){return C(t)?(t.then(null,E),`
`):function(e){return ` 
	<section class="home-cta svelte-e3xt6s" style="${"--cta-banner: url("+d(v,!0)+d(e.backgroundImage.data.attributes.url,!0)+")"}">${z(E$1,"Container").$$render(a,{},{},{default:()=>`${z(M,"Row").$$render(a,{},{},{default:()=>`${z(R,"Col").$$render(a,{class:"text-center"},{},{default:()=>`<div class="home-cta__container svelte-e3xt6s"><div class="home-cta__wrapper svelte-e3xt6s"><h2 class="svelte-e3xt6s">${d(e.heading)}</h2>
							<!-- HTML_TAG_START -->${e.paragraph}<!-- HTML_TAG_END -->
							<a${P("href",e.btnUrl,0)} class="btn btn-secondary svelte-e3xt6s">${d(e.btnTitle)}</a></div></div>`})}`})}`})}</section>	
`}(t)}(o$1)}`});

export { y };
//# sourceMappingURL=Cta-f1a2fc95.js.map
