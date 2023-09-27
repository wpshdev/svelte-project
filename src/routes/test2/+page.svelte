<script>
	import { slowDownSection, jumpToSection } from '$lib/GsapAnimation.js';
	// import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";

	import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";   
	// import {ScrollSmoother} from "gsap/dist/ScrollSmoother"; 
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	onMount(() => {
        jumpToSection();
	});

</script>

<section id="gray" style="height: 100vh; background-color: gray;">
	<h1>gray</h1>
</section>
<section id="orange" style="height: 100vh; background-color: #ffc300;" >
	<!-- in:slowDownSection id="test"-->
	<!-- <div style="width: 500px; height: 100vh; background-color: yellow;" class="container"></div> -->
</section>
<section id="blue" style="height: 100vh; background-color: blue;">
	<h1>blue</h1>
</section>
<section id="yellow" style="height: 100vh; background-color: yellow;">
	<h1>yellow</h1>
</section>

<style>
	section {
		min-height: unset;
		margin: unset;
	}
</style>