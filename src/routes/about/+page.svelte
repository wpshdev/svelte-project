<script lang="ts">
    import {Container} from 'sveltestrap';
    import { onMount } from 'svelte';
    export let data;
    let abouttitle = data.data.attributes.Title
    let aboutimage = data.data.attributes.featuredimage.data.attributes.formats.medium.hash+data.data.attributes.featuredimage.data.attributes.ext
    let abouttext = data.data.attributes.about
    let aboutsubheading = data.data.attributes.Aboutsubheading
    let url = "https://strapi.ulfbuilt.com:1337/uploads/";
</script>


<svelte:head>
	<title>{abouttitle} - changes</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="cover" style="background-image: url({url}{aboutimage});">
    <h2 class="pfont">{abouttitle}</h2>
    <p class="pfont">{aboutsubheading}</p>
</div>
<div class="container about-2">
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