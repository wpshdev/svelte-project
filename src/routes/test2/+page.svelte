<script>
  import { onMount } from "svelte";

  let section;
  let isInViewport = false;
  let isAboveViewport = false;
  let isBelowViewport = false;

  onMount(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1], // Trigger at the top and bottom of the section
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(section);
  });

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isInViewport = true;
        isAboveViewport = false;
        isBelowViewport = false;
      } else if (entry.boundingClientRect.top >= 0) {
        isAboveViewport = false;
        isBelowViewport = true;
        isInViewport = false;
      } else if (entry.boundingClientRect.bottom <= window.innerHeight) {
        isAboveViewport = true;
        isBelowViewport = false;
        isInViewport = false;
      } else {
        isAboveViewport = false;
        isBelowViewport = false;
        isInViewport = false;
      }
    });
  }
</script>
<section style="height: 100vh; background-color: yellow;"></section>
<section bind:this={section} style="height: 100vh; background-color: #f0f0f0;">
  <!-- Your section content goes here -->
</section>
<section style="height: 100vh; background-color: lightblue;"></section>
<div style="position:fixed;bottom:0px;right:0px;">
<p>Is in viewport: {isInViewport ? "Yes" : "No"}</p>
<p>Is above viewport: {isAboveViewport ? "Yes" : "No"}</p>
<p>Is below viewport: {isBelowViewport ? "Yes" : "No"}</p>
</div>
<style>
  section {
    transition: transform 0.5s ease;
  }
</style>