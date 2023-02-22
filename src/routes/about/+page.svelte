<script lang="ts">
    import {Container} from 'sveltestrap';
    import { onMount } from 'svelte';
    export let data;
    console.log(data);
    let abouttitle = data.data.attributes.Title
    let aboutimage = data.data.attributes.featuredimage.data.attributes.formats.medium.hash+data.data.attributes.featuredimage.data.attributes.ext
    let abouttext = data.data.attributes.about
    let aboutheading = data.data.attributes.AboutHeading
    let aboutsubheading = data.data.attributes.Aboutsubheading
    let url = "https://strapi.ulfbuilt.com:1337/uploads/";
</script>
<svelte:head>
	<title>{abouttitle}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="about-1" style="background-image: url({url+aboutimage})"></div>
<div class="container about-2">
    <h1>{aboutheading}</h1>
    <h3>{aboutsubheading}</h3>
    <div class="two-columns">
    {@html abouttext}
    </div>
</div>
<section class="about-3">
    <p>Ready to make your dreams a reality? We invite you to connect with us and have a conversation about your project.</p>
    <p>Together we can build your dream home with the utmost care.</p>
</section>
<style lang="scss">
.about-1{
    min-height: 100vh;
    background-position: bottom;
    background-size: cover;
}
.about-2{
    margin: 100px auto;
    h1,h3{
        text-align: center;
    }
}
.about-3{
    margin: 100px auto;
    p{
        text-align: center;
    }
}
</style>