<script>
	import { lazyLoad } from '$lib/components/lazyload.js'
	
	// grab some place holder images
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20");
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }
</script>


{#await fetchData()}
  <p>loading</p>
{:then items}
	{#each items as image}
	<figure>
		<img use:lazyLoad={image.url} alt={image.title} />
	</figure>
	{/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
	figure {
    height: 600px;
    width: 600px;
		margin-bottom: 100vh;
	}
	img {
		opacity: 0;
		transition: all 5s ease;
	}
</style>