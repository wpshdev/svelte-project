<script lang="ts">
	export let data;
	import { Col, Container, Row } from "sveltestrap";
    import leftImg from "$lib/img/left-img.png";
    import topImg from "$lib/img/top-img.jpg";
    import bottomImg from "$lib/img/bottom-img.jpg";	
	import banner from "$lib/img/slide1.jpg";
	import galImg from "$lib/img/gal-img.jpg";	
	import firstImg from "$lib/img/gal-img1.png";
	import scndImg from "$lib/img/gal-img2.jpg";
	import thirdImg from "$lib/img/gal-img3.jpg";		
	import stairs from "$lib/img/stairs.jpg";
	import livingRoom from "$lib/img/living-room.jpg";		
	import lvThropy from "$lib/img/lvThropy.jpg";	
	import panther from "$lib/img/panther.png";	
	import Testimonial from "../components/Testimonial.svelte";
	import Carousel from "../components/Carousel.svelte";
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';

	let image_collections = [
	"https://source.unsplash.com/uFdRfAkM1DM",
	"https://source.unsplash.com/RQOABS5RH0M",
	"https://source.unsplash.com/YhPYgb8ZCBw",	
	"https://source.unsplash.com/E5lK_COkD2E"
	];	

	console.log(data);
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="ULF BUILT" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
	<script type="text/javascript">
$(window).bind("load", function() {
	if ($(this).scrollTop()>0){
        $('header').fadeOut();
     }
    else{
      $('header').fadeIn();
     }

	var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2550,
    delay: (el, i) => 150 * (i+1)
  })
});
	</script>
</svelte:head>
<section class="homebanner" style="--banner: url({banner})">
	<Container>
		<Row>
			<Col sm={{ size: 7, offset: -5 }}>
				<div class="homebanner__content">
					<div class="homebanner__content__text">
						<h1 class="ml3">
							<span class="text-wrapper">
								<span class="letters">We Build Serene Dreams</span>
							  </span>
						</h1>
					</div>
					<a href="/" class="homebanner__content__btn homebanner__content--btn">Learn what makes us different</a>
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="gallery">
	<Container>
		<Row>
			<Col md="12">
				<div class="gallery__container">
					<figure class="gallery__container__figure gallery__container--first-img">
						<div class="gallery__container__figure__overlay">
							<a href="/" class="gallery__container__overlay__link">
								<span>4</span>
								<p>New Construction</p>
							</a>
						</div>
						<img src="{leftImg}" alt="Mountain Top">
					</figure>
					<figure class="gallery__container__figure gallery__container--top-img">
						<img src="{topImg}"  alt="Mountain Top Interior">
					</figure>
					<figure class="gallery__container__figure gallery__container--bottom-img">
						<img src="{bottomImg}"  alt="Lakehouse">
					</figure>	
				</div>							
			</Col>
		</Row>
	</Container>
</section>

<section class="sticky-content">
	<Container>
		<Row>
			<Col md="12">
				<h2 class="sticky-content__heading text-center">Jagdschloss Vail</h2>
			</Col>
			<Col md="5">
				<div class="sticky-content__img sticky-content--top-text">
					<p>"This Castle in Colorado exudes grandeur with its rugged, locally sourced stone walls and curved, wood and wrought iron staircases. </p>
					<p>Its traditional design is further enhanced by a mountain lion sculpture that guards the property. </p>
					<p>	Inside, you'll find reclaimed wood cabinetry in the kitchen and unique details like rough-cut granite countertops, seamlessly blending light and dark stone for a cohesive old-world mountain home aesthetic."</p>
				</div>
				<div class="sticky-content__img sticky-content--first-img">
					<img src="{firstImg}" alt="gallery">
				</div>
				<div class="sticky-content__img sticky-content--canvass">
				</div>				
				<div class="sticky-content__img sticky-content--scnd-img">
					<img src="{scndImg}" alt="gallery">					
				</div>
				<div class="sticky-content__img sticky-content--canvass">
				</div>					
				<div class="sticky-content__img sticky-content--third-img">
					<img src="{thirdImg}" alt="gallery">					
				</div>								
			</Col>
			<Col md="7">
				<div class="sticky-content__left_img">
					<img src="{galImg}" alt="gallery">	
				</div>
				<div class="sticky-content__texts">
					<Row>
						<Col>
							<h3 class="text-center">Jagdschloss Vail</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>Notice intricate details like reclaimed wood kitchen cabinetry, covering the stainless appliances. The rough finished edges on the slab granite countertops, tie together the dark granite with the light natural stone. Grain matching countertops and thoughtful stonework are built throughout this old world style mountain house.						</p>
						</Col>
						<Col>
							<p>Notice intricate details like reclaimed wood kitchen cabinetry, covering the stainless appliances. The rough finished edges on the slab granite countertops, tie together the dark granite with the light natural stone. Grain matching countertops and thoughtful stonework are built throughout this old world style mountain house.						</p>
						</Col>					
					</Row>
				</div>
			</Col>			
		</Row>
	</Container>
</section>

<section class="sticky-content2">
	<img src="{stairs}" alt="stairs" class="sticky-content2__bg">
	<Container>
		<Row>
			<Col md="5">
				<div class="sticky-content2__img sticky-content2--first-img">
					<img src="{firstImg}" alt="gallery">
				</div>			
				<div class="sticky-content2__img sticky-content2--canvass">
				</div>					
				<div class="sticky-content2__img sticky-content2--scnd-img">
					<img src="{scndImg}" alt="gallery">					
				</div>
				<div class="sticky-content2__img sticky-content2--canvass">
				</div>					
				<div class="sticky-content2__img sticky-content2--third-img">
					<img src="{thirdImg}" alt="gallery">					
				</div>	
			</Col>
			<Col md="7">
				<div class="sticky-content2__texts">
					<Row>
						<Col>
							<h3>Hand Hewn Wood Beams</h3>
						</Col>
					</Row>
					<Row>
						<Col>							
							<p>We love solid, exposed hand hewn wood beams. Old-world building styles makes for strong and remarkable ceiling lines and lifted roofs. </p>
							<p>Lifting and opening the architecture of a home with natural elements like finished logs and exposed beams is our builder signature. On this project, our team worked with the Owner’s Architect to build this incredible home.</p>
							<p>I can elaborate about how we schedule, and the frequency of meetings, and how we load photos and walk-throughs and aerial drone video for owners positioned around the world.</p>
						</Col>
						<Col>
							<p>We can talk about the strength of our team, and how we successfully manage teams of Stonemasons, Ironworkers and Woodworkers.</p>
							<p>Together we built a Traditional Old World style European Castle with durable natural materials, fused with modern materials. A Colorado Castle built with natural stone to withstand the elements. A true asset of heritage and culture, Built with the team at ULFBUILT.</p>
							<div class="sticky-content2__texts__cta">
								<h4>Tell us about your project</h4>
								<p>We want to know about you and building your dream home</p>
								<a href="/" class="btn">Talk to Us</a>
							</div>
						</Col>									
					</Row>
				</div>			
			</Col>			
		</Row>
	</Container>
</section>

<section class="living-room section--bannerOnly" style="--lrbg: url({livingRoom})">
</section>

<Testimonial testimonial="This is pinnacle Colorado Castle. From the rough cut local stone that covers the interior and exterior walls, to the curved torched wood and wrought iron staircases, this is a traditional castle." />

<section class="lv-thropy section--bannerOnly" style="--lrbg: url({lvThropy})">
</section>

<Testimonial testimonial="Lifting and opening the architecture of a home with natural elements like finished logs and exposed beams is our builder signature." />

<section class="carousel">
	<Container>
		<Row>
			<Col>
				<Carousel images={image_collections}/>			
			</Col>
		</Row>
	</Container>
</section>

<Testimonial testimonial="Together we built a Traditional Old World style European Castle with durable natural materials, fused with modern materials. A true asset of heritage and culture, Built with the team at ULFBUILT." />

<section class="contact-form">
	<Container>
		<Row>
			<Col md="6">
				<p>Lifting and opening the architecture of a home with natural elements like finished logs and exposed beams is our builder signature. On this project, our team worked with the Owner’s Architect to build this incredible home.</p>
				<p>I can elaborate about how we schedule, and the frequency of meetings, and how we load photos and walk-throughs and aerial drone video for owners positioned around the world. But most importantly, I want to share why we think exposed beams are such an important part of a beautiful luxury home.</p>
				<p>The natural patterns in wood are unique and striking, adding beauty and texture to any space. And because wood is a natural material, it breathes, which means it helps keep your home comfortable and healthy. When you choose Vail Valley house remodeler ULFBUILT, you’re getting a team of experts with years of experience in creating beautiful homes with exposed beams.</p>
				<p>We’ll work with you every step of the way to make sure your home is everything you dream it can be.</p>
			</Col>
			<Col md="6">
				<div class="contact-form__form">
					<h2>Get in touch with us</h2>
					<Form method="post" class="">
						<FormGroup>
							<Input placeholder="Full Name" />
						</FormGroup>
						<FormGroup>
							<Input type="email" placeholder="Email" />
						</FormGroup>
						<FormGroup>
							<Input type="tel" placeholder="Phone Number" />
						</FormGroup>
						<FormGroup>
							<Input type="textarea" id="yourMessage" placeholder="Tell us about your project.." rows="5" />
						</FormGroup>
						<Button>Send Email</Button>
					</Form>		
				</div>		
			</Col>			
		</Row>
	</Container>
</section>

<section class="img-section">
	<Container>
		<Row>
			<Col>
				<img src="{panther}" alt="">
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
.ml3 {
  font-weight: 900;
  font-size: 3.5em;
}
	.homebanner{
		background-image: var(--banner);
		background-size: cover;
		min-height: 100vh;
		background-position: bottom;
		background-size: cover;
		padding-top: 9rem;		
		margin: 0;
		&__content{
			position: absolute;
    		bottom: 20%;
			max-width: 800px;
			&__text{
				h1{
					color:#fff;
					text-transform: uppercase;
					font-family: 'Roboto';
					font-weight: 900;
					font-size: 5rem;		
					margin-bottom: 2rem;			
				}
			}
			&__btn{
					border: 1px solid #fff;
					padding: 1.5rem 4rem;					
					text-decoration: none;
					color: #fff;
					font-family: 'Times New Roman', Times, serif;
					text-transform:lowercase;
			}			
		}
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