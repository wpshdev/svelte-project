<script>
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
    import { textAnimate, slide, fly } from '$lib/GsapAnimation.js';
    import leftar from '$lib/img/left-ar.svg';
    import rightar from '$lib/img/right-ar.svg';

    import {Col} from 'sveltestrap'
	export let perPage = 3
	export let loop = true
	export let autoplay = 0
	export let duration = 200
	export let easing = 'ease-in-out'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true	
	export let dots = false	
	export let controls = true
	export let threshold = 20
	export let rtl = false
    
	let currentIndex = startIndex;
	let siema
	let controller
	let timer

    export let preHeading; 
    export let heading; 
    export let btnTitle;
    export let btnUrl;
    export let featuredProjects;
    const domain = "https://strapi.ulfbuilt.com:1337"
	const dispatch = createEventDispatcher()
	$: pips = controller ? controller.innerElements : []
	$: currentPerPage = controller ? controller.perPage : perPage
	// $: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
  			duration,
  			easing,
  			startIndex,
  			draggable,
 			multipleDrag,
  			threshold,
  			rtl,
			onChange: handleChange
		})
		if(autoplay) {
			// timer = setInterval(right, autoplay);
		}
		return () => {
			autoplay && clearInterval(timer)
			controller.destroy()
		}
	})
	
	export function isDotActive (currentIndex, dotIndex) {
        if (currentIndex < 0) currentIndex = pips.length + currentIndex;
        return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
    }
	
	export function left () {
		controller.prev()
	}
	export function right () {
		controller.next()
	}
	export function go (index) {
		controller.goTo(index)
	}
	export function pause() {
		clearInterval(timer);
	}
	export function resume() {
		if (autoplay) {
			// timer = setInterval(right, autoplay);
		}
	}
	function handleChange (event) {
		currentIndex = controller.currentSlide
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		} )
	}
	function resetInterval(node, condition) {
		function handleReset(event) {
			pause();
			resume();
		}
		if(condition) {
			node.addEventListener('click', handleReset);
		}
		
		return {
        destroy() {
            node.removeEventListener('click', handleReset);
        }
	    }
    }
</script>
<Col md="3">
    <div class="slider-caption">
      <div class="slider-caption__heading">
        <p in:slide id="carousel-preheading" gsap-duration="1.5">{preHeading ? preHeading : ''}</p>
        <h2 class="text-animate secondary-font" in:textAnimate gsap-duration="1.5" id="carousel-heading">{heading ? heading : ''}</h2>
      </div>
    {#if controls}
    <div class="left-right">
        <button class="left" on:click={left}>
            <img src="{leftar}">
        </button>
        <button class="right" on:click={right}>
            <img src="{rightar}">
        </button>
    </div>
    {/if}
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
    <!-- {#if controls}
    <button class="left" >
        <slot name="left-control"></slot>
    </button>
    <button class="right">
        <slot name="right-control"></slot>
    </button>
    {/if} -->
<Col md=9 style="overflow: hidden;padding-left:0px;">
<div class="carousel">
	<div class="slides" bind:this={siema} in:fly id="carousel-image-container" gsap-duration="1" gsap-y="10" gsap-start="top top">
            {#each featuredProjects.data as project, index}
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
</Col>
    <!-- {#if dots}
	<ul>
		{#each {length: totalDots} as _, i}
		<li on:click={() => go(i*currentPerPage)} class={isDotActive(currentIndex, i) ? "active" : ""}></li>
		{/each}
	</ul>
    {/if} -->


<style lang="scss">
.carousel {
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.left-right{
    display: flex;
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
  .progress-ring__arrow rect {
    transition: fill 1s;
  }

  .progress-ring__arrow:hover rect {
    fill: rgba(129, 129, 129, 0.191);
  }
    
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
  width: 100%;
  position: relative;
  transition: transform 0.5s ease-in-out;

  white-space: nowrap;
  &__carousel-cell {
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
      width: 80%;      
    }   
    @include media-max(sm){
      height: 50vh;
      width: 80%;      
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

.slider-btn{
  margin: 3rem 5rem 0;
  text-align: right;
  height: 0;
  @include media-max(sm){
    text-align: center;
    margin: 2rem 0 0;
  }
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
  @include media-max(sm){
    margin-top: 3rem;
    left: 0;
  }
}

.progress-ring {
  &__border {
    transition: stroke-dashoffset 0.5s ease-out;
  }

  &__arrow {
    font-family: Arial, sans-serif;
    cursor: pointer;
    user-select: none;
    fill: $primary-color;

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