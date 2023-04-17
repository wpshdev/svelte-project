<script lang="ts">
    import { Col, Container, Row } from 'sveltestrap';
    //import { paginate, LightPaginationNav } from 'svelte-paginate';

    export let data;
    let blogs = data.data;
    let url = "https://strapi.ulfbuilt.com:1337";
    // console.log(data);
    
    let searchTerm="";
    $: searchBlogs = blogs.filter(( blog: {[x: string]: any; title: string | string[]; } )=>{
        return blog.attributes.title.includes(searchTerm);
    });
    $: console.log(searchBlogs);

    let title = data.data[0].attributes.title;

//     let items = blogs;
//   let currentPage = 1;
//   let pageSize = 1;
//   $: paginatedBlogs = paginate({ items, pageSize, currentPage });
// $: console.log(paginatedBlogs);

// var items = 3;
</script>
<svelte:head>
	<title>News/Blogs</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<Container>
    <Row>
        <Col md="12"><h1 class="text-center">BLOG</h1></Col>
        <Col md="12"><input type="text" placeholder="search" bind:value={searchTerm}></Col>
    </Row>
    <Row>
        {#each searchBlogs as blog}
        <Col md="4">
            <a href="/blog/{blog.attributes.slug}" class="text-decoration-none text-black">
                {#if blog.attributes.featuredimage.data.attributes.formats == null}
                <img src="{url+blog.attributes.featuredimage.data.attributes.url}" alt="blogtitle" class="blog-img w-100">
                {:else}
                <img src="{url+blog.attributes.featuredimage.data.attributes.formats.small.url}" alt="blogtitle" class="blog-img w-100">
                {/if}
                <h4 class="text-center">{blog.attributes.title}</h4>
                <p class="text-center">{blog.attributes.shorttext}</p>
            </a>
        </Col>
        {/each}
<!-- <LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/> -->
    </Row>
</Container>
<style lang="scss">
    .blog-img{
        min-height: 300px;
        max-height: 300px;
        object-fit:cover;
        -o-object-fit: cover;
    }
</style>