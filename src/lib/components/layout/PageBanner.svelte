<script lang="ts">
    import { Container, Row, Col } from "sveltestrap";
    import Animate from "../Animate.svelte";
    // import { fly } from "svelte/transition";
    import TextTransition from "$lib/TextTransition.svelte";
	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	import { textAnimate, fly } from '$lib/GsapAnimation.js';
    export let banner;
	export let bannerMobile;
    export let title;
    export let subTitle;
    export let extraClass;
	let pageBanner = banner;
	let innerWidth;
	$: {
		if(innerWidth < 768 && bannerMobile){
			pageBanner = bannerMobile;
		}
	}

	// page banner
	let pageBannerheight = 100;
    let divElement;
    onMount(() => {
      window.addEventListener("scroll", handleScroll);
    });
    function handleScroll() {
      const scrollProgress = window.scrollY / window.innerHeight;
      const newHeight = 100 - scrollProgress * 50;
      gsap.to(divElement, { height: `${newHeight}vh`, duration: 0.3 });
    }
</script>

<svelte:window 
	bind:innerWidth
/>
<section class="banner {extraClass ? extraClass : ''}" style="--banner: url({pageBanner}); height: {pageBannerheight}vh;" bind:this={divElement}>
	<Container>
		<Row>
			<Col >
				<div class="banner__content">
					<div class="banner__content__text">
						<h1 class="ml3 text-animate" id="bannerTitle" in:textAnimate><span>{title ? title : ''}</span></h1>
					</div>
					{#if subTitle != null}
						<p class="banner__content__paragraph" in:fly id="banner_sub" gsap-delay="1" gsap-duration="0.7">{subTitle}</p>
					{/if}
				</div>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	.banner{
		background-image: var(--banner);
		background-size: cover;
		min-height: 68vh;
		background-position: bottom;
		background-size: cover;
		margin: 0;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
        position: relative;
		&.homebanner{
			height: 100vh;
		}
        &:after{
            content: "";
            background-color: rgba(0,0,0,0.5);
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            z-index: 0;
        }        
		&__content{
            position: relative;
            z-index: 2;
			&__text{
				h1{
					color:#fff;
					font-weight: 400;
					// font-size: 5rem;		
					font-size: 3.5rem;		
					margin-bottom: 1rem;	
					justify-content: center;
					@include media-max(sm) {
						font-size: 3rem;
					}
					span{
						font-family: $primary-font;
					}		
				}
			}
			&__paragraph{
				color: #fff;
				font-size: 1.25rem;	
				@include media-max(sm) {
					font-size: 1.2rem;
				}							
			}
			&__btn{
					border: 1px solid #fff;
					padding: 1.5rem 4rem;					
					text-decoration: none;
					color: #fff;
					font-family: $secondary-font;
					text-transform:lowercase;
					display: inline-block;
			}			
		}
	}    
</style>