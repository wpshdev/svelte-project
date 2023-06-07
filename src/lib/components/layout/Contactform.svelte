<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
    import { Form, FormGroup, Input, Button } from 'sveltestrap';
    import contactBG from "$lib/img/ContactBG.jpg";
    let name = '', email = '', subject = '', message = '', result = ''
    async function doContact () {
        const url = 'https://strapi.ulfbuilt.com:1337/api/contact-forms';
		const res = await fetch(url, {
			method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072' },
			body: JSON.stringify({
                data:{
                "name": name,
                "email": email,
                "subject": subject,
                "message": message
                }
			})
		})
		const json = await res.json()
        if(json.error){
            result = json.error.message
        }else{
            result = 'Processing...'
        const url2 = 'https://strapi.ulfbuilt.com:1337/api/email/';
		const res2 = await fetch(url2, {
			method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072' },
            body: JSON.stringify({
                "to": "parth@wpsuperheroes.com",
                "subject": "* Website * " + name + " Subject : " + subject,
                "html": "<h1>"+name+"</h1><p>"+email+"</p><p>"+subject+"</p>",
            })
		})
		const json2 = await res2.json()
        if(json2.error){
            result = json2.error.message
        }else{
            result = "We appreciate you taking the time to reach out. We'll respond to you within 1 business day, or sooner."
        }
        }
	}
</script>
<section class="contact" style="--contactBG: url({contactBG})">
	<Container>
		<Row>
			<Col md="6">
				<div class="contact__content">
					<div class="contact__content__wrapper">
						<h2>Ready to Start<br> your Dream Project?</h2>
						<p>Let's discuss it!</p>
					</div>
				</div>
			</Col>
			<Col md="6">
				<div class="contact__form">
					<Form method="post">
						<FormGroup class="input-icon-box">
							<Input class="input-user" placeholder="Full Name" bind:value={name} />
							<div class="input-icon input-icon-user"></div>
						</FormGroup>
						<FormGroup class="input-icon-box">
							<Input class="input-email" placeholder="Email address" bind:value={email} required />
							<div class="input-icon input-icon-email"></div>
						</FormGroup>
						<FormGroup class="input-icon-box">
							<Input class="input-phone" placeholder="Phone Number" bind:value={subject} />
							<div class="input-icon input-icon-phone"></div>
						</FormGroup>
						<FormGroup>
							<Input type="textarea" id="yourMessage" placeholder="Tell us about you project..." bind:value={message} required/>
						</FormGroup>
						<Button type="btn is-primary"  on:click={doContact}>Send</Button>
					</Form>
				</div>
                {result}
			</Col>			
		</Row>
	</Container>
</section>
<style lang="scss">
.contact{
	padding: 10rem 0;
	background-image: var(--contactBG);
	background-size: cover;
	margin: 0;
	min-height: 20vh;
	&__content{
		display: flex;
		height: 100%;
		align-items: end;		
		&__wrapper{
			h2{
				margin-bottom: 1rem;
				font-size: 2.813rem;
			}	
			p {
				font-size: 1.438rem;
				font-weight: 500;
			}
		}
	}
	&__form{
		:global(#yourMessage){
			height: 15rem;
		}
		margin-bottom: 1rem;
		text-align: center;
		:global(.btn) {
			padding: 0.7rem 3.125rem;
            font-size: 1.25rem;
		}
	}
}
</style>