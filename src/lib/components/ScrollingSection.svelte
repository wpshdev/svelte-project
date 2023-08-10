<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let section;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    const scrollTop = window.scrollY;
    const speedMultiplier = 1.5; // Adjust the speed as needed

    gsap.to(section, { duration: 0.1, y: scrollTop * speedMultiplier });
  }
</script>

<section bind:this={section}>
  <slot />
</section>
