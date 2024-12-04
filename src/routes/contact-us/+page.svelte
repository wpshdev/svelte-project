<script lang="ts">
	export let data;
	import { Form, FormGroup, Input, Label } from 'sveltestrap';
	import { Button } from 'sveltestrap';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
	import { textAnimate, fly, fadeIn, slide } from '$lib/GsapAnimation.js';
	const color = 'darkblue';
	import { Col, Container, Row } from 'sveltestrap';
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	const url = 'https://api.ulfbuilt.com/';

	let contactFormProcess: 'saving' | 'sending' | 'sent' | 'failed' | null = null;
	let formElement: HTMLFormElement;
	let phone = data.contact.data.attributes.phone;
	let office_address = data.contact.data.attributes.office_address;
	let mailing_address = data.contact.data.attributes.mailing_address;
	let emailTo = data.contactDetails.data.attributes.contactDetails.emailTo;
	let emailSubject = data.contactDetails.data.attributes.contactDetails.emailSubject;
	let emailResponse = data.contactDetails.data.attributes.contactDetails.emailResponse;
	let name = '',
		email = '',
		formPhone = '',
		message = '',
		result = '';

	$: isContactFormBusy = contactFormProcess === 'saving' || contactFormProcess === 'sending';
	$: isFormUsed = contactFormProcess !== null;

	async function doContact() {
		contactFormProcess = 'saving';
		const url = 'https://api.ulfbuilt.com/api/contact-forms';
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: 'bearer ' + PUBLIC_STRAPI_API },
			body: JSON.stringify({
				data: {
					name: name,
					email: email,
					phone: formPhone,
					message: message
				}
			})
		});
		result = 'Processing...';
		const json = await res.json();
		if (json.error) {
			result =
				json.error.message ||
				"Failed to send Result. pleas contact at <a href='mailto:contact@ulfbuilt.com'>contact@ulfbuilt.com<a/>";
			contactFormProcess = 'failed';
		} else {
			contactFormProcess = 'sending';
			result = 'Sending your Message...';
			const res2 = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ emailSubject, name, email, formPhone, message })
			});

			const json2 = await res2.json();
			if (json2.error) {
				contactFormProcess = 'failed';
				result =
					json2.error.message ||
					"Failed to send Result. pleas contact at <a href='mailto:contact@ulfbuilt.com'>contact@ulfbuilt.com<a/>";
			} else {
				contactFormProcess = 'sent';
				result = emailResponse
					? emailResponse
					: "We appreciate you taking the time to reach out. We'll respond to you within 1 business day, or sooner.";
			}
		}
	}

	// import { onMount } from 'svelte';
	// import { loadingCursor } from '$lib/cursorChange.js';
	// onMount(() => {
	// 	loadingCursor();
	// });
</script>

<svelte:head>
	<title
		>{data.contact.data.attributes.title ? data.contact.data.attributes.title : 'Contact Us'}</title
	>
</svelte:head>

<PageBanner
	title={data.contact.data.attributes.title ? data.contact.data.attributes.title : 'Contact Us'}
	extraClass="contact"
	subTitle={data.contact.data.attributes.Subheading ? data.contact.data.attributes.Subheading : ''}
	banner="{url}{data.contact.data.attributes.featuredimage.data.attributes.formats.large_x2.url
		? data.contact.data.attributes.featuredimage.data.attributes.formats.large_x2.url
		: data.contact.data.attributes.featuredimage.data.attributes.url}"
/>

<section class="mx-10 contact_inner">
	<!-- <Animate> -->
	<Container class="mb-5 contact_inner__content">
		<Row>
			<Col md="12">
				<h2
					class="text-center text-animate secondary-font"
					in:textAnimate
					id="contact_heading"
					gsap-duration="1"
					gsap-start="top 90%"
				>
					{data.contact.data.attributes.section1Title
						? data.contact.data.attributes.section1Title
						: ''}
				</h2>
				<h4 class="text-center pfont">
					{data.contact.data.attributes.Section1SubAuthor ? '-' : ''}
					<span class="ptc"
						><i
							>{data.contact.data.attributes.Section1SubAuthor
								? data.data.attributes.Section1SubAuthor
								: ''}</i
						></span
					>
				</h4>
				<p
					class="two-columns pt-3"
					in:fadeIn
					id="contact_content"
					gsap-duration="0.5"
					gsap-delay="0"
					gsap-start="top 90%"
				>
					{@html data.contact.data.attributes.Subheading2
						? data.contact.data.attributes.Subheading2
						: ''}
				</p>
			</Col>
		</Row>
	</Container>
	<!-- </Animate> -->

	<!-- <Animate> -->
	<Container class="contact_inner__details">
		<Row>
			<Col md="4" class="flex-vcenter">
				<!-- <Animate> -->
				<div in:slide id="contact_detail" gsap-duration="1" gsap-x="-5" gsap-start="top 90%">
					<h4 class="ptc pfont">
						{data.contact.data.attributes.office_address_title
							? data.contact.data.attributes.office_address_title
							: ''}
					</h4>
					<h4 class="stc pb-5">{@html office_address ? office_address : ''}</h4>
					<h4 class="ptc pfont">
						{data.contact.data.attributes.mailing_address_title
							? data.contact.data.attributes.mailing_address_title
							: ''}
					</h4>
					<h4 class="stc pb-5">{@html mailing_address ? mailing_address : ''}</h4>
					<h4 class="ptc pfont">
						{data.contact.data.attributes.phone_title
							? data.contact.data.attributes.phone_title
							: ''}
					</h4>
					<h4 class="stc pb-5">{@html phone ? phone : ''}</h4>
				</div>
				<!-- </Animate> -->
			</Col>
			<Col md="8">
				<!-- <Animate> -->
				<iframe
					title="ULF BUILT"
					gsap-start="top 90%"
					in:fadeIn
					id="contact_map"
					gsap-duration="0.5"
					src={data.contact.data.attributes.map_url
						? data.contact.data.attributes.map_url
						: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12289.756932100185!2d-106.59873028576666!3d39.63982841472373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741d9050f708981%3A0x28a8cd6309f12845!2sULFBUILT!5e0!3m2!1sen!2sin!4v1681880274611!5m2!1sen!2sin'}
					width="100%"
					height="450"
					style="border:0;"
					allowfullscreen={null}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
				<!-- </Animate> -->
			</Col>
		</Row>
	</Container>
	<!-- </Animate> -->
</section>
<div
	class="contact-img"
	style="background-image: url({url}{data.contact.data.attributes.formcover.data.attributes.formats
		.large.url
		? data.contact.data.attributes.formcover.data.attributes.formats.large.url
		: data.data.attributes.formcover.data.attributes.url});"
>
	<div class="contact-box container-fluid">
		<div class="contact-form border-radius">
			<h2
				class="text-center pb-4 text-animate secondary-font"
				in:textAnimate
				id="contact_form_heading"
				gsap-start="center bottom"
				gsap-duration="1"
			>
				{data.contact.data.attributes.contact_form_title
					? data.contact.data.attributes.contact_form_title
					: ''}
			</h2>
			<div
				class="contact-form-status-box"
				class:appear={contactFormProcess === 'sent' || contactFormProcess === 'failed'}
			>
				<div
					class="status-body"
					class:success={contactFormProcess === 'sent'}
					class:failed={contactFormProcess === 'failed'}
				>
					{#if contactFormProcess === 'sent'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="status-icon"
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							><g fill="currentColor"
								><path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
								/><path
									d="m10.97 4.97l-.02.022l-3.473 4.425l-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
								/></g
							></svg
						>

						<h3 class="status-headline">Successfully Sent</h3>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							class="status-icon"
							><path fill="currentColor" d="M11.001 10h2v5h-2zM11 16h2v2h-2z" /><path
								fill="currentColor"
								d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.99 1.99 0 0 0 .054 1.968A1.98 1.98 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.99 1.99 0 0 0 .054-1.968zM4.661 19L12 5.137L19.344 19z"
							/></svg
						>

						<h3 class="status-headline">Failed to Send message</h3>
					{/if}

					<p class="status-text">{@html result}</p>
				</div>
				<div class="status-footer">
					{#if contactFormProcess === 'sent'}
						<Button
							type="button"
							class="btn btn-secondary"
							on:click={() => {
								contactFormProcess = null;
								formElement?.reset?.();
								result = '';
							}}>Send Again</Button
						>
					{:else if contactFormProcess === 'failed'}
						<Button
							type="button"
							class="btn btn-secondary"
							on:click={() => {
								contactFormProcess = null;
								formElement?.reset?.();
								result = '';
							}}
						/>
					{/if}
				</div>
			</div>
			<div in:fadeIn id="form_cont" gsap-start="center bottom" gsap-duration="1">
				<form method="post" class="mb-3" bind:this={formElement} on:submit|preventDefault>
					<FormGroup class="input-icon-box">
						<Input
							class="input-user"
							disabled={isFormUsed}
							placeholder="Full Name"
							bind:value={name}
						/>
						<div class="input-icon input-icon-user" />
					</FormGroup>
					<FormGroup class="input-icon-box">
						<Input
							class="input-email"
							disabled={isFormUsed}
							placeholder="Email address"
							bind:value={email}
						/>
						<div class="input-icon input-icon-email" />
					</FormGroup>
					<FormGroup class="input-icon-box">
						<Input
							class="input-phone"
							placeholder="Phone Number"
							disabled={isFormUsed}
							bind:value={formPhone}
						/>
						<div class="input-icon input-icon-phone" />
					</FormGroup>
					<FormGroup>
						<Input
							disabled={isFormUsed}
							type="textarea"
							id="yourMessage"
							placeholder="Tell us about your project..."
							bind:value={message}
						/>
					</FormGroup>
					{#if contactFormProcess === 'saving' || contactFormProcess === 'sending'}
						<Button type="button" disabled={true} class="btn btn-secondary">
							<div class="spinner-border text-light spinner-border-sm" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
							<span class="ms-2">Sending</span></Button
						>
					{:else if contactFormProcess === 'sent'}
						<Button
							type="button"
							class="btn btn-secondary"
							on:click={() => {
								contactFormProcess = null;
								formElement?.reset?.();
								result = '';
							}}>Send Again</Button
						>
					{:else if contactFormProcess === 'failed'}
						<Button
							type="button"
							class="btn btn-secondary"
							on:click={() => {
								contactFormProcess = null;
								formElement?.reset?.();
								result = '';
							}}
						>
							Failed, Try again.
						</Button>
					{:else}
						<Button type="button" class="btn btn-secondary" on:click={doContact}>Send</Button>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	:global(.banner.contact) {
		background-position: center !important;
		@include media-max(xs) {
			min-height: 25rem !important;
			background-size: auto !important;
		}
	}
	:global(.banner.contact:after) {
		@include media-max(xs) {
			background-color: rgba(0, 0, 0, 0.4) !important;
		}
	}
	:global(.container.contact_inner__details) {
		@include media-max(sm) {
			text-align: center;
		}
	}
	.result-success {
		color: green;
		text-align: center;
	}
	.result-failed {
		color: red;
		text-align: center;
	}

	.contact_inner {
		margin-top: 10vw;
		@include media-max(sm) {
			margin: 3.75rem 0;
		}
		p {
			@include media-max(sm) {
				margin: 0 2.375rem 1rem;
			}
		}
		.contact_inner__content {
			h2 {
				font-size: 2.813rem;
				justify-content: center;
				@include media-max(sm) {
					padding: 2rem 0 1rem;
				}
			}
			p {
				font-size: 1.25rem;
				line-height: 2.125rem;
			}
		}

		.contact_inner__details {
			.ptc {
				font-size: 1.438rem;
			}
			.stc {
				font-size: 1.688rem;
			}
		}
	}

	:global(.contact_inner__details h4 a) {
		color: $secondary-color;
		text-decoration: none;
	}

	.contact-box {
		display: flex;
		@include media-max(xs) {
			padding: 0 1.25rem;
		}
		h2 {
			font-size: 2.25rem;
			justify-content: center;
		}
		.contact-form {
			max-width: 44rem;
			width: 100%;
			padding: 4rem 6rem;
			position: relative;
			overflow: hidden;
			@include media-max(ipadmini) {
				max-width: 45rem;
				padding: 4rem;
			}
			@include media-max(sm) {
				padding: 2.5rem 1rem;
			}

			.contact-form-status-box {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0px;
				left: 0px;
				padding: inherit;
				background: inherit;
				z-index: 10;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				transform: translateY(-30%);
				opacity: 0;
				pointer-events: none;
				transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
				&.appear {
					transform: translateY(0%);
					opacity: 1;
					pointer-events: all;
				}
				.status-body {
					text-align: center;
					&.success {
						color: green;
					}
					&.failed {
						color: red;
					}

					.status-icon {
						font-size: clamp(60px, 100vmin, 80px);
						margin-bottom: 10px;
					}
					.status-headline {
						font-weight: 800;
						font-size: clamp(25px, 5vmin, 50px);
						margin-bottom: 10px;
					}
					.status-text {
						font-weight: 500;
						line-height: 1.2;
						color: black;
						font-size: 1.4rem;
					}
				}
				.status-footer {
					text-align: center;
				}
			}
		}
		:global(.contact-form form) {
			text-align: center;
		}
		:global(.contact-form textarea) {
			height: 8rem;
		}
		:global(.contact-form button) {
			padding: 0.7rem 3.125rem;
		}
		:global(.contact-form button:hover) {
			background-color: #263a63;
			color: #fff;
			border-color: #fff;
		}
		button {
			display: flex;
			margin: auto;
		}
	}
	.contact-img {
		margin-top: 15vw;
		min-height: 100vh;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		// @include media-max(sm) {
		//     height: 18.75rem;
		// }
	}
</style>
