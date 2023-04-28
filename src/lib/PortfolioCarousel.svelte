<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Col } from "sveltestrap";
  
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
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
  });

  export let images = [];
  let progressPercentage = 0;
  const domain = "https://strapi.ulfbuilt.com:1337";
 

</script>

  <Col>
    <div class="slider-container">
      {#each images as image}
        <div class="slider-container__carousel-cell">
          <img src={domain}{image.attributes.url} alt="{image.attributes.alternativeText ? image.attributes.alternativeText : ''}" />
        </div>
      {/each}
    </div>
  </Col>
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
  padding-top: 2rem;

  &__carousel-cell {
    width: 50vw;
    flex-shrink: 0;
    padding: 4rem 0.5rem 0;
    img {
      width: 100%;
      height: auto;
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

  
  