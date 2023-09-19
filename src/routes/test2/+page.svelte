<script>
	import { slowDownSection } from '$lib/GsapAnimation.js';
	import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";
</script>

<div style="height: 100vh; background-color: gray;">
	<h1>gray</h1>
</div>
<section in:slowDownSection id="test" style="height: 200vh;  background-color: #ffc300; position relative; padding: 50px;" >
	<!-- <div data-speed="1.3" data-lag="0.5" style="background-color: green; width: 300px; height: 300px;"> -->
		<div style="width: 500px; height: 100vh; background-color: yellow;" class="container"></div>
	<!-- </div> -->
</section>
<div style="height: 100vh; background-color: blue;">
	<h1>blue</h1>
</div>

<style>
	section {
		min-height: unset;
		margin: unset;
	}
</style>