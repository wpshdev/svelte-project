import { L, d, z } from './index2-8ecb42f0.js';
import { E } from './Row-a840427f.js';
import { y } from './Cta-f1a2fc95.js';
import { u } from './PageBanner-99b6c060.js';
import 'axios';

const c={code:".banner:after{opacity:0}.content.svelte-1632ddw p{line-height:1.7rem !important}.content.svelte-1632ddw h3{padding-bottom:0.971rem}.content.svelte-1632ddw img{height:1.2rem}",map:null},m="https://strapi.ulfbuilt.com:1337/",v=L((e,n,s,_)=>{let{data:t}=n;return console.log(t),n.data===void 0&&s.data&&t!==void 0&&s.data(t),e.css.add(c),`${e.head+=`<!-- HEAD_svelte-1ugnjr_START -->${e.title=`<title>${d(t.data.attributes.title)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`,""}
${z(u,"PageBanner").$$render(e,{title:t.data.attributes.title,subTitle:t.data.attributes.Subheading,banner:m+t.data.attributes.Cover.data.attributes.url},{},{})}

<section class="content svelte-1632ddw">${z(E,"Container").$$render(e,{class:"mw-1000 h-text"},{},{default:()=>`<h2 class="text-center mb-5">${d(t.data.attributes.Heading)}</h2>
        <!-- HTML_TAG_START -->${t.data.attributes.Content}<!-- HTML_TAG_END -->`})}</section>
${z(y,"Cta").$$render(e,{},{},{})}`});

export { v as default };
//# sourceMappingURL=_page.svelte-e16c3745.js.map
