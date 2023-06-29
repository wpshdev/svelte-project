<script lang="ts">
    export let data;
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
    import PageBanner from '$lib/components/layout/PageBanner.svelte';
    import Animate from '$lib/components/Animate.svelte';
    const color = "white";
    import { Col, Container, Row } from 'sveltestrap';
    import { PUBLIC_STRAPI_API } from '$env/static/public';
    const url = "https://strapi.ulfbuilt.com:1337/";
    console.log(data);
    let phone = data.data.attributes.phone;
    let office_address = data.data.attributes.office_address;
    let mailing_address = data.data.attributes.mailing_address;
    let name = '', email = '', subject = '', message = '', result = ''
    async function doContact () {
        const url = 'https://strapi.ulfbuilt.com:1337/api/contact-forms';
		const res = await fetch(url, {
			method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + PUBLIC_STRAPI_API },
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
            headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + PUBLIC_STRAPI_API },
            body: JSON.stringify({
                "to": "dev@netdevs.com",
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
<svelte:head>
	<title>{data.data.attributes.title}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<PageBanner title="{data.data.attributes.title}" extraClass="contact" subTitle="{data.data.attributes.Subheading}" banner="{url}{data.data.attributes.featuredimage.data.attributes.url}" />

<section class="mx-10 contact_inner">
    <Container class="mb-5 contact_inner__content">
        <Row>
            <Col md="12">
                <h2 class="text-center">{data.data.attributes.section1Title}</h2>
                <h4 class="text-center pfont">- <span class="ptc"><i>{data.data.attributes.Section1SubAuthor}</i></span></h4>
                <p class="two-columns pt-3">{@html data.data.attributes.Subheading2}</p>
            </Col>
        </Row>
    </Container>
    <Container class="contact_inner__details">
        <Row>
            <Col md="4" class="flex-vcenter">
                <Animate>
                    <h4 class="ptc pfont">{data.data.attributes.office_address_title}</h4>
                    <h4 class="stc pb-5">{@html office_address}</h4>
                    <h4 class="ptc pfont">{data.data.attributes.mailing_address_title}</h4>
                    <h4 class="stc pb-5">{@html mailing_address}</h4>
                    <h4 class="ptc pfont">{data.data.attributes.phone_title}</h4>
                    <h4 class="stc pb-5">{@html phone}</h4>
                </Animate>
            </Col>
            <Col md="8">
                <Animate>
                    <iframe title="ULFBUILT" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12289.756932100185!2d-106.59873028576666!3d39.63982841472373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741d9050f708981%3A0x28a8cd6309f12845!2sULFBUILT!5e0!3m2!1sen!2sin!4v1681880274611!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Animate>
            </Col>
        </Row>
    </Container>
</section>
<Animate>
    <div class="contact-img" style="background-image: url({url}{data.data.attributes.formcover.data.attributes.url});"></div>
</Animate>
<Animate>
    <div class="contact-box container-fluid">
        <Container>
            <Row>
                <Col sm="12" class="contact-form tbc wtc border-radius">
                    <h2 class="text-center pb-4">{data.data.attributes.contact_form_title}</h2>
                    <Form method="post">
                        <FormGroup class="input-icon-box">
                            <Input class="input-user" placeholder="Full Name" bind:value={name} />
                            <div class="input-icon input-icon-user"></div>
                        </FormGroup>
                        <FormGroup class="input-icon-box">
                            <Input class="input-email" placeholder="Email address" bind:value={email} />
                            <div class="input-icon input-icon-email"></div>
                        </FormGroup>
                        <FormGroup class="input-icon-box">
                            <Input class="input-phone" placeholder="Phone Number" bind:value={subject} />
                            <div class="input-icon input-icon-phone"></div>
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" id="yourMessage" placeholder="Tell us about your project..." bind:value={message}/>
                        </FormGroup>
                        <Button type="button" {color} on:click={doContact}>Send</Button>
                    </Form>
                    {result}
                </Col>
            </Row>
        </Container>
    </div>    
</Animate>

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
    .contact_inner {
        .contact_inner__content {
            h2 {
                font-size: 2.813rem;
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
    .contact-box {
        margin-top: -6rem;
        @include media-max(xs) { 
            padding: 0 1.25rem;
        }
        h2 {
            font-size: 2.25rem;
            margin-bottom: 3.125rem;
        }
        :global(.contact-form) {
            max-width: 52.602rem;
            padding: 4rem 10rem;
            @include media-max(ipadmini) { 
                max-width: 45rem;
                padding: 4rem;
            }
        }
        :global(.contact-form textarea) {
            height: 13rem;
            margin: 2rem 0;
        }
        :global(.contact-form button) {
            padding: 0.7rem 3.125rem;
        }
        :global(.contact-form button:hover) {
            background-color: #263A63;
            color: #fff;
            border-color: #fff;
        }
    }
    .contact-img {
        height: 31.313rem;
        background-position: center;
        @include media-max(sm) { 
            height: 18.75rem;
        }
    }
    
    
</style>
