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

    let translateY = -300; // Initial translation value
    const defaultTranslationSpeed = 5;

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

<style>
  .container-div {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .target {
    width: 100%;
    height: 150%;
    margin-left: 0;
    margin-top: 0px;
    background-position: center;
    background-size: cover !important;
  }
</style>

<div class="container-div">
  <div class="target" bind:this={target} style="background:url({imageUrl})"></div>
</div>