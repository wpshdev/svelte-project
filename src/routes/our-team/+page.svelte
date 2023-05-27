<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
    import { LazyImage } from 'svelte-lazy-image';

	import Animate from "$lib/components/Animate.svelte";
	import PageBanner from "$lib/components/layout/PageBanner.svelte";
  import Contactform from "$lib/components/layout/Contactform.svelte";

	export let data;
	let domain = "https://strapi.ulfbuilt.com:1337";
	let ourTeam =  data.data.attributes;
	console.log(ourTeam);
</script>
<svelte:head>
	<title>Our Team</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<PageBanner title="{data.data.attributes.title}" subTitle="{data.data.attributes.Subheading}"  banner="{domain}{data.data.attributes.Cover.data.attributes.formats.large.url}"/>
<section class="our-team">
    <Animate>
        <Container>
            <Row>
                <Col md="10" class="mx-auto">
                    <h2 class="stc pb-4 text-center">{ourTeam.SecondSectionTitle}</h2>
                    <p class="two-columns">{@html ourTeam.content}</p>
                    <div>
                        <LazyImage src="{domain}{ourTeam.SecondSectionImage.data.attributes.formats.large.url}" placeholder="{domain}{ourTeam.SecondSectionImage.data.attributes.formats.small.url}" alt="Team Philosophy"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="owner">
    <Animate>
        <Container>
            <Row noGutters>
                <Col md=6 class="tm-img">
                    <img alt="{ourTeam.team_member_owner.data.attributes.name}" src="{domain}{ourTeam.team_member_owner.data.attributes.memberPhoto.data.attributes.formats.large.url}">
                <div class="tm-box wtc">
                    <h3 class="pfont">{ourTeam.team_member_owner.data.attributes.name}</h3>
                    <h4 class="pfont">{ourTeam.team_member_owner.data.attributes.position}</h4>
                </div>
                </Col>
                <Col md=6 class="owner-quote-container">
                <div class="owner-quote"><h3 class="stc line-height-2 text-center">{@html ourTeam.ownerquote}</h3></div>
                </Col>
            </Row>
        </Container>
    </Animate>
</section>
<section class="team-members">
    <Container>
        <Row>
            <h2 class="sfont ptc mb-5 text-center">{ourTeam.title}</h2>
            <Col md={{ size: 8, offset: 2 }}>
                <Row>
                    {#each ourTeam.team_members.data as member}
                    
                        <Col md="6">
                            <Animate>
                                <a href="/our-team/{member.attributes.slug}">
                                    <div class="our-team__member">
                                        <img src="{domain}{member.attributes.memberPhoto.data.attributes.formats.large.url}" alt="member">
                                        <div class="tm-box wtc px-5 py-3" style="bottom: 1rem;">
                                            <!-- our-team__member_caption class removed -->
                                            <h5 class="pfont">{member.attributes.name}</h5>
                                            <span class="pfont gtc">{member.attributes.position}</span>
                                        </div>
                                    </div>
                                </a>
                            </Animate>
                        </Col>                    
                    {/each}                                          
                </Row>
            </Col>
        </Row>
    </Container>
</section>
<section class="ourteam5">
   <Animate>
    <Container>
        <h4>{ourTeam.para2}</h4>
        <h4>{ourTeam.para3}</h4>
        <h4>{ourTeam.para4}</h4>
    </Container>
  </Animate>
</section>
<Animate>
  <Contactform/>
</Animate>
<style lang="scss">
    section{
        margin: 10rem 0;
            @include media-max(sm){
                margin: 5rem 0;
            }
    }
    .our-team{
        margin-top: 5rem;
        img{
                width: 100%;
                max-width: 100%;
                height: auto;
            }      
        &__member{
            position: relative;
            margin-top: 1.5rem;
            &:hover{
                a{
                    opacity: 1;
                    background-color: rgb(8, 161, 216, 0.3);
                    transition: 0.3s;
                }
            }
            a{
                opacity: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                transition: 0.3s;
            }            
            &_caption{
                position: absolute;
                bottom: 0;
                text-align: left;
                width: 100%;
                opacity: 1;
                color: #fff;
                padding: 0.8rem;
                h2{
                    font-size: 1.2rem;
                    font-weight: 300;
                    margin-bottom: 0;
                }
                span{
                    font-weight: 300;
                }
            }   
        }
    }
    :global(.tm-img){
        position: relative;
    }
.tm-box{
    position: absolute;
    z-index: 6;
    bottom:2rem;
    background-color: #1E2D39;
    padding: 1rem 2rem;
    @include media-max(sm){
        position: relative;
        text-align: center;
        bottom: 0;
    }
    h3,h4{
        margin-bottom: 0;
        font-weight: 400;
    }
}
:global(.owner-quote-container){
    padding: 2rem 0;
    @include media-max(sm){
        padding: 0;
    }
}
.owner-quote{
    background-color: #E3CEB5;
    height: 100%;
    display: flex;
    h3{
        display: flex;
        justify-content: center;
        flex-direction: column;
        @include media-max(sm){
            padding: 2rem 1rem;
        }
    }
}
.ourteam5{
    text-align: center;
    max-width: 960px;
    margin-left:auto;
    margin-right: auto;
    h4{
        font-family: $primary-font;
        font-weight: 400;
        padding-bottom: 2rem;
    }
    h4:last-child{
        text-align: right;
    }
}
</style>