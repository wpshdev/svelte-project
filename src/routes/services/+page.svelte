<script lang="ts">
    export let data;
    import {Container, Row, Col} from 'sveltestrap';
    console.log(data);
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
<section>
    <Container>
        <h1 class="text-center mb-5 py-3">{page.section1heading}</h1>
        <Row>
            <Col md=4 class="service-box1">
                <div class="service-box">
                    <div class="service-box-inner">
                    <div class="service-icon">{page.section1item1icon}</div><h4>{page.section1item1heading}</h4>
                    </div>
                    <p>{page.section1item1text}</p>
                </div>
            </Col>
            <Col md=4 class="service-box2">
                <div class="service-box">
                    <div class="service-box-inner">
                    <div class="service-icon">{page.section1item2icon}</div><h4>{page.section1item2heading}</h4>
                    </div>
                    <p>{page.section1item2text}</p>
                </div>
            </Col>
            <Col md=4>
                <div class="service-box">
                    <div class="service-box-inner">
                    <div class="service-icon">{page.section1item3icon}</div><h4>{page.section1item3heading}</h4>
                    </div>
                    <p>{page.section1item3text}</p>
                </div>
            </Col>
            <Col md=4>
                <div class="service-box">
                    <div class="service-box-inner">
                    <div class="service-icon">{page.section1item4icon}</div><h4>{page.section1item4heading}</h4>
                    </div>
                    <p>{page.section1item4text}</p>
                </div>
            </Col>
            <Col md=4>
                <div class="service-box">
                    <div class="service-box-inner">
                    <div class="service-icon">{page.section1item5icon}</div><h4>{page.section1item5heading}</h4>
                    </div>
                    <p>{page.section1item5text}</p>
                </div>
            </Col>
            <Col md=4 class="service-box6">
                <div class="service-box">
                    <div class="service-box-inner">
                    <div class="service-icon">{page.section1item6icon}</div><h4>{page.section1item6heading}</h4>
                    </div>
                    <p>{page.section1item6text}</p>
                </div>
            </Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <h1 class="text-center mb-5 py-3">{page.section2mainheading}</h1>
            <Row>
                <Col md="2"></Col>
                <Col md="4" style="display:flex;flex-direction:column;justify-content:center;">
                    <h3 class="text-right">{@html page.section2heading}</h3>
                    <p class="text-right">{@html page.section2text}</p>
                </Col>
                <Col md="5">
                    <img src="{url}{page.section2image.data .attributes.formats.medium.url}" alt="" class="blog-img w-100">
                </Col>
            </Row>
    </Container>
</section>
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