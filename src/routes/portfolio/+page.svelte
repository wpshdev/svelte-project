<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
	export let data;
	let domain = "https://strapi.ulfbuilt.com:1337";
	let portfolio =  data.data.attributes;
	// console.log(data.data.attributes.Banner.background.data.attributes.url);
</script>
<svelte:head>
	<title>Our Team</title>
	<meta name="description" content="ULF BUILT" />

</svelte:head>

<section class="portfolio">
	<Container>
		<Row>
			<Col md="8" class="mx-auto text-center">
                <h1>{portfolio.title}</h1>
                {@html portfolio.content}
			</Col>
		</Row>
        <Row>
            {#each portfolio.team_members.data as member}
                <Col md="4">
                    <div class="our-team__member">
                        <img src="{domain}{member.attributes.memberPhoto.data.attributes.url}" alt="member">
                        <a href="/our-team/{member.attributes.slug}">
                            <div class="our-team__member_caption">
                                <h2>{member.attributes.name}</h2>
                                <span>{member.attributes.position}</span>
                            </div>                        
                        </a>
                    </div>
                </Col>                    
            {/each}                                          
        </Row>
	</Container>
</section>

<style lang="scss">
    .portfolio{
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
</style>