<script>
	import { Col, Container, Row } from "sveltestrap";
    import leftImg from "$lib/img/left-img.png";
    import topImg from "$lib/img/top-img.jpg";
    import bottomImg from "$lib/img/bottom-img.jpg";	
	import banner from "$lib/img/slide1.jpg";
	import firstImg from "$lib/img/gal-img1.png";
	import scndImg from "$lib/img/gal-img2.jpg";
	import thirdImg from "$lib/img/gal-img3.jpg";		
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<section class="homebanner" style="--banner: url({banner})">
	<Container>
		<Row>
			<Col sm={{ size: 7, offset: -5 }}>
				<div class="homebanner__content">
					<div class="homebanner__content__text">
						<h1>We Build Serene Dreams</h1>
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
			<Col md="12" class="position-sticky top-0">
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
				<div class="sticky-content__img sticky-content--scnd-img">
					<img src="{scndImg}" alt="gallery">					
				</div>
				<div class="sticky-content__img sticky-content--third-img">
					<img src="{thirdImg}" alt="gallery">					
				</div>								
			</Col>
			<Col md="7">
				<div class="sticky-content__left_img">
					<img src="{scndImg}" alt="gallery">	
				</div>
				<div class="sticky-content__texts">
					<Row>
						<Col>
							<h2>Jagdschloss Vail</h2>
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

<style lang="scss">
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
				&:hover{
					.gallery__container__figure__overlay{
						left: 0;
						bottom: 0;
						background-color: rgba(0, 0, 0, 0.15);
					}
				}				
				&__overlay{
					position: absolute;
					left: -100%;
					bottom: -100%;
					transition: 0.5s;
					height: 100%;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
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
		}
		&__img{
			background: #fff;
			margin-bottom: 50rem;
			position: sticky;
			top: 20%;			
			img{
				width: 100%;
			}
		}
		&--top-text{
			z-index: -3;
			margin-bottom:50rem;
		}
		&--first-img{
			z-index: -2;
			margin-bottom: 50rem;
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
		}
		&__texts{
			position: sticky;
			top: 20%;
			margin-top: 80rem;
			z-index: 2;
			background-color: #fff;
			height: 650px;
		}			
	}
</style>