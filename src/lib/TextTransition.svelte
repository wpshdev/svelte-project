<script>
    import { onMount } from "svelte";
    import { fade, fly } from 'svelte/transition';     
    export let text;
    export let transitionDelay;
    import {sineInOut} from 'svelte/easing';


    const splitText = text.split("");		


    </script>

    {#each splitText as letter, i}
        {#if letter != " "}
            <span in:fly={{ 
                delay: i * 200,
                y: -20,
                x: 0,
                easing: sineInOut,
                duration: 2000,
                }} style="display: inline-block;">{letter}</span>
        {:else}
            &nbsp;
        {/if}
    {/each}
