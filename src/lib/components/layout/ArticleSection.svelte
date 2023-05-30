<script lang="ts">
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import { onMount } from "svelte";
	import axios from "axios";

	const domain = "https://strapi.ulfbuilt.com:1337"
	let promise = fetchCta();
	async function fetchCta(){
		const url = 'https://strapi.ulfbuilt.com:1337/api/global-article-cta?populate=deep,2';
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
{:then insight} 
	<section class="insight">
		<Container>
			<Row>
				<Col>
					<span class="insight__pre-heading">{insight.leftPreHeading}</span>
				</Col>
			</Row>
			<Row>
				<Col md="6" class="">
					<img src="{domain}{insight.image.data.attributes.formats.large.url}" alt="Stair">
				</Col>
				<Col md="6" class="my-auto">
					<div class="insight__content">
						<div class="insight__content__wrapper">
							<div class="insight__content__wrapper__pre-heading">{insight.rightPreHeading}</div>
							<h2>{insight.Heading}</h2>
							{@html insight.paragprah}
							<div class="insight__content__wrapper__btns">
								<a href="{insight.leftBtnUrl}" class="btn btn-secondary">{insight.leftBtnTitle}</a> <a href="{insight.rightBtnUrl}" class="btn btn-inverted">{insight.rightBtnTitle}</a>
							</div>
						</div>
					</div>				
				</Col>
			</Row>
		</Container>
	</section>
{/await}


<style lang="scss">
	.insight{
		background-color: #F2F2F2;
		padding: 4rem 0;
		margin-bottom: 0;
		min-height: 20vh;
		@include media-max(sm){
			padding-left: 0;
			padding-right: 0;
		}
		&__pre-heading{
			color: $primary-color;
			margin-bottom: 2rem;
			display: block;			
		}
		&__content{
			&__wrapper{
				padding-left: 4rem;		
				@include media-max(sm){
					padding: 0;
				}					
				&__pre-heading{
					color: $secondary-color;
					font-weight: 500;
					@include media-max(sm){
						padding: 1rem 0 0;
					}						
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
				&__btns{
					text-align: center;
				
				}
				.btn-primary{
					margin-right: 1rem;
				}		
				.btn-inverted{
					background-color: #fff;
					&:hover{
						background-color: $secondary-color;
						border-color: #fff;
					}					
				}
			}
		}
	}    
</style>