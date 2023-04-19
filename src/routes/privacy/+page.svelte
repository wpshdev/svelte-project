<script lang="ts">
    export let data;
    import {Container} from 'sveltestrap';
    console.log(data);
    const url = "https://strapi.ulfbuilt.com:1337/";
</script>
<svelte:head>
	<title>Privacy Policy</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="cover" style="background-image: url({url}{data.data.attributes.Cover.data.attributes.formats.large.url});">
    <h2>{data.data.attributes.Heading}</h2>
    <p>{data.data.attributes.Subheading}</p>
</div>
<section>
    <Container>
        <h1 class="text-center">PRIVACY POLICY</h1>
        {@html data.data.attributes.Content}
    </Container>
</section>