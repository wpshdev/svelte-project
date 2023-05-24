<script lang="ts">
    import Headroom from "svelte-headroom";
    const onPin = () => console.log("pin");
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
	// import { redirect } from "@sveltejs/kit";
	import { Container } from "sveltestrap";
    let yaxis : any;
    export let data;
    </script>
    <svelte:head>
        <script src="/flickity/flickity.pkgd.min.js" async></script>    
    </svelte:head>    
    <div class="z10">
        <Headroom on:pin={onPin} duration="400ms" offset={50} tolerance={5}>  
            <header class="d-block" class:changeBG={yaxis >= 250}>
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