<script lang="ts">
	import { Container, Row, Col } from 'sveltestrap';
	import { textAnimate, fly, fadeIn } from '$lib/GsapAnimation.js';
	export let banner;
	export let customtop;
	export let transparent;
	export let title;
	export let subTitle;
	export let extraClass;
	let pageBanner = banner;
	let pageBannerheight = 60;
</script>

<section
	in:fadeIn
	id="banner_bg"
	class="banner {extraClass ? extraClass : ''} {transparent
		? transparent
		: 'transparent'} autoscroll-exception"
	style="--banner: url({pageBanner}); height: {pageBannerheight}vh;"
	rel="preload"
>
	<!-- <div class="banner_overlay" in:fadeOut id="banner_overlay" gsap-duration="0" gsap-delay="0"></div> -->
	<Container>
		<Row>
			<Col>
				<div class="banner__content {customtop}">
					<div class="banner__content__text">
						<h1
							class="ml3 text-animate"
							id="bannerTitle"
							in:textAnimate
							gsap-delay="0"
							gsap-duration="1.5"
						>
							<span>{title ? title : ''}</span>
						</h1>
					</div>
					{#if subTitle != null}
						<!-- <p class="banner__content__paragraph" in:fly id="banner_sub" gsap-delay="0" gsap-duration="0">{subTitle}</p> -->
						<p class="banner__content__paragraph" id="banner_sub">{subTitle}</p>
					{/if}
				</div>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	.transparent {
		box-shadow: inset 0 0 0 50vw rgba(0, 0, 0, 0.5);
	}
	.banner {
		background-image: var(--banner);
		min-height: 68vh;
		background-position: center;
		background-size: cover;
		margin: 0;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: unset;
		&.homebanner {
			height: 100vh !important;
		}
		.banner_overlay {
			content: '';
			background-color: $darkgray;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			position: absolute;
			z-index: 10;
		}
		.custom-top {
			margin-top: -8rem;
			@include media-max(sm) {
				margin-top: -12rem;
			}
		}
		&__content {
			position: relative;
			padding-left: 1rem;
			padding-right: 1rem;
			z-index: 2;
			&__text {
				h1 {
					color: #fff;
					font-weight: 400;
					// font-size: 5rem;
					font-size: 3.5rem;
					margin-bottom: 1rem;
					justify-content: center;
					@include media-max(sm) {
						font-size: 3rem;
					}
					span {
						font-family: $primary-font;
					}
				}
			}
			&__paragraph {
				color: #fff;
				font-size: 1.25rem;
				@include media-max(sm) {
					font-size: 1.2rem;
				}
			}
			&__btn {
				border: 1px solid #fff;
				padding: 1.5rem 4rem;
				text-decoration: none;
				color: #fff;
				font-family: $secondary-font;
				text-transform: lowercase;
				display: inline-block;
			}
		}
	}
</style>
