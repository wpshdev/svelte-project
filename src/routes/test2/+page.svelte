<script>
	import { slowDownSection } from '$lib/GsapAnimation.js';
	// import { Col, Container, Row,  Accordion, AccordionItem } from "sveltestrap";

	import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";   
	// import {ScrollSmoother} from "gsap/dist/ScrollSmoother"; 
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	onMount(() => {
		// panels/section
		//:not(:last-child)
		// let panels = gsap.utils.toArray("section"),
		// observer = ScrollTrigger.normalizeScroll(true),
		// scrollTween;

		// // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
		// document.addEventListener("touchstart", e => {
		// 	if (scrollTween) {
		// 		e.preventDefault();
		// 		e.stopImmediatePropagation();
		// 	}
		// }, {capture: true, passive: false})

		// function goToSection(i) {
		// 	const sectionHeight = panels[i].offsetHeight; // Get the height of the current section
		// 	const scrollPosition = i * sectionHeight; // Calculate the scroll position based on section height
		// 	scrollTween = gsap.to(window, {
		// 		scrollTo: { y: scrollPosition, autoKill: false },
		// 		onStart: () => {
		// 			observer.disable();
		// 			observer.enable();
		// 		},
		// 		duration: 1,
		// 		onComplete: () => scrollTween = null,
		// 		overwrite: true,
		// 	});
		// }

		// panels.forEach((panel, i) => {
		// 	ScrollTrigger.create({
		// 		trigger: panel,
		// 		start: "top bottom",
		// 		end: "+=199%",
		// 		onToggle: self => self.isActive && !scrollTween && goToSection(i)
		// 	});
		// });

		// // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
		// ScrollTrigger.create({
		// 	start: 0, 
		// 	end: "max",
		// 	snap: 1 / (panels.length - 1)
		// })

		// let sections = gsap.utils.toArray("section");

		// sections.forEach((section, i) => {

		// 	// Calculate the index of the next section
		// 	const nextSectionIndex = i + 1;


		// 	if (nextSectionIndex < sections.length) {  // Check if there is a next section

		// 		const nextSection = sections[nextSectionIndex];

		// 		ScrollTrigger.create({
		// 			trigger: section,
		// 			start: "10% 70%",
		// 			end: "50% 30%",
		// 			markers: true,
		// 			onLeave: () => {
		// 				console.log('Leaving section:', section.id);

		// 				// Calculate the top position of the next section
		// 				const nextSectionTop = nextSection.getBoundingClientRect().top;
		// 				console.log(nextSectionTop);

		// 				console.log('Scrolling to next section:', nextSection.id);

		// 				// Scroll to the top of the next section
		// 				gsap.to(window, {
		// 					duration: 2,
		// 					scrollTo: {
		// 						y: '#'+nextSection.id,
		// 						// offsetY: 100 // Offset by the top position of the next section
		// 					},
		// 				});
		// 			},
		// 		});

		// 	}
			
		// });

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