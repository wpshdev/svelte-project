<script lang="ts">
	import { Col, Container, Row } from "sveltestrap";
	export let data;
    import LazyImage from "$lib/LazyImage.svelte";
	// let domain = "https://strapi.ulfbuilt.com:1337";
	// let portfolio =  data.portfolio.data.attributes; 
    // let properties = data.properties.data;
    // console.log(properties);
    // console.log(data);
	// console.log(data.data.attributes.Banner.background.data.attributes.url);
</script>
<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="ULF BUILT" />

</svelte:head>

<section class="portfolio">
	<Container>
		<Row>
			<Col md="8" class="mx-auto text-center">

			</Col>
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
        &__property{
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
            &__caption{
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