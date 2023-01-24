<script>
import Footer from "./Footer.svelte";
import Header from "./Header.svelte";
</script>

<header class="container-fluid">
    <Header />
</header>
<main>
    <slot>

    </slot>
</main>
<footer>
    <Footer />
</footer>

<style>
    header{
        position: fixed;
    }
</style>