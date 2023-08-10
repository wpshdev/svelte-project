<script>
    import { onMount } from 'svelte';
    // import LocomotiveScroll from 'locomotive-scroll';
  
    onMount(() => {
        if (typeof window !== 'undefined') {
        import('locomotive-scroll').then((LocomotiveScrollModule) => {
            const LocomotiveScroll = LocomotiveScrollModule.default;
            const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
                smooth: 0.04, // Enable smooth scrolling
                lerp: 0.04,
            });
        });
        }

        // if (typeof window !== 'undefined') {
        //     const scroll = new LocomotiveScroll({
        //         el: document.querySelector('[data-scroll-container]'),
        //         smooth: 0.04, // Enable smooth scrolling
        //         lerp: 0.04,
        //     });
        // }
    });
  </script>
  
  <style>
    /* Add any necessary styles */
  </style>
  