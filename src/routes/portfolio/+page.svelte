<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
	export let data;
    import LazyImage from "$lib/LazyImage.svelte";
    import Masonry from "$lib/components/Masonry.svelte";
	import ArticleSection from "$lib/components/layout/ArticleSection.svelte";
	import Cta from "$lib/components/layout/Cta.svelte";
	import PageBanner from "$lib/components/layout/PageBanner.svelte";
	import Animate from "$lib/components/Animate.svelte";
	let domain = "https://strapi.ulfbuilt.com:1337";
	let portfolio =  data.portfolio.data.attributes; 
   
    // let properties = data.properties.data;
    // console.log(properties);
    // console.log(data);
	// console.log(data.data.attributes.Banner.background.data.attributes.formats.large.url);
</script>
<svelte:head>
	<title>{portfolio.title}</title>
	<meta name="description" content="ULF BUILT" />

</svelte:head>


<Animate>
    <PageBanner title="{portfolio.title}" subTitle="{portfolio.subTitle}"  banner="{domain}{portfolio.featuredImage.data.attributes.formats.large.url}"/>
</Animate>
<section class="portfolio-masonry">
    <Animate>
        <Container>
            <Row>
                <Col class="text-center">
                    <h2>{portfolio.masonryGallery.masonryHeading}</h2>
                    <p>{portfolio.masonryGallery.masonrySubheading}</p>
                    <Masonry items={portfolio.masonryGallery.masonryItems.data}  />
                </Col>
            </Row>
        </Container>
    </Animate>
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
    // .portfolio{
	// 	background-image: var(--banner);
	// 	background-size: cover;
    //     margin-top: 0;
	// 	min-height: 40vw;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     position: relative;
    //     &:after{
    //         content: "";
    //         background-color: rgba(0,0,0,0.5);
    //         left: 0;
    //         top: 0;
    //         height: 100%;
    //         width: 100%;
    //         position: absolute;
    //         z-index: 0;
    //     }
    //     &__banner-content{
    //         z-index: 1;
    //         position: relative;
    //         h1{
    //             color: #fff;
    //             font-family: $primary-font;
    //             font-weight: 300;
    //             letter-spacing: 0.2rem;
    //         }
    //         p{
    //             color: #fff;
    //             letter-spacing: 0.1rem;                
    //         }
    //     }
    //     img{
    //         width: 100%;
    //         max-width: 100%;
    //         height: auto;
    //     }      
    //     &__property{
    //         position: relative;
    //         margin-top: 1.5rem;
    //         &:hover{
    //             a{
    //                 opacity: 1;
    //                 background-color: rgb(8, 161, 216, 0.3);
    //                 transition: 0.3s;
    //             }
    //         }
    //         a{
    //             opacity: 0;
    //             position: absolute;
    //             width: 100%;
    //             height: 100%;
    //             left: 0;
    //             top: 0;
    //             transition: 0.3s;
    //         }            
    //         &__caption{
    //             position: absolute;
    //             bottom: 0;
    //             text-align: left;
    //             width: 100%;
    //             opacity: 1;
    //             color: #fff;
    //             padding: 0.8rem;
    //             h2{
    //                 font-size: 1.2rem;
    //                 font-weight: 300;
    //                 margin-bottom: 0;
    //             }
    //             span{
    //                 font-weight: 300;
    //             }
    //         }   
    //     }

    // }
    .portfolio-masonry{
        h2{
            margin-bottom: 1.5rem;
            @include media-max(sm){
                display: none;
            }
        }
        p{
            max-width: 1100px;
            margin: 0 auto 3rem;
        }
    }
    .btn.btn-secondary {
        margin-bottom: 15px;
    }
    .portfolio-cta{
        min-height: 40vw;
        min-width: 40vw;        
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;        
        &__content{
            span{
                color: $primary-color;
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
            .btn-inverted{
                border-color: $secondary-color;
                color: $secondary-color;
            }
        } 
    }
</style>
