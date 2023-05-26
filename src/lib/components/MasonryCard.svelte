<script lang="ts">
import { fly, fade } from "svelte/transition";
import { MasonryGrid } from "@egjs/svelte-grid";


const gap = 0;
const defaultDirection = "end";
const align = "end";
const column = 0;
const columnSize = 0;
const columnSizeRatio = 0;
import axios from "axios";
export let id;
let projects;
let duration = 1500;
const cache = new Map();

export let propCount;

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
        <MasonryGrid
        class="container"
        {defaultDirection}
        {gap}
        {align}
        {column}
        {columnSize}
        {columnSizeRatio}
    >       
         {#each projects.data as project, index}		
             {#if index < propCount}
                <div class="masonry-items" in:fly="{{ y: 200, duration: 2000, delay:index * 600}}" out:fly="{{y:400, duration:2000 }}">       
                    <a href="/portfolio/{project.attributes.slug}">      
                        <img src="https://strapi.ulfbuilt.com:1337/{project.attributes.featuredImage.data.attributes.url}" alt="modern" >
                        <div class="masonry-items__text">
                            <span>{index + 1}</span>
                            {project.attributes.title}
                        </div>
                    </a>
                </div>			
             {/if}			
         {/each}
        </MasonryGrid>         														
    {:else}
        <div class="col text-center">Loading...</div>
    {/if}         

<style lang="scss">
    .container {
    overflow: hidden;
    }    
    .loading{
        width: 100%;
        text-align: center;
    }
    .masonry-items{
        width: 50%;   
        overflow: hidden;
        position: absolute;
        color: white;
        text-align: center;  
        padding-top: 0.8rem;
        @include media-max(sm){
            width: 100%;
            padding-top: 1rem;
        }
        a{
            display: block;
            height: 100%;
            width: 98%;
            overflow: hidden;
            @include media-max(sm){
                width: 100%;
            }               
            img{
                transition: 0.5s;
                height: 100%;
                object-fit: cover;
            }   
        }           
        &:hover{
            img{
                transition: 0.5s;
                scale: 1.2;
            }
        }
        &:nth-child(2){
            padding-top: 4rem;
            // top: 50px !important;    
            @include media-max(sm){
                padding-top: 1rem;
            }       
        }
        &:nth-child(odd){
            // padding-right: 1rem;
        }
        &:nth-child(even){
            // padding-left: 1rem;
        }
        &__text{
            background-color: $secondary-color;
            color: #fff;
            padding: 0.5rem;
            position: absolute;
            z-index: 2;
            bottom: 1rem;
            left: 0;
            width: 65%;
            text-align: left;
            @include media-max(sm){
                margin: 0;
                // font-size: 0.6rem;
                width: 90%;
                bottom: 0.5rem
            } 
            span{
                color: $primary-color;
                font-size: 1.2rem;
                margin: 0 0.8rem 0;
                @include media-max(sm){
                    margin: 0;
                    // font-size: 0.6rem;
                }                
            }
        }
    }
</style>
