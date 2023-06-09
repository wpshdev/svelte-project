<script lang="ts">
    export let data;
    import {Container, Row, Col} from 'sveltestrap';
    import Cta from '$lib/components/layout/Cta.svelte';
    import Animate from '$lib/components/Animate.svelte';
    import PageBanner from '$lib/components/layout/PageBanner.svelte';
    import { onMount } from "svelte";
    import axios from "axios";
    console.log(data);
    const url = "https://strapi.ulfbuilt.com:1337/";
    let page = data.data.attributes
    console.log(page);

    export let pdata;
    export let featuredProjects;
    let promise = fetchProject();
    async function fetchProject(){
        const url = 'https://strapi.ulfbuilt.com:1337/api/portfolios?populate=deep';
        const headers = {
            Authorization: 'Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072' 
        }    
        const response = await axios.get(url, { headers });
        pdata = response.data;
        featuredProjects = pdata.data;
    }

    onMount(() => {
        promise = fetchProject();
    });	

</script>
<svelte:head>
	<title>{page.Title}</title>
	<meta name="description" content="ULF BUILT" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>
<PageBanner title="{page.Title}" subTitle="{page.Subheading}"  banner="{url}{page.Cover.data[0].attributes.url}"  />
<section class="service-b">
        <Container>
            <h2 class="text-center mb-5 py-3">{page.section1heading}</h2>
            <Row>
                <Col md=4 sm=6 xs=12>
                    <div class="service-b__service-box">
                        <div class="service-b__service-box__service-box-inner">
                            <Animate>
                                <div class="service-b__service-box__service-box-inner__service-icon">
                                    <img src="{url}{page.section1item1icon.data.attributes.formats.medium.url}" alt="{page.section1item1heading}">
                                </div>
                            </Animate>
                            <h4>{page.section1item1heading}</h4>
                        </div>
                        <p>{page.section1item1text}</p>
                    </div>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <Animate>
                        <div class="service-b__service-box">
                            <div class="service-b__service-box__service-box-inner">
                                <div class="service-b__service-box__service-box-inner__service-icon">
                                    <img src="{url}{page.section1item2icon.data.attributes.formats.medium.url}" alt="{page.section1item2heading}">
                                </div>
                                <h4>{page.section1item2heading}</h4>
                            </div>
                            <p>{page.section1item2text}</p>
                        </div>
                    </Animate>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <Animate>
                        <div class="service-b__service-box">
                            <div class="service-b__service-box__service-box-inner">
                                <div class="service-b__service-box__service-box-inner__service-icon">
                                    <img src="{url}{page.section1item3icon.data.attributes.formats.medium.url}" alt="{page.section1item3heading}">
                                </div>
                                <h4>{page.section1item3heading}</h4>
                            </div>
                            <p>{page.section1item3text}</p>
                        </div>
                    </Animate>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <Animate>
                        <div class="service-b__service-box">
                            <div class="service-b__service-box__service-box-inner">
                                <div class="service-b__service-box__service-box-inner__service-icon">
                                    <img src="{url}{page.section1item4icon.data.attributes.formats.medium.url}" alt="{page.section1item4heading}">
                                </div>
                                <h4>{page.section1item4heading}</h4>
                            </div>
                            <p>{page.section1item4text}</p>
                        </div>
                    </Animate>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <Animate>
                        <div class="service-b__service-box">
                            <div class="service-b__service-box__service-box-inner">
                                <div class="service-b__service-box__service-box-inner__service-icon">
                                    <img src="{url}{page.section1item5icon.data.attributes.formats.medium.url}" alt="{page.section1item5heading}">
                                </div>
                                <h4>{page.section1item5heading}</h4>
                            </div>
                            <p>{page.section1item5text}</p>
                        </div>
                    </Animate>
                </Col>
                <Col md=4 sm=6 xs=12>
                    <Animate>
                        <div class="service-b__service-box">
                            <div class="service-b__service-box__service-box-inner">
                                <div class="service-b__service-box__service-box-inner__service-icon">
                                    <img src="{url}{page.section1item6icon.data.attributes.formats.medium.url}" alt="{page.section1item6heading}">
                                </div>
                                <h4>{page.section1item6heading}</h4>
                            </div>
                            <p>{page.section1item6text}</p>
                        </div>
                    </Animate>
                </Col>
            </Row>
        </Container>
</section>
<section class="mx-10 sets-us-apart">
    <Animate>
        <Container>
            <h2 class="text-center mb-5 py-3">{page.section2mainheading}</h2>
                <Row noGutters class="justify-content-center sets-us-apart__row">
                    <Col md="6" class="sets-us-apart__content">
                        <h4 class="text-right pfont py-3">{@html page.section2heading}</h4>
                        <p class="text-right px-5 py-5 blue-color-background">{@html page.section2text}</p>
                    </Col>
                    <Col md="6" class="imageCont">
                        <img src="{url}{page.section2image.data.attributes.formats.medium.url}" alt="{page.section2heading}" class="w-100">
                    </Col>
                </Row>
        </Container>
    </Animate>
</section>
<section class="mx-10 sets-us-apart">
    <Animate>
        <Container>
            <Row noGutters class="justify-content-center flex-md-row flex-column-reverse sets-us-apart__row">
                <Col md="6" class="imageCont">
                    <img src="{url}{page.section3image.data.attributes.formats.medium.url}" alt="{page.section3heading}" class="w-100">
                </Col>
                <Col md="6" class="sets-us-apart__content">
                    <h4 class="txt-center py-3 pfont">{@html page.section3heading}</h4>
                    <p class="px-5 txt-center py-5 blue-color-background">{@html page.section3text}</p>
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="mx-10 sets-us-apart">
    <Animate>
        <Container>
            <Row noGutters class="justify-content-center sets-us-apart__row">
                <Col md="6" class="sets-us-apart__content">
                    <h4 class="text-right pfont py-3">{@html page.section4heading}</h4>
                    <p class="text-right px-5 py-5 blue-color-background">{@html page.section4text}</p>
                </Col>
                <Col md="6" class="imageCont">
                    <img src="{url}{page.section4image.data.attributes.formats.medium.url}" alt="{page.section4heading}" class="w-100">
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="height-100vh fullwidth">
    <Animate>
        <img src="{url}{page.section5image.data.attributes.url}" alt="{page.title}" class="w-100">
    </Animate>
</section>
<section class="reimagine">
    <Animate>
        <Container>
            <h2 class="text-center mb-3 py-3">{page.section6heading}</h2>
            <p class="mb-2 py-3 two-columns">{@html page.section6text}</p>
            <div class="text-right"><a class="btn btn-secondary" href="/contact">{page.section6btn}</a></div>
        </Container>
    </Animate>
</section>

<section class="explore">
	<Animate>
		<Container>
			<Row>
				<Col md="12">
					<h2 class="text-center">Explore our Projects...</h2>
				</Col>			
				{#each featuredProjects.sort(() => 0.5 - Math.random()).slice(0, 2) as featuredProject, index}
					<Col md="6">
						<div class="explore__article">
							<a href="portfolio/{featuredProject.attributes.slug}">
								<img src="{url}{featuredProject.attributes.featuredImage.data.attributes.url}" alt="{featuredProject.attributes.featuredImage.data.attributes.alternativeText}">
								<div class="explore__article__text">
									<span>0{index+1}</span>
									{featuredProject.attributes.title}
                                    <i><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.29004 12.3459L6.29004 6.84595L1.29004 1.34595" stroke="#00ADEE" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    </i>
								</div>
							</a>
						</div>
					</Col>
				{/each}
			</Row>
		</Container>
	</Animate>
</section> 

<Animate>
    <Cta/>
</Animate>
<style lang="scss">
    :global(.banner__content__paragraph) {
        @include media-max(sm){
            display:none;
        }
    }
    .service-b{
        h2 {
            color: $secondary-color;
        }
        // for mobile bg bars
        :global(.row) {
            @include media-max(xs){
                background-image: url(/src/lib/img/service-mobile-bars1.svg);
                background-repeat: no-repeat;
                // height: 1891px;
                background-size: 100%;
            }
            @include media-max(ml){
                background-image: url(/src/lib/img/service-mobile-bars.svg);
                background-position: center;
                min-height: 1891px;
            }
            @include media-max(ms){
                min-height: unset;
            }
        }
        :global(.row .col-md-4) {
            @include media-max(ml){
                min-height: 24.813rem;
            }
            @include media-max(mm){
                min-height: 18.75rem;
            }
            @include media-max(ms){
                min-height: unset;
            }
        }
        // end for mobile bg bars
        &__service-box{
            padding: 3rem;
            @include media-max(md){ 
                padding: 1rem 0rem;
                padding-left: 10px;
            }
            @include media-max(sm){
                padding: 1rem 1rem;
                margin: 4.5rem 0;
            }
            // for mobile bg bars
            @include media-max(xs){
                padding: 0;
                margin: 17% 2.5rem;
            }
            @include media-max(w545){
                margin: 15% 2.5rem;
            }
            @include media-max(ml){
                padding: 0;
                margin: 4.5rem 2.5rem;
            }
            @include media-max(mm){
                margin: 4.5rem 1rem;
            }
            @include media-max(ms){
                margin: 3.5rem 1rem;
            }
            // end for mobile bg bars
            p {
                font-size: 1.15rem;
                line-height: 2rem;
            }
            &__service-box-inner{
                display: flex;
                margin-bottom: 20px;
                &__service-icon{
                    img{
                        width: 6.202rem;
                        background-color: #263A63;
                        padding: 1.418rem 1.396rem;
                        box-shadow: 3px 3px 3px #aaa;
                        border-radius: 10px;
                        height: 6.246rem;
                        @include media-max(md){ 
                            padding: 8px 10px;
                            height: 4rem;
                            width: auto;
                        }
                    }
                }
                h4{
                    align-self: center;
                    padding-left: 20px;
                    @include media-max(md){
                        align-self: center;
                        padding-left: 9px;
                        font-size: 1.688rem;
                    }
                    @include media-max(sm){
                        padding-left: 2rem;
                    }
                }
            } 
        }
    } 
    .fullwidth {
        padding: 0;
    }
    .reimagine {
        .btn {
            padding: 0.7rem 3.125rem;
            font-size: 1.25rem;

            @include media-max(sm){  
                padding: 0.7rem 3rem;
                font-size: 1.25rem;
            }
        }
        :global(p) {
            font-size: 1.15rem;
            line-height: 2.125rem;
            margin-bottom: 2.25rem;
        }
        :global(p.two-columns) {
            gap: 90px;
        }
    }
    .sets-us-apart {
        h2 {
            color: $secondary-color;
        }
    }
    :global(.sets-us-apart__row){
        @include media-max(sm){
            flex-direction: column-reverse;
            &.flex-column-reverse {
                flex-direction: column !important;
            }
        }
    }
    :global(.sets-us-apart__row.flex-column-reverse){
        @include media-max(sm){
            flex-direction: column !important;
        }
    }
    :global(.imageCont) {
        @include media-max(sm){
            text-align: center;
            z-index: 2;
            img {
                width: 90% !important;
                margin: auto;
            }
        }
    }
    :global(.sets-us-apart__content){
        display:flex;
        flex-direction:column;
        justify-content:center;
        @include media-max(sm){ 
            margin-top: 3rem !important;
        }
        h4{
            text-transform:uppercase;
            color: $secondary-color;
            font-size: 2.688rem;
            font-weight: 600;
            &.text-right {
                padding-right: 3rem;
            }
            &.txt-center {
                padding-left: 3rem;
            }
            @include media-max(sm){ 
                &.pfont {
                    padding-left: 3rem;
                    padding-right: 3rem;
                }
                text-align: left;
                z-index: 1;
                margin-bottom: -5rem;
            }
        }
        p {
            font-size: 1.25rem;
            line-height: 2.125rem;
            &.text-right {
                padding-left: 7rem !important;
            }
            &.txt-center {
                padding-right: 7rem !important;
            }
            @include media-max(ipadmini){ 
                &.blue-color-background {
                    padding-left: 3rem !important;
                    padding-right: 3rem !important;
                }
            }
            @include media-max(sm){ 
                text-align: left;
                padding-top: 15rem !important;
                margin-top: -10rem;
            }
        }

    }
    .explore {
        background-color: #E5EEF2;
        padding: 5rem 1rem;
        margin-bottom: 0;
        h2{
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2.8rem;
            color: $secondary-color;
        }
        &__article{
            overflow: hidden;
            position: relative;
            height: 50vh;
            @include media-max(sm){
                margin-bottom: 1rem;
            } 	
            img{
                transition: 0.5s;
                object-fit: cover;
                height: 100%;
            }         
            &:hover{
                img{
                    transition: 0.5s;
                    scale: 1.2;
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
                @include media-max(sm){
                    margin: 0;
                    font-size: 1rem;
                    width: 90%;
                    bottom: 0.5rem
                } 			
                span{
                    color: $primary-color;
                    font-size: 1.2rem;
                    margin: 0 0.8rem 0;
                    // @include media-max(sm){
                    //     margin: 0;
                    //     font-size: 1rem;
                    // }                
                }
                i {
                    position: absolute;
                    top: 20%;
                    right: 1rem;
                }
            }	
        }
    }
    @include media-max(sm){ 
        .text-right, .txt-center{
            text-align: center;
        }
        :global(.service-b .col-md-4:nth-child(3)) {
            background-image: unset;
        }
    } 
</style>