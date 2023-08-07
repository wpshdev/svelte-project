<script lang="ts">
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import ctabg from "$lib/img/CTA-BG.svg";
	import { onMount } from "svelte";
	import axios from "axios";
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	import { fade, fly } from 'svelte/transition';
	import Animate from "$lib/components/Animate.svelte";

	const domain = "https://strapi.ulfbuilt.com:1337"
	let promise = fetchCta();
	async function fetchCta(){
		const url = 'https://strapi.ulfbuilt.com:1337/api/global-cta?populate=deep,2';
		const headers = {
			Authorization: 'Bearer ' + PUBLIC_STRAPI_API
		};

		try {
			const response = await axios.get(url, { headers });
			console.log(response)
			return response.data.data.attributes;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		promise = fetchCta();
	});

</script>
{#await promise}
{:then ctaData} 
	<section class="home-cta" style="--cta-banner: url({domain}{ctaData.backgroundImage.data.attributes.formats.large_x2.url ? ctaData.backgroundImage.data.attributes.formats.large_x2.url : ctaData.backgroundImage.data.attributes.url})">
		<Animate>
			<Container>
				<Row>
					<Col class="text-center">
						<div class="home-cta__container" in:fly={{duration: 2000,y: 50, delay: 1000}}>
							<div class="home-cta__wrapper">
								<h2>{ctaData.heading ? ctaData.heading : ''}</h2>
								{@html ctaData.paragraph ? ctaData.paragraph : ''}
								<a href="{ctaData.btnUrl ? ctaData.btnUrl : '#'}" class="btn btn-secondary">{ctaData.btnTitle ? ctaData.btnTitle : 'Button'}</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Animate>
	</section>	
{/await}
<style lang="scss">
	.home-cta{
		margin: 0;
		background-image: var(--cta-banner);
		background-size: cover;
		min-height: 20vh;
		background-attachment: fixed;
		background-position: center;
		@include media-max(sm){
			padding-left: 1rem;
			padding-right: 1rem;
		}	
		&__container{
			height: 70vh;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&__wrapper {
			h2{
				color: #000;
				margin-bottom: 2rem;
				font-size: 2.5rem;
				@include media-max(sm){
					font-size: 3rem;
				}
			}
			:global(p) {
				font-size: 1.25rem;
			}
			.btn{
				margin-top: 1rem;
				color: #fff;
				padding: 0.7rem 3.125rem; 
				font-size: 1.25rem;
			}
		}
		
	}    
</style>