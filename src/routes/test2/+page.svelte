<script>
	import Carousel2 from '$lib/components/layout/Carousel2.svelte'
	
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
</script>
<div style="margin-top:100px;"></div>
<Carousel2 autoplay="2000">
	{#each colors as color, index (index)}
	  <div style="background-color: {color}">{color}</div>
	{/each}
	<span slot="left-control">prev</span>
	<span slot="right-control">next</span>
</Carousel2>
<div style="margin-top:100px;"></div>
<style>
	div {
		height: 8rem;
		/* width: 8rem; */
	}
	
	span {
		display: inline-block;
		margin-top: 6rem;
	}
</style>