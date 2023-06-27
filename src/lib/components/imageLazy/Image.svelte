<script lang="ts">
    export let src
    export let alt
  
    import { onMount } from 'svelte'
  
    let loaded = false
    let thisImage
  
    onMount(() => {
      thisImage.onload = () => {
        loaded = true
      }
    }) 
  
  </script>
  
  <style lang="scss">
    img {
      width: 100%;
      transition: 1.2s;
	  object-fit: cover;
      height: 70vh;
      opacity: 0;
      &.loaded {
        opacity: 1;
      }
      @include media-max(sm){
        height: 40vh;
      }
    } 
  </style>
  
  <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />