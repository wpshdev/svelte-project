<script>
    import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
    import {ScrollSmoother} from "gsap/dist/ScrollSmoother"; 
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin"; 
    let smoothValue;
    let smoothTouchValue;
    import { isMobileDevice, isTabletDevice, isDesktopDevice } from '$lib/deviceUtils.ts';

console.log('Is mobile device:', isMobileDevice());
console.log('Is tablet device:', isTabletDevice());
console.log('Is desktop device:', isDesktopDevice());

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
    
    onMount(() => {



// Function to handle scroll events
function handleScroll() {
    const scrollX = window.scrollX || window.pageXOffset; // Horizontal scroll position
    const scrollY = window.scrollY || window.pageYOffset; // Vertical scroll position

    console.log("Scroll X:", scrollX);
    console.log("Scroll Y:", scrollY);
}

// Function to handle touch events
function handleTouchMove(event) {
    const touchX = event.touches[0].clientX; // Horizontal touch position
    const touchY = event.touches[0].clientY; // Vertical touch position

    console.log("Touch X:", touchX);
    console.log("Touch Y:", touchY);
}

// Add event listeners for scroll and touchmove events
window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleTouchMove);



      if(isMobileDevice() == true) {
        smoothValue = 0.5;
        smoothTouchValue = 0.5;
      } else {
        smoothValue = 2;
        smoothTouchValue = 1.5;
      }
      window.addEventListener('resize', () => {
        if(isMobileDevice() == true) {
          smoothValue = 0.5;
          smoothTouchValue = 0.5;
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