import { L, d, z } from './index-87618b6e.js';
import { E } from './Row-0fc34542.js';
import { C } from './Cta-e8ffdbdd.js';
import 'axios';

const l={code:"p{line-height:1.7rem !important}",map:null},c="https://strapi.ulfbuilt.com:1337/",v=L((a,s,r,u)=>{let{data:t}=s;return console.log(t),s.data===void 0&&r.data&&t!==void 0&&r.data(t),a.css.add(l),`${a.head+=`<!-- HEAD_svelte-1ugnjr_START -->${a.title=`<title>${d(t.data.attributes.title)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`,""}
<div class="cover" style="${"background-image: url("+d(c,!0)+d(t.data.attributes.Cover.data.attributes.formats.large.url,!0)+");"}"><h2>${d(t.data.attributes.title)}</h2>
    <p>${d(t.data.attributes.Subheading)}</p></div>
<section>${z(E,"Container").$$render(a,{class:"mw-1000"},{},{default:()=>`<h2 class="text-center mb-5">${d(t.data.attributes.Heading)}</h2>
        <!-- HTML_TAG_START -->${t.data.attributes.Content}<!-- HTML_TAG_END -->`})}</section>
${z(C,"Cta").$$render(a,{},{},{})}`});

export { v as default };
//# sourceMappingURL=_page.svelte-145d5a89.js.map
