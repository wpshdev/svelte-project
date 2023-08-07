<script lang="ts">
    export let data;
    import {Container} from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
	import PageBanner from '$lib/components/layout/PageBanner.svelte';
    import { fade, fly } from "svelte/transition";
    const url = "https://strapi.ulfbuilt.com:1337/";
</script>
<svelte:head>
	<title>{data.data.attributes.title ? data.data.attributes.title : 'Privacy Policy'}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<PageBanner title="{data.data.attributes.title ? data.data.attributes.title : 'Privacy Policy'}" extraClass="privacy" subTitle="{data.data.attributes.Subheading ? data.data.attributes.Subheading : ''}"  banner="{url}{data.data.attributes.Cover.data.attributes.url}"/>

<section class="content" >
    <Container class="mw-1000 h-text">
        <h2 class="text-center mb-5" in:fly={{ y: 50,duration: 2000, delay: 1500 }}>{data.data.attributes.Heading ? data.data.attributes.Heading : ''}</h2>
        <div in:fly={{ y: 50,duration: 2000, delay: 2000 }}>{@html data.data.attributes.Content ? data.data.attributes.Content : ''}</div>
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