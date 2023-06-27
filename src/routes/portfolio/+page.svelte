<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
	export let data;
    import LazyImage from "$lib/LazyImage.svelte";
    import Masonry from "$lib/components/Masonry.svelte";
	import ArticleSection from "$lib/components/layout/ArticleSection.svelte";
	import Cta from "$lib/components/layout/Cta.svelte";
	import PageBanner from "$lib/components/layout/PageBanner.svelte";
	import Animate from "$lib/components/Animate.svelte";
    import { PUBLIC_STRAPI_API } from '$env/static/public';
    import axios from "axios";
    import ImageLoader from '$lib/components/imageLazy/ImageLoader.svelte';
	let domain = "https://strapi.ulfbuilt.com:1337";
	let portfolio =  data.portfolio.data.attributes; 
    // let propCount = 10;

    // let properties = data.properties.data;
    // console.log(portfolio);

    // let activeTab = portfolio.masonryGallery.masonryItems.data[0].id;
    // function handleTabClick(category) {
	// 	activeTab = category;
	// }

    // let promise = fetchPortfolios();
    // async function fetchPortfolios(){
    //     const url = "https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+activeTab+"&populate=deep,2";
    //     const headers = {
    //         Authorization: 'Bearer ' + PUBLIC_STRAPI_API
    //     }  

    //     try {
    //         const response = await axios.get(url, { headers });
    //         return response.data.data;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    // $: if (activeTab) {
    //     // fetchPortfolios(activeTab);
    //     promise = fetchPortfolios();
    //     console.log(promise)
    // }

</script>
<svelte:head>
	<title>{portfolio.title}</title>
	<meta name="description" content="ULF BUILT" />

</svelte:head>

<PageBanner title="{portfolio.title}" subTitle="{portfolio.subTitle}"  banner="{domain}{portfolio.featuredImage.data.attributes.url}" bannerMobile="{domain}{portfolio.featuredImage.data.attributes.formats.medium.url}" />

<section class="portfolio-masonry">
    <Container>
        <Row>
            <Col class="text-center">
                <h2>{portfolio.masonryGallery.masonryHeading}</h2>
                <p>{portfolio.masonryGallery.masonrySubheading}</p>
                <Masonry items={portfolio.masonryGallery.masonryItems.data} paginate="true" postperpage="6"/>
                <!-- <div class="categories__tabs__heading">
                    <ul>
                        {#each portfolio.masonryGallery.masonryItems.data as heading}
                            <li>
                                <!- svelte-ignore a11y-click-events-have-key-events ->
                                <span 
                                data-category="{heading.id}"
                                class:active="{activeTab === heading.id}"
                                on:click="{() => handleTabClick(heading.id)}"
                                >
                                {heading.attributes.Title}
                                </span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <p class="text-center view-all">
                    {#if propCount === 10} 
                        <span on:click="{() => propCount = 999}">View All Projects</span>
                    {:else}
                        <span on:click="{() => propCount = 10}">View Less Projects</span>
                    {/if}
                </p> -->
            </Col>
        </Row>
    </Container>
</section>
<section class="portfolio-cta">
    <Animate>
        <Container>
            <Row>
                <Col class="text-center ">
                    <div class="portfolio-cta__content">
                        <span>{portfolio.ourApproachPreHeading}</span>
                        <h2>{@html portfolio.ourApproachHeading}</h2>                 
                    </div>
                    <div class="portfolio-cta__btns">
                        <a href="{portfolio.ourApproachLeftBtnUrl}" class="btn btn-secondary">{portfolio.ourApproachLeftBtnTitle}</a>
                        <a href="{portfolio.ourApproachRightBtnUrl}" class="btn btn-inverted">{portfolio.ourApproachRightBtnTitle}</a>
                    </div>                   
                </Col>
            </Row>
        </Container>
    </Animate>
</section>

<Animate>
    <ArticleSection />
</Animate>

<Animate>
    <Cta />
</Animate>

<style lang="scss">
    section{
        min-height: 20vh;
    }
    .portfolio-masonry{
        h2{
            margin-bottom: 1.5rem;
            color: $secondary-color;
            @include media-max(sm){
                display: none;
            }
        }
        p{
            max-width: 1100px;
            margin: 0 auto 3rem;
        }
        .categories__tabs__heading{
            ul{
                display: flex;
                width: 90%;
                margin: auto;
                margin-bottom: 2rem;
                padding-left: 0;	
                
                @include media-max(lg){
                    flex-wrap: nowrap;
                    padding: 1rem 0;
                    overflow-x: scroll;
                    width: 100%;
                }		
                            
                @include media-max(xs){
                    flex-wrap: nowrap;
                    padding: 1rem 0
                }						
                @include media-max(sm){
                    overflow-x: scroll;
                }					
                li{
                    list-style: none;
                    width: 25%;
                    @include media-max(sm){
                        width: 15rem;
                        padding: 0 1rem;
                    }
                    border-right: 3px solid $gray;	
                    &:last-child {
                        border: none;
                    }
                    span{				
                        font-family: $secondary-font;
                        font-size: 1.75rem;
                        color: #D8D7D7;
                        text-transform: uppercase;
                        margin-bottom: 2em;
                        font-weight: 500;
                        cursor: pointer;
                        @include media-max(lg){
                            font-size: 1.2rem;
                        }	
                        &.active{
                            color: $secondary-color;
                            border-bottom-color: $secondary-color;
                        }
                    }
                }
            }
        }
        .view-all{
			margin-bottom: 2rem;
			span{
				color: $secondary-color;
				&:hover{
					cursor: pointer;
				}
			}
		}
        .masonry-wrapper {
            min-height: 31rem;
            column-count: 2;
            column-gap: 0.625rem;
            .masonry-items{
                display: grid;
                grid-template-rows: 1fr auto;
                break-inside: avoid;
                overflow: hidden;
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
                    margin: .5rem;
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
                        margin: 0;
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
                    @include media-max(ipadmini){
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
        }
    }
    .portfolio-cta{
        min-height: 30vw;
        min-width: 40vw;        
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;        
        &__content{
            span{
                color: $primary-color;
                font-weight: 500;
            }
        }
        &__btns{
            margin: 2rem 0;
            @include media-max(sm){
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .btn-secondary{
                margin-right: 1.5rem;
                @include media-max(sm){
                    margin: 0 0 1rem;
                }
            }
        } 
    }
</style>
