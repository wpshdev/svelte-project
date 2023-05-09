<script>
import { onMount } from 'svelte';
import { Col } from "sveltestrap";
// import Flickity from "flickity";

let flickityInstance;
export let preHeading; 
export let heading; 
export let btnTitle;
export let btnUrl;
export let featuredProjects;

console.log(featuredProjects);
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
const domain = "https://strapi.ulfbuilt.com:1337"

let progressPercentage = 0;

function updateProgress(index) {
  const totalSlides = featuredProjects.data.length;
  let imageNum = totalSlides - index == 1 ? index  + 1 : index;
  progressPercentage = ((imageNum ) / totalSlides) * 100;
  console.log(imageNum);
}
</script>
<svelte:head>
    <!-- Flickity JavaScript -->
    <script src="flickity/flickity.pkgd.min.js"></script>    
    <!-- Flickity CSS -->
    <!-- <link rel="stylesheet" href="flickity/flickity.min.css" /> -->
</svelte:head>

  <Col md="3">
    <div class="slider-caption">
      <div class="slider-caption__heading">
        <span>{preHeading}</span>
        <h2>{@html heading}</h2>
      </div>
      <div class="progress-ring-container">
        <svg class="progress-ring" width="110" height="49">
          <rect class="progress-ring__bg" x="2" y="2" rx="25" ry="25" width="106" height="45" fill="white" />
          <rect class="progress-ring__border" x="2" y="2" width="106" height="45" rx="25" ry="25" fill="transparent" stroke-width="4" stroke="#00ADEE" stroke-dasharray="305" stroke-dashoffset="{305 * (1 - progressPercentage / 100)}" />
          <text class="progress-ring__arrow progress-ring__arrow--left" x="27" y="25" font-size="16" text-anchor="middle" dominant-baseline="central" on:click={() => { flickityInstance.previous(); updateProgress(flickityInstance.selectedIndex); }}>&larr;</text>
          <text class="progress-ring__arrow progress-ring__arrow--right" x="82" y="25" font-size="16" text-anchor="middle" dominant-baseline="central" on:click={() => { flickityInstance.next(); updateProgress(flickityInstance.selectedIndex); }}>&rarr;</text>
        </svg>
      </div>  
    </div>
  </Col>	
  <Col md=9>
    <div class="slider-container">
      {#each featuredProjects.data as project}
        <div class="slider-container__carousel-cell">
          <img src="{domain}{project.attributes.featuredImage.data.attributes.url}" alt="{project.attributes.featuredImage.data.attributes.alternativeText}" />
        </div>
      {/each}
    </div>
    <div class="slider-btn">
      <a href="{btnUrl}" class="btn btn-primary">{btnTitle}</a>
    </div>    
  </Col>

  
  

<style lang="scss">

.slider-caption{
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  &__heading{
    margin-bottom: 1rem;
    width: 100%;
    @include media-max(sm){
        text-align: center;
    }    
    span{
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: $primary-color;
    }
    h2{

    }
  }
}

.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;

  &__carousel-cell {
    width: 40%;
    @include media-max(sm){
      width: 80%;
    }      
    height: auto;
    padding: 0 0.5rem;
    box-sizing: border-box;
    height: 70vh;
    overflow: hidden;
    @include media-max(sm){
      height: 50vh;
    }     
    img {
      display: block;
      width: auto;
      object-fit: cover;
      height: 100%;
    }
  }
}
.slider-btn{
  margin: 2rem 5rem 0;
  text-align: right;
}

.progress-ring-container {
  margin-top: 1rem;
  position: relative;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: inline-block;
  border-radius: 2rem;  
}

.progress-ring {
  &__border {
    transition: stroke-dashoffset 0.5s ease-out;
  }

  &__arrow {
    font-family: Arial, sans-serif;
    cursor: pointer;
    user-select: none;

    &--left,
    &--right {
      // Add any common styles for left and right arrows here
    }

    &--left {
      // Add any specific styles for left arrow here
    }

    &--right {
      // Add any specific styles for right arrow here
    }
  }
}


</style>

  
  