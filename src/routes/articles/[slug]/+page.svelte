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

<div class="cover" style="background:#1E2D39;">
<Container>
    <div class="cover__covertitle">
        <p class="pfont ptc mb-1 pt-3 article">Article</p>
        <h2 class="pfont stc mb-4">{title}</h2>
        <p class="ptc pb-5">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
    </div>
</Container>
    <div class="cover__coverimg" style="background-image:url({url}{data.page.data[0].attributes.featuredimage.data.attributes.url});"></div>
</div>
<Container class="py-4">
    <h2 class="pb-3">{title}</h2>
    <div class="two-columns">
        {@html content}
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
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
                            <img src="{url}{blog.attributes.featuredimage.data.attributes.formats.medium.url}" alt="blogtitle" class="blog-img w-100">
                        </div>
                    </div>
                <h3 class="pt-3"><a href="/articles/{blog.attributes.slug}">{blog.attributes.title}</a></h3>
                    <p class="ptc">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
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
    &__covertitle{
        width:100%;
        max-width:50rem;
        p{
            text-align: left;
            color: $gray;
            font-size: 1.125rem;
            &.article {
                color: $primary-color;
                font-size: 1.438rem;
            }
        }
        h2 {
            font-size: 3.438rem;
            color: $white-color;
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
    }
}
.two-columns{
    overflow-wrap: break-word;
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
        @include media-max(sm) {
            margin: 0.5rem 0 1rem 0;
        }
    }
    a{
        text-decoration: none;
        color: $secondary-color;
        font-family: $secondary-font;
        font-weight: 600;
    }
    p {
        font-size: 1.25rem;
        font-weight: 600;
    }
    &__easein-container{
        overflow: hidden;
        .easein-img{
            &__blog-img{
                min-height: 16.25rem;
                max-height: 16.25rem;
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
</style>