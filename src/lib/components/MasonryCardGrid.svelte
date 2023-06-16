<script lang="ts">
    import { fly, fade } from "svelte/transition";
    import { MasonryGrid } from "@egjs/svelte-grid";
    import { PUBLIC_STRAPI_API } from '$env/static/public';
    
    
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
            Authorization: 'Bearer ' + PUBLIC_STRAPI_API
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
            class="container masonry_container"
            {defaultDirection}
            {gap}
            {align}
            {column}
            {columnSize}
            {columnSizeRatio}
        >       
             {#each projects.data as project, index}				
                 {#if index < propCount}
                    <div class="masonry-items" in:fly="{{ y: 0, duration: 1000, delay:index * 600}}" out:fly="{{y:0, duration:1000 }}">       
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
        // :global(.masonry_container) {
        //     max-width: 1440px;
        // }
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
            height: 55vh;
            @include media-max(ipadmini){
                height: 20vh;
            }
            @include media-max(sm){
                height: 20vh;
            }
            a{
                display: block;
                height: 100%;
                width: 100%;
                margin: 0 1.125rem;
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
    