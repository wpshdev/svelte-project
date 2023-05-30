<script lang="ts">
    export let data;
    import {Container, Row, Col} from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
    import Animate from '$lib/components/Animate.svelte';
    import PageBanner from '$lib/components/layout/PageBanner.svelte';
    console.log(data);
    const url = "https://strapi.ulfbuilt.com:1337/";
    let page = data.data.attributes
</script>
<svelte:head>
	<title>{page.Title}</title>
	<meta name="description" content="ULF BUILT" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>
<PageBanner title="{page.Title}" subTitle="{page.Subheading}"  banner="{url}{page.Cover.data[0].attributes.formats.large.url}"/>
<section class="service-b">
    <Animate>
        <Container>
            <h2 class="text-center mb-5 py-3">{page.section1heading}</h2>
            <Row>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <div class="service-b__service-box__service-box-inner__service-icon">
                                <img src="{url}{page.section1item1icon.data.attributes.formats.medium.url}" alt="{page.section1item1heading}">
                            </div>
                            <h4>{page.section1item1heading}</h4>
                        </div>
                        <p>{page.section1item1text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <div class="service-b__service-box__service-box-inner__service-icon">
                                <img src="{url}{page.section1item2icon.data.attributes.formats.medium.url}" alt="{page.section1item2heading}">
                            </div>
                            <h4>{page.section1item2heading}</h4>
                        </div>
                        <p>{page.section1item2text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <div class="service-b__service-box__service-box-inner__service-icon">
                                <img src="{url}{page.section1item3icon.data.attributes.formats.medium.url}" alt="{page.section1item3heading}">
                            </div>
                            <h4>{page.section1item3heading}</h4>
                        </div>
                        <p>{page.section1item3text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <div class="service-b__service-box__service-box-inner__service-icon">
                                <img src="{url}{page.section1item4icon.data.attributes.formats.medium.url}" alt="{page.section1item4heading}">
                            </div>
                            <h4>{page.section1item4heading}</h4>
                        </div>
                        <p>{page.section1item4text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <div class="service-b__service-box__service-box-inner__service-icon">
                                <img src="{url}{page.section1item5icon.data.attributes.formats.medium.url}" alt="{page.section1item5heading}">
                            </div>
                            <h4>{page.section1item5heading}</h4>
                        </div>
                        <p>{page.section1item5text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <div class="service-b__service-box__service-box-inner__service-icon">
                                <img src="{url}{page.section1item6icon.data.attributes.formats.medium.url}" alt="{page.section1item6heading}">
                            </div>
                            <h4>{page.section1item6heading}</h4>
                        </div>
                        <p>{page.section1item6text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="mx-10 sets-us-apart">
    <Animate>
        <Container>
            <h2 class="text-center mb-5 py-3">{page.section2mainheading}</h2>
                <Row noGutters class="mw-1000 justify-content-center">
                    <Col md="5" class="sets-us-apart__content">
                        <h4 class="text-right pfont px-5 py-3">{@html page.section2heading}</h4>
                        <p class="text-right px-5 py-3 blue-color-background">{@html page.section2text}</p>
                    </Col>
                    <Col md="6">
                        <img src="{url}{page.section2image.data.attributes.formats.medium.url}" alt="{page.section2heading}" class="w-100">
                    </Col>
                </Row>
        </Container>
    </Animate>
</section>
<section class="mx-10 sets-us-apart">
    <Animate>
        <Container>
            <Row noGutters class="mw-1000 justify-content-center flex-md-row flex-column-reverse">
                <Col md="6">
                    <img src="{url}{page.section3image.data.attributes.formats.medium.url}" alt="{page.section3heading}" class="w-100">
                </Col>
                <Col md="5" class="sets-us-apart__content">
                    <h4 class="px-5 txt-center py-3 pfont">{@html page.section3heading}</h4>
                    <p class="px-5 txt-center py-3 blue-color-background">{@html page.section3text}</p>
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="mx-10 sets-us-apart">
    <Animate>
        <Container>
            <Row noGutters class="mw-1000 justify-content-center">
                <Col md="5" class="sets-us-apart__content">
                    <h4 class="text-right pfont px-5 py-3">{@html page.section4heading}</h4>
                    <p class="text-right px-5 py-3 blue-color-background">{@html page.section4text}</p>
                </Col>
                <Col md="6">
                    <img src="{url}{page.section4image.data.attributes.formats.medium.url}" alt="{page.section4heading}" class="w-100">
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="height-100vh">
    <Animate>
        <img src="{url}{page.section5image.data.attributes.formats.medium.url}" alt="{page.title}" class="w-100">
    </Animate>
</section>
<section>
    <Animate>
        <Container>
            <h2 class="text-center mb-3 py-3">{page.section6heading}</h2>
            <p class="mb-2 py-3 two-columns">{@html page.section6text}</p>
            <div class="text-right"><a class="btn btn-secondary" href="/contact">{page.section6btn}</a></div>
        </Container>
    </Animate>
</section>
<Animate>
    <Cta/>
</Animate>
<style lang="scss">
    .service-b{
        &__service-box{
            padding: 3rem;
            @include media-max(md){ 
                padding: 1rem 0rem;
                padding-left: 10px;
            }
            @include media-max(sm){
                padding: 1rem 1rem;
            }
            &__service-box-inner{
                display: flex;
                margin-bottom: 20px;
                &__service-icon{
                    img{
                        width: auto;
                        background-color: #263A63;
                        padding: 10px 20px;
                        box-shadow: 3px 3px 3px #aaa;
                        border-radius: 10px;
                        max-height: 5rem;
                        min-height: 5rem; 
                        @include media-max(md){ 
                            padding: 8px 10px;
                            max-height: 4rem;
                            min-height: 4rem;
                        }
                    }
                }
                h4{
                    align-self: center;
                    padding-left: 20px;
                    @include media-max(md){
                        align-self: center;
                        padding-left: 9px;
                    }
                }
            } 
        }
    } 
    :global(.sets-us-apart__content){
        display:flex;
        flex-direction:column;
        justify-content:center;
        h4{
            font-weight: 400;
            text-transform:uppercase;
        }
    }
    @include media-max(sm){ 
        .text-right, .txt-center{
            text-align: center;
        }
        :global(.service-b .col-md-4:nth-child(3)) {
            background-image: unset;
        }
    } 
</style>