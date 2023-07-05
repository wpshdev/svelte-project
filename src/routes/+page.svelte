<script lang="ts">
	export let data;
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	// import banner from "$lib/img/first-section.svg";
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";
	import Animate from "$lib/components/Animate.svelte";
	// import TextTransition from "$lib/TextTransition.svelte";
	// import ImageSlider from '$lib/ImageSlider.svelte';
	import Carousel from "$lib/components/layout/Carousel.svelte";
	// import modern from "$lib/img/modern.svg";
	// import mountain from "$lib/img/mountain.svg";
	// import traditional from "$lib/img/traditional.svg";		
	import tr from "$lib/img/tnr.svg";
	import ArticleSection from "$lib/components/layout/ArticleSection.svelte";
	import Cta from "$lib/components/layout/Cta.svelte";
	import PageBanner from "$lib/components/layout/PageBanner.svelte";
	//import MasonryCard from "$lib/components/MasonryCard.svelte";
	import MasonryCardGrid from "$lib/components/MasonryCardGrid.svelte";
	//import gsap from 'gsap';
	// import { lazyload } from '$lib/lazyload.js'
	import axios from "axios";
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	import noFeatured from "$lib/img/blog-empty.svg"

	let y=0;
	const domain = "https://strapi.ulfbuilt.com:1337";
	const home = data.home.data.attributes;
	let fallback = data.fallback.data.attributes.fallbackImage.data;
	let propCount = 3;
	//let listener = {};

	// Function for portfolio masonry
	let portfolioList = [];
	let loading;

	let activeTab = home.categories.data[0].id;
	function handleTabClick(category) {
		activeTab = category;
	}

	$: if (activeTab) { // Check if has new variable data
        // portfolioList = []; // to reset portfolioList length
		loading = true;
        (async () => {
            const url = "https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+activeTab+"&populate=deep,2";
            const headers = {
                Authorization: 'Bearer ' + PUBLIC_STRAPI_API
            }  

            try {
                const response = await axios.get(url, { headers });
				portfolioList = response.data.data;
				loading = false;
                // new Promise((resolve) => {
                //     setTimeout(() => resolve(portfolioList = response.data.data), 500)
                // })
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }

	// $: listener = {propCount , activeTab};
	
	// let height;
	// console.log(home);

</script>
<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>{home.title ? home.title : 'Home'}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<PageBanner title="{home.topBanner.heading ? home.topBanner.heading : 'Building Excellence'}" subTitle="{home.topBanner.paragraph ? home.topBanner.paragraph : ''}" banner="{domain}{home.topBanner.background.data.attributes.url}" bannerMobile="{domain}{home.topBanner.background.data.attributes.formats.medium.url}" extraClass="homebanner" />

<section class="loc-gallery" >
	<Animate >
		<Container>
			<Row>
				<Col xs="12" class="pb-4">
					<h2 in:fly={{
						delay: 1000,
						duration: 2000,
						y: 50	}}
					>
						{home.homeBuilderHeading ? home.homeBuilderHeading : ''}
					</h2>
				</Col>
				<Col xs="12">
					<div class="loc-gallery__cwrapper" in:fly={{
							delay: 500,
							duration: 2000,
							y: 50								
					}} >
							<div class="h3" in:fly={{
								delay: 1500,
								duration: 2000,
								y: 50								
							}}>
								{@html home.homeBuilderSubHeading ? home.homeBuilderSubHeading : ''}
							</div>
						<div in:fly={{
							delay: 2000,
							duration: 2000,
							y: 50								
						}} >
							{@html home.homeBuilderParagraph ? home.homeBuilderParagraph : ''}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	</Animate>	
</section>	


{#if home.homeBuilderBanner.data}
<Animate>
	<section class="section--bannerOnly" style="--lrbg: url({domain}{home.homeBuilderBanner.data.attributes.url})"  in:fly={{
		y: 50								
}} ></section>
</Animate>
{/if}

<section class="categories" >
	<Animate >
		<Container class="categories_wrapper">
			<Row>
				<Col class="text-center">
						<h2 in:fly={{

							y: 50								
					}} >{home.categoryGalleryTabHeading ? home.categoryGalleryTabHeading : ''}</h2>
					<div class="categories__tabs">
						<div class="categories__tabs__heading">
							<ul in:fly={{
								y: 50								
						}}>
								{#each home.categories.data as heading}
									<li>
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<span
										data-category="{heading.id}"
										class:active="{activeTab === heading.id}"
										on:click="{() => handleTabClick(heading.id)}">
										{heading.attributes.Title ? heading.attributes.Title : ''}
										</span>
									</li>
								{/each}
							</ul>
						</div>
						<p class="text-center view-all" in:fly={{
							y: 50								
					}}>
							{#if propCount === 3} 
								<span on:click="{() => propCount = 999}">View All Projects</span>
							{:else}
								<span on:click="{() => propCount = 3}">View Less Projects</span>
							{/if}
						</p>					
						<div class="categories__tabs__gallery" in:fly={{
							y: 50								
					}}>
							<!-- {#key listener }
								<div  id="modern" class="masonry__tabs__gallery__imgs"  data-test={activeTab} transition:fade >
									<MasonryCardGrid id={activeTab} {propCount}/>
								</div>			
							{/key}																		 -->
							{#key activeTab}
								{#if loading}  <!-- show load -->
									<div class="col text-center list-text-details">Loading...</div>
								{:else}
									{#if portfolioList.length == 0} 
										<div class="col text-center list-text-details">No Project Found...</div>
									{:else}
										<div class="container masonry_container">       
											{#each portfolioList as project, index}				
												{#if index < propCount}
												<div class="masonry-items" in:fly="{{ y: 0, duration: 1000, delay:index * 1500}}" out:fly="{{y:0, duration:1000 }}">       
													<a data-sveltekit-reload href="/portfolio/{project.attributes.slug}" class="zoomImg">      
														{#if project.attributes.featuredImage.data != null}
														<img src="https://strapi.ulfbuilt.com:1337/{project.attributes.featuredImage.data.attributes.url}" alt="{project.attributes.title}" >   
														{:else}
														<img src="{fallback ? domain+fallback.attribute.url : noFeatured}" alt="{project.attributes.title}" >
														{/if}
													</a>
												</div>	                    
												{/if}				
											{/each}
										</div>
									{/if}
								{/if}
                			{/key}
						</div>					
					</div>
				</Col>
			</Row>
		</Container>
	</Animate>		
</section>



<section class="featured-projects">	
	<Animate>
		<div in:fly={{
			duration: 2000,
			y: 50
			}}
		>			

		<Container>
			<Row>
				<Carousel 
				preHeading={home.featuredProjectsPreHeading ? home.featuredProjectsPreHeading : ''} 
				heading={home.featuredProjectsHeading ? home.featuredProjectsHeading : ''} 
				btnTitle={home.featurePropertyBtnTitle ? home.featurePropertyBtnTitle : 'Button'}
				btnUrl={home.featuredPropertyBtnUrl ? home.featuredPropertyBtnUrl : '#'}
				featuredProjects={home.featuredProjects}
		/>
			</Row>
		</Container>
		</div>
	</Animate>		
</section>


<section class="tnr" style="--tp-banner: url({domain}{home.midBanner.background.data.attributes.url})" > 
	<Container>
		<Row>
			<Col>
				<Animate>
					<div class="tnr__wrapper" in:fly={{
						duration: 2000,
						y: 50								
				}} >
						<div class="tnr__wrapper__captions" in:fly={{
							duration: 2000,
							y: 50								
					}} >
							<span>{home.midBanner.paragraph ? home.midBanner.paragraph : ''}</span>
							<h2>{home.midBanner.heading ? home.midBanner.heading : ''}</h2>
							<a href="{home.midBanner.btnUrl ? home.midBanner.btnUrl : '#'}" class="btn btn-secondary">
								{home.midBanner.btnTitle ? home.midBanner.btnTitle : 'Button'}
							</a>
						</div>
					</div>
				</Animate>
			</Col>
		</Row>
	</Container>
</section>



<section class="reputation" >
	<Animate>
		<Container>
			<Row>
				<Col md="7" class="">
					<div class="reputation__content" in:fly={{
						duration: 2000,
						y: 50								
				}} >
						<div class="reputation__content__wrapper">
							<span>{home.reputation.preHeading ? home.reputation.preHeading : ''}</span>
							<h2>{home.reputation.heading ? home.reputation.heading : ''}</h2>
							<p>{@html home.reputation.content ? home.reputation.content : ''}</p>
							<a href="{home.reputation.btnUrl ? home.reputation.btnUrl : '#'}" class="btn btn-secondary">{home.reputation.btnTitle ? home.reputation.btnTitle : 'Button'}</a>
						</div>
					</div>
				</Col>
				<Col md="5" class="my-auto" >
					{#if home.reputation.image.data}
					<img src="{domain}{home.reputation.image.data.attributes.url}" alt="{home.reputation.image.data.attributes.alternativeText}" in:fly={{
						duration: 2000,
						y: 50								
				}} >
					{/if}
				</Col>
			</Row>
		</Container>
	</Animate>
</section>

<section class="process">
	<Animate>
		<Container>
			<Row>
				<Col md="6">
					<div class="process__top-image" in:fly={{
						duration: 2000,
						y: 50								
				}} >
						{#if home.ourProcessTopImage.data[0]}
						<img src="{domain}{home.ourProcessTopImage.data[0].attributes.url}" alt="{home.ourProcessTopImage.data[0].attributes.alternativeText}"/>
						{/if}
					</div>
				</Col>
			</Row>
			<Row>
				<Col md="7" class="">
					<div class="process__content">
						<div class="process__content__wrapper" in:fly={{
							duration: 2000,
							y: 50								
					}} >
							<span>{home.ourProcessPreHeading ? home.ourProcessPreHeading : ''}</span>
							<h2>{home.ourProcessHeading ? home.ourProcessHeading : ''}</h2>
							{@html home.ourProcessParagraph ? home.ourProcessParagraph : ''}
							<a href="{home.ourProcessButtonUrl ? home.ourProcessButtonUrl : '#'}" class="btn btn-secondary">{ home.ourProcessButtonTitle ? home.ourProcessButtonTitle : 'Button' }</a>
						</div>
					</div>
				</Col>
				<Col md="5" class="my-auto ">
					<div class="process__bottom" in:fly={{
						duration: 2000,
						y: 50								
				}} >
						{#if home.ourProcessRightImage.data}
						<img src="{domain}{home.ourProcessRightImage.data.attributes.url}" alt="{home.ourProcessRightImage.data.attributes.alternativeText}">
						{/if}
					</div>
				</Col>
			</Row>
		</Container>
	</Animate>
</section>


<section class="story" >
	<Animate>
		<Container>
			<Row>
				<Col md="7" class="">
					<div class="story__content">
						<div class="story__content__wrapper" in:fly={{
							duration: 2000,
							y: 50								
					}} >
							<span>{home.ourStoryPreHeading ? home.ourStoryPreHeading : ''}</span>
							<h2>{home.ourStoryHeading ? home.ourStoryHeading : ''}</h2>
							{@html home.ourStoryParagraph ? home.ourStoryParagraph : ''}
							
							<!-- <Accordion>
								<AccordionItem active>
									<h4 class="m-0" slot="header"><span>1</span>Custom Homes</h4>
									<p>Lorem ipsum dolor sit amet consectetur. Vitae fringilla velit eros dictumst in amet.</p>
								</AccordionItem>							
							</Accordion>						 -->
						</div>
					</div>
				</Col>
				<Col md="5" class="my-auto">
					{#if home.ourStoryRightImage.data}
					<img src="{domain}{home.ourStoryRightImage.data.attributes.url}" alt="{home.ourStoryRightImage.data.attributes.alternativeText}" in:fly={{
						duration: 2000,
						y: 50								
				}} >
					{/if}
				</Col>
			</Row>
		</Container>
	</Animate>	
</section>

<section class="m-0 article-wrapper">
	<Animate>	
		<div in:fly={{
			duration: 2000,
			y: 50								
	}} >
		<ArticleSection />
		</div>
	</Animate>
</section>

<section class="m-0 cta-wrapper">
	<Animate>
		<div in:fly={{
			duration: 2000,
			y: 50								
	}} >
			<Cta />
		</div>
	</Animate>
</section>

<style lang="scss">
	section{
		min-height: 20vh;
	}
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
					font-size: 4rem;		
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
		h2{
				font-family: $secondary-font;
				margin-bottom: 1rem;
				color: $secondary-color;
				margin-bottom: 3rem;
				text-align: center;
				@include media-max(sm){
					text-align: center;
					font-size: 2.813rem;
				}
			}		
		&__cwrapper{
			max-width: 42rem;
			margin: auto;
			.h3{
				text-transform: uppercase;
				margin-bottom: 2rem;
				font-size: 2.5rem;
				font-weight: 600;
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
			:global(a) {
				color: $primary-color;
				text-decoration: none;
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
		margin-top: 0;
		// :global(.categories_wrapper) {
		// 	max-width: 1440px;
		// }
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
					// flex-wrap: wrap;
					width: 90%;
					margin: auto;
					margin-bottom: 2rem;
					padding-left: 0;	
					
					@include media-max(lg){
						flex-wrap: nowrap;
						padding: 1rem 0;
						overflow-x: scroll;
						width: 100%;
					}		
								
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
							width: 15rem;
							padding: 0 1rem;
						}
						border-right: 3px solid $gray;	
						&:last-child {
							border: none;
						}
						span{				
							font-family: $secondary-font;
							font-size: 1.75rem;
							color: #D8D7D7;
							text-transform: uppercase;
							margin-bottom: 2em;
							// border-bottom: 3px solid #D8D7D7;
							font-weight: 500;
							cursor: pointer;
							@include media-max(lg){
								font-size: 1.2rem;
							}								
							// @include media-max(sm){
							// 	font-size: 1.2rem;
							// }
							&.active{
								color: $secondary-color;
								border-bottom-color: $secondary-color;
							}
						}
					}
				}
			}
			&__gallery{
				min-height: 60vh;
				position: relative;
				@include media-max(ipadmini){
					min-height: auto;
				}	
				.list-text-details {
					position: absolute;
					top: 0;
					left:50%;
					-webkit-transform: translateX(-50%);
					transform: translateX(-50%)
				}
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
		.masonry_container {
            display: flex;
            .masonry-items{
                width: 33%;   
                overflow: hidden;
                display: grid;
                grid-template-rows: 1fr auto;
                break-inside: avoid;
                // position: absolute;
                color: white;
                text-align: center;  
                height: 55vh;
                @include media-max(ipadmini){
                    height: 20vh;
                }
                @include media-max(sm){
                    height: 20vh;
                }
                a{
                    display: block;
                    height: 100%;
                    width: 100%;
                    margin: 0 1.125rem;
                    overflow: hidden;
                    img{
                        height: 100%;
                        object-fit: cover;
                    }   
                }      
                &__text{
                    background-color: $secondary-color;
                    color: #fff;
                    padding: 0.5rem;
                    position: absolute;
                    z-index: 2;
                    bottom: 1rem;
                    left: 0;
                    width: 75%;
                    text-align: left;
                
                    span{
                        color: $primary-color;
                        font-size: 1.2rem;
                        margin: 0 0.8rem 0;
                        @include media-max(sm){
                            font-size: 0.8rem;
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
			margin-bottom: 0;
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
				font-size: 2.688rem;
				@include media-max(sm){
					font-size: 2rem;
				}
			}
			.btn{
				// background-color: #1E2D39;
			}				
		}
	}

	.featured-projects{
		margin: 10rem 0 5rem;
		padding-bottom: 5rem;
		overflow: hidden;
		@include media-max(sm){
			// margin: 5rem 0;
			margin: 0;
			padding-bottom: 0;
		}
	}

	.reputation{
		margin: 7rem 0 3.75rem;
		:global(.container){
			@include media-max(md){
				padding-left: 1.8rem;
				padding-right: 1.8rem;
			}	
			@include media-max(sm){
				padding-left: 1.8rem;
				padding-right: 1.8rem;
			}			
		}
		@include media-max(sm){
			margin: 0;
			padding: 5rem 0 1.5rem 0;
		}		
		@include media-max(xs){
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
				width: 135%;
				top: 5%;
				content: "";
				height: 90%;
				@include media-max(xl){	
					top: 0;
					height: 100%;
				}
				@include media-max(ipadmini){	
					top: unset;
					height: 140%;
				}
				@include media-max(sm){
					width: 100vw;
					top: -5rem;
					margin-left: calc(50% - 50vw);
					// margin-right: calc(50% - 50vw);			
					height: 160%;		
				}		
			}
			&__wrapper{
				max-width: 38rem;
				z-index: 2;
				padding-left: 10rem;
				@include media-max(lg){
					padding-left: 5rem;
				}	
				@include media-max(md){
					padding-left: 3rem;
				}	
				@include media-max(sm){
					padding-left: 0;
					margin-bottom: 2rem;
				}						
				span{
					color: $primary-color;
					margin-bottom: 1rem;
					font-weight: 500;
				}
				h2{
					margin: 1rem 0 2rem;
					line-height: 4rem;
					@include media-max(lg){
						line-height: 3rem;
						margin: 1rem 0;
					}	
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
		@include media-max(ipadmini){
			padding-bottom: 7rem;
		}
		@include media-max(sm){
			padding-bottom: 0;
		}		
		&__top-image{
			text-align: right;
    		margin-bottom: -3rem;
			@include media-max(default){
				margin-bottom: 0rem;	
			}	
			@include media-max(lg){
				margin-bottom: 1.5rem;	
			}	
			@include media-max(lg){
				margin-bottom: 5rem;	
			}		
			@include media-max(sm){
				text-align: left;
				margin-bottom: 0;	
			}				
			img{
				max-width: 30rem;
				height: 28.125rem;
				@include media-max(lg){
					height: auto;
				}	
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
			@include media-max(md){
				height: 50vw;
			}	
			@include media-max(ipadmini){
				height: 55vw;
			}	
			@include media-max(sm){
				height: auto;
				margin-top: 3rem;
			}			
			&:after{
				position: absolute;
				background: #F2F2F2;
				width: 135%;
				content: "";
				height: 100%;
				@include media-max(xl){	
					height: 120%;
				}	
				// @include media-max(ipadmini){	
				// 	height: 140%;
				// }			
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
				@include media-max(md){
					padding-left: 3rem;
				}
				@include media-max(sm){
					padding-left: 0;
				}					
				span{
					color: $primary-color;
					margin-bottom: 1rem;
					font-weight: 500;
				}
				h2{
					margin: 1rem 0 2rem;
					line-height: 4rem;
					@include media-max(lg){
						line-height: 3rem;
						margin: 1rem 0;
					}	
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
		@include media-max(ipadmini){
			padding-bottom: 7rem;
		}
		@include media-max(sm){
			padding-bottom: 0;
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
				width: 135%;
				content: "";
				height: 90%;	
				@include media-max(xl){	
					top: 0;
					height: 100%;
				}	
				@include media-max(ipadmini){	
					top: unset;
					height: 150%;
				}	
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
				@include media-max(md){
					padding-left: 3rem;
				}
				@include media-max(sm){
					padding: 0;
				}  				
				span{
					color: $primary-color;
					margin-bottom: 1rem;
					font-weight: 500;
				}
				h2{
					margin: 1rem 0 2rem;
					@include media-max(lg){
						line-height: 3rem;
					}	
				}
				:global(p){
					line-height: 2rem;
					margin-bottom: 2rem;
					@include media-max(md){
						margin-bottom: 0;
					}
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

	.living-room{
		height: 30vw;		
	}
	
	.section--bannerOnly{
		background-image: var(--lrbg);
		background-size: cover;
		height: 90vh;
		width: 90vw;
    	margin: 0 auto 3.75rem auto;
		@include media-max(ipadmini){
			height: 40vh;
		}
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
	section.m-0{
		@include media-max(sm){
			padding-left: 0;
			padding-right: 0;
		}
	}

	.cta-wrapper, .article-wrapper {
		padding-left: unset;
		padding-right: unset;
	}
	
	// .contact-form{
	// 	&__form{
	// 	padding: 2rem;
	// 	margin: 0 auto;
	// 	max-width: 400px;
	// 	}
	// }
	
</style>