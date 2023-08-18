<script lang="ts">
	export let data;
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import Animate from "$lib/components/Animate.svelte";
	import Carousel from "$lib/components/layout/Carousel.svelte";
	import ArticleSection from "$lib/components/layout/ArticleSection.svelte";
	import Cta from "$lib/components/layout/Cta.svelte";
	import PageBanner from "$lib/components/layout/PageBanner.svelte";
	import axios from "axios";
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	import noFeatured from "$lib/img/blog-empty.svg"
	import { textAnimate, fly, fadeIn, slide, slowDownSection, } from '$lib/GsapAnimation.js';

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

// Written by parth for different section speed
import { onMount } from "svelte";
let scrollY = 0;
onMount(() => {
  window.addEventListener("scroll", handleScroll);
  calculateMaxTranslateY();
//   calculateMaxTranslateY("reputation", "reputation_child");
});
let maxTranslateY;
function calculateMaxTranslateY() {
	const container = document.querySelector(".loc-gallery");
	const child = document.querySelector(".child");
    const containerHeight = container.clientHeight;
    const childHeight = child.clientHeight;
    maxTranslateY = containerHeight - childHeight - 100;
}
// function calculateMaxTranslateY(containerClass, childClass) {
// 	const container = document.querySelector("." + containerClass);
// 	const child = document.querySelector("." + childClass);
//     const containerHeight = container.clientHeight;
//     const childHeight = child.clientHeight;
//     maxTranslateY = containerHeight - childHeight - 100;
// }
function handleScroll() {
    scrollY = window.scrollY;
    updateChildPosition("child", 0.5);
    // updateChildPosition("reputation_child", 0.5);
	updateChildPositionimg("containerimg", "childimg", 0, 0.2);
	updateChildPositionimg("containerimg2", "childimg2", 0, 0.1);
	updateChildPositionimg("containerimg3", "childimg3", 0, 0.3);
	updateChildPositionimg("containerimg4", "childimg4", 0, 0.3);
  }

  function updateChildPosition(childclass, speed) {
    const scrollSpeedMultiplier = speed;
    let translateY = scrollY * scrollSpeedMultiplier;
    
    // Ensure translateY does not exceed maxTranslateY
    translateY = Math.min(translateY, maxTranslateY);
    const child = document.querySelector("."+ childclass);
    child.style.transform = `translateY(${translateY}px)`;
  }
  function updateChildPositionimg(containerin, childin, offset, speed) {
	const containertop = document.querySelector("." + containerin).offsetTop;
	let scrollYval = scrollY + screen.height;
	if(scrollYval - containertop){
		let invalue = scrollYval - containertop;
		const translateY = (invalue * speed) - offset;
		const child = document.querySelector("." + childin);
		child.style.transform = `translateY(-${translateY}px)`;
	}
  }
  // Written by parth for different image speed

</script>
<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>{home.title ? home.title : 'Home'}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<PageBanner title="{home.topBanner.heading ? home.topBanner.heading : 'Building Excellence'}" subTitle="{home.topBanner.paragraph ? home.topBanner.paragraph : ''}" banner="{domain}{home.topBanner.background.data.attributes.formats.large_x2.url ? home.topBanner.background.data.attributes.formats.large_x2.url : home.topBanner.background.data.attributes.url}" bannerMobile="{domain}{home.topBanner.background.data.attributes.formats.medium.url}" extraClass="homebanner" />
<section class="loc-gallery">
	<Container class="child">
		<Row>
			<Col xs="12" class="pb-4">
				<h2>
					<!-- in:textAnimate id="home-builder" gsap-duration="0.5" -->
					{home.homeBuilderHeading ? home.homeBuilderHeading : ''}
				</h2>
			</Col>
			<Col xs="12">
				<div class="loc-gallery__cwrapper" id="build-trust">
					<!-- gsap-delay="1" gsap-duration="1.5" -->
						<div class="h3">
							{@html home.homeBuilderSubHeading ? home.homeBuilderSubHeading : ''}
						</div>
					<div>
						{@html home.homeBuilderParagraph ? home.homeBuilderParagraph : ''}
					</div>
				</div>
			</Col>
		</Row>
	</Container>
	<!-- </ScrollingSection> -->
</section>	


{#if home.homeBuilderBanner.data}
<!-- <Animate> -->
	<section class="bannerOnly--Container">
		<div in:fadeIn id="bannerOnlyImg" gsap-duration="1.5" class="section--bannerOnly" style="--lrbg: url({domain}{home.homeBuilderBanner.data.attributes.formats.large.url ? home.homeBuilderBanner.data.attributes.formats.large.url : home.homeBuilderBanner.data.attributes.url})"></div>
	</section>
<!-- </Animate> -->
{/if}

<section class="categories" >
	<!-- <Animate> -->
	<Container class="categories_wrapper">
		<Row>
			<Col class="text-center">
				<h2 class="text-animate secondary-font" in:textAnimate id="category_title" gsap-duration="0.5">
					{home.categoryGalleryTabHeading ? home.categoryGalleryTabHeading : ''}
				</h2>
				<div class="categories__tabs">
					<div class="categories__tabs__heading">
						<ul in:fly id="categories" gsap-duration="1">
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
					<div class="categories__tabs__gallery" in:fadeIn id="categories_data" gsap-duration="1.5" gsap-delay="1">
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
											<div class="masonry-items"> 
												<!-- in:fly="{{ y: 0, duration: 1000, delay:index * 1500}}" out:fly="{{y:0, duration:1000 }}       -->
												<a data-sveltekit-reload href="/portfolio/{project.attributes.slug}" class="zoomImg">      
													{#if project.attributes.featuredImage.data != null}
													<img src="https://strapi.ulfbuilt.com:1337/{project.attributes.featuredImage.data.attributes.formats.large.url ? project.attributes.featuredImage.data.attributes.formats.large.url : project.attributes.featuredImage.data.attributes.url}" alt="{project.attributes.title}" >   
													{:else}
													<img src="{fallback ? domain+fallback.attributes.url : noFeatured}" alt="{project.attributes.title}" >
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
	<!-- </Animate> -->
</section>



<section class="featured-projects">	
	<Container>
		<!-- <Animate> -->
			<Row>
				<Carousel 
				preHeading={home.featuredProjectsPreHeading ? home.featuredProjectsPreHeading : ''} 
				heading={home.featuredProjectsHeading ? home.featuredProjectsHeading : ''} 
				btnTitle={home.featurePropertyBtnTitle ? home.featurePropertyBtnTitle : 'Button'}
				btnUrl={home.featuredPropertyBtnUrl ? home.featuredPropertyBtnUrl : '#'}
				featuredProjects={home.featuredProjects}/>
			</Row>
		<!-- </Animate> -->
	</Container>
</section>


<section class="tnr" style="--tp-banner: url({domain}{home.midBanner.background.data.attributes.formats.large_x2.url ? home.midBanner.background.data.attributes.formats.large_x2.url : home.midBanner.background.data.attributes.url})" > 
	<Container>
		<Row>
			<Col>
				<Animate>
					<div class="tnr__wrapper">
						<div class="tnr__wrapper__captions">
							<p in:slide id="tnr-preheading" gsap-duration="1">{home.midBanner.paragraph ? home.midBanner.paragraph : ''}</p>
							<h2 class="text-animate" in:textAnimate id="tnr-heading">{home.midBanner.heading ? home.midBanner.heading : ''}</h2>
							<div in:fly id="tnr-button" gsap-delay="0.5" gsap-duration="1.2"  gsap-y="50">
								<a href="{home.midBanner.btnUrl ? home.midBanner.btnUrl : '#'}" class="btn btn-secondary">
									{home.midBanner.btnTitle ? home.midBanner.btnTitle : 'Button'}
								</a>
							</div>
						</div>
					</div>
				</Animate>
			</Col>
		</Row>
	</Container>
</section>



<section class="reputation">
		<Container class="reputation_child">
			<Row>
				<Col md="7" class="">
					<Animate>
						<div class="reputation__content">
							<div class="reputation__content__wrapper">
								<p class="pre-head" in:slide id="reputation-preheading" gsap-duration="1.5">{home.reputation.preHeading ? home.reputation.preHeading : ''}</p>
								<h2 class="text-animate secondary-font" gsap-duration="1.5" in:textAnimate gsap-delay="0.5" id="reputation-heading">{home.reputation.heading ? home.reputation.heading : ''}</h2>
								<div in:fly id="reputation-cont" gsap-delay="1" gsap-duration="1.2"  gsap-y="30">
									<p>{@html home.reputation.content ? home.reputation.content : ''}</p>
									<a href="{home.reputation.btnUrl ? home.reputation.btnUrl : '#'}" class="btn btn-secondary">{home.reputation.btnTitle ? home.reputation.btnTitle : 'Button'}</a>
								</div>
							</div>
						</div>
					</Animate>
				</Col>
				<Col md="5" class="my-auto containerimg" >
					<div class="childimg">
						{#if home.reputation.image.data}
						<Animate>
							<img in:fly id="story-img" gsap-duration="2" gsap-y="30" src="{domain}{home.reputation.image.data.attributes.formats.large.url ? home.reputation.image.data.attributes.formats.large.url : home.reputation.image.data.attributes.url}" alt="{home.reputation.image.data.attributes.alternativeText}" >
						</Animate>
						{/if}
					</div>
					<!-- mobile -->
					<div class="mobileimg">
						{#if home.reputation.image.data}
						<Animate>
							<img in:fly id="story-img" gsap-duration="2" gsap-y="30" src="{domain}{home.reputation.image.data.attributes.formats.large.url ? home.reputation.image.data.attributes.formats.large.url : home.reputation.image.data.attributes.url}" alt="{home.reputation.image.data.attributes.alternativeText}" >
						</Animate>
						{/if}
					</div>
				</Col>
			</Row>
		</Container>
</section>

<section class="process">
	<Container>
		<Row>
			<Col md="6" class="">
				<div class="process__top-image childimg2" >
					{#if home.ourProcessTopImage.data[0]}
					<Animate>
						<img in:fly id="process-top-img" gsap-delay="0.5" gsap-duration="2" gsap-y="30" src="{domain}{home.ourProcessTopImage.data[0].attributes.formats.large.url ? home.ourProcessTopImage.data[0].attributes.formats.large.url : home.ourProcessTopImage.data[0].attributes.url}" alt="{home.ourProcessTopImage.data[0].attributes.alternativeText}"/>
					</Animate>
					{/if}
				</div>
				<!-- Mobile -->
				<div class="process__top-image mobileimg" >
					{#if home.ourProcessTopImage.data[0]}
					<Animate>
						<img in:fly id="process-top-img" gsap-delay="0.5" gsap-duration="2" gsap-y="30" src="{domain}{home.ourProcessTopImage.data[0].attributes.formats.large.url ? home.ourProcessTopImage.data[0].attributes.formats.large.url : home.ourProcessTopImage.data[0].attributes.url}" alt="{home.ourProcessTopImage.data[0].attributes.alternativeText}"/>
					</Animate>
					{/if}
				</div>
			</Col>
		</Row>
		<Row>
			<Col md="7" class="">
				<Animate>
					<div class="process__content containerimg2">
						<div class="process__content__wrapper">
							<p class="pre-head" in:slide id="process-preheading" gsap-duration="1.5">{home.ourProcessPreHeading ? home.ourProcessPreHeading : ''}</p>
							<h2 class="text-animate secondary-font" in:textAnimate gsap-duration="1.5" gsap-delay="0.5" id="process-heading">{home.ourProcessHeading ? home.ourProcessHeading : ''}</h2>
							<div in:fly id="process-cont" gsap-duration="1.2"  gsap-delay="1" gsap-y="30">
								{@html home.ourProcessParagraph ? home.ourProcessParagraph : ''}
								<a href="{home.ourProcessButtonUrl ? home.ourProcessButtonUrl : '#'}" class="btn btn-secondary">{ home.ourProcessButtonTitle ? home.ourProcessButtonTitle : 'Button' }</a>
							</div>
						</div>
					</div>
				</Animate>
			</Col>
			<Col md="5" class="my-auto containerimg3">
				<div class="process__bottom childimg3">
					{#if home.ourProcessRightImage.data}
					<Animate>
						<img in:fly id="process-bottom-img" gsap-duration="2" gsap-y="30" gsap-delay="1.5" src="{domain}{home.ourProcessRightImage.data.attributes.formats.large.url ? home.ourProcessRightImage.data.attributes.formats.large.url : home.ourProcessRightImage.data.attributes.url}" alt="{home.ourProcessRightImage.data.attributes.alternativeText}">
					</Animate>
					{/if}
				</div>
				<!-- mobile -->
				<div class="process__bottom mobileimg">
					{#if home.ourProcessRightImage.data}
					<Animate>
						<img in:fly id="process-bottom-img" gsap-duration="2" gsap-y="30" gsap-delay="1.5" src="{domain}{home.ourProcessRightImage.data.attributes.formats.large.url ? home.ourProcessRightImage.data.attributes.formats.large.url : home.ourProcessRightImage.data.attributes.url}" alt="{home.ourProcessRightImage.data.attributes.alternativeText}">
					</Animate>
					{/if}
				</div>
			</Col>
		</Row>
	</Container>
</section>


<section class="story" >
		<Container>
			<Row>
				<Col md="7" class="">
					<Animate>
						<div class="story__content">
							<div class="story__content__wrapper">
								<p class="pre-head" in:slide id="story-preheading" gsap-duration="1.5">{home.ourStoryPreHeading ? home.ourStoryPreHeading : ''}</p>
								<h2 class="text-animate secondary-font" in:textAnimate id="story-heading" gsap-delay="0.5" gsap-duration="1.5">{home.ourStoryHeading ? home.ourStoryHeading : ''}</h2>
								<div in:fly id="story-cont" gsap-delay="1" gsap-duration="1.2"  gsap-y="30">
									{@html home.ourStoryParagraph ? home.ourStoryParagraph : ''}
								</div>
								
								<!-- <Accordion>
									<AccordionItem active>
										<h4 class="m-0" slot="header"><span>1</span>Custom Homes</h4>
										<p>Lorem ipsum dolor sit amet consectetur. Vitae fringilla velit eros dictumst in amet.</p>
									</AccordionItem>							
								</Accordion>						 -->
							</div>
						</div>
					</Animate>
				</Col>
				<Col md="5" class="my-auto containerimg4">
					<div class="childimg4">
						{#if home.ourStoryRightImage.data}
						<Animate>
							<img in:fly id="story-img" gsap-duration="2" gsap-y="30" src="{domain}{home.ourStoryRightImage.data.attributes.formats.large.url ? home.ourStoryRightImage.data.attributes.formats.large.url : home.ourStoryRightImage.data.attributes.url}" alt="{home.ourStoryRightImage.data.attributes.alternativeText}">
						</Animate>
						{/if}
					</div>	
					<!-- mobile -->
					<div class="mobileimg">
						{#if home.ourStoryRightImage.data}
						<Animate>
							<img in:fly id="story-img" gsap-duration="2" gsap-y="30" src="{domain}{home.ourStoryRightImage.data.attributes.formats.large.url ? home.ourStoryRightImage.data.attributes.formats.large.url : home.ourStoryRightImage.data.attributes.url}" alt="{home.ourStoryRightImage.data.attributes.alternativeText}">
						</Animate>
						{/if}
					</div>	
				</Col>
			</Row>
		</Container>
</section>

<section class="m-0 article-wrapper">
	<Animate>
		<ArticleSection />
	</Animate>
</section>

<section class="m-0 cta-wrapper">
	<Animate>
		<Cta />
	</Animate>
</section>
<!-- <SmoothScroll /> -->
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
		min-height: 80rem;
		padding-top: 5rem;
		padding-bottom: 5rem;
		// @include media-max(ipadmini){
		// 	min-height: unset;
		// }	
		h2{
			font-family: $secondary-font;
			margin-bottom: 1rem;
			color: $secondary-color;
			margin-bottom: 3rem;
			text-align: center;
			font-size: 3rem;
			justify-content: center;
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
		// margin-top: 0;
		margin: 0;
		padding: 0 0 3.75rem;
		min-height: 80rem;
		display: flex;
		align-items: center;
		// :global(.categories_wrapper) {
		// 	max-width: 1440px;
		// }
		@include media-max(ipadmini){
			min-height: unset;
		}	
		h2{
			margin-bottom: 2rem;
			justify-content: center;
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
					margin: 3rem auto;
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
						border-right: 1px solid $gray;	
						transition: 0.3s all;						
						@include media-max(sm){
							width: 15rem;
							padding: 0 1rem;
						}
						&:last-child {
							border: none;
						}
						&:hover{
							background-color: rgba(32, 36, 41, 0.561);	
							transition: 0.3s all;
							span{
								color: #fff;
								&.active{
									color: #fff;
								}
							}
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
				// &__imgs{
				// 	// display: none;
				// 	&.active{
				// 		display: flex;
				// 	}
				// 	div{
				// 		width: 33.33%;
				// 		margin: 0 1rem;
				// 		&:first-child{
				// 			margin-left: 0;
				// 		}
				// 		&:last-child{
				// 			margin-right: 0;
				// 		}						
				// 	}
				// }
			}
		}
		.masonry_container {
            // display: flex;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
			@include media-max(sm){
				gap: 1rem;
				grid-template-columns: repeat(1, 1fr);
			}
            .masonry-items{
                // width: 33%;   
                // overflow: hidden;
                // position: absolute;
                color: white;
                text-align: center;  
                height: 30rem;
                @include media-max(ipadmini){
                    // height: 20rem;
					height: 50vh;
                }
                // @include media-max(sm){
                //     height: 10rem;
                // }
                a{
                    display: block;
                    height: 100%;
                    width: 100%;
                    // margin: 0 1.125rem;
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
			p{
				font-size: 1.5rem;
				opacity: 0;
			}
			h2{
				font-family: $primary-font;
				margin: 1rem 0 2rem;
				text-transform: uppercase;
				font-size: 2.688rem;
				@include media-max(sm){
					font-size: 2rem;
				}
				opacity: 0;
			}
			#tnr-button {
				opacity: 0;
			}
			.btn{
				// background-color: #1E2D39;
				//opacity: 0;
			}				
		}
	}

	.featured-projects{
		padding: 5rem 0 13.75rem;
		margin: 0;
		min-height: 80rem;
		display: flex;
		align-items: center;
		padding-bottom: 5rem;
		overflow: hidden;
		@include media-max(ipadmini){
			min-height: unset;
		}	
		@include media-max(sm){
			// margin: 5rem 0;
			margin: 0;
			padding: 0;
		}
	}

	.reputation{
		padding-top: 7rem;
		padding-bottom: 3.75rem;
		min-height: 80rem;
		display: flex;
		align-items: center;
		// :global(.container){
		// 	@include media-max(md){
		// 		padding-left: 1.8rem;
		// 		padding-right: 1.8rem;
		// 	}	
		// 	@include media-max(sm){
		// 		padding-left: 1.8rem;
		// 		padding-right: 1.8rem;
		// 	}			
		// }
		@include media-max(ipadmini){
			min-height: unset;
		}	
		@include media-max(sm){
			margin: 0;
			padding-top: 5rem;
			padding-bottom: 1.5rem;
		}		
		@include media-max(xs){
		}		
		&__content{
			height: 41.875rem;
			@include media-max(lg){
				height: 30rem;
			}	
			@include media-max(ipadmini){
				height: 20rem;
			}
			@include media-max(sm){
				height: auto;
			}	
			display: flex;
			align-items: center;
			position: relative;		
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
				#reputation-cont {
					opacity: 0;
				}						
				.pre-head {
					color: $primary-color;
					margin-bottom: 1rem;
					font-weight: 500;
				}
				h2{
					margin: 1rem 0 2rem;
					line-height: 4.5rem;
					opacity: 0;
					// flex-wrap: wrap;
					// width: 25rem;
					@include media-max(lg){
						line-height: 3rem;
						margin: 1rem 0;
					}	
				}
				:global(p){
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
		.mobileimg {
			display: none;
		}
		@include media-max(sm){
			.mobileimg {
				display: block;
			}
			.childimg {
				display: none;
			}
		}	
		img{
			position: relative;
			z-index: 5;
			height: 31.25rem;
			width: 100%;
			object-fit: cover;
			@include media-max(lg){
				height: 25rem;
			}
			@include media-max(ipadmini){
				height: 15rem;
			}	
			@include media-max(sm){
				height: auto;
			}	
		}		
	}	

	.process{
		margin: 7rem 0;	
		padding-bottom: 7rem;
		min-height: 80rem;
		display: flex;
		align-items: center;
		@include media-max(ipadmini){
			min-height: unset;
		}	
		@include media-max(sm){
			padding-bottom: 0;
		}		
		&__top-image{
			text-align: right;
    		margin-bottom: -3rem;
			z-index: 5;
			position: relative;
			@include media-max(default){
				margin-bottom: 0rem;	
				text-align: center;
			}	
			@include media-max(lg){
				margin-bottom: 1rem;	
				margin-left: 1.5rem;
			}		
			@include media-max(sm){
				text-align: left;
				margin-bottom: 0;	
				margin-left: 0;
			}				
			img{
				// max-width: 30rem;
				// height: 28.125rem;
				// @include media-max(lg){
				// 	height: auto;
				// }	
				// @include media-max(sm){
				// 	max-width: 70vw;
				// }	
				object-fit: cover;
				height: 27.5rem;
				width: 80%;
				@include media-max(lg){
					height: 25rem;
					width: 100%;
				}	
				@include media-max(ipadmini){
					height: 15rem;
				}	
				@include media-max(sm){
					height: auto;
				}	
			}
		}
		&__content{
			height: 43rem;
			@include media-max(lg){
				height: 35rem;
			}	
			@include media-max(ipadmini){
				height: 30rem;
			}	
			@include media-max(sm){
				height: auto;
				margin-top: 3rem;
			}	
			display: flex;
			align-items: center;
			position: relative;		
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
				.pre-head {
					color: $primary-color;
					margin-bottom: 1rem;
					font-weight: 500;
				}
				h2{
					margin: 1rem 0 2rem;
					line-height: 4.5rem;
					// flex-wrap: wrap;
					// width: 41rem;
					@include media-max(lg){
						line-height: 3rem;
						margin: 1rem 0;
					}	
				}
				:global(p){
					line-height: 2rem;
					margin-bottom: 2rem;
				}
				.btn{
					@include media-max(sm){
						display: inherit;
						margin: 3rem auto;
					}							
				}
				#process-cont {
					opacity: 0;
				}	
			}		
		}
		&__bottom{	
			@include media-max(sm){
				text-align: right;
			}							
			img{
				// @include media-max(sm){
				// 	max-width: 70vw;
				// }	
				height: 31.25rem;
				width: 100%;
				object-fit: cover;
				@include media-max(lg){
					height: 25rem;
				}
				@include media-max(ipadmini){
					height: 15rem;
				}	
				@include media-max(sm){
					height: auto;
				}	
			}			
		}
		.mobileimg {
			display: none;
		}
		@include media-max(sm){
			.mobileimg {
				display: block;
			}
			.childimg2, .childimg3 {
				display: none;
			}
		}	
		img{
			position: relative;
		}		

	}	

	.story{
		margin: 7rem 0 3.75rem;
		min-height: 80rem;
		display: flex;
		align-items: center;
		@include media-max(ipadmini){
			padding-bottom: 7rem;
			min-height: unset;
		}
		@include media-max(sm){
			padding-bottom: 0;
		}	
		&__content{
			height: 41.875rem;
			@include media-max(lg){
				height: 30rem;
			}
			@include media-max(ipadmini){
				height: 20rem;
			}	
			@include media-max(sm){
				height: auto;
			}	
			display: flex;
			align-items: center;
			position: relative;						
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
					height: 200%;	
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
				.pre-head {
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
				#story-cont {
					opacity: 0;
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
		.mobileimg {
			display: none;
		}
		@include media-max(sm){
			.mobileimg {
				display: block;
			}
			.childimg4 {
				display: none;
			}
		}
		img{
			position: relative;
			z-index: 5;
			height: 31.25rem;
			width: 100%;
			object-fit: cover;
			@include media-max(lg){
				height: 25rem;
			}
			@include media-max(ipadmini){
				height: 15rem;
			}	
			@include media-max(sm){
				height: auto;
				margin-top: 2rem;
			}	
			// @include media-max(ipadmini){
			// 	margin-top: 2rem;
			// }
		}		
	}	

	.living-room{
		height: 30vw;		
	}

	.bannerOnly--Container {

		padding: 5rem 0;

		.section--bannerOnly{
			background-image: var(--lrbg);
			background-size: cover;
			height: 90vh;
			width: 100%;
			margin: 0 auto;
			opacity: 1;
			// padding-bottom: 3.75rem;
			@include media-max(ipadmini){
				height: 40vh;
			}
			@include media-max(sm){
				height: 40vh;
			}
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