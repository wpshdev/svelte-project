<script lang="ts">
	export let data;
	import { lazyLoad } from '$lib/components/lazyload.js';
	import { Col, Container, Row } from 'sveltestrap';
	import Seo from '$lib/components/Seo.svelte';
	import Carousel4 from '$lib/components/layout/Carousel4.svelte';
	import ParallaxImage from '$lib/components/parallaxImage.svelte';
	import Cta from '$lib/components/layout/Cta.svelte';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
	import locbg from '$lib/img/blueBackground.webp';
	import axios from 'axios';
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	import { textAnimate, fly, slide, fly2, slowDownSection } from '$lib/GsapAnimation.js';

	let y = 0;
	const domain = 'https://api.ulfbuilt.com';
	const home = data.home.data.attributes;
	let fallback = data.fallback.data.attributes.fallbackImage.data;
	let propCount = 3;

	// Function for portfolio masonry
	let portfolioList = [];
	let loading;

	let activeTab = home.categories.data[0].id;
	function handleTabClick(category) {
		activeTab = category;
	}

	$: if (activeTab) {
		// Check if has new variable data
		loading = true;
		(async () => {
			const url =
				'https://api.ulfbuilt.com/api/portfolios?filters[categories][id][$eq]=' +
				activeTab +
				'&populate=deep,2';
			const headers = {
				Authorization: 'Bearer ' + PUBLIC_STRAPI_API
			};
			try {
				const response = await axios.get(url, { headers });
				portfolioList = response.data.data;
				loading = false;
				// new Promise((resolve) => {
				//     setTimeout(() => resolve(portfolioList = response.data.data), 500)
				// })
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		})();
	}

	import { onMount } from 'svelte';
	// import { loadingCursor } from '$lib/cursorChange.js';
	onMount(() => {
		// loadingCursor();
		// stopSection();

		let updatedHeight = 0;
		const screenWidth = window.innerWidth;

		if (screenWidth > 768) {
			const myDiv = document.querySelector('.loc-gallery');
			const initialHeight = myDiv ? myDiv.clientHeight : 0;
			updatedHeight = initialHeight + 200;
			if (myDiv) {
				myDiv.style.height = updatedHeight + 'px';
			}
		}
	});

	//new slideup and down
	import arrowtop from '$lib/img/arrow-top.svg';
	let selectedIndex = 1;
	const updateSelectedOption = () => {
		const options = document.querySelectorAll('.option');
		options.forEach((option, index) => {
			if (index === selectedIndex) {
				option.classList.add('op-selected');

				if (index === 0) {
					const container = document.querySelector('.options');
					container.style.transform = 'translateY(25px)';
					option.click();
				}
				if (index === 1) {
					const container = document.querySelector('.options');
					container.style.transform = 'translateY(-25px)';
					option.click();
				}
				if (index === 2) {
					const container = document.querySelector('.options');
					container.style.transform = 'translateY(-75px)';
					option.click();
				}
			} else {
				option.classList.remove('op-selected');
			}
		});
	};
	const handleTopArrowClick = () => {
		if (selectedIndex > 0) {
			selectedIndex -= 1;
			updateSelectedOption();
		}
	};
	const handleBottomArrowClick = () => {
		const options = document.querySelectorAll('.option');
		if (selectedIndex < options.length - 1) {
			selectedIndex += 1;
			updateSelectedOption();
		}
	};

	let pageData = {
		metaTitle: 'Page Title',
		metaDescription: 'Page Description'
	};
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<!-- <title>{home.title ? home.title : 'Home'}</title> -->
	<Seo
		metaTitle={home.seo[0].metaTitle}
		metaDescription={home.seo[0].metaDescription}
		metaImage="{domain}{home.seo[0].metaImage.data.attributes.url}"
		metaSocial={home.seo[0].metaSocial}
		keywords={home.seo[0].keywords}
		metarobots={home.seo[0].metarobots}
		structuredData={home.seo[0].structuredData}
		metaViewport={home.seo[0].metaViewport}
		canonicalURL={home.seo[0].canonicalURL}
	/>
</svelte:head>

<PageBanner
	title={home.topBanner.heading ? home.topBanner.heading : 'Building Excellence'}
	subTitle={home.topBanner.paragraph ? home.topBanner.paragraph : ''}
	banner="{domain}{home.topBanner.background.data.attributes.formats.large_x2.url
		? home.topBanner.background.data.attributes.formats.large_x2.url
		: home.topBanner.background.data.attributes.url}"
	bannerMobile="{domain}{home.topBanner.background.data.attributes.formats.medium.url}"
	extraClass="homebanner"
	bannerheight="100"
	customtop="custom-top"
	transparent="1"
/>
<section
	class="loc-gallery mvw-10"
	style=" --loc-bg: url({locbg})"
	in:slowDownSection
	id="loc-gallery"
	gsap-start="top bottom"
>
	<Container>
		<Row>
			<Col xs="12" class="md:pb-4">
				<h2 class="text-div">
					{home.homeBuilderHeading ? home.homeBuilderHeading : ''}
				</h2>
				<div class="loc-gallery__cwrapper" id="build-trust">
					<div class="h3">
						{@html home.homeBuilderSubHeading ? home.homeBuilderSubHeading : ''}
					</div>
					<div class="text-justify">
						{@html home.homeBuilderParagraph ? home.homeBuilderParagraph : ''}
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="featured-projects mvw-10" id="featured-section">
	<Container class="featured-container">
		<Carousel4
			preHeading={home.featuredProjectsPreHeading ? home.featuredProjectsPreHeading : ''}
			heading={home.featuredProjectsHeading ? home.featuredProjectsHeading : ''}
			btnTitle={home.featurePropertyBtnTitle ? home.featurePropertyBtnTitle : 'Button'}
			btnUrl={home.featuredPropertyBtnUrl ? home.featuredPropertyBtnUrl : '#'}
			featuredProjects={home.featuredProjects}
		/>
	</Container>
</section>

<section class="flex-column-center" id="tnr">
	<div class="tnr">
		<ParallaxImage
			imageHeight="80"
			imageUrl="{domain}{home.midBanner.background.data.attributes.formats.medium_x2.url
				? home.midBanner.background.data.attributes.formats.medium_x2.url
				: home.midBanner.background.data.attributes.url}"
			medUrl="{domain}{home.midBanner.background.data.attributes.formats.large.url
				? home.midBanner.background.data.attributes.formats.large.url
				: home.midBanner.background.data.attributes.url}"
			overlay="1"
		/>
		<div class="tnr__wrapper">
			<Container>
				<div class="tnr__wrapper__captions text-div">
					<h2 class="text-animate" in:textAnimate id="tnr-heading" gsap-duration="1">
						{home.midBanner.heading ? home.midBanner.heading : ''}
					</h2>
					<p in:slide id="tnr-preheading" gsap-duration="1">
						{@html home.midBanner.paragraph ? home.midBanner.paragraph : ''}
					</p>
					<div in:fly id="tnr-button" gsap-delay="0.5" gsap-duration="1.2" gsap-y="50">
						<a href={home.midBanner.btnUrl ? home.midBanner.btnUrl : '#'} class="btn btn-secondary">
							{home.midBanner.btnTitle ? home.midBanner.btnTitle : 'Button'}
						</a>
					</div>
				</div>
			</Container>
		</div>
	</div>
</section>
<section class="tnr__mobile">
	<Row>
		<Container>
			<div class="tnr__wrapper__captions text-div">
				<h2 class="text-animate" in:textAnimate id="tnr-heading" gsap-duration="1">
					{home.midBanner.heading ? home.midBanner.heading : ''}
				</h2>
				<p in:slide id="tnr-preheading" gsap-duration="1">
					{@html home.midBanner.paragraph ? home.midBanner.paragraph : ''}
				</p>
				<div in:fly id="tnr-button" gsap-delay="0.5" gsap-duration="1.2" gsap-y="50">
					<a
						href={home.midBanner.btnUrl ? home.midBanner.btnUrl : '#'}
						class="btn btn-secondary text-center"
					>
						{home.midBanner.btnTitle ? home.midBanner.btnTitle : 'Button'}
					</a>
				</div>
			</div>
		</Container>
	</Row>
</section>

<section class="reputation" in:slowDownSection id="reputation-section" gsap-start="top 50%">
	<Container class="reputation_child">
		<Row>
			<Col md="7" class="">
				<div class="reputation__content">
					<div class="reputation__content__wrapper text-div">
						<p class="pre-head" in:slide id="reputation-preheading" gsap-duration="1.5">
							{home.reputation.preHeading ? home.reputation.preHeading : ''}
						</p>
						<h2
							class="text-animate secondary-font"
							gsap-duration="1"
							in:textAnimate
							id="reputation-heading"
						>
							{home.reputation.heading ? home.reputation.heading : ''}
						</h2>
						<div
							in:fly
							id="reputation-cont"
							class="text-justify"
							gsap-delay="1"
							gsap-duration="1.2"
							gsap-y="30"
						>
							<p>{@html home.reputation.content ? home.reputation.content : ''}</p>
							<a
								href={home.reputation.btnUrl ? home.reputation.btnUrl : '#'}
								class="btn btn-secondary"
								>{home.reputation.btnTitle ? home.reputation.btnTitle : 'Button'}</a
							>
						</div>
					</div>
				</div>
			</Col>
			<Col md="5" class="my-auto containerimg">
				<div class="childimg">
					{#if home.reputation.image.data}
						<img
							loading="eager"
							width="526"
							height="500"
							in:fly2
							id="reputation-img"
							use:lazyLoad={domain + home.reputation.image.data.attributes.formats.medium.url ||
								domain + home.reputation.image.data.attributes.url}
							alt={home.reputation.image.data.attributes.alternativeText
								? home.reputation.image.data.attributes.alternativeText
								: 'image'}
							srcset="{domain}{home.reputation.image.data.attributes.formats.medium.url
								? home.reputation.image.data.attributes.formats.medium.url
								: home.reputation.image.data.attributes.url} 768w"
							sizes="(max-width: 768px) 1024px"
						/>
					{/if}
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="process" in:slowDownSection id="process-section" gsap-start="top 95%">
	<Container>
		<Row>
			<Col md="6" class="">
				<div class="process__top-image childimg2">
					{#if home.ourProcessTopImage.data}
						<img
							loading="eager"
							in:fly2
							width="509"
							height="440"
							id="process-top-img"
							gsap-y="-60"
							use:lazyLoad={domain +
								home.ourProcessTopImage.data[0].attributes.formats.medium.url ||
								domain + home.ourProcessTopImage.data[0].attributes.url}
							alt={home.ourProcessTopImage.data[0].attributes.alternativeText
								? home.ourProcessTopImage.data[0].attributes.alternativeText
								: 'image'}
							srcset="{domain}{home.ourProcessTopImage.data[0].attributes.formats.medium.url
								? home.ourProcessTopImage.data[0].attributes.formats.medium.url
								: home.ourProcessTopImage.data[0].attributes.url} 768w"
							sizes="(max-width: 768px) 1024px"
						/>
					{/if}
				</div>
			</Col>
		</Row>
		<Row>
			<Col md="7" class="">
				<div class="process__content containerimg2">
					<div class="process__content__wrapper">
						<p class="pre-head" in:slide id="process-preheading" gsap-duration="1">
							{home.ourProcessPreHeading ? home.ourProcessPreHeading : ''}
						</p>
						<h2
							class="text-animate secondary-font"
							in:textAnimate
							gsap-duration="1"
							id="process-heading"
						>
							{home.ourProcessHeading ? home.ourProcessHeading : ''}
						</h2>
						<div
							in:fly
							id="process-cont"
							class="text-justify"
							gsap-duration="1.2"
							gsap-delay="1"
							gsap-y="30"
						>
							{@html home.ourProcessParagraph ? home.ourProcessParagraph : ''}
							<a
								href={home.ourProcessButtonUrl ? home.ourProcessButtonUrl : '#'}
								class="btn btn-secondary"
								>{home.ourProcessButtonTitle ? home.ourProcessButtonTitle : 'Button'}</a
							>
						</div>
					</div>
				</div>
			</Col>
			<Col md="5" class="my-auto containerimg3">
				<div class="process__bottom childimg3">
					{#if home.ourProcessRightImage.data}
						<img
							loading="eager"
							in:fly2
							width="526"
							height="500"
							id="process-bottom-img"
							gsap-y="-150"
							src={domain + home.ourProcessRightImage.data.attributes.formats.medium.url ||
								domain + home.ourProcessRightImage.data.attributes.url}
							alt={home.ourProcessRightImage.data.attributes.alternativeText
								? home.ourProcessRightImage.data.attributes.alternativeText
								: 'image'}
							srcset="{domain}{home.ourProcessRightImage.data.attributes.formats.medium.url
								? home.ourProcessRightImage.data.attributes.formats.medium.url
								: home.ourProcessRightImage.data.attributes.url} 768w"
							sizes="(max-width: 768px) 1024px"
						/>
					{/if}
				</div>
			</Col>
		</Row>
	</Container>
</section>

<section class="story" in:slowDownSection id="story-section" gsap-start="top 95%">
	<Container>
		<Row>
			<Col md="7" class="">
				<div class="story__content">
					<div class="story__content__wrapper">
						<p class="pre-head" in:slide id="story-preheading" gsap-duration="1">
							{home.ourStoryPreHeading ? home.ourStoryPreHeading : ''}
						</p>
						<h2
							class="text-animate secondary-font"
							in:textAnimate
							id="story-heading"
							gsap-duration="1"
						>
							{home.ourStoryHeading ? home.ourStoryHeading : ''}
						</h2>
						<div
							in:fly
							id="story-cont"
							class="text-justify"
							gsap-delay="0"
							gsap-duration="1"
							gsap-y="30"
						>
							{@html home.ourStoryParagraph ? home.ourStoryParagraph : ''}
							<a
								href={home.ourStoryButtonURL ? home.ourStoryButtonURL : '#'}
								class="btn btn-secondary"
								>{home.ourStoryButtonTitle ? home.ourStoryButtonTitle : 'Button'}</a
							>
						</div>
					</div>
				</div>
			</Col>
			<Col md="5" class="my-auto containerimg4">
				<div class="childimg4">
					{#if home.ourStoryRightImage.data}
						<img
							loading="eager"
							in:fly2
							id="story-img"
							width="526"
							height="500"
							src={domain + home.ourStoryRightImage.data.attributes.formats.medium.url ||
								domain + home.ourStoryRightImage.data.attributes.url}
							alt={home.ourStoryRightImage.data.attributes.alternativeText
								? home.ourStoryRightImage.data.attributes.alternativeText
								: 'Image'}
						/>
					{/if}
				</div>
			</Col>
		</Row>
	</Container>
</section>

<!-- <section class="m-0 article-wrapper" id="article-wrapper">
	<ArticleSection />
</section> -->

<section class="m-0 cta-wrapper" id="cta-wrapper">
	<Cta />
</section>

<style lang="scss">
	@use './page' as *;
</style>
