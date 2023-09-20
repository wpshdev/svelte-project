<!-- ParallaxImage.svelte -->
<script>
  // Import Svelte dependencies
  import { onMount, onDestroy } from "svelte";
  import {gsap}  from "gsap/dist/gsap";        
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";  

  let parallaxImage;
  export let imageUrl;
  // Initialize GSAP and ScrollTrigger when the component is mounted
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxImage,
        start: "top bottom",
        end: "50vh",
        scrub: true,
      },
    });

    // Define the parallax animation
    tl.to(parallaxImage, {
      y: -200, // Adjust this value for the parallax effect intensity
      ease: "none", // Linear motion
    });

    // Initialize ScrollTrigger
    ScrollTrigger.create({
      trigger: parallaxImage,
      start: "top bottom",
      end: "bottom",
      markers: true,
      scrub: true,
      animation: tl,
    });

    // Cleanup when the component is destroyed
    onDestroy(() => {
      ScrollTrigger.remove(parallaxImage);
    });
  });
</script>

<style>
  /* Add your CSS styles here */
  .parallax-container {
    height: 100vh; /* Adjust to your preference */
    overflow: hidden;
    position: relative;
  }

  .parallax-img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<div class="parallax-container">
  <img
    src="{imageUrl}"
    alt="Parallax Image"
    class="parallax-img"
    bind:this={parallaxImage}
  />
</div>
