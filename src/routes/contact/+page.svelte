<script lang="ts">
    export let data;
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
    const color = 'primary';
    import { Col, Container, Row } from 'sveltestrap';
    const url = "https://strapi.ulfbuilt.com:1337/";
    console.log(data);
    let featuredimage = data.data.attributes.featuredimage.data.attributes.url;
    let phone = data.data.attributes.phone;
    let fax = data.data.attributes.fax;
    let office_address = data.data.attributes.office_address;
    let mailing_address = data.data.attributes.mailing_address;
    let map_url = data.data.attributes.map_url;
    let facebook = data.data.attributes.facebook;
    let twitter = data.data.attributes.twitter;
    let youtube = data.data.attributes.youtube;
    let houzz = data.data.attributes.youtube;
    let name = ''
    let email = ''
    let subject = ''
    let message = ''
    let result = ''
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
            result = 'Thank you for contacting us. We will reach you soon.'
        }
        }
	}
</script>
<svelte:head>
	<title>{data.data.attributes.title}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="cover" style="background-image: url({url}{data.data.attributes.featuredimage.data.attributes.formats.large.url});">
    <h2 class="pfont">{data.data.attributes.title}</h2>
    <p class="pfont">{data.data.attributes.Subheading}</p>
</div>
<section>
    <Container>
        <Row>
            <Col md="4" class="flex-vcenter">
                <h6 class="ptc pfont">OUR OFFICE</h6>
                <h4 class="stc pb-4">{office_address}</h4>
                <h6 class="ptc pfont">MAILING ADDRESS</h6>
                <h4 class="stc pb-4">{mailing_address}</h4>
                <h6 class="ptc pfont">PHONE</h6>
                <h4 class="stc pb-4">{phone}</h4>
            </Col>
            <Col md="8">
                <iframe title="ULF BUILT" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12289.756932100185!2d-106.59873028576666!3d39.63982841472373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741d9050f708981%3A0x28a8cd6309f12845!2sULFBUILT!5e0!3m2!1sen!2sin!4v1681880274611!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
    </Container>
</section>
<div class="contact-img" style="background-image: url({url}{data.data.attributes.formcover.data.attributes.formats.large.url});">
</div>
<div class="contact-box container-fluid">
    <Container>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} class="contact-form sbc wtc border-radius">
                <h2 class="text-center pb-4">Leave us a message</h2>
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
                        <Input type="textarea" id="yourMessage" placeholder="Tell us about you project..." bind:value={message}/>
                    </FormGroup>
                    <Button type="button" {color} on:click={doContact}>Send</Button>
                </Form>
                {result}
            </Col>
        </Row>
    </Container>
</div>