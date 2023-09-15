<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';

  export let imageUrl;
  export let scrollOffset;
  export let translationSpeed;

  let target;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    new ScrollTrigger({
      trigger: target,
      start: 'bottom - scrollOffset',
      end: 'bottom',
    });

    let translateY = -150; // Initial translation value
    const defaultTranslationSpeed = 100;

    gsap.to(target, {
      y: () => translateY,
      scrollTrigger: {
        // markers: true,
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          translateY = self.progress * window.innerHeight * (translationSpeed || defaultTranslationSpeed);
        },
      },
    });
  });
</script>

<style lang="scss">
  .container-div {
    width: 100%;
    height: 40vw;
    min-height: 40rem;
    overflow: hidden;
  }
  .target {
    width: 100%;
    height: 200%;
    margin-left: 0;
    margin-top: -100px;
    background-position: center !important;
    background-size: 130% !important;
    @include media-max(laptopS){
			background-size: cover !important;
		}	
  }
</style>

<div class="container-div">
  <div class="target" bind:this={target} style="background:url({imageUrl})">
  <slot>

  </slot>
</div>
</div>