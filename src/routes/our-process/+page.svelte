<script lang="ts">
	import Animate from "$lib/components/Animate.svelte";
    import Cta from "$lib/components/layout/Cta.svelte";
    import PageBanner from "$lib/components/layout/PageBanner.svelte";
	import { Col, Container, Row } from "sveltestrap";
    const domain = "https://strapi.ulfbuilt.com:1337";
    export let data;
    const processData = data.data.attributes;
</script>

<svelte:head>
	<title>{processData.section1heading}</title>
	<meta name="description" content="ULF BUILT" />
    <link rel="preload" href="{domain}{processData.Cover.data[0].attributes.formats.large.url}" as="image">
</svelte:head>
<PageBanner title="Our Process" subTitle="Home Builder and Remodeler in Vail, Colorado" banner="{domain}{processData.Cover.data[0].attributes.formats.large.url}" />
<section class="our-process">
        <Container>
            <Row>
                <Col class="md-12 text-center">
                    <div class="our-process__heading">
                        <h2>{processData.section1heading}</h2>
                        {@html processData.section1text}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col class="md-12">
                    <Animate>
                        <img src="{domain}{processData.section2image.data.attributes.formats.large.url}"
                        srcset="{domain}{processData.section2image.data.attributes.formats.small.url} 330w,
                                {domain}{processData.section2image.data.attributes.formats.medium.url} 660w,
                                {domain}{processData.section2image.data.attributes.formats.large.url} 990w"
                        sizes="(max-width: 480px) 330px,
                               (max-width: 960px) 660px,
                               990px"
                        width="330"
                        height="170"
                        alt="{processData.section2image.data.attributes.alternativeText}"/>
                        <div class="our-process__paragraph mx-auto">
                            {@html processData.section2text}
                        </div>
                    </Animate>
                </Col>            
            </Row>
        </Container>
</section>

<section class="phase-heading">
    <Animate>
        <Container>
            <Row>
                <Col md="{{ size: '6', offset: 3 }}" class="text-center">
                    <h3>
                        {@html processData.section3heading}                  
                    </h3>
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<Animate>
<section class="phase1-img" style="--phs1: url({domain}{processData.section3image.data.attributes.formats.large.url})"></section> 
</Animate>
<section class="phase">
    <Animate>
        <Container>
            <Row class="text-center phase__row">
                <Col xs="2">
                    <span class="num">1</span>
                </Col>
                <Col xs="10">
                    <div class="phase__heading"><h3>{processData.section3phase1mainheading}</h3></div>
                </Col>
            </Row>
        </Container>
    </Animate>
    <Animate>
        <Container>
            <div class="phase__grid">
                <div class="phase__grid__item">
                    <span>{processData.section4heading}</span>
                    <h4>{processData.section4subheading}</h4>
                    {@html processData.section4text}
                </div>
                <div class="phase__grid__item">
                    {@html processData.section4righttext}
                </div>     
                <div class="phase__grid__item">
                    <span>{processData.section5heading}</span>
                    <h4>{processData.section5subheading}</h4>
                    {@html processData.section5text }
                </div>  
                <div class="phase__grid__item">
                  {@html processData.section5righttext}
                </div>                                 
            </div>      
        </Container>
    </Animate>
    <Animate>
        <div class="phase__banner" style="--phs1Banner: url({domain}{processData.section6image.data.attributes.formats.large.url})">
        </div>  
    </Animate>
   <Animate>
        <Container>
            <div class="phase__grid scnd-row">
                <div class="phase__grid__item">
                    <span>{processData.section7heading}</span>
                    <h4>{processData.section7subheading}</h4>
                    {@html processData.section7text}
                </div>
                <div class="phase__grid__item">
                    {@html processData.section7righttext}
                </div>     
                <div class="phase__grid__item">
                    <span>{processData.section8heading}</span>
                    <h4>{processData.section8subheading}</h4>
                    {@html processData.section8text}
                </div>  
                <div class="phase__grid__item">
                    {@html processData.section8righttext}
                </div>                                 
            </div>      
        </Container>      
   </Animate>
</section>
<Animate>
    <section class="phase-banner-separator" style="--phsSeparator: url({domain}{processData.section9image.data.attributes.formats.large.url})">
    </section>
</Animate>

<secton class="phase-banner-paragraph">
    <Animate>
        <Container>
            <Row>
                <Col>
                    <div>
                        {@html processData.section9text}
                    </div>
                </Col>
            </Row>
        </Container>
    </Animate>
</secton>

<Animate>
    <section class="phase2-img" style="--phs2: url({domain}{processData.section10phase2image.data.attributes.formats.large.url})"></section> 
</Animate>

<section class="phase">
    <Animate>
        <Container>
            <Row class="text-center phase__row">
                <Col xs="9" md="10">
                    <div class="phase__heading"><h3>{processData.section10phase2heading}</h3></div>
                </Col>            
                <Col xs="3" md="2">
                    <span class="num">2</span>
                </Col>
            </Row>
        </Container>
    </Animate>
    <Animate>
        <Container>
            <div class="phase__grid">
                <div class="phase__grid__item">
                    <span>{processData.section11heading}</span>
                    <h4>{processData.section11subheading}</h4>
                    {@html processData.section11text}
                </div>
                <div class="phase__grid__item">
                    {@html processData.section11righttext}
                </div>     
                <div class="phase__grid__item">
                    <span>{processData.section12heading}</span>
                    <h4>{processData.section12subheading}</h4>
                    {@html processData.section12text}
                </div>  
                <div class="phase__grid__item">
                    {@html processData.section11text}
                </div>  
                <div class="phase__grid__item">
                    <span>{processData.section13heading}</span>
                    <h4>{processData.section13subheading}</h4>
                    {@html processData.section13righttext}
                </div>  
                <div class="phase__grid__item">
                    {@html processData.section12text}
                </div>                                            
            </div>      
        </Container>
    </Animate>
    <Animate>
        <div class="phase__banner banner2" style="--phs2Banner1: url({domain}{processData.section14image.data.attributes.formats.large.url})">
        </div>   
    </Animate>
    <Animate>
        <Container>
            <div class="phase__grid scnd-row">
                <div class="phase__grid__item">
                    <span>{processData.section15heading}</span>
                    <h4>{processData.section15subheading}</h4>
                    {@html processData.section15text}
                </div>
                <div class="phase__grid__item">
                    {@html processData.section15righttext }
                </div>     
                <div class="phase__grid__item">
                    <span>{processData.section16heading}</span>
                    <h4>{processData.section16subheading}</h4>
                    {@html processData.section16text}
                </div>  
                <div class="phase__grid__item">
                    {@html processData.section16righttext }
                </div>         
                <div class="phase__grid__item">
                    <span>{processData.section17heading}</span>
                    <h4>{processData.section17subheading}</h4>
                    {@html processData.section17text}
                </div>  
                <div class="phase__grid__item">
                    {@html processData.section17righttext }
                </div>                                       
            </div>      
        </Container>   
    </Animate>
    <Animate>
        <div class="phase__banner banner3" style="--phs2Banner2: url({domain}{processData.section18image.data.attributes.formats.large.url})">
        </div>   
    </Animate>
    <Animate>
        <Container>
            <div class="phase__grid scnd-row">
                <div class="phase__grid__item">
                    <span>{processData.section19heading}</span>
                    <h4>{processData.section19subheading}</h4>
                    {@html processData.section19text}
                </div>
                <div class="phase__grid__item">
                    {@html processData.section19righttext }
                </div>                                           
            </div>      
        </Container>  
    </Animate>
</section>
<secton class="phase-banner-paragraph">
    <Animate>
        <Container>
            <Row>
                <Col>
                    <div>
                        {@html processData.section20text }
                    </div>
                </Col>
            </Row>
        </Container>
    </Animate>
</secton>
<Animate>
    <Cta />
</Animate>
<style lang="scss">
    section{
        min-height: 20vh;
    }
    .our-process{
        min-height: 40vh;
        &__heading{
            margin-bottom: 7vh;
            :global(p span){
                color: $primary-color;
            }
            h2{
                font-size: 4rem;
                margin: 3rem 0 2rem;
                color: $secondary-color;
            }
            p{
                span{
                    color: $primary-color;
                }
            }
        }
        img{
            margin-top: 1rem;
            height: auto;
        }
        &__paragraph{
            background-color: #F2F2F2;
            padding: 3rem;
            max-width: 40rem;
            margin-top: -5rem;
            z-index: 2;
            position: relative;
            @include media-max(sm){
                width: 85vw;
                font-size: 1.3rem;
                padding: 3rem 1.5rem;
                margin-top: -2rem;
            }
            p:last-child{
                margin-bottom: 0;
            }
        }
    }
    .phase-heading{
        background-color: #F2F2F2;
        padding: 3rem 0;
        :global(h3){
            @include media-max(sm){
                font-size: 1.2rem;
            }
            font-size: 2.25rem;
            :global(span) {
               font-family: $secondary-font;
               color: $secondary-color;
            }
        }
    }
    .phase1-img{
        background-image: var(--phs1);
        background-size: cover;
        height: 90vh;
        @include media-max(sm){
            height: 40vh;
        }          
    }
    .phase2-img{
        background-image: var(--phs2);
        background-size: cover;
        height: 90vh;
        @include media-max(sm){
            height: 40vh;
        }          
    }    
    .phase{
        margin-bottom: 0;
        @include media-max(sm){
            padding-left: 0;
            padding-right: 0;
        }
        h3{
            font-weight: 400;
            @include media-max(sm){
                font-size: 1.2rem;
            }            
        }
        :global(h3) {
            font-size: 2.5rem;
        }
        :global(.phase__row){
            margin-top: -18.3rem;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 1;
            @include media-max(sm){
                margin-top: -9.5rem;
            }               
        }
        .num{
            font-size: 20rem;
            font-family: $secondary-font;
            color: $darkbluegreen;
            display: block;            
            @include media-max(sm){
                font-size: 8rem;
            }              
        }
        &__heading{
            background-color: $darkbluegreen;
            padding: 1rem 0;
            width: 100%;
            margin-top: 1rem;
            h3{
                text-transform: uppercase;
                font-family: $primary-font;
                color: #fff;
                margin-bottom: 0;
            }
        }
        @include media-max(sm){
            &__heading{
                margin-bottom: 2rem;
            }
        }
        &__grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);     
            // margin-top: -10.960rem;
            margin-top: -9rem;
            @include media-max(md){
                // margin-top: -3.5rem;
            }      
            @include media-max(sm){
                grid-template-columns: repeat(1, 1fr);   
                margin-top: -5rem;  
            }            
            &__item{
                padding: 6rem 4rem;
                @include media-max(sm){
                    padding: 1rem 0;
                }
                h4 {
                    font-size: 2.25rem;
                }
                &:nth-child(odd){
                    padding-left: 8vw;
                    line-height: 2;
                    font-style: italic;      
                    @include media-max(sm){
                        padding: 2rem 1rem;
                    }                                  
                    span{
                        color: $primary-color;
                        font-style: normal;
                    }
                    h4{
                        margin: 2rem 0;
                        font-style: normal;
                    }
                }
                &:nth-child(even){
                    padding-top: 8.5vw;
                    background-color: #F2F2F2;

                    :global(p:last-child){
                        margin-bottom: 0;                        
                    }
                    @include media-max(sm){
                        padding: 3rem 1.5rem;
                        margin-left: calc(50% - 50vw);
                        margin-right: calc(50% - 50vw);                        
                    }                    
                }
                
            }  
            @include media-max(sm){
                &__item{
                    padding: 6rem 1rem;
                } 
                }       
            &.scnd-row{
                margin-top: 0;
            }   
        }
        @include media-max(sm){
            &__grid{
                display: block;
            } 
        }   
        &__banner{
                background-image: var(--phs1Banner);
                background-size: cover;
                height: 90vh;
                &.banner2{
                    background-image: var(--phs2Banner1)
                }
                &.banner3{
                    background-image: var(--phs2Banner2)
                }            
                @include media-max(sm){
                    height: 40vh;
                }                    
        }           
    }
    .phase-banner-separator{
        background-image: var(--phsSeparator);
        background-size: cover;
        height: 90vh;       
        margin: 0; 
        @include media-max(sm){
            height: 40vh;
        }
    }
    .phase-banner-paragraph{
        display: block;
        margin-top: 0;
        background-color: #F2F2F2;
        div{
            padding: 3rem 0;
            text-align: center;
            max-width: 70rem;
            margin: 0 auto;
            p{
                line-height: 2;
            }
        }
    }
    @include media-max(sm){
        .phase1-img, .phase__banner, .phase2-img, .phase-banner-separator {
            height: 30vh;
        }
    }
</style>