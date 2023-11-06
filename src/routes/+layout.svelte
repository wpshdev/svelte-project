<script lang="ts">
    import { onMount } from 'svelte';
    import Headroom from "svelte-headroom";
    const onPin = () => console.log("pin");
    // const onPin = ();
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import {page} from '$app/stores'
	import { Container } from "sveltestrap";  
    import Animate from "$lib/components/Animate.svelte";
	import { afterNavigate, disableScrollHandling } from '$app/navigation'; 
    import { gsap } from 'gsap';
    import ScrollSmoother from '$lib/ScrollSmoother.svelte';

    // let isHomePage = false;
    function isHome(url) {
        return url === "/" ? false : true;
    }    
    function isPortfolio(url) {
        return url === "/portfolio/[slug]" ? "portfolio-page" : "";
    }     
    function isArticle(url) {
        return url === "/articles/[slug]" ? "article-page" : "";
    }
	afterNavigate(() => {
		disableScrollHandling();
	}) 


    let header: gsap.TweenTarget;
    
	import { loadingCursor } from '$lib/cursorChange.js';
    onMount(() => {
        gsap.from(header, { y: -100, duration: 1, opacity: 0, delay: 2.5, ease: 'power2.out' });
        loadingCursor();
    });

    let yaxis: any;
    export let data;


    import NProgress from 'nprogress'
  import {navigating} from '$app/stores'

  // NProgress css
  import 'nprogress/nprogress.css'

  NProgress.configure({
        minimum: 0.16,
    })

  $: {
    if ($navigating) {
      NProgress.start();
    }
    if (!$navigating) {
      NProgress.done();
    }
  }


    </script>
    <svelte:head>
        <link rel="preconnect" href="https://api.ulfbuilt.com/">
    </svelte:head>
    
    <div class="z10 {isPortfolio($page.route.id)} {isArticle($page.route.id)}">
        <Headroom on:pin={onPin} duration="400ms" offset={50} tolerance={5}>  
            <!-- <header class="d-block" class:changeBG={yaxis >= 250 || isHome($page.url.pathname)} > -->
            <header class="d-block" class:changeBG={yaxis >= 200} bind:this={header}>                
                <Container>
                    <Header menu={data} />
                </Container>
            </header>
        </Headroom>
    </div>
    
    
{#key $page}
    <ScrollSmoother>
        <Animate>
            <main>
                    <slot>
                
                    </slot>
            </main>
            <footer>
                <Footer />
            </footer>
        </Animate>
    </ScrollSmoother>
{/key}
<svelte:window bind:scrollY={yaxis} />

<!-- <style lang="scss">
    body {
      cursor: {isLoading ? 'wait' : 'default'};
    }
</style> -->