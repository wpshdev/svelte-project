<script lang="ts">
    import Headroom from "svelte-headroom";
    const onPin = () => console.log("pin");
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
	import { redirect } from "@sveltejs/kit";
    let yaxis: any;
    </script>
    
    <div class="z10">
        <Headroom on:pin={onPin} duration="400ms" offset={50} tolerance={5}>  
            <header class="container-fluid d-block" class:changeBG={yaxis >= 250}>
                <Header />
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
<style type="scss">
    .z10{
        z-index: 10;
        position: relative;
    }
    .changeBG{
        background:#1E2D39;
    }
</style>
<svelte:window bind:scrollY={yaxis} />