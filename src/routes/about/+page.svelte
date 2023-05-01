<script lang="ts">
    import {Container, Row, Col} from 'sveltestrap';
    import { onMount } from 'svelte';
    export let data;
    let abouttitle = data.data.attributes.Title
    let aboutimage = data.data.attributes.featuredimage.data.attributes.formats.large.url
    let aboutsubheading = data.data.attributes.Aboutsubheading
    let about = data.data.attributes
    let url = "https://strapi.ulfbuilt.com:1337/";
    let scroll: number
</script>
<svelte:head>
	<title>{abouttitle} - changes</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<svelte:window bind:scrollY={scroll} />
<div class="cover" style="background-image: url({url}{aboutimage});">
    <h2 class="pfont">{abouttitle}</h2>
    <p class="pfont">{aboutsubheading}</p>
</div>
<section class="mw-1000 text-center mx-10">
        <h1>{@html about.AboutHeading}</h1>
        <p>{@html about.abouttext}</p>
</section>
<section>
    <Container>
        <Row>
            <Col md=1></Col>
            <Col md=4 class="align-self-center">
                <h2 class="mb-4">{@html about.Section1heading}</h2>
                <p>{@html about.Section1text}</p>
            </Col>
            <Col md=1></Col>
            <Col md=5>
                <div style:transform={`translate3d(0, ${(scroll * -0.1)+50}px, 0)`}>
                <img src="{url+about.Section1image.data.attributes.formats.large.url}" alt="{about.Section1heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row>
            <Col md=1></Col>
            <Col md=5>
                <div style:transform={`translate3d(0, ${(scroll * -0.15)+200}px, 0)`}>
                <img src="{url+about.Section2image.data.attributes.formats.large.url}" alt="{about.Section2heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
            <Col md=4 class="align-self-center">
                <h2 class="mb-4">{@html about.Section2heading}</h2>
                <p>{@html about.Section2text}</p>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row>
            <Col md=1></Col>
            <Col md=4 class="align-self-center">
                <h2 class="mb-4">{@html about.Section3heading}</h2>
                <p>{@html about.Section3text}</p>
            </Col>
            <Col md=1></Col>
            <Col md=5>
                <div style:transform={`translate3d(0, ${(scroll * -0.1)+220}px, 0)`}>
                <img src="{url+about.Section3image.data.attributes.formats.large.url}" alt="{about.Section3heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<section>
    <div style="max-height: 600px;">
        <img src="{url+about.Section4image.data.attributes.formats.large.url}" alt="{about.Section3heading}" class="w-100" style="object-fit: fill;">
    </div>
</section>
<section class="about-3">
    <p>Ready to make your dreams a reality? We invite you to connect with us and have a conversation about your project.</p>
    <p>Together we can build your dream home with the utmost care.</p>
</section>
<style lang="scss">
.about-1{
    min-height: 100vh;
    background-position: bottom;
    background-size: cover;
}
.about-2{
    margin: 100px auto;
    h1,h3{
        text-align: center;
    }
}
.about-3{
    margin: 100px auto;
    p{
        text-align: center;
    }
}
</style>