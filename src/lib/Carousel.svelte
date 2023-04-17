<script>
import { onMount } from 'svelte';
// import Flickity from 'flickity/flickity.pkgd.min.js';

let flickityInstance;
export let images = [];

onMount(() => {
  flickityInstance = new Flickity('.slider-container', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: false,
    groupCells: 1,
    draggable: true,
    on: {
      change: updateProgress,
    },
  });
});

let progressPercentage = 0;

function updateProgress(index) {
  const totalSlides = images.length;
  let imageNum = totalSlides - index == 1 ? index  + 1 : index;
  progressPercentage = ((imageNum ) / totalSlides) * 100;
  console.log(imageNum);
}
</script>
<svelte:head>
    <!-- Flickity JavaScript -->
    <script src="flickity/flickity.pkgd.min.js"></script>    
    <!-- Flickity CSS -->
    <link rel="stylesheet" href="flickity/flickity.min.css" />
</svelte:head>
  
  <div class="slider-container">
    {#each images as image}
      <div class="carousel-cell">
        <img src={image} alt="Slider image" />
      </div>
    {/each}   
  </div>
  <div class="progress-ring-container">
    <svg class="progress-ring" width="110" height="54">
      <rect class="progress-ring__bg" x="2" y="2" rx="25" ry="25" width="106" height="50" fill="white" />
      <rect class="progress-ring-border" x="2" y="2" width="106" height="50" rx="25" ry="25" fill="transparent" stroke-width="4" stroke="red" stroke-dasharray="305" stroke-dashoffset="{305 * (1 - progressPercentage / 100)}" />
      <text class="arrow arrow-left" x="27" y="27" font-size="18" text-anchor="middle" dominant-baseline="central" on:click={() => { flickityInstance.previous(); updateProgress(flickityInstance.selectedIndex); }}>&larr;</text>
      <text class="arrow arrow-right" x="82" y="27" font-size="18" text-anchor="middle" dominant-baseline="central" on:click={() => { flickityInstance.next(); updateProgress(flickityInstance.selectedIndex); }}>&rarr;</text>
    </svg>
  </div>
  
  

<style>
    .slider-container {
      width: 100%;
      overflow: hidden;
      position: relative;
    }
  
    .slider-container .carousel-cell {
      width: 33%;
      height: auto;
      padding: 0 2rem;
      box-sizing: border-box;
    }
  
    .slider-container .carousel-cell img {
      display: block;
      width: 100%;
      height: auto;
    }

    .progress-ring-container {
        position: relative;
        bottom: 10px;
        left: 10px;
        z-index: 1;
    }
    .progress-ring-border {
        transition: stroke-dashoffset 0.5s ease-out;
    }    

    .arrow {
    font-family: Arial, sans-serif;
    cursor: pointer;
    user-select: none;
    }
</style>

  
  