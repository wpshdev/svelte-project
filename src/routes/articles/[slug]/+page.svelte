<script lang="ts">
    import { Form, FormGroup, Input, Label, Col, Container, Row } from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
	import Animate from '$lib/components/Animate.svelte';
    export let data;
    const url = 'https://strapi.ulfbuilt.com:1337';

    $: num = data.num;
    $: num2 = data.num+3;
    $: filteredItems = data.blogs.data.slice(num, num2);

    
    $: title = data.page.data[0].attributes.title;
    $: content = data.page.data[0].attributes.blogtext;
    $: published = new Date(Date.parse(data.page.data[0].attributes.publishedAt)).toLocaleString('default', { month: 'long',  day: 'numeric' });
    
</script>
<svelte:head>
	<title>{title} - Article</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<div class="cover" style="background:#1E2D39;">
<Container>
    <div class="cover__covertitle">
        <p class="pfont ptc mb-1 pt-3 article">Article</p>
        <h2 class="pfont stc mb-4">{title}</h2>
        <p class="ptc pb-5">Vail, Colorado | {published} · 24 mins. read</p>
    </div>
</Container>
    <div class="cover__coverimg" style="background-image:url({url}{data.page.data[0].attributes.featuredimage.data.attributes.url});"></div>
</div>
<Container class="py-4">
    <h2 class="pb-3 sblue">{title}</h2>
    <div class="two-columns">
        {@html content}
        <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p> -->
    </div>
</Container>
<section class="related-articles">
    <Container>
        <h2 class="text-center pb-4">Related Articles</h2>
        <Row>
            {#each filteredItems as blog,i (blog.id)}
            <Col md="4" class="pb-5">
                <Animate>
                    <div class="related-articles__easein-container">
                        <div class="easein-img">
                            <a href="/articles/{blog.attributes.slug}">
                                <img src="{url}{blog.attributes.featuredimage.data.attributes.formats.medium.url}" alt="blogtitle" class="blog-img w-100">
                            </a>
                        </div>
                    </div>
                <h3 class="pt-3"><a href="/articles/{blog.attributes.slug}">{blog.attributes.title}</a></h3>
                    <p class="ptc">Vail, Colorado | {new Date(Date.parse(blog.attributes.publishedAt)).toLocaleString('default', { month: 'long',  day: 'numeric' })} · 24 mins. read</p>
                </Animate>
            </Col>
            {/each}
        </Row>
    </Container>
</section>
<Cta/>
<style lang="scss">
.cover{
    padding-top: 8rem;
    margin-bottom: 18.75rem;
    height: 48.125rem;
    @include media-max(sm){
        // height: 24.375rem;
        height: 37.375rem;
        margin-bottom: 12.5rem;
    }
    @include media-max(xs){
        height: 33.121rem;
    }
    &__covertitle{
        width:100%;
        max-width:50rem;
        margin: auto;
        p{
            text-align: left;
            color: $gray;
            font-size: 1.125rem;
            font-weight: 500;
            font-feature-settings: 'pnum' on, 'lnum' on;
            &.article {
                color: $primary-color;
                font-size: 1.438rem;
                font-weight: 500;
            }
        }
        h2 {
            font-size: 3.438rem;
            font-weight: 400;
            color: $white-color;
            @include media-max(xs){
                font-size: 2.125rem;
                padding-top: 0;
            }
        }
    }
    &__coverimg{
        // height: 100vh;
        height: 39.588rem;
        width: 100%;
        max-width: 80%;
        margin-bottom: -16.25rem;
        background-size: cover;
        align-self:flex-start;
        background-position: center;
        @include media-max(sm) {
            margin-bottom: -11.875rem;
            margin-left: -1rem;
            max-width: 100%;
        }
        @include media-max(xs){
            height: 11.744rem;
            max-width: 95%;
        }
    }
}
.two-columns{
    // overflow-wrap: break-word;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.related-articles{
    background: #e5eef3;
    margin-bottom: 0;
    padding: 4.375rem 3.125rem 3.125rem 3.125rem;
    @include media-max(sm) {
        padding: 4.375rem 0.625rem 1.875rem 0.625rem;
    }
    h2 {
        font-size: 2.813rem;
    }
    h3{
        margin: 0.5rem 0 1.5rem 0;
        font-size: 2.25rem;
        font-weight: 400;
        @include media-max(sm) {
            margin: 0.5rem 0 1rem 0;
        }
    }
    a{
        text-decoration: none;
        color: $secondary-color;
        font-family: $secondary-font;
    }
    p {
        font-size: 1.25rem;
        font-weight: 500;
        @include media-max(sm) {
            font-weight: 500;
        }
    }
    &__easein-container{
        overflow: hidden;
        .easein-img{
            height: 20rem;            
            img{
                height: 100%;
                object-fit:cover;
                -o-object-fit: cover;
            }
        }
    }
}
@include media-max(sm){
    h2 {
        padding-top: 1rem;
        font-size: 2rem;
    }
}
.sblue {
    color: $secondary-color;
    font-size: 2.813rem;
}
</style>