<script>
  import { onMount, onDestroy } from 'svelte';
  import { Col } from "sveltestrap";

  let flickityInstance;
  export let images = [];
  let progressPercentage = 0;

  onMount(() => {
    if (typeof window !== 'undefined') {
      flickityInstance = new Flickity('.slider-container', {
        cellAlign: 'left',
        contain: true,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: false,
        groupCells: 1,
        draggable: true,
        on: {
          change: updateProgress,
        },
      });

      // Add event listener to control the slider with mouse scroll
      window.addEventListener('wheel', handleScroll);
    }
  });

  function updateProgress(index) {
    const totalSlides = images.length;
    let imageNum = totalSlides - index == 1 ? index  + 1 : index;
    progressPercentage = ((imageNum ) / totalSlides) * 100;
  }

  // Handle mouse scroll
  function handleScroll(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
      flickityInstance.previous(false); // Disable wrap-around for previous
    } else {
      flickityInstance.next(false); // Disable wrap-around for next
    }
  }

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('wheel', handleScroll);
    }
  });
</script>
<svelte:head>
    <!-- Flickity JavaScript -->
    <script src="../flickity/flickity.pkgd.min.js"></script>    
    <!-- Flickity CSS -->
    <link rel="stylesheet" href="../flickity/flickity.min.css" />
</svelte:head>

  <Col>
    <div class="slider-container">
      {#each images as image}
        <div class="slider-container__carousel-cell">
          <img src={image} alt="Slider image" />
        </div>
      {/each}
    </div>
    <div class="slider-btn">
      <div class="slider-caption">
        <div class="progress-ring-container">
          <svg class="progress-ring" width="110" height="110">
            <circle class="progress-ring__bg" cx="55" cy="55" r="50" fill="white" />
            <circle class="progress-ring__border" cx="55" cy="55" r="50" fill="transparent" stroke-width="4" stroke="#00ADEE" stroke-dasharray="314" stroke-dashoffset="{314 * (1 - progressPercentage / 100)}" />
            <text class="progress-ring__arrow progress-ring__arrow--left" x="55" y="55" font-size="16" text-anchor="middle" dominant-baseline="central">&darr;</text>
          </svg>
        </div>  
      </div>
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
    span{
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: $primary-color;
    }
    h2{
      font-size: 3rem;
    }
  }
}

.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;

  &__carousel-cell {
    width: 70%;
    height: auto;
    padding: 0 0.5rem;
    box-sizing: border-box;
    img {
      display: block;
      width: 100%;
      height: auto;
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

  
  