<script lang="ts">
    export let data;
    import {Container} from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
    console.log(data);
    const url = "https://strapi.ulfbuilt.com:1337/";
</script>
<svelte:head>
	<title>{data.data.attributes.title}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<PageBanner title="{data.data.attributes.title}" extraClass="privacy" subTitle="{data.data.attributes.Subheading}"  banner="{url}{data.data.attributes.Cover.data.attributes.url}"/>

<section class="content" >
    <Container class="mw-1000 h-text">
        <h2 class="text-center mb-5">{data.data.attributes.Heading}</h2>
        {@html data.data.attributes.Content}
    </Container>
</section>
<Cta/>
<style lang="scss">
.content{
    h2 {
        color: $secondary-color;
    }
    :global(p){
        line-height: 1.7rem !important;        
    }
    :global(h3){
        padding-bottom: 0.971rem;
        font-size: 2.25rem;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $figmablack;
        font-weight: 400;
    }         
    :global(img){
        height: 1.2rem;
    }    
}
</style>