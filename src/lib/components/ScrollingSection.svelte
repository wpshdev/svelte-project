<script>
    import { onMount } from 'svelte';
    import { TweenMax } from 'gsap';
  
    let section;

onMount(() => {
  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  const scrollTop = window.scrollY;
  const speedMultiplier = 1.2; // Adjust the speed as needed

  TweenMax.to(section, 0, { y: scrollTop * speedMultiplier });
}
  </script>
  
  <style>
    section {
      height: 100vh;
      padding-top: 10rem;
    }
  </style>
  <section bind:this={section}>
    <slot />
  </section>