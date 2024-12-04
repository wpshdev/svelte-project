<script lang="ts">
	import { Col, Container, Row } from 'sveltestrap';
	import { FormGroup, Input, Button } from 'sveltestrap';
	import { PUBLIC_STRAPI_API } from '$env/static/public';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { textAnimate, fly, bgZoom } from '$lib/GsapAnimation.js';

	let emailTo = '';
	let contactFormProcess: 'saving' | 'sending' | 'sent' | 'failed' | null = null;
	let formElement: HTMLFormElement;
	let emailSubject = '';
	let emailResponse = '';
	async function fetchContactDetails() {
		const url = 'https://api.ulfbuilt.com/api/site-setting?populate=deep,3';
		const headers = {
			Authorization: 'Bearer ' + PUBLIC_STRAPI_API
		};

		try {
			const response = await axios.get(url, { headers });
			// return response.data.data.attributes;
			emailTo = response.data.data.attributes.contactDetails.emailTo;
			emailSubject = response.data.data.attributes.contactDetails.emailSubject;
			emailResponse = response.data.data.attributes.contactDetails.emailResponse;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	$: isContactFormBusy = contactFormProcess === 'saving' || contactFormProcess === 'sending';
	$: isFormUsed = contactFormProcess !== null;
	$: isMessageSent = contactFormProcess === 'sent' || contactFormProcess === 'failed';

	let name = '',
		email = '',
		phone = '',
		message = '',
		result = '';
	async function _doContact() {
		const contactUrl = 'https://api.ulfbuilt.com/api/contact-forms';
		contactFormProcess = 'saving';
		const res = await fetch(contactUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: 'bearer ' + PUBLIC_STRAPI_API },
			body: JSON.stringify({
				data: {
					name: name,
					email: email,
					phone: phone,
					message: message
				}
			})
		});
		const json = await res.json();
		contactFormProcess = 'sending';
		if (json.error) {
			result = json.error.message;
			contactFormProcess = 'failed';
		} else {
			result = 'Processing...';

			const res2 = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ emailSubject, name, email, formPhone: phone, message })
			});

			const json2 = await res2.json();
			if (json2.error) {
				result = json2.error.message;

				contactFormProcess = 'failed';
			} else {
				contactFormProcess = 'sent';
				result = emailResponse
					? emailResponse
					: "We appreciate you taking the time to reach out. We'll respond to you within 1 business day, or sooner.";
			}
		}
	}

	function doContact() {
		_doContact().catch((e) => {
			contactFormProcess = 'failed';

			if (e instanceof Error) {
				result = e.message;
			}
		});
	}

	function sendAgain() {
		contactFormProcess = null;
		result = '';
		if (formElement) {
			formElement.reset();
		}
	}

	let promise = fetchContactSettings();
	const domain = 'https://api.ulfbuilt.com/';
	async function fetchContactSettings() {
		const url = 'https://api.ulfbuilt.com/api/contact-cta?populate=deep,3';
		const headers = {
			Authorization: 'Bearer ' + PUBLIC_STRAPI_API
		};

		try {
			const response = await axios.get(url, { headers });
			return response.data.data.attributes;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		promise = fetchContactSettings();
		fetchContactDetails();
	});
</script>

{#await promise then contactSettings}
	<!-- <Animate> -->
	<section class="contact" in:bgZoom id="form-section-bg">
		<div
			class="contact-form-bg bg"
			style="--contactBG: url({domain}{contactSettings.background.data.attributes.url})"
		/>
		<Container>
			<Row>
				<Col md="6">
					<div class="contact__content">
						<div class="contact__content__wrapper">
							<h2
								class="text-animate secondary-font"
								in:textAnimate
								id="global_contact_heading"
								gsap-duration="1"
							>
								{contactSettings.heading ? contactSettings.heading : ''}
							</h2>
							<p in:fly id="global_contact_cont" gsap-delay="0.5" gsap-duration="1.2">
								{contactSettings.subheading ? contactSettings.subheading : ''}
							</p>
						</div>
					</div>
				</Col>
				<Col md="6">
					<div class="contact__form" in:fly id="global_contact_form" gsap-duration="2" gsap-y="30">
						<form bind:this={formElement} method="post" class="contact__form-form">
							<div class="contact__form-element-wrapper">
								{#if contactFormProcess !== null}
									<div class="sending-status">
										{#if isContactFormBusy}
											<div class="sending">
												<svg
													version="1.1"
													id="L4"
													xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink"
													x="0px"
													y="0px"
													viewBox="0 0 52 20"
													enable-background="new 0 0 0 0"
													xml:space="preserve"
												>
													<circle fill="#000000" stroke="none" cx="6" cy="10" r="6">
														<animate
															attributeName="opacity"
															dur="1s"
															values="0;1;0"
															repeatCount="indefinite"
															begin="0.1"
														/>
													</circle>
													<circle fill="#000000" stroke="none" cx="26" cy="10" r="6">
														<animate
															attributeName="opacity"
															dur="1s"
															values="0;1;0"
															repeatCount="indefinite"
															begin="0.2"
														/>
													</circle>
													<circle fill="#000000" stroke="none" cx="46" cy="10" r="6">
														<animate
															attributeName="opacity"
															dur="1s"
															values="0;1;0"
															repeatCount="indefinite"
															begin="0.3"
														/>
													</circle>
												</svg>
												{#if contactFormProcess === 'saving'}
													<p class="sending-text">Saving Message</p>
												{:else if contactFormProcess === 'sending'}
													<p class="sending-text">Sending Message</p>
												{/if}
											</div>
										{/if}

										<div
											class:success={contactFormProcess === 'sent'}
											class:failed={contactFormProcess === 'failed'}
											class:appear={isMessageSent}
											class="finished-status"
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
									</div>
								{/if}
								<FormGroup class="input-icon-box {isMessageSent ? 'hide' : ''}">
									<Input
										disabled={isFormUsed}
										class="input-user"
										placeholder="Full Name"
										bind:value={name}
									/>
									<div class="input-icon input-icon-user" />
								</FormGroup>
								<FormGroup class="input-icon-box {isMessageSent ? 'hide' : ''}">
									<Input
										disabled={isFormUsed}
										class="input-email"
										placeholder="Email address"
										bind:value={email}
										required
									/>
									<div class="input-icon input-icon-email" />
								</FormGroup>
								<FormGroup class="input-icon-box {isMessageSent ? 'hide' : ''}">
									<Input
										disabled={isFormUsed}
										class="input-phone"
										placeholder="Phone Number"
										bind:value={phone}
									/>
									<div class="input-icon input-icon-phone" />
								</FormGroup>
								<FormGroup class="{isMessageSent ? 'hide' : ''} mb-0">
									<Input
										disabled={isFormUsed}
										type="textarea"
										id="yourMessage"
										placeholder="Tell us about you project..."
										bind:value={message}
										required
									/>
								</FormGroup>
							</div>

							{#if contactFormProcess === 'saving' || contactFormProcess === 'sending'}
								<Button type="button" disabled={true} class="btn btn-secondary mt-3">
									Sending</Button
								>
							{:else if contactFormProcess === 'sent'}
								<Button type="button" class="btn btn-secondary mt-3" on:click={sendAgain}
									>Send Again</Button
								>
							{:else if contactFormProcess === 'failed'}
								<Button type="button" class="btn btn-secondary mt-3" on:click={sendAgain}>
									Failed, Try again.
								</Button>
							{:else}
								<Button type="button" class="btn btn-secondary mt-3" on:click={doContact}
									>Send</Button
								>
							{/if}
						</form>
					</div>
					{result}
				</Col>
			</Row>
		</Container>
	</section>
	<!-- </Animate> -->
{/await}

<style lang="scss">
	.contact {
		padding: 10rem 0;
		// box-shadow: inset 0 0 0 2000px rgb(237 234 220 / 85%);
		margin: 0;
		min-height: 20vh;
		position: relative;
		overflow: hidden;
		@include media-max(md) {
			padding-left: 3rem;
			padding-right: 3rem;
		}
		@include media-max(sm) {
			padding: 3.75rem 1rem;
		}

		.contact-form-bg {
			background-image: var(--contactBG);
			background-size: cover;
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
		}
		&__content {
			display: flex;
			height: 100%;
			align-items: center;
			padding-bottom: 7rem;
			@include media-max(sm) {
				padding-bottom: 3rem;
				text-align: center;
			}
			&__wrapper {
				h2 {
					margin-bottom: 1rem;
					// flex-wrap: wrap;
					width: 27rem;
					@include media-max(laptopS) {
						width: unset;
					}
				}
				p {
					font-size: 1.5rem;
					font-weight: 500;
					font-family: $primary-font;
				}
			}
		}
		&__form {
			text-align: center;
			position: relative;

			@include media-max(sm) {
				margin-bottom: 0;
			}
			:global(#yourMessage) {
				height: 15rem;
			}

			:global(.btn) {
				padding: 0.7rem 3.125rem;
				font-size: 1.25rem;
			}
		}
	}

	.contact__form-element-wrapper {
		position: relative;
		:global(.hide) {
			opacity: 0;
			pointer-events: none;
			transition: 0.4s;
		}
		:global(.mb-0) {
			margin-bottom: 0px !important;
		}
		.sending-status {
			position: absolute;
			height: 100%;
			width: 100%;
			z-index: 10;
			top: 0px;
			left: 0px;
		}

		.sending {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.15);
			align-items: center;
			& > svg {
				width: 100px;
			}
			.sending-text {
				font-weight: 500;
				font-size: 30px;
			}
		}

		.finished-status {
			width: 100%;
			height: 100%;
			padding: clamp(1rem, 50%, 2rem);

			z-index: 10;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
			transform: translateY(30%);
			opacity: 0;
			pointer-events: none;

			&.appear {
				transform: translateY(0%);
				opacity: 1;
				pointer-events: all;
			}

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
				font-weight: 500;
			}
			.status-footer {
				text-align: center;
			}
		}
	}
</style>
