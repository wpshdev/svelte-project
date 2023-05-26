<script>
  import { afterUpdate, onMount, tick } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Col } from "sveltestrap";
	import { browser } from '$app/environment';

  gsap.registerPlugin(ScrollTrigger);

  async function initScrollAnimations() {
    const container = document.querySelector('.slider-container');

    ScrollTrigger.create({
      trigger: '.slider-container',
      start: 'top top',
      end: () => container.scrollWidth - window.innerWidth,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(container, {
          x: -container.scrollWidth * progress,
          duration: 0.01,
        });
      },
    });
  }

  onMount(async() => {
    await tick();
    initScrollAnimations();
  });



afterUpdate(() => {
  ScrollTrigger.refresh();
  // initScrollAnimations();
});
let innerWidth;

$: {
  if(innerWidth < 767){
    // initScrollAnimations();   
    ScrollTrigger.kill() 
  }
}

  export let images = [];
  let progressPercentage = 0;
  const domain = "https://strapi.ulfbuilt.com:1337";
 

</script>

<svelte:window 
	bind:innerWidth
  />
  {#if innerWidth > 768}
    <Col>
      <div class="slider-container">
        {#each images as image}
          <div class="slider-container__carousel-cell">
            <img src={domain}{image.attributes.url} alt="{image.attributes.alternativeText ? image.attributes.alternativeText : ''}" />         
            <a href="{domain}{image.attributes.url}" class="download" download>
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.501" cy="27.5" r="27.5" fill="#1E2D39"/>
                <path d="M28.501 16.5C28.501 15.9477 28.0533 15.5 27.501 15.5C26.9487 15.5 26.501 15.9477 26.501 16.5L28.501 16.5ZM26.7939 39.2071C27.1844 39.5976 27.8176 39.5976 28.2081 39.2071L34.572 32.8431C34.9626 32.4526 34.9626 31.8195 34.572 31.4289C34.1815 31.0384 33.5484 31.0384 33.1578 31.4289L27.501 37.0858L21.8441 31.4289C21.4536 31.0384 20.8204 31.0384 20.4299 31.4289C20.0394 31.8195 20.0394 32.4526 20.4299 32.8431L26.7939 39.2071ZM26.501 16.5L26.501 38.5L28.501 38.5L28.501 16.5L26.501 16.5Z" fill="white"/>
              </svg>                        
            </a>
          </div>
        {/each}
      </div>
    </Col>
  {:else}
    <Col>
      <div class="mobile-image">
        {#each images as image}
          <div class="slider-container__carousel-cell">
            <img src={domain}{image.attributes.url} alt="{image.attributes.alternativeText ? image.attributes.alternativeText : ''}" />         
            <a href="{domain}{image.attributes.url}" class="download" download>
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.501" cy="27.5" r="27.5" fill="#1E2D39"/>
                <path d="M28.501 16.5C28.501 15.9477 28.0533 15.5 27.501 15.5C26.9487 15.5 26.501 15.9477 26.501 16.5L28.501 16.5ZM26.7939 39.2071C27.1844 39.5976 27.8176 39.5976 28.2081 39.2071L34.572 32.8431C34.9626 32.4526 34.9626 31.8195 34.572 31.4289C34.1815 31.0384 33.5484 31.0384 33.1578 31.4289L27.501 37.0858L21.8441 31.4289C21.4536 31.0384 20.8204 31.0384 20.4299 31.4289C20.0394 31.8195 20.0394 32.4526 20.4299 32.8431L26.7939 39.2071ZM26.501 16.5L26.501 38.5L28.501 38.5L28.501 16.5L26.501 16.5Z" fill="white"/>
              </svg>                        
            </a>
          </div>
        {/each}
      </div>
    </Col>
  {/if}

  <!-- <Col>
    <div class="slider-btn">
      <div class="slider-caption">
        <div class="progress-ring-container">
          <svg class="progress-ring" width="110" height="110"  >
            <circle class="progress-ring__bg" cx="55" cy="55" r="50" fill="#495763" />
            <circle class="progress-ring__border" cx="53" cy="53" r="50" fill="transparent" stroke-width="6" stroke="#00ADEE" stroke-dasharray="314" stroke-dashoffset="{314 * (1 - progressPercentage / 100)}" />
            <text class="progress-ring__arrow progress-ring__arrow--left" x="55" y="51" font-size="40" text-anchor="middle" fill="white" dominant-baseline="central">←</text>
          </svg>
        </div>  
      </div>
    </div>    
  </Col> -->

  
  

<style lang="scss">

body {
    overflow-x: hidden;
}
  
.slider-container {
  display: flex;
  width: 150vw;
  position: relative;
  height: 100vh;
  

  &__carousel-cell {
    flex-shrink: 0;
    width: auto;
    height: 70vh;
    margin: 15vh 0.5rem 15vh;
    @include media-max(sm){
      // margin: 30vh 0.5rem 30vh;
      margin: 1rem 0;
    }      
    overflow: hidden;      
    transition: 0.5s; 
    position: relative;
    @include media-max(sm){
        height: 40vh;
    }    
    &:hover{
      img{

      }
    }    
    .download{
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
    img {
      width: 100%;
      transition: 0.5s;
			object-fit: cover;
      height: 70vh;
      @include media-max(sm){
        height: 40vh;
      }
      &:hover{
        transition: 0.5s;
        scale: 1.2;        
      }
    }  
  }
}


// .slider-container {
//   overflow-x: hidden;
//   display: flex;  

//   &__carousel-cell {
//     &.empty-cell{
//       height: 100%;
//       min-width: 25vw;
//       min-width: none;
//     }
//     width: 70%;
//     height: auto;
//     padding: 0 0.5rem;
//     box-sizing: border-box;
//     min-width: 50vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
    
//     img {
//       display: block;
//       width: 100%;
//       height: auto;
//     }
//   }
// }
.slider-btn{
  margin: 0;
  margin-right: calc(52% - 50vw);
  text-align: center;
  .progress-ring-container{
    transform: scale(0.50);
  }
  svg{

    transform: rotate(-90deg);
    text{
      color: #fff;
    }
  }
}

.progress-ring-container {
  margin-top: 1rem;
  position: relative;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  // box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: inline-block;
  border-radius: 50%;  
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

  
  