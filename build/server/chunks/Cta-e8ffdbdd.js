import { L, C as C$1, b, d, z, P } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import e from 'axios';

const h={code:".home-cta.svelte-1xsksj2.svelte-1xsksj2{margin:0;background-image:var(--cta-banner);background-size:cover}.home-cta__container.svelte-1xsksj2.svelte-1xsksj2{height:70vh;width:100%;display:flex;align-items:center;justify-content:center}.home-cta.svelte-1xsksj2 h2.svelte-1xsksj2{color:#000;margin-bottom:2rem}@media(max-width: 767px){.home-cta.svelte-1xsksj2 h2.svelte-1xsksj2{font-size:2rem}}.home-cta.svelte-1xsksj2 .btn.svelte-1xsksj2{margin-top:1rem;color:#fff}",map:null},v="https://strapi.ulfbuilt.com:1337",C=L((s,x,g,k)=>{let o=c();async function c(){const t="https://strapi.ulfbuilt.com:1337/api/global-cta?populate=deep,2",e$1={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};try{return (await e.get(t,{headers:e$1})).data.data.attributes}catch(n){console.error("Error fetching data:",n);}}return s.css.add(h),`${function(t){return C$1(t)?(t.then(null,b),`
`):function(e){return ` 
	<section class="home-cta svelte-1xsksj2" style="${"--cta-banner: url("+d(v,!0)+d(e.backgroundImage.data.attributes.url,!0)+")"}">${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{class:"text-center"},{},{default:()=>`<div class="home-cta__container svelte-1xsksj2"><div class="home-cta__wrapper"><h2 class="svelte-1xsksj2">${d(e.heading)}</h2>
							<!-- HTML_TAG_START -->${e.paragraph}<!-- HTML_TAG_END -->
							<a${P("href",e.btnUrl,0)} class="btn btn-secondary svelte-1xsksj2">${d(e.btnTitle)}</a></div></div>`})}`})}`})}</section>	
`}(t)}(o)}`});

export { C };
//# sourceMappingURL=Cta-e8ffdbdd.js.map
