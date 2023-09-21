<script>
    import { textAnimate, slide, fly } from '$lib/GsapAnimation.js';
    import leftar from '$lib/img/left-ar.svg';
    import rightar from '$lib/img/right-ar.svg';
    import {Col} from 'sveltestrap';

    const domain = "https://strapi.ulfbuilt.com:1337"
    export let preHeading; 
    export let heading; 
    export let btnTitle;
    export let btnUrl;
    export let featuredProjects;
    
    let boxes = featuredProjects.data;
    console.log(boxes);
        
    function nextslide() {

    //   const firstBox = boxes.shift();
    //   boxes.push(firstBox);
  
    //     const container = document.querySelector('.slider-container');
    //     container.classList.add('transition-left');
  
    //     setTimeout(() => {
    //     container.classList.remove('transition-left'); 
    //     container.innerHTML = '';
    //     boxes.forEach(box => {
    //       const div = document.createElement('div');
    //       div.classList.add('box');
    //       console.log(box);
    //       div.textContent = box;
    //       container.appendChild(div);
    //     });
    //   }, 500);
    }
  
    function prevslide() {
    //   const firstBox = boxes.pop();
    //   boxes.unshift(firstBox);
  
    //   const container = document.querySelector('.slider-container');
    //   container.classList.add('transition-left-no-dur');
    //     container.innerHTML = '';
    //     boxes.forEach(box => {
    //       const div = document.createElement('div');
    //       div.classList.add('box');
    //       div.textContent = box;
    //       container.appendChild(div);
    //     });
    //     setTimeout(() => {
    //       container.classList.add('transition-right');
    //     },50);
    //   setTimeout(() => {
    //     container.classList.remove('transition-right');
    //     container.classList.remove('transition-left-no-dur');
    //   }, 500);
    }
  



</script>
<Col md="3">
    <div class="slider-caption">
      <div class="slider-caption__heading">
        <p in:slide id="carousel-preheading" gsap-duration="1.5">{preHeading ? preHeading : ''}</p>
        <h2 class="text-animate secondary-font" in:textAnimate gsap-duration="1.5" id="carousel-heading">{heading ? heading : ''}</h2>
      </div>
    <!-- {#if controls} -->
    <div class="left-right">
        <button class="left" on:click={prevslide}>
            <img src="{leftar}">
        </button>
        <button class="right" on:click={nextslide}>
            <img src="{rightar}">
        </button>
    </div>
    <!-- {/if} -->
      <!-- {#if innerWidth > 767}
        <div class="progress-ring-container">
          <svg class="progress-ring" width="110" height="49">
            <rect class="progress-ring__bg" x="2" y="2" rx="25" ry="25" width="106" height="45" fill="white" />
            <rect class="progress-ring__border" x="2" y="2" width="106" height="45" rx="25" ry="25" fill="transparent" stroke-width="2" stroke="#00ADEE" stroke-dasharray="305" stroke-dashoffset="{305 * (1 - progressPercentage / 100)}" />
            <g class="progress-ring__arrow progress-ring__arrow--left" on:click={left} use:resetInterval={autoplay} aria-label="left">
              <rect x="2" y="2" width="52" height="45" rx="25" ry="25" fill="transparent" />
              <text x="33" y="25" font-size="26" text-anchor="middle" dominant-baseline="central">&larr;</text>
            </g>
            <g class="progress-ring__arrow progress-ring__arrow--right" on:click={right} use:resetInterval={autoplay} aria-label="right">
              <rect x="56" y="2" width="52" height="45" rx="25" ry="25" fill="transparent" />
              <text x="77" y="25" font-size="26" text-anchor="middle" dominant-baseline="central">&rarr;</text>
            </g>
          </svg>
        </div> 
      {/if} -->
    </div>
  </Col>
<Col md=9 style="overflow: hidden;padding-left:0px;">
<div class="carousel">
	<div class="slides" in:fly id="carousel-image-container" gsap-duration="1" gsap-y="10" gsap-start="top center">
            <div class="slider-container" draggable="true">
            <!-- on:dragstart={handleMouseDown}
            on:dragend={handleMouseUp}> -->
            {#each boxes as project, index}
            <div class="slider-container__carousel-cell" id="carousel-item">
              <a href="/portfolio/{project.attributes.slug ? project.attributes.slug : '#'}" data-sveltekit-reload class="zoomImg">
                {#if project.attributes.featuredImage.data != null}
                  <img src="{domain}{project.attributes.featuredImage.data.attributes.formats.large.url ? project.attributes.featuredImage.data.attributes.formats.large.url : project.attributes.featuredImage.data.attributes.url}" alt="{project.attributes.featuredImage.data.attributes.alternativeText}" />
                {:else}
                {#await promise}
                {:then fallback} 
                  <img src="{fallback ? domain+fallback.attributes.url : noFeatured}" alt="{project.attributes.title}" >
                {/await}
                {/if}
                <div class="slider-container__carousel-cell__text">
                  <span>{('0' + (index + 1)).slice(-2)}</span>
                  {project.attributes.title ? project.attributes.title : ''}
                  <i><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.29004 12.3459L6.29004 6.84595L1.29004 1.34595" stroke="#00ADEE" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    </i>
                </div>
              </a>  
            </div>
          {/each}
            </div>
	</div>
</div>
</Col>


<!-- {#if project.attributes.featuredImage.data != null}
                  <img src="{domain}{project.attributes.featuredImage.data.attributes.formats.large.url ? project.attributes.featuredImage.data.attributes.formats.large.url : project.attributes.featuredImage.data.attributes.url}" alt="{project.attributes.featuredImage.data.attributes.alternativeText}" />
                {:else}
                {#await promise}
                {:then fallback} 
                  <img src="{fallback ? domain+fallback.attributes.url : noFeatured}" alt="{project.attributes.title}" >
                {/await}
                {/if} -->

    <!-- {#if dots}
	<ul>
		{#each {length: totalDots} as _, i}
		<li on:click={() => go(i*currentPerPage)} class={isDotActive(currentIndex, i) ? "active" : ""}></li>
		{/each}
	</ul>
    {/if} -->


<style lang="scss">
  :global(.box) {
    width: 400px;
    height: 520px;
    white-space: nowrap; /* Prevent text from wrapping */
    text-overflow: ellipsis; /* Show ellipsis (...) if content overflows */
  }
  :global(.transition-left) {
    transform: translateX(-410px) !important; /* Adjust the value as needed */
    transition-duration: 0.5s;
  }
  :global(.transition-left-no-dur) {
    transform: translateX(-410px) !important; /* Adjust the value as needed */
  }
  :global(.transition-right) {
    transform: translateX(410px) !important; /* Adjust the value as needed */
    transition-duration: 0.5s;
  }
    .slides{
        :global(div){
            min-width:300px;
        }
    }
.left-right{
    display: inline-flex;
    box-shadow: 0 0 5px #aaa;
    border-radius: 40px;
    background-color: $white-color;
}
.left, .right{
    border: 0px;
    padding: 1.25rem;
    background-color: transparent;
    margin: 0px;
}
.left-right img{
    height: 30px;
}
//   .progress-ring__arrow rect {
//     transition: fill 1s;
//   }

//   .progress-ring__arrow:hover rect {
//     fill: rgba(129, 129, 129, 0.191);
//   }
    
  .slider-caption{
    height: 100%;
    // display: flex;
    // align-items: center;
    // flex-wrap: wrap;  
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 5rem;
    &__heading{
      margin-top: 5rem;
      margin-bottom: 1rem;
      width: 100%;
      @include media-max(sm){
          text-align: center;
          margin-top: 0;
      }    
      p{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: $primary-color;
        font-weight: 500;
      }
      h2{
        // flex-wrap: wrap;
        // width: 18rem;
        @include media-max(ipadmini){
            line-height: 2rem;
        }    
      }
    }
  }

.slider-container {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    transition-property: transform; /* Specify the property to transition */
    transition-timing-function: ease-in-out;
    position: relative;

  white-space: nowrap;
  &__carousel-cell {
    max-width: 25rem;
    position: relative;   
    height: auto;
    margin: 0 0.5rem;
    box-sizing: border-box;
    height: 32rem;
    overflow: hidden;
    display: inline-block;
    &:hover{
        .slider-container__carousel-cell__text{
          background: $primary-color;
          transition: 1.5s;
          span {
            color: $white-color;
          }
          path {
            stroke: $white-color;
          }  
        }        
    }    
    @include media-max(ipadmini){
      height: 50vh;
    }   
    @include media-max(sm){
      height: 50vh;
    }   
    &__text{
          background-color: $secondary-color;
          color: #fff;
          padding: 0.5rem 3rem 0.5rem 0.5rem;
          position: absolute;
          z-index: 2;
          bottom: 1rem;
          left: 0;
          max-width: 90%;
          text-align: left;
          transition: 1.5s;
          display: flex;
          align-items: center;
            @include media-max(sm){
                margin: 0;
                // font-size: 0.6rem;
                width: 90%;
                bottom: 0.5rem
            } 
            span{
                color: $primary-color;
                font-size: 1.2rem;
                margin: 0 0.8rem 0;
                @include media-max(sm){
                    margin: 0;
                    // font-size: 0.6rem;
                }                
            }
            i{
              position: absolute;
              top: 20%;
              right: 1rem;
            }
    }      
    img {
      display: block;
      // width: auto;
      object-fit: cover;
      height: 100%;
    }
  }
}

// .slider-btn{
//   margin: 3rem 5rem 0;
//   text-align: right;
//   height: 0;
//   @include media-max(sm){
//     text-align: center;
//     margin: 2rem 0 0;
//   }
// }

// .progress-ring-container {
//   margin-top: 1rem;
//   position: relative;
//   bottom: 10px;
//   left: 10px;
//   z-index: 1;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
//   display: inline-block;
//   border-radius: 2rem;  
//   @include media-max(sm){
//     margin-top: 3rem;
//     left: 0;
//   }
// }

// .progress-ring {
//   &__border {
//     transition: stroke-dashoffset 0.5s ease-out;
//   }

//   &__arrow {
//     font-family: Arial, sans-serif;
//     cursor: pointer;
//     user-select: none;
//     fill: $primary-color;

//     &--left,
//     &--right {
//       // Add any common styles for left and right arrows here
//     }

//     &--left {
//       // Add any specific styles for left arrow here
//     }

//     &--right {
//       // Add any specific styles for right arrow here
//     }
//   }
// }


</style>