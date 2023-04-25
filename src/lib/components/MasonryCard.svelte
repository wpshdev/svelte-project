<script lang="ts">
import { fly, fade } from "svelte/transition";
import axios from "axios";
export let id;
let projects;
let duration = 1500;
const cache = new Map();

async function getProjects(id) {
    if (cache.has(id)) {
        projects = cache.get(id);
        return;
    }
    const url = "https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+id+"&populate=deep,2";
    const headers = {
        Authorization: 'Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072' 
    }    
    const response = await axios.get(url, { headers });
    projects = response.data;
    cache.set(id, projects);
}

$: if (id) {
    (async () => {
        await getProjects(id); 
        console.log(projects);
    })();
}

</script>

    {#if projects}
         {#each projects.data as project, index}				
             <div class="masonry-items" in:fade out:fade>
                 <img src="https://strapi.ulfbuilt.com:1337/{project.attributes.featuredImage.data.attributes.url}" alt="modern" in:fly="{{ y: 200, duration: 2000, delay:index * 600}}" out:fly="{{y:400, duration:2000 }}">
             </div>						
         {/each}														
    {:else}
        <!-- <div class="col text-center"><span>Loading...</span></div> -->
    {/if}         

<style lang="scss">
    .loading{
        width: 100%;
        span{
            margin: 0 auto;
        }
    }
    .masonry-items{
        // width: 50%;
        // margin-bottom: 2rem;
        // break-inside: avoid;
        margin: 0;
        display: inline-block;
        margin-bottom: 0px;
        width: 100%;        
        &:nth-child(1){
            // margin-top: 4rem;
        }
        &:nth-child(odd){
            // padding-right: 1rem;
        }
        &:nth-child(even){
            // padding-left: 1rem;
        }
    }
</style>
