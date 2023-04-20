import { c as create_ssr_component, f as subscribe, o as each, g as add_attribute } from './index3-802fbda3.js';
import { w as writable } from './index2-1a921d2a.js';

const css = {
  code: ".slider__container.svelte-1lb52om{position:relative;width:100%;max-width:100%;height:450px;display:flex;justify-content:center;align-items:center;overflow:hidden}.slider__image.svelte-1lb52om{width:100%;position:absolute}.slider__thumbnail-container.svelte-1lb52om{display:flex;justify-content:center;align-items:center;margin-top:10px}.slider__thumbnail.svelte-1lb52om{cursor:pointer;width:50px;height:50px;margin:0 5px;object-fit:cover}.slider__arrow.svelte-1lb52om{cursor:pointer;position:absolute;top:50%;transform:translateY(-50%);z-index:1;width:40px;height:40px;fill:#fff;opacity:0.7}.slider__arrow.svelte-1lb52om:hover{opacity:1}.slider__arrow--left.svelte-1lb52om{left:10px}.slider__arrow--right.svelte-1lb52om{right:10px}",
  map: null
};
let autoSlideInterval = 3e3;
const ImageSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeIndex, $$unsubscribe_activeIndex;
  let { images = [] } = $$props;
  let activeIndex = writable(0);
  $$unsubscribe_activeIndex = subscribe(activeIndex, (value) => $activeIndex = value);
  function nextImage() {
    activeIndex.update((currentIndex) => (currentIndex + 1) % images.length);
  }
  setInterval(nextImage, autoSlideInterval);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css);
  $$unsubscribe_activeIndex();
  return `<div class="slider__container svelte-1lb52om">${each(images, (image, index) => {
    return `${$activeIndex === index ? `<img${add_attribute("src", image, 0)} alt="" class="slider__image svelte-1lb52om">` : ``}`;
  })}
    <svg class="slider__arrow slider__arrow--left svelte-1lb52om" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
    <svg class="slider__arrow slider__arrow--right svelte-1lb52om" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></div>
    
  <div class="slider__thumbnail-container svelte-1lb52om"><svg class="slider__arrow slider__arrow--left svelte-1lb52om" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
    ${each(images, (image, index) => {
    return `<img${add_attribute("src", image, 0)} alt="" class="slider__thumbnail svelte-1lb52om">`;
  })}
    <svg class="slider__arrow slider__arrow--right svelte-1lb52om" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
  </div>`;
});

export { ImageSlider as I };
//# sourceMappingURL=ImageSlider-23efeeb9.js.map
