import { c as create_ssr_component, e as escape, v as validate_component } from './index3-802fbda3.js';
import { I as ImageSlider } from './ImageSlider-23efeeb9.js';
import './index2-1a921d2a.js';

const css = {
  code: ".about-1.svelte-4pwjr2.svelte-4pwjr2{min-height:100vh;background-position:bottom;background-size:cover}.about-2.svelte-4pwjr2.svelte-4pwjr2{margin:100px auto}.about-2.svelte-4pwjr2 h1.svelte-4pwjr2,.about-2.svelte-4pwjr2 h3.svelte-4pwjr2{text-align:center}.about-3.svelte-4pwjr2.svelte-4pwjr2{margin:100px auto}.about-3.svelte-4pwjr2 p.svelte-4pwjr2{text-align:center}",
  map: null
};
let url = "https://strapi.ulfbuilt.com:1337/uploads/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let abouttitle = data.data.attributes.Title;
  let aboutimage = data.data.attributes.featuredimage.data.attributes.formats.medium.hash + data.data.attributes.featuredimage.data.attributes.ext;
  let abouttext = data.data.attributes.about;
  let aboutheading = data.data.attributes.AboutHeading;
  let aboutsubheading = data.data.attributes.Aboutsubheading;
  const images = [
    "https://source.unsplash.com/uFdRfAkM1DM",
    "https://source.unsplash.com/RQOABS5RH0M",
    "https://source.unsplash.com/YhPYgb8ZCBw",
    "https://source.unsplash.com/E5lK_COkD2E"
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-356b5t_START -->${$$result.title = `<title>${escape(abouttitle)} - changes</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-356b5t_END -->`, ""}

<div class="about-1 svelte-4pwjr2" style="${"background-image: url(" + escape(url + aboutimage, true) + ")"}"></div>
<div class="container about-2 svelte-4pwjr2">${validate_component(ImageSlider, "ImageSlider").$$render($$result, { images }, {}, {})}        
    <h1 class="svelte-4pwjr2">${escape(aboutheading)}</h1>
    <h3 class="svelte-4pwjr2">${escape(aboutsubheading)}</h3>
    <div class="two-columns"><!-- HTML_TAG_START -->${abouttext}<!-- HTML_TAG_END --></div></div>
<section class="about-3 svelte-4pwjr2"><p class="svelte-4pwjr2">Ready to make your dreams a reality? We invite you to connect with us and have a conversation about your project.</p>
    <p class="svelte-4pwjr2">Together we can build your dream home with the utmost care.</p>
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0a5ad832.js.map
