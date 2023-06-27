<script lang="ts">
    export let src
    export let alt
    
    import { onMount } from 'svelte'
    import Observer from './Observer.svelte'
    import Image from './Image.svelte'
  
    let nativeLoading = false

    onMount(() => {
      if ('loading' in HTMLImageElement.prototype) {
        nativeLoading = true
      }
    })
    
  </script>
  
  <Observer once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
      <Image {alt} {src} />
    <!-- {:else}
    {@const src = '#'}
        <Image {alt} {src} /> -->
    {/if}
  </Observer> 