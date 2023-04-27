<script>
  import { onMount, tick } from 'svelte';
  import { Col } from "sveltestrap";
  import Flickity from "flickity";
  // let Flickity;
  let flickityInstance;
  let sliderContainer;
  let y = 0;
  export let images = [];
  let progressPercentage = 0;
  // Add a new variable to keep track of the accumulated deltaY
  let accumulatedDeltaY = 0;
  let isHovering = false;
  const domain = "https://strapi.ulfbuilt.com:1337";
  // Define the threshold for deltaY
  const deltaYThreshold = 400; // Adjust this value as needed


// onMount(async () => {
//   setTimeout(() => {
//     flickityInstance = new Flickity('.slider-container', {
//       cellAlign: 'left',
//       contain: true,
//       wrapAround: false,
//       prevNextButtons: false,
//       pageDots: false,
//       autoPlay: false,
//       groupCells: 1,
//       draggable: true,
//       on: {
//         change: updateProgress,
//       },
//     });

//     // Add event listener to control the slider with mouse scroll
//     // sliderContainer.addEventListener('wheel', handleScroll, { passive: false });
//   }, 600);
  
//     // let lastScroll = 0;
//     // window.addEventListener('scroll', onScroll, false);

//     // function onScroll() {
//     //   if (!isHovering) return;

//     //   flickityInstance.isFreeScrolling = true;
//     //   flickityInstance.startAnimation();
//     //   let diff = window.scrollY - lastScroll;
//     //   lastScroll = window.scrollY;

//     //   flickityInstance.velocity += diff * -0.2;
//     //   flickityInstance.x += flickityInstance.velocity;
//     //   flickityInstance.velocity *= 1 - 0.03;

//     //   let previousX = flickityInstance.x;
//     //   flickityInstance.positionSlider();
//     //   flickityInstance.selectedIndex = flickityInstance.dragEndRestingSelect()
//     //   flickityInstance.updateSelectedSlide()
//     //   flickityInstance.settle(previousX);
//     // }

//     // return () => {
//     //   window.removeEventListener('scroll', onScroll, false);
//     // };

// });

  let elementRef;
  let elementYPosition = 0;

  function updateElementPosition() {
    const rect = elementRef.getBoundingClientRect();
    elementYPosition = rect.top + window.scrollY;
    console.log(elementYPosition);
  }

  let updateOnScroll;
  function handleWheel(event) {
    // console.log(event);
  }

onMount(() => {
  const scrollContainer = document.querySelector(".slider-container");
  const sliderContainer = document.querySelector(".portfolio-gallery");

  const totalImages = scrollContainer.childElementCount;
  const containerWidth = scrollContainer.clientWidth;
  


  
  const updateProgress = () => {
    const currentScroll = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - containerWidth;
    progressPercentage = (currentScroll / maxScroll) * (totalImages - 1) / (totalImages - 1) * 100;
    progressBar.setAttribute("stroke-dashoffset", 314 * (1 - progressPercentage / 100));
  };
  const progressBar = document.querySelector(".progress-ring__border");


  sliderContainer.addEventListener("wheel", (evt) => {
    const atFirstSlide = scrollContainer.scrollLeft === 0;
    const atLastSlide = scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth;
    const scrollingUp = evt.deltaY < 0;
    const scrollingDown = evt.deltaY > 0;
    
    let rect = progressBar.getBoundingClientRect();	
    // console.log(scrollingUp)
    console.log(handleScroll());
    // if ((!atFirstSlide || !scrollingUp) && (!atLastSlide || !scrollingDown)) {
      // console.log(progressPercentage);
    if(scrollingUp && progressPercentage ==0 ){
      return;
    }
    if((handleScroll()-400 > rect.y && progressPercentage < 100  && !scrollingUp) || (handleScroll() > rect.y && scrollingUp && progressPercentage <= 100)){
      evt.preventDefault(); // Prevent default scrolling behavior to enable horizontal scrolling
      scrollContainer.scrollLeft += evt.deltaY;
      updateProgress();
    }
  });
});
// $: slideStyle = `transform: translateY(-${currentIndex * 100}%)`;


// function updateProgress(index) {
//     console.log(index);
//     const totalSlides = images.length;
//     let imageNum = totalSlides - index == 1 ? index  + 1 : index;
//     progressPercentage = ((imageNum ) / totalSlides) * 100;
// }

//   // Handle mouse scroll
// function handleScroll(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     // Accumulate deltaY
//     accumulatedDeltaY += Math.abs(event.deltaY);
    
//     // Check if the accumulated deltaY is greater than or equal to the deltaYThreshold
//     if (accumulatedDeltaY >= deltaYThreshold) {
//       if (event.deltaY < 0) {
//         flickityInstance.previous(false); // Disable wrap-around for previous
//       } else {
//         flickityInstance.next(false); // Disable wrap-around for next
//       }
//       // Reset accumulated deltaY
//       accumulatedDeltaY = 0;
//     }
// }

function handleScroll() {
    const scrollBottom = y + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight; 
    return scrollBottom;
}

</script>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} on:wheel={handleWheel}/>	
  <Col>
    <div class="slider-container"   >
    <div class="slider-container__carousel-cell empty-cell">

    </div>     
      {#each images as image}
        <div class="slider-container__carousel-cell">
          <img src={domain}{image.attributes.url} alt="{image.attributes.alternativeText ? image.attributes.alternativeText : "" }" />
        </div>
      {/each}
    </div>
  </Col>
  <Col>
    <div class="slider-btn">
      <div class="slider-caption">
        <div class="progress-ring-container">
          <svg class="progress-ring" width="110" height="110" bind:this="{elementRef}"  >
            <circle class="progress-ring__bg" cx="55" cy="55" r="50" fill="#495763" />
            <circle class="progress-ring__border" cx="53" cy="53" r="50" fill="transparent" stroke-width="6" stroke="#00ADEE" stroke-dasharray="314" stroke-dashoffset="{314 * (1 - progressPercentage / 100)}" />
            <text class="progress-ring__arrow progress-ring__arrow--left" x="55" y="51" font-size="40" text-anchor="middle" fill="white" dominant-baseline="central">←</text>
          </svg>
        </div>  
      </div>
    </div>    
  </Col>

  
  

<style lang="scss">

.slider-caption{
  // height: 100%;
  // display: flex;
  // align-items: center;
  // flex-wrap: wrap;  
  // &__heading{
  //   margin-bottom: 1rem;
  //   width: 100%;
  //   span{
  //     font-size: 1.5rem;
  //     margin-bottom: 2rem;
  //     color: $primary-color;
  //   }
  //   h2{
  //     font-size: 3rem;
  //   }
  // }
}

.slider-container {
  overflow-x: hidden;
  display: flex;  

  &__carousel-cell {
    &.empty-cell{
      height: 100%;
      min-width: 25vw;
      min-width: none;
    }
    width: 70%;
    height: auto;
    padding: 0 0.5rem;
    box-sizing: border-box;
    min-width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
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

  
  