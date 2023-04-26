<script lang="ts">
	export let data;
	import { Col, Container, Row } from "sveltestrap";
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";
	import Animate from "$lib/components/Animate.svelte";
	import TextTransition from "$lib/TextTransition.svelte";

	import PortfolioCarousel from "$lib/PortfolioCarousel.svelte";
    
	const images = [
        "https://source.unsplash.com/uFdRfAkM1DM",
        "https://source.unsplash.com/RQOABS5RH0M",
        "https://source.unsplash.com/YhPYgb8ZCBw",	
        "https://source.unsplash.com/E5lK_COkD2E"
    ];

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<section class="portfolio-gallery" >
	<Container>
		<Row>
			<Col class="text-center">
				<div class="portfolio-gallery__content">
					<span>Project</span>
					<h1>Modern Mountain White</h1>
					<p>
						The Modern Mountain White Brown home offers a spacious and stylish major house remodel.
						Notice the lines of sight from different positions of the photographer,
						and how rooms are separated yet easily accessible with interesting angles.						
					</p>
				</div>
			</Col>
		</Row>
		<Row class="portfolio-gallery__slider">
			<PortfolioCarousel {images} />
		</Row>		
	</Container>
</section>

<style lang="scss">

</style>