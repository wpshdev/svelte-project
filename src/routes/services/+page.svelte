<script lang="ts">
    export let data;
    import {Container, Row, Col} from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
    import Animate from "$lib/components/Animate.svelte"
    const url = "https://strapi.ulfbuilt.com:1337/";
    let page = data.data.attributes
</script>
<svelte:head>
	<title>{page.Title}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="cover" style="background-image: url({url}{page.Cover.data[0].attributes.formats.large.url});">
    <h2>{page.Title}</h2>
    <p>{page.Subheading}</p>
</div>
<section class="service-b">
    <Animate>
        <Container>
            <h2 class="text-center mb-5 py-3">{page.section1heading}</h2>
            <Row>
                <Col md=4 sm=6 xs=12>
                    <div class="service-box">
                        <div class="service-box-inner">
                        <div class="service-icon">{page.section1item1icon}</div><h4>{page.section1item1heading}</h4>
                        </div>
                        <p>{page.section1item1text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-box">
                        <div class="service-box-inner">
                        <div class="service-icon">{page.section1item2icon}</div><h4>{page.section1item2heading}</h4>
                        </div>
                        <p>{page.section1item2text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-box">
                        <div class="service-box-inner">
                        <div class="service-icon">{page.section1item3icon}</div><h4>{page.section1item3heading}</h4>
                        </div>
                        <p>{page.section1item3text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-box">
                        <div class="service-box-inner">
                        <div class="service-icon">{page.section1item4icon}</div><h4>{page.section1item4heading}</h4>
                        </div>
                        <p>{page.section1item4text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-box">
                        <div class="service-box-inner">
                        <div class="service-icon">{page.section1item5icon}</div><h4>{page.section1item5heading}</h4>
                        </div>
                        <p>{page.section1item5text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <div class="service-box">
                        <div class="service-box-inner">
                        <div class="service-icon">{page.section1item6icon}</div><h4>{page.section1item6heading}</h4>
                        </div>
                        <p>{page.section1item6text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Animate>

</section>
<section class="mx-10">
    <Animate>
        <Container>
            <h2 class="text-center mb-5 py-3">{page.section2mainheading}</h2>
                <Row noGutters class="mw-1000 justify-content-center">
                    <Col md="5" style="display:flex;flex-direction:column;justify-content:center;">
                        <h4 class="text-right pfont px-5 py-3" style="font-weight: 400;text-transform:uppercase;">{@html page.section2heading}</h4>
                        <p class="text-right px-5 py-3 blue-color-background">{@html page.section2text}</p>
                    </Col>
                    <Col md="6">
                        <img src="{url}{page.section2image.data.attributes.formats.medium.url}" alt="{page.section2heading}" class="w-100">
                    </Col>
                </Row>
        </Container>
    </Animate>
</section>
<section class="mx-10">
    <Animate>
        <Container>
            <Row noGutters class="mw-1000 justify-content-center">
                <Col md="6">
                    <img src="{url}{page.section3image.data.attributes.formats.medium.url}" alt="{page.section3heading}" class="w-100">
                </Col>
                <Col md="5" style="display:flex;flex-direction:column;justify-content:center;">
                    <h4 class="px-5 py-3 pfont" style="font-weight: 400;text-transform:uppercase;">{@html page.section3heading}</h4>
                    <p class="px-5 py-3 blue-color-background">{@html page.section3text}</p>
                </Col>
            </Row>
        </Container>        
    </Animate>    
</section>
<section class="mx-10">
    <Animate>
        <Container>
            <Row noGutters class="mw-1000 justify-content-center">
                <Col md="5" style="display:flex;flex-direction:column;justify-content:center;">
                    <h4 class="text-right pfont px-5 py-3" style="font-weight: 400;text-transform:uppercase;">{@html page.section4heading}</h4>
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
    .service-box{
            padding: 3rem;
        .service-box-inner{
            display: flex;
            margin-bottom: 20px;
        }
        .service-icon{
            background-color: $secondary-color;
            padding: 20px;
            color: #fff;
            box-shadow: 3px 3px 3px #aaa;
            border-radius: 10px;
        }
        h4{
            align-self: center;
            padding-left: 20px;
        }
    }
</style>