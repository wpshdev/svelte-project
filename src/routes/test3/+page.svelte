<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';

  export let target;
  export let scrollOffset;
  export let image;
  
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Create a ScrollTrigger that will trigger when the `target` element enters or leaves the viewport.
    new ScrollTrigger({
      trigger: target,
      start: 'bottom - scrollOffset',
      end: 'bottom',

    });

    const sections = document.querySelectorAll('.target');
    sections.forEach((section, index) => {
      let translateY = -300; // Initial translation value
      const translationSpeed = 5; // Adjust the speed of the translation
      
      gsap.to(section, {
        y: () => translateY,
        scrollTrigger: {
          markers:true,
          trigger: section,
          start: 'top bottom', // Trigger animation when the top of the section reaches the bottom of the viewport
          end: 'bottom top',   // Trigger animation when the bottom of the section reaches the top of the viewport
          scrub: true,         // Smoothly animate the translation as the user scrolls
          onUpdate: (self) => {
            translateY = self.progress * window.innerHeight * translationSpeed; // Calculate the translation value with speed adjustment
          },
        },
      });
    });

    
  });
  </script>
  
  <style>
    .container{
      width: 30rem;
      height: 30rem;
      overflow: hidden;
      background-color: red;
    }
    .target{
      width:200%;
      height: 200%;
      margin-left: -15%;
      margin-top: -100px;
      background-position: center;
      background-size: cover;
    }
  </style>
  
  <div style="height:150vh;"></div>
  <div class="container">
    <div class="target" style="background-image: url('https://picsum.photos/2000/1000');">
    </div>
  </div>
  <div style="height:60vh;"></div>