<script lang="ts">
	export let data;
	import { Col, Container, Row } from "sveltestrap";
    import leftImg from "$lib/img/left-img.png";
    import topImg from "$lib/img/top-img.jpg";
    import bottomImg from "$lib/img/bottom-img.jpg";	
	import banner from "$lib/img/first-section.svg";
	import galImg from "$lib/img/gal-img.jpg";	
	import firstImg from "$lib/img/gal-img1.png";
	import scndImg from "$lib/img/gal-img2.jpg";
	import thirdImg from "$lib/img/gal-img3.jpg";		
	import stairs from "$lib/img/stairs.jpg";
	import livingRoom from "$lib/img/living-room.jpg";		
	import lvThropy from "$lib/img/lvThropy.jpg";	
	import panther from "$lib/img/panther.png";	
	import Testimonial from "../components/Testimonial.svelte";
	// import Carousel from "../components/Carousel.svelte";
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";
	import Animate from "$lib/Animate.svelte";
	import TextTransition from "$lib/TextTransition.svelte";
	import ImageSlider from '$lib/ImageSlider.svelte';
	import Carousel from "$lib/Carousel.svelte";
	import modern from "$lib/img/modern.svg";
	import mountain from "$lib/img/mountain.svg";
	import traditional from "$lib/img/traditional.svg";		

    const images = [
        modern,
        mountain,
        traditional
    ];
	console.log(modern);

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

<section class="tnr">
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

<section class="home-cta">
	<Container>
		<Row>
			<Col class="text-center">
				<h2>Tell us about your project</h2>
				<p>We want to know about yo and building your dream home</p>
				<a href="#" class="btn button">Talk to Us</a>
			</Col>
		</Row>
	</Container>
</section>

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

	.featured-projects{
		margin: 10rem 0;
	}

	.gallery{
		&__container{
			display: grid;
			grid-template-columns: repeat(2, 2fr);
			grid-template-rows: repeat(2, 20vw);
			grid-gap: 1.5rem;		
			&__figure{
				margin-bottom: 0;
				position: relative;
				overflow: hidden;
				img{
					transition: 0.3s;
				}
				&:hover{
					.gallery__container__figure__overlay{
						opacity: 1;
						background-color: rgba(0, 0, 0, 0.15);
					}
					img{
						transform: scale(1.2);
						transition: 0.3s
					}
				}				
				&__overlay{
					position: absolute;
					transition: 0.5s;
					height: 100%;
					width: 100%;
					display: flex;
					opacity: 0;
					align-items: center;
					justify-content: center;
					text-align: center;
					top: 0;
					z-index: 2;
					left: 0;
					a{
						color: #fff;
						text-decoration: unset;
						span{
							font-size: 4rem;
						}
						p{
							font-size:1.2rem;	
							text-transform: uppercase;		
							position: relative;
							&:after{
								margin: 0 auto;
								content: "";
								height: 5px;
								background: #E977C9;
								width: 50%;
								position: absolute;
								bottom: -1rem;
								left: 0;
								right: 0;								
							}			
						}
					}		
				}
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;					
				}
			}	
			&--first-img{
				grid-column-start: 1;
				grid-column-end: 1;
				grid-row-start: 1;
				grid-row-end: 3;				
			}
			&--top-img{
				grid-column-start: 2;
				grid-column-end: 2;
				grid-row-start: 1;
				grid-row-end: 1;			
			}
			&--bottom-img{
				grid-column-start: 2;
				grid-column-end: 2;
				grid-row-start: 2;
				grid-row-end: 2;				
			}
		}
	}

	.sticky-content{
		div{
			background-color: #fff;
		}
		&__heading{
			margin-top: 4%;
			background: #fff;
			font-weight: 300;
			letter-spacing: .5rem;
			margin-bottom: 3rem;			
		}
		&__img{
			background: #fff;
			margin-bottom: 5rem;
			position: sticky;
			top: 20%;			
			img{
				width: 100%;
			}
		}
		&--top-text{
			z-index: -4;
			// margin-bottom:50rem;
			height: 50rem;			
			p{
				line-height: 2rem;
			}
		}
		&--first-img{
			z-index: -2;
		}
		&--canvass{
			z-index: -3;
			height: 80rem;
			width: 100%;
		}
		&--scnd-img{
			z-index: -1;
		}		
		&--third-img{
			z-index: 1;
		}	

		&__left_img{
			position: sticky;
			top: 20%;
			margin-bottom: 0rem;
			z-index: 0;
			img{
				width: 100%;
			}
		}
		&__texts{
			position: sticky;
			top: 20%;
			margin-top: 80rem;
			z-index: 2;
			background-color: #fff;
			height: 45rem;
			h3{
				font-size: 2rem;
				font-weight: 300;
				color: #00ADEE;
				margin-bottom: 3rem;				
			}
			p{
				line-height: 2;
				@media(min-width:768px){
					margin-left: 1rem;
				}
			}
		}			
	}

	.sticky-content2{
		&__bg{
			width: 100%;
			margin-bottom:7rem;
		}
		&__img{
			background: #fff;
			margin-bottom: 10rem;
			position: sticky;
			top: 20%;			
			img{
				width: 100%;
			}
		}
		&--first-img{
			z-index: -2;
		}
		&--scnd-img{
			z-index: -1;
		}		
		&--third-img{
			z-index: 1;
		}
		&--canvass{
			z-index: -3;
			height: 50rem;
			width: 100%;
		}		
		&__texts{
			position: sticky;
			top: 20%;
			z-index: 2;
			background-color: #fff;
			height: 45rem;
			@media(min-width:768px){
					margin-left: 1rem;
				}			
			h3{
				font-size: 2rem;
				font-weight: 300;
				color: #00ADEE;
				margin-bottom: 3rem;				
			}
			p{
				line-height: 2;
				
			}

			&__cta{
				border: 1px solid #ACA7A7;
				padding: 1.5rem;
				text-align: center;
				h4{
					font-size: 1.2rem;
					font-weight: 400;
					color: #00ADEE;
					margin-bottom: 1rem;					
				}	
				a{
					padding: 1rem 1.8rem;
					background: #00adee;
					color: #fff;
					text-decoration: none;
					margin-bottom: -20%;		
					border-radius: 0;			
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
	
	.home-cta{
		margin: 10rem 0;
		h2{
			color: #00ADEE;
		}
		.btn{
			margin-top: 3rem;
			color: #fff;
			padding: 0.8rem 4rem;
		}
	}
	// .contact-form{
	// 	&__form{
	// 	padding: 2rem;
	// 	margin: 0 auto;
	// 	max-width: 400px;
	// 	}
	// }
</style>