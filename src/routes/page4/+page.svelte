<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  let emblaApi
  let options = { loop: true }

  function onInit(event) {
    emblaApi = event.detail
    console.log(emblaApi.slideNodes()) // Access API
  }
</script>
<div style="min-height:200px;"></div>
<div class="embla"
use:emblaCarouselSvelte="{{ options }}"
on:emblaInit="{onInit}">
  <div class="embla__container">
    <div class="embla__slide">
      <img src="https://api.ulfbuilt.com/uploads/medium_Scandinavian_Modern_16_f6b5bfb465.webp" alt="test">
    </div>
    <div class="embla__slide">
        <img src="https://api.ulfbuilt.com/uploads/medium_Rustic_Mountain_Modern_Remodel_11_3e355f486a.webp" alt="test">
    </div>
    <div class="embla__slide">
        <img src="https://api.ulfbuilt.com/uploads/medium_Rustic_Caretaker_Loft_1_4176699eff.webp" alt="test">
    </div>
    <div class="embla__slide">
      <img src="https://api.ulfbuilt.com/uploads/medium_Scandinavian_Modern_16_f6b5bfb465.webp" alt="test">
    </div>
    <div class="embla__slide">
        <img src="https://api.ulfbuilt.com/uploads/medium_Rustic_Mountain_Modern_Remodel_11_3e355f486a.webp" alt="test">
    </div>
    <div class="embla__slide">
        <img src="https://api.ulfbuilt.com/uploads/medium_Rustic_Caretaker_Loft_1_4176699eff.webp" alt="test">
    </div>
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 300px;
    min-width: 0;
  }
  .embla img{
    height: 300px;
    object-fit: cover;
  }
</style>