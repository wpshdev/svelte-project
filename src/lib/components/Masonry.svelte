<script>
import MasonryCard from "./MasonryCard.svelte";
import { fade } from "svelte/transition";

export let items = [];

console.log(items);
let activeTab = items[0].id ;
function handleTabClick(category) {
    activeTab = category;
}	
</script>

<div class="masonry">
    <div class="masonry__tabs">
        <div class="masonry__tabs__heading">
            <ul>
                {#each items as heading}
                    <li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <span
                        data-category="{heading.id}"
                        class:active="{activeTab === heading.id}"
                        on:click="{() => handleTabClick(heading.id)}">
                        {heading.attributes.Title}
                        </span>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="masonry__tabs__link text-center">
            <a href="#">View All Projects</a>
        </div>
        <div class="masonry__tabs__gallery">
            {#key activeTab}
            <div  id="modern" class="masonry__tabs__gallery__imgs" data-test={activeTab} transition:fade >
                <MasonryCard id={activeTab}/>
            </div>			
            {/key}								
        </div>					
    </div>
</div>


<style lang="scss">
	.masonry{
		h2{
			margin-bottom: 3rem;
			font-size: 3rem;			
		}
		&__tabs{
			&__heading{
				ul{
					display: flex;
					flex-wrap: wrap;
					margin-bottom: 2rem;
					li{
						list-style: none;
						width: 25%;		
                        position: relative;
                        &:not(:last-child):after{
                            content: "";
                            position: absolute;
                            right: 0;
                            top: -0.5rem;
                            height: 4rem;
                            background: #D8D7D7;
                            width: 3px;
                        }
                        &:last-child:after{
                            content: none;
                        }                        
						span{				
							font-family: $secondary-font;
							font-size: 2rem;
							color: #D8D7D7;
							text-transform: uppercase;
							margin-bottom: 2em;
							font-weight: 500;
							cursor: pointer;
							&.active{
								color: $secondary-color;
							}
						}
					}
				}
			}
            &__link{
                margin-bottom: 4rem;
                a{
                    color: $secondary-color;
                    text-decoration: none;
                }
            }
			&__gallery{
				&__imgs{
					display: flex;
                    flex-wrap: wrap;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 2rem;
					div{
						width: 33.33%;
						margin: 0 1rem;
						&:first-child{
							margin-left: 0;
						}
						&:last-child{
							margin-right: 0;
						}						
					}
				}
			}
		}
	}    
</style>