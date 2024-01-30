<script>
    import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
    import {ScrollSmoother} from "gsap/dist/ScrollSmoother"; 
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin"; 
    let smoothValue;
    let smoothTouchValue;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    
    onMount(() => {

      if(window.innerWidth <= 768) {
        smoothValue = 0;
        console.log("mobile");
        smoothTouchValue = 0;
      } else {
        smoothValue = 2;
        console.log("desktop");
        smoothTouchValue = 1.5;
      }
      window.addEventListener('resize', () => {
        if(window.innerWidth <= 768) {
          smoothValue = 0;
          smoothTouchValue = 0;
        } else {
          smoothValue = 2;
          smoothTouchValue = 1.5;
        }
      });

      const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: smoothValue,
        effects: true,
        normalizeScroll: true,
        smoothTouch: smoothTouchValue,
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