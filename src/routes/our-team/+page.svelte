<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
    import { LazyImage } from 'svelte-lazy-image';
	export let data;
	let domain = "https://strapi.ulfbuilt.com:1337";
	let ourTeam =  data.data.attributes;
	console.log(ourTeam);
    let scroll
</script>
<svelte:head>
	<title>Our Team</title>
	<meta name="description" content="ULF BUILT" />
</svelte:head>
<svelte:window bind:scrollY={scroll} />
<div class="cover" style="background-image: url({domain}{data.data.attributes.Cover.data.attributes.formats.large.url});">
    <h2 class="pfont">{data.data.attributes.title}</h2>
    <p class="pfont">{data.data.attributes.Subheading}</p>
</div>
<section class="our-team">
	<Container>
		<Row>
			<Col md="10" class="mx-auto text-center">
                <h1 class="stc">{ourTeam.SecondSectionTitle}</h1>
                <p class="pb-5">{@html ourTeam.SecondSectionPara}</p>
                <LazyImage src="{domain}{ourTeam.SecondSectionImage.data.attributes.formats.large.url}" placeholder="{domain}{ourTeam.SecondSectionImage.data.attributes.formats.small.url}" alt="Team Philosophy" class="easein-img"/>
			</Col>
		</Row>
	</Container>
</section>
<section class="owner">
    <Container>
        <div class="imgdiv" style:transform={`translate3d(0, ${(scroll * -0.1)+100}px, 0)`}>
            <img alt="{ourTeam.team_member_owner.data.attributes.name}" src="{domain}{ourTeam.team_member_owner.data.attributes.memberPhoto.data.attributes.formats.large.url}">
        <div class="tm-box wtc px-5 py-3">
            <h2 class="pfont">{ourTeam.team_member_owner.data.attributes.name}</h2>
            <h4 class="pfont">{ourTeam.team_member_owner.data.attributes.position}</h4>
        </div></div>
        <div class="owner-quote"><h2 class="wtc line-height-2">{@html ourTeam.ownerquote}</h2></div>
    </Container>
</section>
<section class="team-members">
<Container>
    <Row>
        <h1 class="sfont ptc mb-5 text-center">{ourTeam.title}</h1>
        <Col md="5" style="-webkit-transform-style: preserve-3d;">
            <div class="team-members__description">
                <h2 class="sfont stc line-height-2">{ourTeam.para1}</h2>
            </div>
        </Col>
        <Col md="7">
        <Row>
            {#each ourTeam.team_members.data as member}
                <Col md="6">
                    <a href="/our-team/{member.attributes.slug}">
                    <div class="our-team__member">
                        <img src="{domain}{member.attributes.memberPhoto.data.attributes.url}" alt="member">
                        <div class="tm-box wtc px-5 py-3" style="bottom: 1rem;">
                            <!-- our-team__member_caption class removed -->
                            <h5 class="pfont">{member.attributes.name}</h5>
                            <span class="pfont gtc">{member.attributes.position}</span>
                        </div>
                    </div>
                    </a>
                </Col>                    
            {/each}                                          
        </Row>
    </Col>
</Row>
</Container>
</section>
<section>
    <Container>
        <Row>
            <Col md="12">
               <h2 class="text-center">{ourTeam.para2}</h2>
            </Col>
        </Row>
    </Container>
</section>
<style lang="scss">
    .our-team{
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
    .team-members{
        &__description{
            position: sticky;
            top:50px;
        }
    }
    section{
        margin: 10rem 0;
    }
</style>