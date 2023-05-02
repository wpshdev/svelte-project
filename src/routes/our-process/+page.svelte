<script lang="ts">
    import PageBanner from "$lib/components/layout/PageBanner.svelte";
    import topBanner from "$lib/img/processBanner.jpg";
	import { Col, Container, Row } from "sveltestrap";
    const domain = "https://strapi.ulfbuilt.com:1337/";
</script>

<PageBanner title="Our Process" subTitle="Home Builder and Remodeler in Vail, Colorado" banner="{topBanner}" />
<section class="our-process">
    <Container>
        <Row>
            <Col class="md-12 text-center">
                <div class="our-process__heading">
                    <h2>Our Process</h2>
                    <p>
                        We want to make sure you know what to expect ahead of time<br><span>— the timeline, the choices, your responsibilities and ours.</span>                    
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col class="md-12">
                <img src="{topBanner}" alt=""/>
                <div class="our-process__paragraph mx-auto">
                    <p>Here’s an <strong>overview to understand our process</strong> so you can make smart decisions and enjoy yourself along your build journey . Our team is going to be <strong>right here with you,</strong> from your team meetings <strong>to the final day —and beyond.</strong></p>
                    <p>Along with our people, this page gives you a preview of each step, plus <strong>helpful tips and important reminders</strong> so you’re prepared and confident at every stage. You’ve got this. We’ve got you. <strong>Watch with confidence</strong> as your project is <strong>finished on-track and to your specifications.</strong></p>
                </div>
            </Col>            
        </Row>
    </Container>
</section>

<section class="phase-heading">
    <Container>
        <Row>
            <Col md="{{ size: '6', offset: 3 }}" class="text-center">
                <h3>
                    Our  building process
                    can be broken down into two main phases:
                    pre-construction and construction.                    
                </h3>
            </Col>
        </Row>
    </Container>
</section>
<section class="phase1-img" style="--phs1: url({topBanner})"></section> 
<section class="phase1">
    <Container>
        <Row class="text-center phase1__row">
            <Col md="2">
                <span class="num">1</span>
            </Col>
            <Col md="10">
                <div class="phase1__heading"><h3>Phase 1: Pre-Construction</h3></div>
            </Col>
        </Row>
    </Container>
    <Container>
        <div class="phase1__grid">
            <div class="phase1__grid__item">
                <span>Step One</span>
                <h4>Design & Planning</h4>
                <p>
                    During this phase, the client and the builder work together to develop a design and plan for the home, including the selection of materials, finishes, and fixtures.                    
                </p>
            </div>
            <div class="phase1__grid__item">
                <p>Renovations are our specialty. We listen to your style, your  design challenges, and we discuss construction planning, budgeting, and timeline.</p>
                <p>We measure and photograph every inch of your space to ensure complete accuracy while also noting structural elements that might affect construction. Utilizing a perfectly scaled computer plan of your home, we design concepts for your consideration—complete with floor plans, elevations, and 3D sketches.</p>
            </div>     
            <div class="phase1__grid__item">
                <span>Step Two</span>
                <h4>Site Preparation</h4>
                <p>
                    The site is prepared for construction, which can include clearing and grading the land, setting up temporary utilities, and preparing the foundation.
                </p>
            </div>  
            <div class="phase1__grid__item">
                <p>Renovations are our specialty. We listen to your style, your  design challenges, and we discuss construction planning, budgeting, and timeline.</p>
                <p>We measure and photograph every inch of your space to ensure complete accuracy while also noting structural elements that might affect construction. Utilizing a perfectly scaled computer plan of your home, we design concepts for your consideration—complete with floor plans, elevations, and 3D sketches.</p>
            </div>                                  
        </div>
    </Container>
</section>
<style lang="scss">
    .our-process{
        &__heading{
            margin-bottom: 7vh;
            h2{
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            p{
                span{
                    color: $primary-color;
                }
            }
        }
        &__paragraph{
            background-color: #F2F2F2;
            padding: 3rem;
            max-width: 40rem;
            margin-top: -5rem;
            z-index: 2;
            position: relative;
            p:last-child{
                margin-bottom: 0;
            }
        }
    }
    .phase-heading{
        background-color: #F2F2F2;
        padding: 3rem 0;
    }
    .phase1-img{
        background-image: var(--phs1);
        background-size: cover;
        height: 90vh;
    }
    .phase1{
        :global(.phase1__row){
            margin-top: -12rem;
            justify-content: center;
            align-items: center;
        }
        .num{
            font-size: 10rem;
            font-family: $secondary-font;
            color: $secondary-color;
        }
        &__heading{
            background-color: $secondary-color;
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
        &__grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);            
            &__item{
                padding: 4rem;
                &:nth-child(odd){
                    span{
                        color: $primary-color;
                    }
                    h4{
                        margin: 2rem 0;
                    }
                    p{
                        line-height: 2;
                        font-style: italic;
                    }
                }
                &:nth-child(even){
                    padding-top: 20vh;
                    background-color: #F2E8DD;
                }
            }
        }
    }
</style>