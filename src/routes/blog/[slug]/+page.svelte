<script lang="ts">
    import { Form, FormGroup, Input, Label } from 'sveltestrap';    
    import { Col, Container, Row } from 'sveltestrap';    
    export let data;
    let title = data.data[0].attributes.title;
    let content = data.data[0].attributes.blogtext;
    const url = 'https://strapi.ulfbuilt.com:1337';
</script>

<svelte:head>
	<title>{title} - Blog</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<section class="blog-1 text-center" style="background-image:url({url}{data.data[0].attributes.featuredimage.data.attributes.url})">
    <Container>
        <h1>{title}</h1>
    </Container>
</section>
<Container class="py-5">
    <div class="two-columns">
        {@html content}
    </div>
</Container>
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
</style>