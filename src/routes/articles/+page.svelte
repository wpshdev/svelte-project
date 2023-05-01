<script lang="ts">
    import { Col, Container, Row } from 'sveltestrap';
    import { paginate, LightPaginationNav } from 'svelte-paginate';
    export let data;
    import blogempty from "$lib/img/blog-empty.svg";
    let blogs = data.blogs.data;
    let url = "https://strapi.ulfbuilt.com:1337";
    console.log(data);
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
<div class="cover" style="background-image: url({url}{data.page.data.attributes.Cover.data[0].attributes.formats.large.url});">
    <h2 class="pfont">{data.page.data.attributes.title}</h2>
    <p class="pfont">{data.page.data.attributes.Subheading}</p>
</div>
<section>
<Container>
        {#each paginatedBlogs as blog,i (blog.id)}
        <Row>
            <Col md="7" style="padding:0;" class="{i%2 === 1 ? 'order-1' : ''}">
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
            </Col>
            <Col md="5" style="padding:20px 0;">
                <div class="blogsection5">
                    <div>
                        <span>Vail, Colorado | 09 Apr 2023 · 2 min read</span>
                        <h2>{blog.attributes.title}</h2>
                        <p>{blog.attributes.shorttext}</p>
                    </div>
                    <a class="btn btn-secondary" href="/articles/{blog.attributes.slug}">Read More</a>
                </div>
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
</style>