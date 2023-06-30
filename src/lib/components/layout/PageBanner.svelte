<script lang="ts">
    import { Container, Row, Col } from "sveltestrap";
    import Animate from "../Animate.svelte";
    import { fly } from "svelte/transition";
    import TextTransition from "$lib/TextTransition.svelte";
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
</script>

<svelte:window 
	bind:innerWidth
/>

<section class="banner {extraClass ? extraClass : ''}" style="--banner: url({pageBanner})">
	<Container>
		<Row>
			<Col >
				<div class="banner__content">
					<div class="banner__content__text">
						<h1 class="ml3"><span>{title ? title : ''}</span></h1>
					</div>
					{#if subTitle != null}
						<p class="banner__content__paragraph" >{subTitle}</p>
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