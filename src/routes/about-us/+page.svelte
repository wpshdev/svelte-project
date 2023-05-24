<script lang="ts">
    import {Container, Row, Col} from 'sveltestrap';
    // import { onMount } from 'svelte';
	// import { contenteditable_truthy_values } from 'svelte/internal';
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
<section class="mx-8 remodel">
    <!-- style:width={`${80+(scroll/100)}vw`} -->
    <div class="remodel__bgimage">
        {#if about.Section4image.data}
        <img src="{url+about.Section4image.data.attributes.formats.large.url}" alt="{about.Section3heading}">
        {/if}
        <p class="text-center pt-3"><i><b>{about.Section4text}</b></i></p>
    </div>
</section>
<section class="mw-1000 mx-8">
    <Container>
        <!-- <h2 class="mb-5 text-center">{about.Section5heading}</h2>
        <p class="text-left">{@html about.Section5text}</p> -->
        {#if about.Section5image.data}
        <img src="{url+about.Section5image.data.attributes.formats.large.url}" alt="{about.Section5heading}">
        {/if}
    </Container>
</section>
<section class="sets-parts">
    <Container>
        <Row>
            <Col md=12><h2 class="text-center mb-5">{@html about.Section6heading}</h2></Col>
        </Row>
        <Row class="flex-md-row flex-column-reverse">    
            <Col md=1></Col>
            <Col md=5 class="align-self-center blue-color-background sets-parts__content p-5">
                <h3 class="mb-4 text-right">{@html about.Section6subheading}</h3>
                <p class="text-right">{@html about.Section6text}</p>
            </Col>
            <Col md=5>
                <div class="sets-parts__mr-l">
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
                <div class="sets-parts__mr-r">
                    <!-- style:transform={`translate3d(0, ${(scroll * -0.15)+450}px, 0)`} -->
                    <img src="{url+about.Section7image.data.attributes.formats.large.url}" alt="{about.Section7heading}" class="w-100">
                </div>
            </Col>
            <Col md=5 class="align-self-center silver-color-background sets-parts__content sets-parts__mrl-30 p-5">
                <h3 class="mb-4 rp-fontsize">{@html about.Section7heading}</h3>
                <p>{@html about.Section7text}</p>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
    <Container class="mx-10">
        <Row class="flex-md-row flex-column-reverse">
            <Col md=1></Col>
            <Col md=5 class="align-self-center blue-color-background sets-parts__content p-5">
                <h3 class="mb-4 text-right">{@html about.Section8heading}</h3>
                <p class="text-right">{@html about.Section8text}</p>
            </Col>
            <Col md=5>
                <div class="sets-parts__mr-l">
                    <!-- style:transform={`translate3d(0, ${(scroll * -0.1)+500}px, 0)`} -->
                    <img src="{url+about.Section8image.data.attributes.formats.large.url}" alt="{about.Section8heading}" class="w-100">
                </div>
            </Col>
            <Col md=1></Col>
        </Row>
    </Container>
</section>
<style lang="scss">
    $darkgrey-color: #3E3636;    
    .about-heading h2, h3 {
        color:$secondary-color;
    }
    .mw-1000 h2{
        color:#263A63;
    }
    .mx-8{
        margin:8rem auto;
        @include media-max(sm){
            margin:4rem auto;
        }
    }
    section{
        margin:4rem auto;
    }
    .remodel {
        &__bgimage {
            width:100%;
            margin:auto;
            min-width:100%;
            max-width:100%;
            @include media-max(xs){ 
                width:100vw;
                margin:auto;
                min-width:80vw;
                max-width:100vw;
            }
        }
        @include media-max(xs){
            padding: 0;
        }
    }
    .sets-parts{
        h2{
            color:$darkgrey-color;
        }
        :global(.sets-parts__content) {
            min-height: 440px;
        }
        :global(.sets-parts__mrl-30){
            margin-left: -30px;
        }
        &__mr-l{
            margin-left: -30px;
            @include media-max(md) {
                margin-left: -12px;
            }
            @include media-max(sm){ 
                margin-left: -30px;
            }
        }
        &__mr-r{
            margin-right: 0;
            @include media-max(md) {
                margin-right: 18px;
            }
            @include media-max(sm){
                margin-right: 0;
            }
        }
    } 
    @include media-max(sm){ 
        .mr-t {
            margin-top: 1.5rem;
        }
    }
</style>