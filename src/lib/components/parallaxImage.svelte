<!-- ParallaxImage.svelte -->
<script>
  // Import Svelte dependencies
  import { onMount, onDestroy } from "svelte";
  import {gsap}  from "gsap/dist/gsap";        
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";  

  let parallaxImage;
  let parallaxImageCont;
  export let imageUrl;
  export let imageHeight;
  // Initialize GSAP and ScrollTrigger when the component is mounted
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP timeline
    const tl = gsap.timeline();
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: parallaxImage,
    //     start: "top bottom",
    //     end: "50vh",
    //     scrub: true,
    //   },
    // });

    // Define the parallax animation
    tl.to(parallaxImage, {
      y: -350, // Adjust this value for the parallax effect intensity
      ease: "none", // Linear motion
    });

    // Initialize ScrollTrigger
    ScrollTrigger.create({
      trigger: parallaxImageCont,
      start: "top bottom",
      end: "bottom top",
      // markers: true,
      scrub: true,
      animation: tl,
    });

    // Cleanup when the component is destroyed
    // onDestroy(() => {
    //   ScrollTrigger.remove(parallaxImageCont);
    // });
    // Commented this one for the meantime since it has weird error when navigating back to home page: https://prnt.sc/ONovd8XX0B6-
  });
</script>


<div class="parallax-container" 
bind:this={parallaxImageCont}
style="--height: {imageHeight}vh">
  <img
    src="{imageUrl}"
    alt="Parallax Image"
    class="parallax-img"
    bind:this={parallaxImage}
  />
</div>


<style lang="scss">
  /* Add your CSS styles here */
  .parallax-container {
    overflow: hidden;
    height: var(--height);
    object-fit: cover;
    object-position: center;
    /* position: relative; */
    @include media-max(default){
      height: 60vh;
    }
    // @include media-max(sm){
    //   height: 100vh;
    // }
  }

  .parallax-img {
    width: 100%;
    height: auto;
    min-width: 1000px;
    position: absolute;
    top: 0;
    left: 0;

    @include media-max(default){
      width: 100%;
      // min-height: 100vh;
    }
    @include media-max(sm){
      left: 50%;
      margin-left: -500px;
    }
  }
</style>
