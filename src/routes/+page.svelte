<script lang="ts">
    import '../styles.css';
    import Card from './Card.svelte';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import { language } from '../stores/language';
    import { nextOutcomes } from '../data/nextOutcomes';

    let carousel: any;

    function goToPage(index: number) {
        carousel.goTo(index, { animated: false })
    }

    const TEXT: { [key: string]: {[key: string]: string} } = {
        en: {
            title: "Next outcomes",
        },
        de: {
            title: "Sitzungsergebnisse",
        }
    }

    function changeLang(lang: string) {
        language.set(lang);
    }
</script>
<section>
    <h1>Practice Time to Think Concepts</h1>

    <button on:click={() => changeLang("en")}>en</button>
    <button on:click={() => changeLang("de")}>de</button>

    <h2>{TEXT[$language].title}</h2>

    <nav>
        {#each nextOutcomes[$language] as card, index}
            <button on:click={() => goToPage(index)}>{card.question}</button>   
        {/each}
    </nav>
    
    {#if browser}
        <Carousel bind:this={carousel}>
            {#each nextOutcomes[$language] as card}
                <Card {...card} />
            {/each}
        </Carousel>
    {/if}
</section>

<style>
    section {
        max-width: 900px;
        align-items: center;
        margin: auto;
        padding: 10px 20px;
    }

    h1 {
        text-align: center;
        font-weight: 600;
        font-size: 32px;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    nav button {
        border: none;
        color: black;
        color: white;
        background-color: #03727d;
        border-radius: 10px;
        padding: 10px 20px;
        box-shadow: 1px 2px 7px #f2f2f2;
        cursor: pointer;
    }
</style>