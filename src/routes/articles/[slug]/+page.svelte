<script lang="ts">
    import { Form, FormGroup, Input, Label, Col, Container, Row } from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
	import Animate from '$lib/components/Animate.svelte';
    export let data;
    console.log(data);
    let title = data.page.data[0].attributes.title;
    let content = data.page.data[0].attributes.blogtext;
    const url = 'https://strapi.ulfbuilt.com:1337';
    let num = Math.ceil(Math.random() * 10)
    let num2 = num+3
    $: filteredItems = data.blogs.data.slice(num, num2);
</script>
<svelte:head>
	<title>{title} - Article</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<div class="cover" style="background:#E5EEF2;">
    <Container>
        <div class="covertitle">
            <p class="pfont ptc mb-1 pt-3">Article</p>
            <h2 class="pfont stc mb-4">{title}</h2>
            <p class="ptc pb-5">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
        </div>
    </Container>
        <div class="coverimg" style="background-image:url({url}{data.page.data[0].attributes.featuredimage.data.attributes.url});"></div>   
</div>
<Container class="py-5">
    <h2>{title}</h2>
    <Animate>
        <div class="two-columns">
            {@html content}
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>
    </Animate>
</Container>
<section class="related-articles">
    <Container>
        <h2 class="text-center pb-4">Related Articles</h2>
        <Row>
            {#each filteredItems as blog,i (blog.id)}
            <Col md="4" class="pb-5">
                <Animate>
                    <div class="easein-container">
                        <div class="easein-img">
                            <img src="{url}{blog.attributes.featuredimage.data.attributes.formats.medium.url}" alt="blogtitle" class="blog-img w-100">
                        </div>
                    </div>
                    <h3 class="pt-3">{blog.attributes.title}</h3>
                    <p class="ptc">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
                </Animate>
            </Col>
            {/each}
        </Row>
    </Container>
</section>
<Cta/>
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
    margin-bottom: 300px;
    .covertitle{
        width:100%;
        max-width:800px;
    }
    p {
        text-align: left;
    }
    .coverimg{
        height: 100vh;
        width: 100%;
        max-width: 1200px;
        margin-bottom: -260px;
        background-size: cover;
        align-self:flex-start;
        @include media-max(sm) {
            margin-bottom: -190px;
            margin-left: -16px;
        }
    }
}
.related-articles{
    background: #e5eef3;
    margin-bottom: 0;
    padding: 70px 50px 50px 50px;
    @include media-max(sm) {
        padding: 70px 10px 30px 10px;
    }
}
.blog-img{
    min-height: 260px;
    max-height: 260px;
    object-fit:cover;
    -o-object-fit: cover;
}
.easein-container{
    overflow: hidden;
}
@include media-max(sm){
    .cover{
        height: 390px;
        margin-bottom: 200px;
    }
    h2 {
        padding-top: 1rem;
    }
}
</style>