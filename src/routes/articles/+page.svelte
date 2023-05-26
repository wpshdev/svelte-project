<script lang="ts">
    import { Col, Container, Row } from 'sveltestrap';
    import { paginate, LightPaginationNav } from 'svelte-paginate';
    import Cta from '$lib/components/layout/Cta.svelte';
    export let data;
    import blogempty from "$lib/img/blog-empty.svg";
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
	import Animate from '$lib/components/Animate.svelte';
    let blogs = data.blogs.data;
    let url = "https://strapi.ulfbuilt.com:1337";
    let title = data.page.data.attributes.title;
    let items = blogs;
  let currentPage = 1;
  let pageSize = 5;
  $: paginatedBlogs = paginate({ items, pageSize, currentPage });
</script>
<svelte:head>
	<title>{title}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>

<PageBanner title="{data.page.data.attributes.title}" subTitle="{data.page.data.attributes.Subheading}"  banner="{url}{data.page.data.attributes.Cover.data[0].attributes.formats.large.url}"/>
<section>
    <Container>
        <Row>
            <ul class="cat-list">
                <li>
                    <a href="/"> CATEGORY</a>|
                    <a href="/"> DATE ADDED</a>
                </li>
            </ul>
        </Row>
    </Container>
</section>
<section class="mw-1000 mx-8 text-center article-section">
    <Container>
        <h2 class="mb-2 text-center">{data.page.data.attributes.section2heading}</h2>
        <p class="text-left">{@html data.page.data.attributes.section2description}</p>
    </Container>
</section>
<section>
<Container>
        {#each paginatedBlogs as blog,i (blog.id)}
        <Row class="{i%2 === 1 ? 'flex-md-row flex-column-reverse' : ''}">
            <Col md="7" style="padding:0;" class="{i%2 === 1 ? 'order-1' : ''}">
                <Animate>
                    <div class="blogsection7 easein-img">
                        {#if blog.attributes.featuredimage.data != null}
                            {#if blog.attributes.featuredimage.data.attributes.formats != null}
                                <img src="{url+blog.attributes.featuredimage.data.attributes.formats.small.url}" alt="blogtitle" class="blog-img w-100">
                            {:else}
                                <img alt="blogtitle" src="{blogempty}" class="blog-img w-100">
                            {/if}
                        {:else}
                            <img alt="blogtitle" src="{blogempty}" class="blog-img w-100">
                        {/if}
                    </div>
                </Animate>
            </Col>
            <Col md="5" style="padding:20px 0;">
                <Animate>
                    <div class="blogsection5">
                        <div>
                            <span>Vail, Colorado | 09 Apr 2023 · 2 min read</span>
                            <h2>{blog.attributes.title}</h2>
                            <p>{blog.attributes.shorttext}</p>
                        </div>
                        <a class="btn mt-3 btn-secondary" href="/articles/{blog.attributes.slug}">Read More</a>
                    </div>
                </Animate>

            </Col>
            <!-- </a> -->
        
    </Row>
    <div style="padding: 20px;"></div>
        {/each}
<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>
</Container>
</section>
<Cta/>
<style lang="scss">
    .blog-img{
        min-height: 400px;
        max-height: 400px;
        object-fit:cover;
        -o-object-fit: cover;
    }
    .blogsection7{
        border-radius: 10px;
        overflow: hidden;
    }
    .blogsection5{
        background-color: #e9ebef;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 3rem;
    }
    .article-section {
        padding: 0 0 4rem 0;
        @include media-max(sm){
            padding: 0 0 0 0;
    }
    }
    .cat-list {
        list-style: none;
        padding: 0;
        margin: 0;
        li a {
            padding: 1rem 1rem;
            text-decoration: none;
        }
    }
    h2, .h2 {
    font-size: 3rem;
    }

</style>