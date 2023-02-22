<script lang="ts">
    export let data;
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
    const color = 'primary';
    import { Col, Container, Row } from 'sveltestrap';
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
            result = 'Thank you for contacting us. We will reach you soon.'
        }
	}
</script>
<svelte:head>
	<title>Contact us</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="contact-1 container-fluid" style="background-image:url(https://strapi.ulfbuilt.com:1337{featuredimage})">
    <Container>
        <Row>
            <Col md="4" style="text-align:right;padding-top: 150px;padding-right: 50px;color: #fff;">
            <h3>PHONE</h3>
            <p>{phone}</p>
            <h3>FAX</h3>
            <p>{fax}</p>
            <h3>OUR OFFICE</h3>
            <p><a href="{map_url}" target="_blank" rel="noreferrer">{office_address}</a></p>
            <h3><a href="{map_url}" target="_blank" rel="noreferrer">Map to our office</a></h3>
            </Col>
            <Col md="4" class="contact-form">
                <h2>GET IN TOUCH WITH US</h2>
                <p>We are here to provide you with more info, and answer any questions you may have.</p>
                <Form method="post">
                    <FormGroup>
                        <Label for="yourName">Your Name</Label>
                        <Input placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="yourEmail">Your Email</Label>
                        <Input type="email" placeholder="Your Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="yourSubject">Your Subject</Label>
                        <Input placeholder="Your Subject" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="yourMessage">Your Message</Label>
                        <Input type="textarea" id="yourMessage" placeholder="Your Message"/>
                    </FormGroup>
                    <Button type="button" {color} on:click={doContact}>Send</Button>
                </Form>
                {result}
            </Col>
            <Col md="4" style="padding-top: 200px;padding-left: 50px;color: #fff;">
            <h3>Mailing Address</h3>
            <p>{mailing_address}</p>
            <h3>Find us on</h3>
            <p><a href="{facebook}">Facebook</a>, <a href="{twitter}">Twitter</a>, <a href="{youtube}">Youtube</a></p>
            <h3><a href="{houzz}">Houzz</a></h3>
            </Col>
        </Row>
    </Container>
</div>
<style lang="scss">
    a,a:hover{
        color:#fff;
    }
</style>