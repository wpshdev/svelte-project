<script lang="ts">
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import ctabg from "$lib/img/CTA-BG.svg";

</script>

<section class="home-cta" style="--cta-banner: url({ctabg})">
	<Container>
		<Row>
			<Col class="text-center">
				<div class="home-cta__container">
					<div class="home-cta__wrapper">
						<h2>Tell us about your project</h2>
						<p>We want to know about yo and building your dream home</p>
						<a href="#" class="btn btn-primary">Connect with Us</a>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	.home-cta{
		margin: 0;
		background-image: var(--cta-banner);
		background-size: cover;
		
		&__container{
			height: 40vw;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		h2{
			color: #000;
		}
		.btn{
			margin-top: 1rem;
			color: #fff;
		}
	}    
</style>