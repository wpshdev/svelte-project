<script lang="ts">
    export let data;
    import {Container} from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
    console.log(data);
    const url = "https://strapi.ulfbuilt.com:1337/";
</script>
<svelte:head>
	<title>{data.data.attributes.title}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="cover" style="background-image: url({url}{data.data.attributes.Cover.data.attributes.formats.large.url});">
    <h2>{data.data.attributes.title}</h2>
    <p>{data.data.attributes.Subheading}</p>
</div>
<section>
    <Container class="mw-1000">
        <h2 class="text-center mb-5">{data.data.attributes.Heading}</h2>
        {@html data.data.attributes.Content}
    </Container>
</section>
<Cta/>
<style lang="scss">
:global(p){
    line-height: 1.7rem !important;
}
</style>