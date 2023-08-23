<script>
    import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
    import {ScrollSmoother} from "gsap/dist/ScrollSmoother";   
  
    onMount(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 10, 
        speed: 0.2, // speed for the whole page scrolling
      });

      // speed for the section display/scrolling

      smoother.effects(".section-fast", { lag: 0, speed: 3 });

      smoother.effects(".section-slow", { lag: 5 });

    });

  </script>
  
  <style>
    /* Add global styles for your layout here */
  </style>
  
  <div id="wrapper">
    <div id="content">
      <!-- Your common layout elements go here -->
      <slot />
    </div>
  </div>