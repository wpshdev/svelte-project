<script lang="ts">
    import { fly, fade } from "svelte/transition";
    import { MasonryGrid } from "@egjs/svelte-grid";
    
    
    const gap = 0;
    const defaultDirection = "end";
    const align = "end";
    const column = 3;
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
            Authorization: 'Bearer e66e57d2fe279d76a7bc806393da27e7b822486a6f3f44d4f2f09b0f63e0810038fb035984d80012d0e62eed2c75c9b02214e298424fc88518b6f743c29649eb0f47b38566eb64ed3a7bc1edf9d279ba3e42b9730b7fca5a2d90de9a794649c08c2ce510502b2610d87d0a93799a0c74316277771029ea8f9a28f026a11d499a' 
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
                        <a data-sveltekit-reload href="/portfolio/{project.attributes.slug}" class="zoomImg">      
                            <img src="https://strapi.ulfbuilt.com:1337/{project.attributes.featuredImage.data.attributes.url}" alt="modern" >
                            <!-- <div class="masonry-items__text">
                                <span>{index + 1}</span>
                                {project.attributes.title}
                            </div> -->
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
            width: 33%;   
            overflow: hidden;
            position: absolute;
            color: white;
            text-align: center;  
            height: 60vh;
            @include media-max(ipadmini){
                height: 20vh;
            }
            @include media-max(sm){
                height: 20vh;
            }
            a{
                display: block;
                height: 100%;
                width: 98%;
                overflow: hidden;
                img{
                    height: 100%;
                    object-fit: cover;
                }   
            }      
            &__text{
                background-color: $secondary-color;
                color: #fff;
                padding: 0.5rem;
                position: absolute;
                z-index: 2;
                bottom: 1rem;
                left: 0;
                width: 75%;
                text-align: left;
             
                span{
                    color: $primary-color;
                    font-size: 1.2rem;
                    margin: 0 0.8rem 0;
                    @include media-max(sm){
                        font-size: 0.8rem;
                    }                       
                }
            }
        }
    </style>
    