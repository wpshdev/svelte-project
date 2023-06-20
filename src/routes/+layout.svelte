<script lang="ts">
    import Headroom from "svelte-headroom";
    const onPin = () => console.log("pin");
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
	import { redirect } from "@sveltejs/kit";
    import {page} from '$app/stores'
	import { Container } from "sveltestrap";  
    import Animate from "$lib/components/Animate.svelte";
	import { afterNavigate, disableScrollHandling } from '$app/navigation'; 
    // let isHomePage = false;
    function isHome(url) {
        return url === "/" ? false : true;
    }    
    function isPortfolio(url) {
        return url === "/portfolio/[slug]" ? "portfolio-page" : "";
    }     

	afterNavigate(() => {
		disableScrollHandling();
	}) 


    let yaxis: any;
    export let data;
    </script>
    <svelte:head>
        <link rel="preconnect" href="https://strapi.ulfbuilt.com:1337/">
        <script async src="/flickity/flickity.pkgd.min.js"></script>    
    </svelte:head>    
    <div class="z10 {isPortfolio($page.route.id)}">
        <Headroom on:pin={onPin} duration="400ms" offset={50} tolerance={5}>  
            <!-- <header class="d-block" class:changeBG={yaxis >= 250 || isHome($page.url.pathname)} > -->
            <header class="d-block" class:changeBG={yaxis >= 200} >                
                <Container>
                    <Header menu={data} />
                </Container>
            </header>
        </Headroom>
    </div>
    
    {#key $page}
    <Animate>
    <main>
            <slot>
        
            </slot>
    </main>
    <footer>
        <Footer />
    </footer>
    </Animate>
    {/key}
<svelte:window bind:scrollY={yaxis} />