<script lang="ts">
    import {Container, Row, Col} from 'sveltestrap';

	import Animate from '$lib/components/Animate.svelte';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
    import Contactform from '$lib/components/layout/Contactform.svelte';
    import ClientTestimonial from '$lib/components/layout/ClientTestimonial.svelte';
    // import tempBG from '$lib/img/certificate.png';
    import tempBgMobile from '$lib/img/certificate-mobile.png'; 
    export let data;

    let abouttitle = data.data.attributes.Title
    let aboutimage = data.data.attributes.featuredimage.data.attributes.url
    let aboutimageMobile = data.data.attributes.featuredimage.data.attributes.url    
    let aboutsubheading = data.data.attributes.Aboutsubheading
    let about = data.data.attributes
    console.log(about)
    let url = "https://strapi.ulfbuilt.com:1337/";
    let scroll: number;
</script>
<svelte:head>
	<title>{abouttitle}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<svelte:window bind:scrollY={scroll} />

<PageBanner title="{abouttitle}" extraClass="about" subTitle="{aboutsubheading}" banner="{url}{aboutimage}" bannerMobile="{url}{aboutimageMobile}"/>

<section class="mw-1000 text-center about-heading">
    <Container>
            <h2 class="pb-2">{@html about.AboutHeading}</h2>
            <p>{@html about.abouttext}</p>
    </Container>
</section>
<section class="contractor-details">
    <Container>
        <Row class="flex-md-row flex-column-reverse">
            <Col md="5" class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section1heading}</h3>
                <p>{@html about.Section1text}</p>
            </Col>
            <Col md="6">
                <Animate>
                    <div>
                        <img src="{url+about.Section1image.data.attributes.url}" alt="{about.Section1heading}" class="w-100">
                    </div>
                </Animate>
            </Col>
        </Row>
    </Container>
</section>
<section class="contractor-details">
    <Animate>
        <Container>
        <Row>
            <Col md="6">
                <div>
                    <img src="{url+about.Section2image.data.attributes.url}" alt="{about.Section2heading}" class="w-100">
                </div>
            </Col>
            <Col md="5" class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section2heading}</h3>
                <p>{@html about.Section2text}</p>
            </Col>
        </Row>
        </Container>        
    </Animate>
</section>
<section class="contractor-details">
    <Animate>
        <Container>
            <Row class="flex-md-row flex-column-reverse">
                <Col md="5" class="align-self-center">
                    <h3 class="mb-4 mr-t">{@html about.Section3heading}</h3>
                    <p>{@html about.Section3text}</p>
                </Col>
                <Col md="6">
                    <div>
                        <img src="{url+about.Section3image.data.attributes.url}" alt="{about.Section3heading}" class="w-100 2col-image">
                    </div>
                </Col>
            </Row>
        </Container>    
    </Animate>
</section>
<section class="mx-8 remodel">
    <Animate>
        <div class="remodel__bgimage">
            {#if about.Section4image.data}
            <img src="{url+about.Section4image.data.attributes.url}" alt="{about.Section3heading}">
            {/if}
            <p class="text-center pt-3"><i><b>{about.Section4text}</b></i></p>
        </div>        
    </Animate>
</section>
<section class="certificate mx-8">
    <Container>
        <Animate>
            <!-- <h2 class="mb-5 text-center">{about.Section5heading}</h2>
            <p class="text-left">{@html about.Section5text}</p> -->
            {#if about.Section5image.data}
            <!-- <img src="{url+about.Section5image.data.attributes.url}" alt="{about.Section5heading}"> -->
              <img src="{url+about.Section5image.data.attributes.url}" alt="{about.Section3heading}" class="desktop">
              <img src="{tempBgMobile}" alt="{about.Section3heading}" class="mobile">
            {/if}      
        </Animate>
    </Container>
</section>
<section class="sets-parts">
    <Animate>
        <Container>
            <Row>
                <Col md="12"><h2 class="text-center mb-5">{@html about.Section6heading}</h2></Col>
            </Row>
            <Row class="flex-md-row flex-column-reverse sets-parts__row">  
                <Col md="6" class="align-self-center blue-color-background sets-parts__content p-5">
                    <h3 class="mb-4 text-right">{@html about.Section6subheading}</h3>
                    <p class="text-right">{@html about.Section6text}</p>
                </Col>
                <Col md="6">
                    <div class="sets-parts__mr-l">
                        <!-- style:transform={`translate3d(0, ${(scroll * -0.15)}px, 0)`} -->
                        <img src="{url+about.Section6image.data.attributes.url}" alt="{about.Section6subheading}" class="w-100">
                    </div>
                </Col>
            </Row>
        </Container>        
    </Animate>
    <Animate>
        <Container class="mx-10">
            <Row class="sets-parts__row">
                <Col md="6" style="z-index: 1;">
                    <div class="sets-parts__mr-r">
                        <!-- style:transform={`translate3d(0, ${(scroll * -0.15)+450}px, 0)`} -->
                        <img src="{url+about.Section7image.data.attributes.url}" alt="{about.Section7heading}" class="w-100">
                    </div>
                </Col>
                <Col md="6" class="align-self-center silver-color-background sets-parts__content sets-parts__mrl-30 p-5">
                    <h3 class="mb-4 rp-fontsize">{@html about.Section7heading}</h3>
                    <p>{@html about.Section7text}</p>
                </Col>
            </Row>
        </Container>    
    </Animate>
    <Animate>
        <Container class="mx-10">
            <Row class="flex-md-row flex-column-reverse sets-parts__row">
                <Col md="6" class="align-self-center blue-color-background sets-parts__content p-5">
                    <h3 class="mb-4 text-right">{@html about.Section8heading}</h3>
                    <p class="text-right">{@html about.Section8text}</p>
                </Col>
                <Col md="6">
                    <div class="sets-parts__mr-l">
                        <!-- style:transform={`translate3d(0, ${(scroll * -0.1)+500}px, 0)`} -->
                        <img src="{url+about.Section8image.data.attributes.url}" alt="{about.Section8heading}" class="w-100">
                    </div>
                </Col>
            </Row>
        </Container>        
    </Animate>

</section>

<ClientTestimonial/>

<section class="talktous">
    <Container>
        <h2>Home Builder in Vail Valley, Colorado</h2>
        <p>We build and remodel custom homes in Vail, Beaver Creek and the Central Rockies of Colorado.</p>
        <div class="talktous__btns">
            <a href="/contact-us" class="btn btn-secondary">Talk to Us</a>
            <a href="/portfolio" class="btn btn-inverted">Explore our Gallery</a>
        </div>
    </Container>
</section>
<Contactform/>
<style lang="scss">
    $darkgrey-color: #3E3636;   
    :global(.banner.about) {
        background-position: top !important;
    } 
    .about-heading{
        h2 {
            color:$secondary-color;
        }
    }
    .mw-1000{
        h2{
            color:#263A63;
        }
    }
    .mx-8{
        margin:8rem auto;
        @include media-max(sm){
            margin:4rem auto;
        }
    }
    section{
        margin:8rem auto;
        &.certificate {
            max-width: 100%;
            width: 75%;
            margin: auto;
            .mobile {
                display: none;
            }
            @include media-max(sm){
                width: 100%;
                .mobile {
                    display: block;
                }
                .desktop {
                    display: none;
                }
            }
        }
    }
    .contractor-details {
        :global(.row) {
            justify-content: center;
            gap: 3rem;
        }
        h3 {
            color:$secondary-color;
            font-size: 2.813rem;
        }
        p {
            font-size: 1.25rem;
        }
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
            p {
                @include media-max(xs){
                    padding: 0 1rem;
                }
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
        :global(.sets-parts__row) {
            justify-content: center;
            align-items: center;
        }
        :global(.sets-parts__content) {
            min-height: 35rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @include media-max(md) {
                min-height: auto;
            }
        }
        :global(.sets-parts__content h3) {
            color: $secondary-color;
            font-size: 2.813rem;
            @include media-max(xs) {
                text-align: left !important;
            }
        }
        :global(.sets-parts__content p) {
            font-size: 1.25rem;
            @include media-max(xs) {
                text-align: left !important;
            }
        }
        :global(.sets-parts__mrl-30){
            margin-left: -30px;
            @include media-max(xs) {
                margin-left: 0;
            }
        }
        &__mr-l{
            margin-left: -30px;
            @include media-max(md) {
                margin-left: -12px;
            }
            @include media-max(sm){ 
                margin-left: -30px;
            }
            @include media-max(xs) {
                margin-left: 0;
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
    .talktous{
        h2 {
            color: $secondary-color;
        }
        p {
            font-size: 1.25rem;
        }
        text-align: center;
        &__btns{
            .btn {
                padding: 0.7rem 3.125rem;
                font-size: 1.25rem;
            }
            a:nth-child(1){
                margin: 1rem;
            }
        }
    }

</style>