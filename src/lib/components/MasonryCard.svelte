<script lang="ts">
import { fly, fade } from "svelte/transition";
import { MasonryGrid } from "@egjs/svelte-grid";
import { paginate, LightPaginationNav } from 'svelte-paginate';
import { PUBLIC_STRAPI_API } from '$env/static/public';


const gap = 0;
const defaultDirection = "end";
const align = "end";
const column = 0;
const columnSize = 0;
const columnSizeRatio = 0;
import axios from "axios";
import Animate from "./Animate.svelte";
export let id;
export let addPagination;
export let pageSize;
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

// $: paginatedPortfolios = paginate({ portfolios, pageSize, currentPage });
let items;
let currentPage;
// let paginatedPortfolios;

$: if (id) {
    (async () => {
        await getProjects(id); 
        // console.log('projects');
        // console.log(projects);

        let portfolios = projects.data;
        items = portfolios;
        currentPage = 1;
        
        // paginatedPortfolios = paginate({ items, pageSize, currentPage });
    })();
}

</script>
    <Animate>
        {#if projects}
        <MasonryGrid
        class="container masonry-wrapper"
        {defaultDirection}
        {gap}
        {align}
        {column}
        {columnSize}
        {columnSizeRatio}
    >       
         {#each paginate({ items, pageSize, currentPage }) as project, index}			
             {#if index < propCount}
                <div class="masonry-items" in:fly="{{ y: 200, duration: 2200, delay:index * 1000}}" out:fly="{{y:400, duration:2000 }}">       
                    <a data-sveltekit-reload href="/portfolio/{project.attributes.slug}" class="zoomImg">      
                        <img src="https://strapi.ulfbuilt.com:1337/{project.attributes.featuredImage.data.attributes.url}" alt="modern" >
                        <div class="masonry-items__text">
                            <span>{index + 1}</span>
                            {project.attributes.title}
                            <i><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.29004 12.3459L6.29004 6.84595L1.29004 1.34595" stroke="#00ADEE" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </i>
                        </div>
                    </a>
                </div>			
             {/if}			
         {/each}
        </MasonryGrid>  										
        {:else}
            <div class="col text-center">Loading...</div>
        {/if}  
        
        {#if addPagination == 'true' && pageSize < items.length}
         <div class="paginate-section">
             <LightPaginationNav
             totalItems="{items.length}"
             pageSize="{pageSize}"
             currentPage="{currentPage}"
             limit="{1}"
             showStepOptions="{true}"
             on:setPage="{(e) => currentPage = e.detail.page}"
             />
         </div>
         {/if} 
             	
    </Animate>  

<style lang="scss">
    .container {
    overflow: hidden;
    }    
    :global(.masonry-wrapper) {
        min-height: 31rem;

        // @include media-max(md){
        //     min-height: 31.313rem;
        // }
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
        &:hover{
            .masonry-items__text{
              background: $primary-color;
              transition: 1.5s;
              span {
                color: $white-color;
              }
              path {
                stroke: $white-color;
              }  
            }        
        }
        @include media-max(sm){
            width: 100%;
            padding-top: 1rem;
        }

        @include media-max(lg){
            min-height: unset;
            min-width: unset;
        }   

        a{
            display: block;
            height: 100%;
            width: 100%;
            margin: 0 1.125rem;
            overflow: hidden;
            position: relative;

            &:hover{
                .masonry-items__text{
                    background: $primary-color;
                    transition: 1.5s;
                    span {
                        color: $white-color;
                    }
                    path {
                        stroke: $white-color;
                    }  
                }        
            }  
                   
            @include media-max(sm){
                width: 100%;
            }               
            img{
                height: 100%;
                object-fit: cover;
                min-height: 26.813rem;
                min-width: 39.688rem;

                @include media-max(xs){
                    min-height: unset;
                    min-width: unset;
                }   
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
            transition: 0.3s;
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
                }                
            }
            i{
              position: absolute;
              top: 20%;
              right: 1rem;
            }
        }
    }
    .paginate-section {
        margin-top: 5rem; 
    }
    :global(.option.prev path, .option.next path) {
        fill: $primary-color;
    }
    :global(.option.prev::after) {
        content: 'Prev';
        margin-left: 0.25rem;
    }
    :global(.option.next::before) {
        content: 'Next';
        margin-right: 0.25rem;
    }
    :global(.blog-card) {
        align-items: center;
    }
</style>
