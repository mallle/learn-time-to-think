<script lang="ts">
    import { browser } from '$app/environment';
    import { nextOutcomes } from '../data/nextOutcomes';
    import Carousel from 'svelte-carousel';
    import { language } from '../stores/language';
    import Card from '@components/Card.svelte';
    export let section: number;
    export let showAnswers: boolean;

    let carousel: any;
    let currentIndex: number = 0;

    function goToPageFirst(index: number) {
        carousel.goTo(index, { animated: false })
    }

    function pageChange(event: any) {
        console.log("hi");
        currentIndex = event.detail;
    }
</script>
<div class="outcomes">
    <nav>
        {#each nextOutcomes[$language][section] as card, index}
            <button class:active={currentIndex === index} on:click={() => goToPageFirst(index)}>{card.question}</button>   
        {/each}
    </nav>

    <div class="carousel">
        {#if browser}
            <Carousel bind:this={carousel}  on:pageChange={pageChange}>
                {#each nextOutcomes[$language][section] as card, index}
                    <Card {...card} alwaysFlipped={showAnswers}/>
                {/each}
            </Carousel>
        {/if}
    </div>
</div>

<style> 
    .outcomes {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        align-items: center;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        flex-direction: column;
        flex: 1;
    }


    .carousel {
        max-width: 500px;
    }
</style>