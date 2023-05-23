<script>
	import { onMount } from 'svelte';
	
	let element;
	let isVisible = false;
  
	onMount(() => {
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			isVisible = true;
			observer.disconnect();
		  }
		});
	  });
  
	  observer.observe(element);
  
	  return () => {
		observer.disconnect();
	  };
	});
  </script>
  
  <div bind:this={element}>
	{#if isVisible}
		<slot></slot>
	{/if}
  </div>