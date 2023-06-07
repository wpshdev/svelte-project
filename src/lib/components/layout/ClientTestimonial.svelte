<script lang="ts">
    import { onMount } from 'svelte';
    let flickityInstance;

    onMount(() => {
        innerWidth = window.innerWidth;
        
        flickityInstance = new Flickity('.slider-container', {
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: false,
            groupCells: 1,
            draggable: true,
            on: {
                change: updateProgress,
            },
        });
    })

    let progressPercentage = 33.33;

    function updateProgress() {
        const totalSlides = 3;
        const index = flickityInstance.selectedIndex + 1;
        progressPercentage = ((index) / totalSlides) * 100;
    }

</script>


<section class="our_client_say">
    <h2>Our Clients say...</h2>
    <div class="our_client_say__cards slider-container">
        <div class="details">
            <p>We used Ulf Built to remodel our guest bathroom and kitchen.in Cordillera in Edwards.  Alex Chay was our general contractor and his team did an excellent job. They stayed on budget and completed the work by the date promised. We are very pleased with the result and recommend them highly. </p>
            <h3>Deborah Lamb</h3>
        </div>
        <div class="details">
            <p>We used Ulf Built to remodel our guest bathroom and kitchen.in Cordillera in Edwards.  Alex Chay was our general contractor and his team did an excellent job. They stayed on budget and completed the work by the date promised. We are very pleased with the result and recommend them highly. </p>
            <h3>Deborah Lamb</h3>
        </div>
        <div class="details">
            <p>We used Ulf Built to remodel our guest bathroom and kitchen.in Cordillera in Edwards.  Alex Chay was our general contractor and his team did an excellent job. They stayed on budget and completed the work by the date promised. We are very pleased with the result and recommend them highly. </p>
            <h3>Deborah Lamb</h3>
        </div>
    </div>
    <div class="slider-progress">
        <progress id="file" value="{progressPercentage}" max="100"></progress>
    </div>
</section>

<style lang="scss">

    
.our_client_say {
    background:  linear-gradient(180deg, rgba(255, 255, 255, 0) -40.92%, rgba(239, 239, 240, 0.83) 36.13%, #FFFFFF 76.97%, rgba(255, 255, 255, 0) 137.31%); ;
    mix-blend-mode: normal;
    padding: 14rem 0;
    @include media-max(xs){
        padding: 5rem 0;
    }
    h2 {
        color: $secondary-color;
        text-align: center;
    }
    &__cards {
        margin-top: 4rem;

        .details {
            background: $white-color;
            border: 1px solid $darkgray;
            border-radius: 8px;
            min-height: 27.156rem;
            width: 50%;
            padding: 4rem 6rem;
            overflow: hidden;
            margin: 0 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @include media-max(xs){
                width: 90%;
                margin: 0 1rem;
                padding: 3rem;
            }

            p {
                font-size: 1.25rem;
                line-height: 2.125rem;
                font-feature-settings: 'pnum' on, 'lnum' on;
                font-weight: 400;
                color: $darkergray;
                margin-bottom: 3rem;
            }

            h3 {
                font-family: $primary-font;
                text-align: right;
                font-size: 2.125rem;
                letter-spacing: 0.05em;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: $darkergray;
            }

        }

    }
    .slider-progress {
        text-align: center;
        margin-top: 5rem;

        progress {
            border-radius: 0px;
            width: 50%;
            @include media-max(xs){
                width: 90%;
                margin: auto;
            }

            &::-webkit-progress-bar {
                background: $gray;
            }
            &::-webkit-progress-value {
                background: $secondary-color;
            }
        }
    }
}

</style>