import { L, d, z } from './index-87618b6e.js';
import { E } from './Row-0fc34542.js';
import { w } from './Cta-15fe5be2.js';
import { p } from './PageBanner-a513e250.js';
import 'axios';
import './Animate-8c22d91b.js';

const c={code:".content.svelte-1jfpxto p{line-height:1.7rem !important}.content.svelte-1jfpxto h3{padding-bottom:0.971rem}.content.svelte-1jfpxto img{height:1.2rem}",map:null},m="https://strapi.ulfbuilt.com:1337/",v=L((e,n,o,p$1)=>{let{data:t}=n;return console.log(t),n.data===void 0&&o.data&&t!==void 0&&o.data(t),e.css.add(c),`${e.head+=`<!-- HEAD_svelte-1ugnjr_START -->${e.title=`<title>${d(t.data.attributes.title)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`,""}
${z(p,"PageBanner").$$render(e,{title:t.data.attributes.title,subTitle:t.data.attributes.Subheading,banner:m+t.data.attributes.Cover.data.attributes.formats.large.url},{},{})}

<section class="content svelte-1jfpxto">${z(E,"Container").$$render(e,{class:"mw-1000 h-text"},{},{default:()=>`<h2 class="text-center mb-5">${d(t.data.attributes.Heading)}</h2>
        <!-- HTML_TAG_START -->${t.data.attributes.Content}<!-- HTML_TAG_END -->`})}</section>
${z(w,"Cta").$$render(e,{},{},{})}`});

export { v as default };
//# sourceMappingURL=_page.svelte-e2e9c124.js.map
