<script>
  import { onMount } from "svelte";

  let prevScrollY = window.scrollY;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY) {
      console.log("Scrolling Up");
      // You can perform actions for scrolling up here
    } else if (currentScrollY > prevScrollY) {
      console.log("Scrolling Down");
      // You can perform actions for scrolling down here
    }

    prevScrollY = currentScrollY;
  }
</script>

<section style="height: 200vh; background-color: #f0f0f0;">
  <!-- Your section content goes here -->
</section>

<style>
  section {
    transition: transform 0.5s ease;
  }
</style>
