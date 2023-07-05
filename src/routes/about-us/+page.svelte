<script lang="ts">
    import {Container, Row, Col} from 'sveltestrap';

	import Animate from '$lib/components/Animate.svelte';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
    import Contactform from '$lib/components/layout/Contactform.svelte';
    import ClientTestimonial from '$lib/components/layout/ClientTestimonial.svelte';
    // import tempBG from '$lib/img/certificate.png';
    import certBG from '$lib/img/BlankCertBg.png';
    import certBGMobile from '$lib/img/CertBGMobileBlank.png';
    // import tempBgMobile from '$lib/img/certificate-mobile.png'; 
    export let data;

    let abouttitle = data.about.data.attributes.Title
    let aboutimage = data.about.data.attributes.featuredimage.data.attributes.url
    let aboutimageMobile = data.about.data.attributes.featuredimage.data.attributes.url    
    let aboutsubheading = data.about.data.attributes.Aboutsubheading
    let about = data.about.data.attributes
    let url = "https://strapi.ulfbuilt.com:1337/";
    let scroll: number;

    let testimonialsData = data.testimonials.data;
</script>
<svelte:head>
	<title>{abouttitle ? abouttitle : 'About us'}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<svelte:window bind:scrollY={scroll} />

<PageBanner title="{abouttitle ? abouttitle : 'About us'}" extraClass="about" subTitle="{aboutsubheading ? aboutsubheading : ''}" banner="{url}{aboutimage}" bannerMobile="{url}{aboutimageMobile}"/>

<section class="mw-1000 text-center about-heading">
    <Container>
            <h2 class="pb-2">{@html about.AboutHeading ? about.AboutHeading : ''}</h2>
            <p>{@html about.abouttext ? about.abouttext : ''}</p>
    </Container>
</section>
<section class="contractor-details">
    <Container>
        <Row class="flex-md-row flex-column-reverse">
            <Col md="5" class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section1heading ? about.Section1heading : ''}</h3>
                <p>{@html about.Section1text ? about.Section1text : ''}</p>
            </Col>
            <Col md="6">
                <Animate>
                    {#if about.Section1image.data}
                    <div>
                        <img src="{url+about.Section1image.data.attributes.url}" alt="{about.Section1heading}" class="w-100">
                    </div>
                    {/if}
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
                {#if about.Section2image.data}
                <div>
                    <img src="{url+about.Section2image.data.attributes.url}" alt="{about.Section2heading}" class="w-100">
                </div>
                {/if}
            </Col>
            <Col md="5" class="align-self-center">
                <h3 class="mb-4 mr-t">{@html about.Section2heading ? about.Section2heading : ''}</h3>
                <p>{@html about.Section2text ? about.Section2text : ''}</p>
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
                    <h3 class="mb-4 mr-t">{@html about.Section3heading ? about.Section3heading : ''}</h3>
                    <p>{@html about.Section3text ? about.Section3text : ''}</p>
                </Col>
                <Col md="6">
                    {#if about.Section3image.data}
                    <div>
                        <img src="{url+about.Section3image.data.attributes.url}" alt="{about.Section3heading}" class="w-100 2col-image">
                    </div>
                    {/if}
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
            <p class="text-center pt-3"><i><b>{about.Section4text ? about.Section4text : ''}</b></i></p>
        </div>        
    </Animate>
</section>
<section class="certificate mx-8">
    <Container>
        <Animate>
            <!-- <h2 class="mb-5 text-center">{about.Section5heading}</h2>
            <p class="text-left">{@html about.Section5text}</p> -->
            <div class="certificate-container" style="--cta-banner: url({about.Section5image.data ? url+about.Section5image.data.attributes.url : certBG}); --cta-banner-mobile: url({about.Section5MobileImage.data ? url+about.Section5MobileImage.data.attributes.url : certBGMobile})">
                <div class="certificate-inner-container">
                    <h2 class="certificate-title">{about.certTitle ? about.certTitle : ''}</h2>
                    <div class="certificate-content">
                        {@html about.certContent ? about.certContent : ''}
                    </div>
                </div>
            </div>
            
            <!-- <img src="{url+about.Section5image.data.attributes.url}" alt="{about.Section5heading}"> -->
            <!-- {#if about.Section5image.data}
              <img src="{url+about.Section5image.data.attributes.url}" alt="{about.Section3heading}" class="desktop">
              <img src="{url+about.Section5MobileImage.data.attributes.url}" alt="{about.Section3heading}" class="mobile">
            {/if}       -->
        </Animate>
    </Container>
</section>
<section class="sets-parts">
    <Animate>
        <Container>
            <Row>
                <Col md="12"><h2 class="text-center mb-5">{@html about.Section6heading ? about.Section6heading : ''}</h2></Col>
            </Row>
            <Row class="flex-md-row flex-column-reverse sets-parts__row">  
                <Col md="6" class="align-self-center blue-color-background sets-parts__content p-5">
                    <h3 class="mb-4 text-right">{@html about.Section6subheading ? about.Section6subheading : ''}</h3>
                    <p class="text-right">{@html about.Section6text ? about.Section6text : ''}</p>
                </Col>
                <Col md="6">
                    <div class="sets-parts__mr-l">
                        <!-- style:transform={`translate3d(0, ${(scroll * -0.15)}px, 0)`} -->
                        {#if about.Section6image.data}
                        <img src="{url+about.Section6image.data.attributes.url}" alt="{about.Section6subheading}" class="w-100">
                        {/if}
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
                        {#if about.Section7image.data}
                        <img src="{url+about.Section7image.data.attributes.url}" alt="{about.Section7heading}" class="w-100">
                        {/if}
                    </div>
                </Col>
                <Col md="6" class="align-self-center silver-color-background sets-parts__content sets-parts__mrl-30 p-5">
                    <h3 class="mb-4 rp-fontsize">{@html about.Section7heading ? about.Section7heading : ''}</h3>
                    <p>{@html about.Section7text ? about.Section7text : ''}</p>
                </Col>
            </Row>
        </Container>    
    </Animate>
    <Animate>
        <Container class="mx-10">
            <Row class="flex-md-row flex-column-reverse sets-parts__row">
                <Col md="6" class="align-self-center blue-color-background sets-parts__content p-5">
                    <h3 class="mb-4 text-right">{@html about.Section8heading ? about.Section8heading : ''}</h3>
                    <p class="text-right">{@html about.Section8text ? about.Section8text : ''}</p>
                </Col>
                <Col md="6">
                    <div class="sets-parts__mr-l">
                        <!-- style:transform={`translate3d(0, ${(scroll * -0.1)+500}px, 0)`} -->
                        {#if about.Section8image.data}
                        <img src="{url+about.Section8image.data.attributes.url}" alt="{about.Section8heading}" class="w-100">
                        {/if}
                    </div>
                </Col>
            </Row>
        </Container>        
    </Animate>

</section>

{#if testimonialsData}
<ClientTestimonial clientTestimonials={testimonialsData} testimonialHeading={about.testimonialHeading}/>
{/if}

<section class="talktous">
    <Container>
        <h2>{about.talkTous.talkTous_title ? about.talkTous.talkTous_title : ''}</h2>
        <p>{about.talkTous.talkTous_content ? about.talkTous.talkTous_content : ''}</p>
        <div class="talktous__btns">
            <a href="{about.talkTous.talkTous_btn1Link ? about.talkTous.talkTous_btn1Link : '#'}" class="btn btn-secondary">{about.talkTous.talkTous_btn1 ? about.talkTous.talkTous_btn1 : 'Button'}</a>
            <a href="{about.talkTous.talkTous_btn2Link ? about.talkTous.talkTous_btn2Link  : '#'}" class="btn btn-inverted">{about.talkTous.talkTous_btn2 ? about.talkTous.talkTous_btn2 : 'Button'}</a>
        </div>
    </Container>
</section>
<Contactform/>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
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
            text-align: center;
            img {
                width: auto;
                margin: auto;
                
                @include media-max(lg){
                    width: 100%;
                }
            }
            @include media-max(md){
                :global(.container) {
                    max-width: 100%;
                    margin: auto;
                }
            }
            .certificate-container {
                background-image: var(--cta-banner);
                // height: 100vh;
                height: 50rem;
                background-repeat: no-repeat;
                position: relative;
                background-size: contain;
                background-position: center;
                @include media-max(md){ 
                    background-image: var(--cta-banner-mobile);
                }
                .certificate-inner-container {
                    padding-top: 12.5rem;
                    @include media-max(lg){
                        padding-top: 15rem;
                    }
                    @include media-max(md){
                        padding-top: 6rem;
                    }
                    .certificate-title {
                        color: $secondary-color;
                        font-family: "Pinyon Script", cursive;
                        padding-bottom: 5rem;
                        @include media-max(lg){
                            padding-bottom: 3rem;
                        }
                        @include media-max(md){
                            width: 14rem;
                            margin: auto;
                            padding-bottom: 1rem;
                        }
                    }
                    .certificate-content {
                        max-width: 43.379rem;
                        font-size: 1.25rem;
                        line-height: 2.125rem;
                        color: $darkergray;
                        margin: auto;
                        @include media-max(lg){
                            font-size: 1rem;
                        }
                        @include media-max(md){
                            width: 14.375rem;
                            line-height: 2rem;
                            :global(br) {
                                display: none;
                            }
                        }
                    }
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
            @include media-max(ipadmini){ 
                font-size: 2.3rem;
            }
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
            @include media-max(ipadmini){ 
                font-size: 2.3rem;
            }
            @include media-max(xs) {
                text-align: left !important;
            }
        }
        :global(.sets-parts__content p) {
            font-size: 1.25rem;
            text-wrap: balance;
            @include media-max(xs) {
                text-align: left !important;
            }
        }
        :global(.sets-parts__mrl-30){
            margin-left: -15px;
            @include media-max(xs) {
                margin-left: 0;
            }
        }
        &__mr-l{
            margin-left: -15px;
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
            // @include media-max(md) {
            //     margin-right: 18px;
            // }
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
        @include media-max(ipadmini){ 
            margin-top: 15rem;
        }
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