<script lang="ts" >
	import { onMount } from "svelte";
	export let section;
	let y;
	let position;
	let pY = 0;
	onMount(() => {
		position = document.querySelector(section);
    	let rect = position.getBoundingClientRect();
		position = rect.y;		
	});
	function enableAnimation(val){
		pY = val > pY ? val : pY;
		return pY;
	}
</script>
<svelte:window bind:scrollY={y} />	
{#if enableAnimation(y) > position - 500}
    <slot></slot>
{/if}