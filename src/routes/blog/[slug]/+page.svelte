<script lang="ts">
    import { Form, FormGroup, Input, Label, Col, Container, Row } from 'sveltestrap';
    export let data;
    let title = data.page.data[0].attributes.title;
    let content = data.page.data[0].attributes.blogtext;
    const url = 'https://strapi.ulfbuilt.com:1337';
</script>

<svelte:head>
	<title>{title} - Article</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="cover" style="background:#1E2D39;">
    <div class="covertitle">
        <p class="pfont ptc mb-1">Article</p>
        <h2 class="pfont mb-4">{title}</h2>
    </div>
    <div class="coverimg" style="background-image:url({url}{data.page.data[0].attributes.featuredimage.data.attributes.url});"></div>
</div>
<Container class="py-5">
    <h2>{title}</h2>
    <div class="two-columns">
        {@html content}
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
    </div>
</Container>
<section class="related-articles">
    <Container>
        <h2 class="text-center">Related Articles</h2>
        <Row>
            <Col md="4">
            </Col>
        </Row>
    </Container>
</section>
<style lang="scss">
    .blog-1{
    min-height: 50vh;
    background-position: bottom;
    background-size: cover;
    padding-top: 200px;
    h1{
        background-color: rgba(0,0,0,0.6);
        color: #fff;
        padding: 1rem 3rem;
        display: inline;
        font-size: 3rem;
        font-weight: 900;
    }
}
.cover{
    padding-top: 100px;
    margin-bottom: 100px;
    .covertitle{
        width:100%;
        max-width:800px;
    }
    .coverimg{
        height: 100vh;
        width: 100%;
        max-width: 1200px;
        margin-bottom: -100px;
        background-size: cover;
        align-self:flex-start;
    }
}
.related-articles{
    background: #e5eef3;
    margin-bottom: 0;
    padding:50px;
}
</style>