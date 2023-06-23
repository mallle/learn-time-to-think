<script lang="ts">
    import '../styles.css';
    import Card from './Card.svelte';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import { language } from '../stores/language';
    import { nextOutcomes } from '../data/nextOutcomes';
    import { questions } from '../data/questions';

    let carousel: any;
    let currentIndex: number = 0;
    let showAnswers: boolean = false;

    function goToPage(index: number) {
        carousel.goTo(index, { animated: false })
    }

    const TEXT: { [key: string]: {[key: string]: string} } = {
        en: {
            title: "Next outcomes",
            generalQuestions: "General Questions",
            showAnswers: "Always show answers"
        },
        de: {
            title: "Sitzungsergebnisse",
            generalQuestions: "Allgemeine Fragen",
            showAnswers: "Zeige antworten"
        }
    }

    function changeLang(lang: string) {
        language.set(lang);
    }

    function pageChange(event: any) {
        currentIndex = event.detail;
    }
</script>
<section>
    <h1>Practice Time to Think Concepts</h1>

    <button class="lang" class:active={$language === "en"} on:click={() => changeLang("en")}>en</button>
    <button class="lang" class:active={$language === "de"} on:click={() => changeLang("de")}>de</button>

    <h2>{TEXT[$language].generalQuestions}</h2>
    <ul>
        {#each questions[$language] as question}
            <li>{question}</li>
        {/each}
    </ul>

    <h2>{TEXT[$language].title}</h2>

    <nav>
        {#each nextOutcomes[$language] as card, index}
            <button class:active={currentIndex === index} on:click={() => goToPage(index)}>{card.question}</button>   
        {/each}
    </nav>
    
    {#if browser}
        <Carousel bind:this={carousel}  on:pageChange={pageChange}>
            {#each nextOutcomes[$language] as card}
                <Card {...card} alwaysFlipped={showAnswers}/>
            {/each}
        </Carousel>
    {/if}

    <button class:active={showAnswers} on:click={() => showAnswers = !showAnswers}>{TEXT[$language].showAnswers}</button> 
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

    li + li {
        margin-top: 10px;
    }

    button.active {
        background-color: #059eac;
    }
</style>