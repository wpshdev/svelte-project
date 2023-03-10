<script>
    import { onMount } from "svelte";
    import { fade, fly } from 'svelte/transition';     
    export let text;
    export let transitionDelay;

    const splitText = text.split("");		
  </script>

    {#each splitText as letter, i}
        {#if letter != " "}
            <span in:fade={{ 
                delay: i * transitionDelay,
                x: 100
                }} style="display: inline-block;">{letter}</span>
        {:else}
            &nbsp;
        {/if}
    {/each}
