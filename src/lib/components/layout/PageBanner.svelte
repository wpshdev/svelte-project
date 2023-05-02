<script lang="ts">
    import { Container, Row, Col } from "sveltestrap";
    import Animate from "../Animate.svelte";
    import { fly } from "svelte/transition";
    import TextTransition from "$lib/TextTransition.svelte";
    export let banner;
    export let title;
    export let subTitle;
    export let extraClass;
</script>

<section class="banner {extraClass}" style="--banner: url({banner})">
	<Container>
		<Row>
			<Col >
				<div class="banner__content">
					<div class="banner__content__text">
						<Animate section=".banner">
						<h1 class="ml3"><TextTransition text="{title}"  transitionDelay=600/></h1>
						</Animate>
					</div>
					<Animate section=".banner">
						<p class="banner__content__paragraph" in:fly={{
							delay: 3500,
							duration: 2000,
							y: 50							
						}}>{subTitle}</p>
					</Animate>						
				</div>
			</Col>
		</Row>
	</Container>
</section>

<style lang="scss">
	.banner{
		background-image: var(--banner);
		background-size: cover;
		min-height: 100vh;
		background-position: bottom;
		background-size: cover;
		padding-top: 9rem;		
		margin: 0;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
        position: relative;
        &:after{
            content: "";
            background-color: rgba(0,0,0,0.5);
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            z-index: 0;
        }        
		&__content{
            position: relative;
            z-index: 2;
			&__text{
				h1{
					color:#fff;
					font-weight: 400;
					font-size: 5rem;		
					margin-bottom: 2rem;	
					span{
						font-family: $primary-font;
					}		
				}
			}
			&__paragraph{
				color: #fff;
				font-size: 1.5rem;				
			}
			&__btn{
					border: 1px solid #fff;
					padding: 1.5rem 4rem;					
					text-decoration: none;
					color: #fff;
					font-family: $secondary-font;
					text-transform:lowercase;
					display: inline-block;
			}			
		}
	}    
</style>