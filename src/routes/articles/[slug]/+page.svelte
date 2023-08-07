<script lang="ts">
    import { Form, FormGroup, Input, Label, Col, Container, Row } from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
	import Animate from '$lib/components/Animate.svelte';
    import { fade, fly } from 'svelte/transition';
    export let data;
    const url = 'https://strapi.ulfbuilt.com:1337';

    $: num = data.num;
    $: num2 = data.num+3;
    $: filteredItems = data.blogs.data.slice(num, num2);

    
    $: title = data.page.data[0].attributes.title;
    $: content = data.page.data[0].attributes.blogtext;
    $: published = new Date(Date.parse(data.page.data[0].attributes.publishedAt)).toLocaleString('default', { month: 'long',  day: 'numeric' });
    $: location = data.page.data[0].attributes.location ? data.page.data[0].attributes.location : 'Vail, Colorado';
    $: minutesRead = data.page.data[0].attributes.minutesRead ? data.page.data[0].attributes.minutesRead : '2';
</script>
<svelte:head>
	<title>{title} - Article</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<div class="cover" style="background:#1E2D39;">
<Container>
    <div class="cover__covertitle">
        <p class="pfont ptc mb-1 pt-3 article" in:fly={{ y: 50,duration: 2000, delay: 500 }}>Article</p>
        <h2 class="pfont stc mb-4" in:fly={{ y: 50,duration: 2000, delay: 1000 }}>{title ? title : ''}</h2>
        <p class="ptc pb-5" in:fly={{ y: 50,duration: 2000, delay: 1500 }}>{location} | {published} · {minutesRead} {minutesRead > '1' || !minutesRead ? 'mins' : 'min'}. read</p>
    </div>
</Container>
    
 <div in:fade={{delay: 2500, duration: 500}} class="cover__coverimg" style="background-image:url({url}{data.page.data[0].attributes.featuredimage.data.attributes.formats.large.url ? data.page.data[0].attributes.featuredimage.data.attributes.formats.large.url : data.page.data[0].attributes.featuredimage.data.attributes.url});"></div>
 
</div>
<section class="content">
    <Animate>
        <Container class="py-4">
            <h2 class="pb-3 sblue" in:fly={{ y: 50,duration: 2000, delay: 500 }}>{title ? title : ''}</h2>
            <div class="two-columns" in:fly={{ y: 50,duration: 2000, delay: 1000 }}>
                {@html content ? content : ''}
            </div>
        </Container>
    </Animate>
</section>
<section class="related-articles">
    <Animate>
        <Container>
            <h2 class="text-center pb-4" in:fly={{ y: 50,duration: 2000, delay: 500 }}>Related Articles</h2>
            <Row>
                {#each filteredItems as blog,i (blog.id)}
                <Col md="4" class="pb-5">
                    <Animate>
                        {#if blog.attributes.featuredimage.data}
                        <div class="related-articles__easein-container">
                            <div class="easein-img">
                                <a href="/articles/{blog.attributes.slug ? blog.attributes.slug : '#'}" class="zoomImg"> 
                                    <img in:fade={{delay: 1500, duration: 500}} src="{url}{blog.attributes.featuredimage.data.attributes.formats.large.url ? blog.attributes.featuredimage.data.attributes.formats.large.url : blog.attributes.featuredimage.data.attributes.url}" alt="blogtitle" class="blog-img w-100">
                                </a>
                            </div>
                        </div>
                        {/if}
                        <h3 class="pt-3" in:fly={{ y: 50,duration: 2000, delay: 2000 }}><a href="/articles/{blog.attributes.slug ? blog.attributes.slug : '#'}">{blog.attributes.title ? blog.attributes.title : ''}</a></h3>
                        <p class="ptc" in:fly={{ y: 50,duration: 2000, delay: 2000 }}>{blog.attributes.location ? blog.attributes.location : 'Vail, Colorado'} | {new Date(Date.parse(blog.attributes.publishedAt)).toLocaleString('default', { month: 'long',  day: 'numeric' })} · {blog.attributes.minutesRead ? blog.attributes.minutesRead : '2'} {blog.attributes.minutesRead > '1' || !blog.attributes.minutesRead ? 'mins' : 'min'}. read</p>
                    </Animate>
                </Col>
                {/each}
            </Row>
        </Container>
    </Animate>
</section>
<Cta/>
<style lang="scss">
    :global(.article-page .dropdown.show, .article-page .dropdown-menu) {
		background-color: rgba(242, 237, 237, 0.20) !important;
	}
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
        margin-bottom: 7rem;
    }
    &__covertitle{
        width:100%;
        max-width:50rem;
        margin: auto;
        @include media-max(ipadmini){
            padding: 0 3rem;
        }
        @include media-max(sm){
            padding: 0;
        }
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
.content {
    .two-columns{
        overflow-wrap: break-word;
        gap: 3.5rem;
        font-size: 1.15rem;
        line-height: 2rem;
        padding: 3rem 0;
        @include media-max(sm){
            padding: 1rem 0;
        }
    }
    .sblue {
        color: $secondary-color;
        font-size: 2.813rem;
        @include media-max(sm){
            text-align: center;
        }
    }
}
.related-articles{
    background: #e5eef3;
    margin-bottom: 0;
    padding: 4.375rem 3.125rem 3.125rem 3.125rem;
    @include media-max(sm) {
        padding: 4.375rem 1rem 1.875rem 1rem;
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
</style>