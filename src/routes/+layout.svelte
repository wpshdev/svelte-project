<script lang="ts">
    import Headroom from "svelte-headroom";
    const onPin = () => console.log("pin");
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
	import { redirect } from "@sveltejs/kit";
    import {page} from '$app/stores'
	import { Container } from "sveltestrap";    
    // let isHomePage = false;
    function isHome(url) {
        return url === "/" ? false : true;
    }    
    let yaxis: any;
    export let data;
    </script>
    <svelte:head>
        <link rel="preconnect" href="https://strapi.ulfbuilt.com:1337/">
        <script src="/flickity/flickity.pkgd.min.js" async></script>    
    </svelte:head>    
    <div class="z10">
        <Headroom on:pin={onPin} duration="400ms" offset={50} tolerance={5}>  
            <header class="d-block" class:changeBG={yaxis >= 250 || isHome($page.url.pathname)} >
                <Container>
                    <Header menu={data} />
                </Container>
            </header>
        </Headroom>
    </div>
    <main>
        <slot>
    
        </slot>
    </main>
    <footer>
        <Footer />
    </footer>
<svelte:window bind:scrollY={yaxis} />