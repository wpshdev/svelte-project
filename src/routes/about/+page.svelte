<script lang="ts">
    import {Container} from 'sveltestrap';
    import { onMount } from 'svelte';
    let about = [];
    let abouttitle=""
    let abouttext=""
    let aboutheading=""
    let aboutsubheading=""
    let aboutimage=""
    onMount(async()=>{
        const response = await fetch('https://strapi.ulfbuilt.com:1337/api/about-us/', {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072',
            },
        })
        about = await response.json()
        abouttitle = about.data.attributes.Title
        aboutimage = about.data.attributes.featuredimage
        abouttext = about.data.attributes.about
        aboutheading = about.data.attributes.AboutHeading
        aboutsubheading = about.data.attributes.Aboutsubheading
        console.log(about)
    })
    // export let data;
    // console.log(data["data"]["attributes"]["Title"]);
</script>
<svelte:head>
	<title>{abouttitle}</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<div class="about-1"></div>
<div class="container about-2">
    <h1>{aboutheading}{aboutimage}</h1>
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
    background: url("$lib/img/ULFBUILT-TEAM-1.jpg");
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