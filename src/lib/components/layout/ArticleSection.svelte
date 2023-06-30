<script lang="ts">
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import { onMount } from "svelte";
	import axios from "axios";
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	import {
		goto
	} from '$app/navigation';

	const domain = "https://strapi.ulfbuilt.com:1337"
	let promise = fetchCta();
	async function fetchCta(){
		const url = 'https://strapi.ulfbuilt.com:1337/api/global-article-cta?populate=deep,2';
		const headers = {
			Authorization: 'Bearer ' + PUBLIC_STRAPI_API
		};

		try {
			const response = await axios.get(url, { headers });
			return response.data.data.attributes;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	// function handleClick(event) {
	// 	event.preventDefault();
	// 	const href = event.target.getAttribute('href');
	// 	if (href) {
	// 		history.pushState({}, '', href);
	// 		window.location.href = href;
	// 		goto(href);
	// 	}
	// }
	// on:click|preventDefault={handleClick}

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
					<span class="insight__pre-heading">{insight.leftPreHeading ? insight.leftPreHeading : ''}</span>
				</Col>
			</Row>
			<Row>
				<Col md="6" class="">
					{#if insight.image.data}
					<img src="{domain}{insight.image.data.attributes.formats.large.url}" alt="Stair">
					{/if}
				</Col>
				<Col md="6" class="my-auto">
					<div class="insight__content">
						<div class="insight__content__wrapper">
							<div class="insight__content__wrapper__pre-heading">{insight.rightPreHeading ? insight.rightPreHeading : ''}</div>
							<h2>{insight.Heading ? insight.Heading : ''}</h2>
							{@html insight.paragprah ? insight.paragprah : ''}
							<div class="insight__content__wrapper__btns">
								<a href="{insight.leftBtnUrl ? insight.leftBtnUrl : '#'}/" class="btn btn-secondary">{insight.leftBtnTitle ? insight.leftBtnTitle : 'Button'}</a> <a href="{insight.rightBtnUrl ? insight.rightBtnUrl : '#'}/" class="btn btn-inverted">{insight.rightBtnTitle ? insight.rightBtnTitle : 'Button'}</a>
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
		@include media-max(xs){
			padding-left: 1rem;
			padding-right: 1rem;
		}
		&__pre-heading{
			color: $primary-color;
			margin-bottom: 2rem;
			display: block;	
			font-weight: 500;		
		}
		&__content{
			&__wrapper{
				padding-left: 4rem;		
				@include media-max(ipadmini){
					padding: 0;
				}					
				&__pre-heading{
					color: $secondary-color;
					font-weight: 500;
					@include media-max(sm){
						padding: 2rem 0 0;
					}						
				}	
				span{
					color: $primary-color;
					margin-bottom: 1rem;
					font-weight: 500;
				}
				h2{
					margin: 1rem 0 2rem;	
					font-weight: 400;
				}
				:global(p){
					line-height: 2.125rem;
					font-size: 1.25rem;
				}		
				&__btns{
					// text-align: center;
					margin-top: 1.5rem;
					display: flex;
					@include media-max(ipadmini){
						display: block;
					}
				}
				.btn {
					padding: 0.7rem 3.125rem; 
					font-size: 1.25rem;
					@include media-max(sm){
						padding: 0.7rem 1rem;
					}		
				}
				.btn-primary{
					margin-right: 1rem;
				}		
				.btn-secondary {
					margin-right: 1.25rem;
				}
				.btn-inverted{
					background-color: #fff;
					&:hover{
						background-color: $secondary-color;
						border-color: #fff;
					}					
				}
				@include media-max(md){
					.btn {
						margin-top: 1rem;
					}
				}	
			}
		}
	}    
</style>