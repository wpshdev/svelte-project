<script>
    export let testimonial;
    import {Container, Row, Col} from "sveltestrap";
</script>

<section class="testimonial testimonialA">
	<Container>
		<Row>
			<Col >
				<p class="text-center">
                    { testimonial ? testimonial : '' }
				</p>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	.testimonial{
		padding: 3rem 0;
		min-height: 10vh;

		p{
			font-size: 1.688rem;
    		font-weight: 400;		
			position: relative;
			padding: 0 3rem;
			font-family: $secondary-font;
			@include media-max(sm){
				padding: 0;
			}			
			// &:before{
			// 	content: url("/left-quote.png");
			// 	vertical-align: top;
			// 	position: absolute;
			// 	top: 0;
			// 	left: 0;
			// }	
			// &:after{
			// 	content: url("/right-quote.png");
			// 	vertical-align: top;
			// 	position: absolute;
			// 	bottom: 0;
			// 	right: 0;
			// }				
		}
	}    
</style>