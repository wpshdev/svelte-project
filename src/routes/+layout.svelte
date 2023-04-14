<script lang="ts">
    import Headroom from "svelte-headroom";
    const onPin = () => console.log("pin");
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    </script>
    
    <Headroom id="headroom" on:pin={onPin} duration="350ms" offset={50} tolerance={5} >  
    <header class="container-fluid">
        <Header />
    </header>
    </Headroom>
    <main>
        <slot>
    
        </slot>
    </main>
    <footer>
        <Footer />
    </footer>
    <style type="scss">
    
    </style>