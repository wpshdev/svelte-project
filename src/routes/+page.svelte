<script lang="ts">
	export let data;
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import banner from "$lib/img/first-section.svg";
	import Testimonial from "../components/Testimonial.svelte";
	// import Carousel from "../components/Carousel.svelte";
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";
	import Animate from "$lib/components/Animate.svelte";
	import TextTransition from "$lib/TextTransition.svelte";
	import ImageSlider from '$lib/ImageSlider.svelte';
	import Carousel from "$lib/Carousel.svelte";
	import modern from "$lib/img/modern.svg";
	import mountain from "$lib/img/mountain.svg";
	import traditional from "$lib/img/traditional.svg";		
	import tr from "$lib/img/tnr.svg";		
	import reputationImg from "$lib/img/Reputation.svg";		
	import lroom from "$lib/img/Process-Lroom.svg";
	import stair from "$lib/img/Process-Stair.svg";
	import ArticleSection from "$lib/components/layout/ArticleSection.svelte";
	import Cta from "$lib/components/layout/Cta.svelte";


    const images = [
        modern,
        mountain,
        traditional
    ];

	let activeTab = 'modern';

	function handleTabClick(category) {
		activeTab = category;
	}	

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<section class="homebanner" style="--banner: url({banner})">
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
</section>
<section class="loc-gallery">
	<Container>
		<Row>
			<Col class="text-center">
				<div class="loc-gallery__cwrapper">
					<h2>Home Builder in Vail, Colorado</h2>
					<p>Building trust important.</p>
					<div class="loc-gallery__cwrapper__btns">
						<a href="#" class="btn btn-primary">
							Find Location
						</a>
						<a href="#" class="btn btn-inverted">
							Explore Our Gallery
						</a>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</section>
<section class="categories">
	<Container>
		<Row>
			<Col class="text-center">
				<h2>what are you looking for?</h2>
				<div class="categories__tabs">
					<div class="categories__tabs__heading">
						<ul>
						  <li>
							<span
							  data-category="modern"
							  class:active="{activeTab === 'modern'}"
							  on:click="{() => handleTabClick('modern')}">
							  Modern
							</span>
						  </li>
						  <li>
							<span
							  data-category="mountain"
							  class:active="{activeTab === 'mountain'}"
							  on:click="{() => handleTabClick('mountain')}">
							  Mountain
							</span>
						  </li>
						  <li>
							<span
							  data-category="traditional"
							  class:active="{activeTab === 'traditional'}"
							  on:click="{() => handleTabClick('traditional')}">
							  Traditional
							</span>
						  </li>
						  <li>
							<span
							  data-category="commercial"
							  class:active="{activeTab === 'commercial'}"
							  on:click="{() => handleTabClick('commercial')}">
							  Commercial
							</span>
						  </li>
						</ul>
					  </div>
					<div class="categories__tabs__gallery">
						<div 
							id="modern"
							class="categories__tabs__gallery__imgs"
							class:active="{activeTab === 'modern'}" 						
							>						
							<div>
								<img src="{modern}" alt="modern">
							</div>
							<div>
								<img src="{modern}" alt="modern">
							</div>
							<div>
								<img src="{modern}" alt="modern">
							</div>																				
						</div>
						<div 
							id="mountain"
							class="categories__tabs__gallery__imgs"
							class:active="{activeTab === 'mountain'}"						
							>						
							<div>
								<img src="{mountain}" alt="modern">
							</div>
							<div>
								<img src="{mountain}" alt="modern">
							</div>
							<div>
								<img src="{mountain}" alt="modern">
							</div>																				
						</div>
						<div 
							id="traditional"
							class="categories__tabs__gallery__imgs"
							class:active="{activeTab === 'traditional'}">						
							<div>
								<img src="{traditional}" alt="modern">
							</div>
							<div>
								<img src="{traditional}" alt="modern">
							</div>
							<div>
								<img src="{traditional}" alt="modern">
							</div>																				
						</div>
						<div 
							id="commercial"
							class="categories__tabs__gallery__imgs"
							class:active="{activeTab === 'commercial'}">						
							<div>
								<img src="{modern}" alt="modern">
							</div>
							<div>
								<img src="{mountain}" alt="modern">
							</div>
							<div>
								<img src="{traditional}" alt="modern">
							</div>																					
						</div>																		
					</div>					
				</div>
			</Col>
		</Row>
	</Container>
</section>
<section class="featured-projects">
	<Container>
		<Row>
			<Carousel {images} />
		</Row>
	</Container>
</section>

<section class="tnr" style="--tp-banner: url({tr})">
	<Container>
		<Row>
			<Col>
				<div class="tnr__wrapper">
					<div class="tnr__wrapper__captions">
						<span>Sustainability</span>
						<h2>Transform & Renew</h2>
						<a href="#" class="btn btn-secondary">
							More About this Initiative
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
						<span>Our Home</span>
						<h2>Reputation is everything to us</h2>
						<p>
							Quality is our priority. And our process is just as important as the result. Our work speaks for itself.						
						</p>
						<a href="#" class="btn btn-primary">View Collection</a>
					</div>
				</div>
			</Col>
			<Col md="4" class="my-auto">
				<img src="{reputationImg}" alt="reputation">
			</Col>
		</Row>
	</Container>
</section>

<section class="process">
	<Container>
		<Row>
			<Col md="6">
				<div class="process__top-image">
					<img src="{lroom}" alt="Living Room">
				</div>
			</Col>
		</Row>
		<Row>
			<Col md="8" class="">
				<div class="process__content">
					<div class="process__content__wrapper">
						<span>Our Process</span>
						<h2>We want to be the best 
							not the biggest</h2>
						<p>
							Our process is different. Working with us mean working with personal attention and closely listening to you. From Start to Finish, we view our relationship with you like a good marriage.
						</p>
						<p>
							Our project management is efficient and effective. We keep the personal touch and care about you while maintaining your goals. We treat your project like it's ours.						
						</p>
						<a href="#" class="btn btn-primary">View Collection</a>
					</div>
				</div>
			</Col>
			<Col md="4" class="my-auto">
				<img src="{stair}" alt="Stair">
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
						<span>Our Story</span>
						<h2>Transform and Renew</h2>
						<p>
							When you hiring pros to come in and reimagine your space, you would be surprised at what is possible. Remodeling and thinking outside your box is our specialty.						
						</p>
						<Accordion>
							<AccordionItem active>
								<h4 class="m-0" slot="header"><span>1</span>Custom Homes</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Vitae fringilla velit eros dictumst in amet.</p>
							  </AccordionItem>							
						</Accordion>						
					</div>
				</div>
			</Col>
			<Col md="4" class="my-auto">
				<img src="{reputationImg}" alt="story">
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

	.loc-gallery{
		&__cwrapper{
			h2{
				font-size: 3rem;
				font-family: $secondary-font;
				margin-bottom: 1rem;
				color: $secondary-color;
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
			margin-bottom: 3rem;
			font-size: 3rem;			
		}
		&__tabs{
			&__heading{
				ul{
					display: flex;
					flex-wrap: wrap;
					margin-bottom: 2rem;
					li{
						list-style: none;
						width: 25%;		
						span{				
							font-family: $secondary-font;
							font-size: 2rem;
							color: #D8D7D7;
							text-transform: uppercase;
							margin-bottom: 2em;
							border-bottom: 3px solid #D8D7D7;
							font-weight: 500;
							cursor: pointer;
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
				font-size: 3rem;
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
	}

	.reputation{
		margin: 7rem 0 3.75rem;
		&__content{
			height: 35vw;
			display: flex;
			align-items: center;
			position: relative;
			&:after{
				position: absolute;
				background: #E5EEF2;
				width: 130%;
				content: "";
				height: 100%;				
			}
			&__wrapper{
				max-width: 29rem;
				z-index: 2;
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
			img{
				max-width: 25rem;
			}
		}
		&__content{
			height: 40vw;
			display: flex;
			align-items: center;
			position: relative;
			&:after{
				position: absolute;
				background: #F2F2F2;
				width: 130%;
				content: "";
				height: 100%;				
			}
			&__wrapper{
				max-width: 40rem;
				z-index: 2;
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
			&:after{
				position: absolute;
				background: #E5EEF2;
				width: 130%;
				content: "";
				height: 100%;				
			}
			&__wrapper{
				max-width: 43rem;
				z-index: 2;
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