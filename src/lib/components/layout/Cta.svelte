<script lang="ts">
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import ctabg from "$lib/img/CTA-BG.svg";
	import { onMount } from "svelte";
	import axios from "axios";

	const domain = "https://strapi.ulfbuilt.com:1337"
	let promise = fetchCta();
	async function fetchCta(){
		const url = 'https://strapi.ulfbuilt.com:1337/api/global-cta?populate=deep,2';
		const headers = {
			Authorization: 'Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072'
		};

		try {
			const response = await axios.get(url, { headers });
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
	<section class="home-cta" style="--cta-banner: url({domain}{ctaData.backgroundImage.data.attributes.url})">
		<Container>
			<Row>
				<Col class="text-center">
					<div class="home-cta__container">
						<div class="home-cta__wrapper">
							<h2>{ctaData.heading}</h2>
							{@html ctaData.paragraph}
							<a href="{ctaData.btnUrl}" class="btn btn-secondary">{ctaData.btnTitle}</a>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	</section>	
{/await}
<style lang="scss">
	.home-cta{
		margin: 0;
		background-image: var(--cta-banner);
		background-size: cover;
		@include media-max(sm){
			padding-left: 0;
			padding-right: 0;
		}		
		&__container{
			height: 70vh;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		h2{
			color: #000;
			margin-bottom: 2rem;
			@include media-max(sm){
				font-size: 2rem;
			}
		}
		.btn{
			margin-top: 1rem;
			color: #fff;
		}
	}    
</style>