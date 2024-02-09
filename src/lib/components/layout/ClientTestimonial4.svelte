<script>
	import { textAnimate } from '$lib/GsapAnimation';
	import { onMount } from 'svelte';
	import { Container } from 'sveltestrap';
	
    export let clientTestimonials;
    export let testimonialHeading;

    import emblaCarouselSvelte from 'embla-carousel-svelte'
  let emblaApi
  let options = { loop: true }
  
  function handlePrevClick() {
    if (emblaApi && emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
    }
  }

  function handleNextClick() {
    if (emblaApi && emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    }
  }
  function onInit(event) {
    emblaApi = event.detail
    console.log(emblaApi.slideNodes()) // Access API
  }
	
</script>
<section class="our_client_say">
    <h2 class="text-animate secondary-font" in:textAnimate id="testimonial-heading" gsap-duration="1" >{testimonialHeading ? testimonialHeading : 'Our Clients say...'}</h2>
<Container>
    <div class="embla"
    use:emblaCarouselSvelte="{{ options }}"
    on:emblaInit="{onInit}">
    <div class="embla__container">
    {#each clientTestimonials as testimonial}
    <div class="slider embla__slide">
        <p>{testimonial.attributes.testimonialText ? testimonial.attributes.testimonialText.replace(/(<([^>]+)>)/gi, "") : ''}</p>
        <h3>{testimonial.attributes.Name ? testimonial.attributes.Name : ''}</h3>
    </div>
    {/each}
    </div>
</div>
</Container>

</section>

<style lang="scss">
    .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 80%;
    min-width: 0;
    @include media-max(ipadmini){
      flex: 0 0 50%;
    }
    @include media-max(sm){
      flex: 0 0 100%;
    }
  }
    :global(#clientSays){
        background:  linear-gradient(180deg, rgba(255, 255, 255, 0) -40.92%, rgba(239, 239, 240, 0.83) 36.13%, #FFFFFF 76.97%, rgba(255, 255, 255, 0) 137.31%);
    }
    .siema{
        overflow: visible !important;
    }
    .our_client_say{
    mix-blend-mode: normal;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;
    @include media-max(ipadmini){
        padding: 5rem 0 0;
    }
    h2 {
        color: $secondary-color;
        text-align: center;
        justify-content: center;
        margin-bottom: 5rem;
    }
    &__cards {
        margin-top: 4rem;
    }
}

.slider {
            background: $white-color;
            border: 1px solid $darkgray;
            border-radius: 8px;
            padding: 6vw 8vw;
            margin: 0 2vw;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction: column;
            p {
                font-size: 1.25rem;
                line-height: 2.125rem;
                font-feature-settings: 'pnum' on, 'lnum' on;
                font-weight: 400;
                color: $darkergray;
                margin-bottom: 3rem;
            }

            h3 {
                font-family: $primary-font;
                text-align: right;
                font-size: 2.125rem;
                letter-spacing: 0.05em;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: $darkergray;
                @include media-max(xs){
                    font-size: 1.438rem;
                }
            }

        }
</style>