<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import ScrollSmoother from 'gsap/ScrollSmoother';
    import {ScrollTrigger} from "gsap/ScrollTrigger";   
  
    onMount(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollSmoother.create({
        smooth: 1,
        effects: true, 
        smoothTouch: 0.1,
      });
    });
  </script>
  
  <style>
    /* Add global styles for your layout here */
  </style>
  
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <!-- Your common layout elements go here -->
      <slot />
    </div>
  </div>