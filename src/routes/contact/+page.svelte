<script lang="ts">
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button } from 'sveltestrap';
    const color = 'primary';
    import { Col, Container, Row } from 'sveltestrap';
</script>
<svelte:head>
	<title>Contact us</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="contact-1 container-fluid">
    <Container>
        <Row>
            <Col md="4"></Col>
            <div class="contact-form col-md-4">
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
                    <Button {color}>Send</Button>
                </Form>
            </div>
            <Col md="4"></Col>
        </Row>
    </Container>
</div>
<style lang="scss">
.contact-1{
    background: url("$lib/img/ULFBUILT-TEAM-1.jpg");
    min-height: 100vh;
    background-position: bottom;
    background-size: cover;
    padding-top: 150px;

    .contact-form{
        background-color: rgba(0,0,0,0.6);
        padding: 50px 20px;
        margin:50px 0px;
        color: #fff;
    }
}
</style>