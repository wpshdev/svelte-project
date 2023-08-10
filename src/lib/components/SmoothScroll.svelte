<script>
    import { onMount } from 'svelte';
    import LocomotiveScroll from 'locomotive-scroll';
  
    onMount(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: 0.04, // Enable smooth scrolling
            lerp: 0.04,
        });
    });
  </script>
  
  <style>
    /* Add any necessary styles */
  </style>
  