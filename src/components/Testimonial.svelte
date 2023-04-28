<script>
    export let testimonial;
    import {Container, Row, Col} from "sveltestrap";
</script>

<section class="testimonial testimonialA">
	<Container>
		<Row>
			<Col >
				<p class="text-center">
                    { testimonial }
				</p>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	.testimonial{
		padding: 3rem 0;
		p{
			font-size: 1.3rem;
    		font-weight: 300;		
			position: relative;
			padding: 0 3rem;
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