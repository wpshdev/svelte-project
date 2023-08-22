<script>
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach((section, index) => {
    const elements = section.querySelectorAll('.element');
    
    gsap.from(elements, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });
});


</script>

<div class="section">
    <div class="element element-1"></div>
    <!-- Other elements in this section -->
  </div>
  <div class="section">
    <div class="element element-2"></div>
    <!-- Other elements in this section -->
  </div>
  <div class="section">
    <div class="element element-3"></div>
    <!-- Other elements in this section -->
  </div>
  