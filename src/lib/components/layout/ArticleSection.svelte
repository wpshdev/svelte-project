<script lang="ts">
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
	import insight from "$lib/img/insight.svg";        
</script>
<section class="insight">
	<Container>
		<Row>
			<Col>
				<span class="insight__pre-heading">Our Insight</span>
			</Col>
		</Row>
		<Row>
			<Col md="6" class="">
				<img src="{insight}" alt="Stair">
			</Col>
			<Col md="6" class="my-auto">
				<div class="insight__content">
					<div class="insight__content__wrapper">
						<div class="insight__content__wrapper__pre-heading">Vail, Colorado | January 28 • 2 minutes read</div>
						<h2>Thinking out of the Box</h2>
						<p>
							We craft custom homes that look and feel like only you could live there. And we do it by working hand-in-hand with you throughout the entire experience. We craft custom homes that look and feel like only you could live there.
						</p>
						<a href="#" class="btn btn-primary">Read Article</a> <a href="#" class="btn btn-inverted">Meet with Us</a>
					</div>
				</div>				
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
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
</style>