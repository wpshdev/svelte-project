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
    
    let properties = data.properties.data;
    console.log(properties);
    // console.log(data);
	// console.log(data.data.attributes.Banner.background.data.attributes.url);
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
