<script lang="ts">
	export let data;
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import banner from "$lib/img/first-section.svg";
	// import Carousel from "../components/Carousel.svelte";
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";
	import Animate from "$lib/components/Animate.svelte";
	import TextTransition from "$lib/TextTransition.svelte";
	import ImageSlider from '$lib/ImageSlider.svelte';
	import Carousel from "$lib/components/layout/Carousel.svelte";
	import modern from "$lib/img/modern.svg";
	import mountain from "$lib/img/mountain.svg";
	import traditional from "$lib/img/traditional.svg";		
	import tr from "$lib/img/tnr.svg";		
	import reputationImg from "$lib/img/Reputation.svg";		
	import lroom from "$lib/img/Process-Lroom.svg";
	import stair from "$lib/img/Process-Stair.svg";
	import ArticleSection from "$lib/components/layout/ArticleSection.svelte";
	import Cta from "$lib/components/layout/Cta.svelte";
	import PageBanner from "$lib/components/layout/PageBanner.svelte";
	import MasonryCard from "$lib/components/MasonryCard.svelte";
	import MasonryCardGrid from "$lib/components/MasonryCardGrid.svelte";
	import gsap from 'gsap';
	onMount(() => {
		
window.addEventListener("scroll", (e) => {
    let scroll = window.scrollY;
	const element = document.querySelector<HTMLElement>(".section--bannerOnly");
	let elementY = element?.getBoundingClientRect();
	let elementt = e.clientY - window.innerHeight / 2;
    console.log(elementt);
});

	});
	let y=0;
	const domain = "https://strapi.ulfbuilt.com:1337";
	const home = data.data.attributes;
	let propCount = 3;
	let listener = {};
	let featuredData = {

	}
    const images = [
        modern,
        mountain,
        traditional
    ];

	let activeTab = home.categories.data[0].id;

	function handleTabClick(category) {
		activeTab = category;
	}

	$: listener = {propCount , activeTab};

	let innerWidth;

	onMount(()=>{
		innerWidth = window.innerWidth;
	})

	$: {
		if(innerWidth){
			
		}
	}
	

</script>
<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>{home.title}</title>
	<meta name="description" content="ULF BUILT" />
	<script src="flickity/flickity.pkgd.min.js" defer></script>    
</svelte:head>

<!-- <section class="homebanner" style="--banner: url({banner})">
	<Container>
		<Row>
			<Col sm={{ size: 12 }}>
				<div class="homebanner__content">
					<div class="homebanner__content__text">
						<Animate section=".homebanner">
						<h1 class="ml3"><TextTransition text="Building Excellence"  transitionDelay=600/></h1>
						</Animate>
					</div>
					<Animate section=".homebanner">
						<p class="homebanner__content__paragraph" in:fly={{
							delay: 3500,
							duration: 2000,
							y: 50							
						}}>Home Builder and Remodeler in Vail, Colorado</p>
					</Animate>						
				</div>
			</Col>
		</Row>
	</Container>
</section> -->
<PageBanner title="{home.topBanner.heading}" subTitle="{home.topBanner.paragraph}" banner="{banner}" extraClass="homebanner" />
<section class="loc-gallery">
	<Container>
		<Row>
			<Col class="text-center">
				<div class="loc-gallery__cwrapper" style:transform={`translateY(${(y * 0.6)-1100}px)`}>
					<h2>{home.homeBuilderHeading}</h2>
					<div class="h3">{@html home.homeBuilderSubHeading}</div>
					{@html home.homeBuilderParagraph}
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="section--bannerOnly" style="--lrbg: url({domain}{home.homeBuilderBanner.data.attributes.url})"></section>

<section class="categories">
	<Container>
		<Row>
			<Col class="text-center">
				<h2>what are you looking for?</h2>
				<div class="categories__tabs">
					<div class="categories__tabs__heading">
						<ul>
							{#each home.categories.data as heading}
								<li>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<span
									data-category="{heading.id}"
									class:active="{activeTab === heading.id}"
									on:click="{() => handleTabClick(heading.id)}">
									{heading.attributes.Title}
									</span>
								</li>
							{/each}
						</ul>
					</div>
					<p class="text-center view-all">
						{#if propCount === 3} 
							<span on:click="{() => propCount = 999}">View All Projects</span>
						{:else}
							<span on:click="{() => propCount = 3}">View Less Projects</span>
						{/if}
					</p>					
					<div class="categories__tabs__gallery">
						{#key listener }
							<div  id="modern" class="masonry__tabs__gallery__imgs"  data-test={activeTab} transition:fade >
								<MasonryCardGrid id={activeTab} {propCount}/>
							</div>			
						{/key}																		
					</div>					
				</div>
			</Col>
		</Row>
	</Container>
</section>
<section class="featured-projects">
	<Container>
		<Row>
			<Carousel 
			preHeading={home.featuredProjectsPreHeading} 
			heading={home.featuredProjectsHeading} 
			btnTitle={home.featurePropertyBtnTitle}
			btnUrl={home.featuredPropertyBtnUrl}
			featuredProjects={home.featuredProjects}
	 />
		</Row>
	</Container>
</section>

<section class="tnr" style="--tp-banner: url({tr})">
	<Container>
		<Row>
			<Col>
				<div class="tnr__wrapper">
					<div class="tnr__wrapper__captions">
						<span>{home.midBanner.paragraph}</span>
						<h2>{home.midBanner.heading}</h2>
						<a href="{home.midBanner.btnUrl}" class="btn btn-secondary">
							{home.midBanner.btnTitle}
						</a>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="reputation">
	<Container>
		<Row>
			<Col md="8" class="">
				<div class="reputation__content">
					<div class="reputation__content__wrapper">
						<span>{home.reputation.preHeading}</span>
						<h2>{home.reputation.heading}</h2>
						<p>{@html home.reputation.content}</p>
						<a href="{home.reputation.btnUrl}" class="btn btn-secondary">{home.reputation.btnTitle}</a>
					</div>
				</div>
			</Col>
			<Col md="4" class="my-auto">
				<img src="{domain}{home.reputation.image.data.attributes.url}" alt="{home.reputation.image.data.attributes.alternativeText}">
			</Col>
		</Row>
	</Container>
</section>

<section class="process">
	<Container>
		<Row>
			<Col md="6">
				<div class="process__top-image">
					<img src="{domain}{home.ourProcessTopImage.data[0].attributes.url}" alt="{home.ourProcessTopImage.data[0].attributes.alternativeText}">
				</div>
			</Col>
		</Row>
		<Row>
			<Col md="8" class="">
				<div class="process__content">
					<div class="process__content__wrapper">
						<span>{home.ourProcessPreHeading}</span>
						<h2>{home.ourProcessHeading}</h2>
						{@html home.ourProcessParagraph}
						<a href="{home.ourProcessButtonUrl}" class="btn btn-secondary">{ home.ourProcessButtonTitle }</a>
					</div>
				</div>
			</Col>
			<Col md="4" class="my-auto ">
				<div class="process__bottom">
					<img src="{domain}{home.ourProcessRightImage.data.attributes.url}" alt="{home.ourProcessRightImage.data.attributes.alternativeText}">
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="story">
	<Container>
		<Row>
			<Col md="8" class="">
				<div class="story__content">
					<div class="story__content__wrapper">
						<span>{home.ourStoryPreHeading}</span>
						<h2>{home.ourStoryHeading}</h2>
						{@html home.ourStoryParagraph}
						
						<!-- <Accordion>
							<AccordionItem active>
								<h4 class="m-0" slot="header"><span>1</span>Custom Homes</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Vitae fringilla velit eros dictumst in amet.</p>
							  </AccordionItem>							
						</Accordion>						 -->
					</div>
				</div>
			</Col>
			<Col md="4" class="my-auto">
				<img src="{domain}{home.ourStoryRightImage.data.attributes.url}" alt="{home.ourStoryRightImage.data.attributes.alternativeText}">
			</Col>
		</Row>
	</Container>
</section>

<ArticleSection />

<Cta />

<style lang="scss">
	.homebanner{
		background-image: var(--banner);
		background-size: cover;
		min-height: 100vh;
		background-position: bottom;
		background-size: cover;
		padding-top: 9rem;		
		margin: 0;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		&__content{
			&__text{
				h1{
					color:#fff;
					font-weight: 400;
					font-size: 5rem;		
					margin-bottom: 2rem;	
					span{
						font-family: $primary-font;
					}		
				}
			}
			&__paragraph{
				color: #fff;
				font-size: 1.5rem;				
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
	:global(.loc-gallery p){
		@include media-max(sm){
			text-align: left;
		}	
	}
	:global(.loc-gallery .h3 span){
		color: $primary-color;
	}	
	.loc-gallery{
		margin:80rem 0;
		&__cwrapper{
			h2{
				font-family: $secondary-font;
				margin-bottom: 1rem;
				color: $secondary-color;
				margin-bottom: 3rem;
			}
			.h3{
				text-transform: uppercase;
				margin-bottom: 2rem;
				font-size: 2.5rem;
				@include media-max(sm){
					font-size: 2rem;
				}
				span{
					color: $primary-color;
				}
			}
			p{
				max-width: 36rem;
				margin: 0 auto;
				text-align: left;
				margin-bottom: 2rem;							
			}
			&__btns{
				margin: 2rem 0;
				.btn-primary{
					margin-right: 1.5rem;
				}
			}
		}
	}

	.categories{
		h2{
			margin-bottom: 2rem;
		}
		.view-all{
			margin-bottom: 2rem;
			span{
				color: $secondary-color;
				&:hover{
					cursor: pointer;
				}
			}
		}
		&__tabs{
			&__heading{
				ul{
					display: flex;
					flex-wrap: wrap;
					margin-bottom: 2rem;
					padding-left: 0;					
					@include media-max(xs){
						flex-wrap: nowrap;
						padding: 1rem 0
					}						
					@include media-max(sm){
						overflow-x: scroll;
					}					
					li{
						list-style: none;
						width: 25%;
						@include media-max(sm){
							width: 10rem;
							padding: 0 1rem;
						}		
						span{				
							font-family: $secondary-font;
							font-size: 2rem;
							color: #D8D7D7;
							text-transform: uppercase;
							margin-bottom: 2em;
							border-bottom: 3px solid #D8D7D7;
							font-weight: 500;
							cursor: pointer;
							@include media-max(sm){
								font-size: 1.2rem;
							}
							&.active{
								color: $primary-color;
								border-bottom-color: $primary-color;
							}
						}
					}
				}
			}
			&__gallery{
				&__imgs{
					display: none;
					&.active{
						display: flex;
					}
					div{
						width: 33.33%;
						margin: 0 1rem;
						&:first-child{
							margin-left: 0;
						}
						&:last-child{
							margin-right: 0;
						}						
					}
				}
			}
		}
	}

	.tnr{
		background-image: var(--tp-banner);
		height: 40vw;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		background-position: center;
		background-size: cover;
		position: relative;
		@include media-max(sm){
			height: 80vh;
			align-items: end;
			padding-bottom: 2rem;
		}
		&::before{
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.5);			
			z-index: 1;
		}
		.tnr__wrapper{
			z-index: 2;
			position: relative;     
			color: #fff;
			span{
				font-size: 1.5rem;
			}
			h2{
				font-family: $primary-font;
				margin: 1rem 0 2rem;
				text-transform: uppercase;
			}
			.btn{
				background-color: #1E2D39;
			}				
		}
	}

	.featured-projects{
		margin: 10rem 0;
		overflow: hidden;
	}

	.reputation{
		margin: 7rem 0 3.75rem;
		@include media-max(sm){
			margin: 0;
			padding: 1.5rem 0;
		}			
		&__content{
			height: 35vw;
			display: flex;
			align-items: center;
			position: relative;
			@include media-max(sm){
				height: auto;
			}				
			&:after{
				position: absolute;
				background: #E5EEF2;
				width: 130%;
				top: 0;
				content: "";
				height: 100%;		
				@include media-max(sm){
					width: 100vw;
					top: -5vh;
					margin-left: calc(50% - 50vw);
					// margin-right: calc(50% - 50vw);			
					height: 160%;		
				}		
			}
			&__wrapper{
				max-width: 29rem;
				z-index: 2;
				padding-left: 4rem;
				@include media-max(sm){
					padding-left: 0;
					margin-bottom: 2rem;
				}						
				span{
					color: $primary-color;
					margin-bottom: 1rem;
				}
				h2{
					margin: 1rem 0 2rem;
				}
				p{
					line-height: 2rem;
					margin-bottom: 2rem;
				}
				.btn{
					@include media-max(sm){
						margin: 0 auto;
						display: inherit;
					}
				}
			}		
		}
		img{
			position: relative;
			z-index: 5;
		}		
	}	

	.process{
		margin: 7rem 0;		
		&__top-image{
			text-align: right;
    		margin-bottom: -3rem;		
			@include media-max(sm){
				text-align: left;
				margin-bottom: 0;	
			}				
			img{
				max-width: 25rem;
				@include media-max(sm){
					max-width: 70vw;
				}			
			}
		}
		&__content{
			height: 40vw;
			display: flex;
			align-items: center;
			position: relative;
			@include media-max(sm){
				height: auto;
				margin-top: 3rem;
			}			
			&:after{
				position: absolute;
				background: #F2F2F2;
				width: 130%;
				content: "";
				height: 100%;				
				@include media-max(sm){
					width: 100vw;
					margin-left: calc(50% - 50vw);
					height: 150%;	
				}
			}
			&__wrapper{
				max-width: 40rem;
				z-index: 2;
				padding-left: 4rem;
				@include media-max(sm){
					padding-left: 0;
				}					
				span{
					color: $primary-color;
					margin-bottom: 1rem;
				}
				h2{
					margin: 1rem 0 2rem;
				}
				p{
					line-height: 2rem;
					margin-bottom: 2rem;
				}
				.btn{
					@include media-max(sm){
						display: inherit;
						margin: 3rem auto;
					}							
				}
			}		
		}
		&__bottom{	
			@include media-max(sm){
				text-align: right;
			}							
			img{
				@include media-max(sm){
					max-width: 70vw;
				}			
			}			
		}
		img{
			position: relative;
			z-index: 5;
		}		

	}	

	.story{
		margin: 7rem 0 3.75rem;
		&__content{
			height: 35vw;
			display: flex;
			align-items: center;
			position: relative;
			@include media-max(sm){
				height: auto;
			}   						
			&:after{
				position: absolute;
				background: #E5EEF2;
				width: 130%;
				content: "";
				height: 100%;		
				@include media-max(sm){
					top: -10vw;
					width: 100vw;
					margin-left: calc(50% - 50vw);
					height: 160%;	
				}  						
			}
			&__wrapper{
				max-width: 43rem;
				z-index: 2;
				padding-left: 4rem;
				@include media-max(sm){
					padding: 0;
				}  				
				span{
					color: $primary-color;
					margin-bottom: 1rem;
				}
				h2{
					margin: 1rem 0 2rem;
				}
				:global(p){
					line-height: 2rem;
					margin-bottom: 2rem;
				}
				.accordion{
					.accordion-item{
						background-color: transparent;
					}
					h4{
						color: #000;
					}
					span{
						font-family: 'Raleway';
						font-style: normal;
						font-weight: 600;
						font-size: 2rem;
						color: #ACA7A7;
						margin-right: 1rem;
					}
				}
			}		
		}
		img{
			position: relative;
			z-index: 5;
		}		
	}	

	.insight{
		background-color: #F2F2F2;
		padding: 4rem 0;
		margin-bottom: 0;
		&__pre-heading{
			color: $primary-color;
			margin-bottom: 2rem;
			display: block;
		}
		&__content{
			&__wrapper{
				padding-left: 4rem;				
				span{
					color: $primary-color;
					margin-bottom: 1rem;
				}
				h2{
					margin: 1rem 0 2rem;	
					font-size: 3rem;
				}
				p{
					line-height: 2rem;
					margin-bottom: 2rem;
				}		
				.btn-primary{
					margin-right: 1rem;
				}		
				.btn-inverted{
					background-color: #fff;
				}
			}
		}
	}


	.living-room{
		height: 30vw;		
	}
	
	.section--bannerOnly{
		background-image: var(--lrbg);
		background-size: cover;
		height: 90vh;
		width: 90vw;
    	margin: auto;
		@include media-max(sm){
			height: 40vh;
		}
	}

	.lv-thropy{
		height: 45vw;
	}

	.contact-form{
		&__form{
		padding: 2rem;
		margin: 0 auto;
		max-width: 500px;
		text-align: center;
			h2{
				font-weight: 300;
				margin-bottom: 2rem;
				text-transform: uppercase;
			}
		}
	}

	.img-section{
		margin: 5rem 0;
	}
	
	// .contact-form{
	// 	&__form{
	// 	padding: 2rem;
	// 	margin: 0 auto;
	// 	max-width: 400px;
	// 	}
	// }
</style>