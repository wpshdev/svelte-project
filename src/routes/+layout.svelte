<script lang="ts">
export const prerender = true;    
import Footer from "./Footer.svelte";
import Header from "./Header.svelte";
</script>

<header class="container-fluid position-fixed">
    <Header />
</header>
<main>
    <slot>

    </slot>
</main>
<footer>
    <Footer />
</footer>