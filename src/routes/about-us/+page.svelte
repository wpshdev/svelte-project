<script lang="ts">
    import {Container, Row, Col} from 'sveltestrap';
    import { onMount } from 'svelte';
	import { contenteditable_truthy_values } from 'svelte/internal';
    export let data;
    console.log(data);
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
<section class="mw-1000 text-center about-heading">
        <h2 class="pb-2">{@html about.AboutHeading}</h2>
        <p>{@html about.abouttext}</p>
</section>
<section>
    <Container>
        <Row class="flex-md-row flex-column-reverse">
            <Col md=1></Col>
            <Col md=4 class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section1heading}</h3>
                <p>{@html about.Section1text}</p>
            </Col>
            <Col md=1></Col>
            <Col md=5>
                <!-- style:transform={`translate3d(0, ${(scroll * -0.1)+50}px, 0)`} -->
                <div>
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
                <div>
                <img src="{url+about.Section2image.data.attributes.formats.large.url}" alt="{about.Section2heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
            <Col md=4 class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section2heading}</h3>
                <p>{@html about.Section2text}</p>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row class="flex-md-row flex-column-reverse">
            <Col md=1></Col>
            <Col md=4 class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section3heading}</h3>
                <p>{@html about.Section3text}</p>
            </Col>
            <Col md=1></Col>
            <Col md=5>
                <div>
                <img src="{url+about.Section3image.data.attributes.formats.large.url}" alt="{about.Section3heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<section class="mx-8 pd-0">
    <!-- style:width={`${80+(scroll/100)}vw`} -->
    <div class="s4image">
        {#if about.Section4image.data}
        <img src="{url+about.Section4image.data.attributes.formats.large.url}" alt="{about.Section3heading}">
        {/if}
        <p class="text-center"><i>{about.Section4text}</i></p>
    </div>
</section>
<section class="mw-1000 mx-8">
    <Container>
        <h2 class="mb-5 text-center">{about.Section5heading}</h2>
        <p class="text-left">{@html about.Section5text}</p>
    </Container>
</section>
<section>
    <Container>
        <Row>
            <Col md=12><h2 class="text-center mb-5">{@html about.Section6heading}</h2></Col>
        </Row>
        <Row class="flex-md-row flex-column-reverse">    
            <Col md=1></Col>
            <Col md=5 class="align-self-center blue-color-background p-5" style="min-height: 440px;">
                <h3 class="mb-4 text-right">{@html about.Section6subheading}</h3>
                <p class="text-right">{@html about.Section6text}</p>
            </Col>
            <Col md=5>
                <div class="mr-l">
                    <!-- style:transform={`translate3d(0, ${(scroll * -0.15)}px, 0)`} -->
                <img src="{url+about.Section6image.data.attributes.formats.large.url}" alt="{about.Section6subheading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
    <Container class="mx-10">
        <Row>
            <Col md=1></Col>
            <Col md=5 style="z-index: 1;">
                <div class="mr-r">
                    <!-- style:transform={`translate3d(0, ${(scroll * -0.15)+450}px, 0)`} -->
                    <img src="{url+about.Section7image.data.attributes.formats.large.url}" alt="{about.Section7heading}" class="w-100">
                </div>
            </Col>
            <Col md=5 class="align-self-center silver-color-background p-5" style="margin-left:-30px;min-height: 440px;">
                <h3 class="mb-4 rp-fontsize">{@html about.Section7heading}</h3>
                <p>{@html about.Section7text}</p>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
    <Container class="mx-10">
        <Row class="flex-md-row flex-column-reverse">
            <Col md=1></Col>
            <Col md=5 class="align-self-center blue-color-background p-5" style="min-height: 440px;">
                <h3 class="mb-4 text-right">{@html about.Section8heading}</h3>
                <p class="text-right">{@html about.Section8text}</p>
            </Col>
            <Col md=5>
                <div class="mr-l">
                    <!-- style:transform={`translate3d(0, ${(scroll * -0.1)+500}px, 0)`} -->
                <img src="{url+about.Section8image.data.attributes.formats.large.url}" alt="{about.Section8heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<style lang="scss">
.mx-8{margin:8rem auto;}
section{margin:4rem auto;}
.service-box1 div{
    border-top: 2px solid $secondary-color;
    border-right: 2px solid $secondary-color;
}
.service-box2{
    border-bottom: 2px solid $secondary-color;
}
.service-box6{
    border-left: 2px solid $secondary-color;
    border-bottom: 2px solid $secondary-color;
}
.s4image {
    width:80vw;
    margin:auto;
    min-width:80vw;
    max-width:100vw;
}
.mr-l {margin-left: -30px;}
.mr-r {margin-right: 0;}
@include media-max(md) {
    .mr-r {margin-right: 18px;}
    .mr-l {margin-left: -12px;}
}
@include media-max(xs){ 
    .pd-0 {padding: 0;}
    .s4image {
        width:100vw;
        margin:auto;
        min-width:80vw;
        max-width:100vw;
    }
}
@include media-max(sm){ 
    .mr-t {margin-top: 1.5rem;}
    .mr-l {margin-left: -30px;}
    .mr-r {margin-right: 0;}
}
</style>