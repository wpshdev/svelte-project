<script lang="ts">
    import { Col, Container, Row } from 'sveltestrap';
    import logo from '$lib/img/logo.svg';
    export let data;
    let blogs = data.data;
    let url = "https://strapi.ulfbuilt.com:1337";
    console.log(data);
    // let title = data.data[0].attributes.title;
</script>
<svelte:head>
	<title>News/Blogs</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<Container>
    <Row>
        <Col md="12"><h1 class="text-center">BLOG</h1></Col>
    </Row>
    <Row>
        {#each blogs as blog}
        <Col md="4">
            <a href="/blog" class="text-decoration-none text-black">
                <img src="{url+blog.attributes.featuredimage.data.attributes.formats.small.url}" alt="blogtitle" class="w-100">
                <h4 class="text-center">{blog.attributes.title}</h4>
                <p class="text-center">{blog.attributes.shorttext}</p>
            </a>
        </Col>
        {/each}
    </Row>
</Container>