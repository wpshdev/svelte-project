<script>
    import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
    import {ScrollSmoother} from "gsap/dist/ScrollSmoother"; 
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin"; 
    let smoothValue;
    
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    let isDesktop = false;
    onMount(() => {

      if(window.innerWidth <= 768) {
        smoothValue = 0;
      } else {
        smoothValue = 2;
      }
      window.addEventListener('resize', () => {
        if(window.innerWidth <= 768) {
          smoothValue = 0;
        } else {
          smoothValue = 2;
        }
      });

      const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: smoothValue,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 1.5,
      });
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