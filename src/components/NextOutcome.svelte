<script lang="ts">
    import { browser } from '$app/environment';
    import { nextOutcomes } from '../data/nextOutcomes';
    import Carousel from 'svelte-carousel';
    import Card from '../routes/Card.svelte';
    import { language } from '../stores/language';

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

    button {
        border: none;
        color: black;
        color: white;
        background-color: #03727d;
        border-radius: 10px;
        padding: 10px 20px;
        box-shadow: 1px 2px 7px #f2f2f2;
        cursor: pointer;
        transition: all 0.15s ease-in-out;
    }

    button:hover {
        transform: scale(.95);
        background-color: #04909d;
    }

    button.active {
        background-color: #059eac;
    }
</style>