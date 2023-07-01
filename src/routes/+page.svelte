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
            <li class="question">{question}</li>
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

<section>
    <h2>Zentrale hinderliche Annahme</h2>

    <div class="cards">
        <div class="card arrow-down">
           <p>Denker: wahr</p>
           <p>Kriterien: unwahr</p>
        </div>
        <div class="card arrow-down">
           <p>Denker: unwahr</p>
           <p>Kriterien: unwahr</p>
        </div>
        <div class="card arrow-down">
           <p>Denker: wahr & möglich</p>
           <p>Kriterien: wahr & möglich</p>
        </div>
    </div>
    <div class="cards">
        <div class="card arrow-right">
            <p>Lässt dich das denken-Frage</p>
            <p>Welche Annahme lässt dich denken, es sei wahr, dass ______</p>
            <p>Einladungsfrage</p>
            <p>Sie möchten ______. Sie denekn, dass es wahr ist, dass ______. Was könntst du stattdessen glaubhaft annahmen, um ______<p>
            <p>Möchtest du das denken-Frage</p>
            <p>Welche Annahme führt dazu, dass du denken möchtest es sei unwahr, dass ______?</p>
        </div>
        <div class="card arrow-down">
            <p>Frage nach der befreiende anternativen Annahme</p>
            <p>Wenn es also nicht wahr ist, dass ______ - was sind deine Worte für das, was wahr und befriend ist?</p>
            <p>Möchtest du das denken-Frage</p>
            <p>Welche Annahme führt dazu, dass du aufhören möchtest zu denken es sei wahr, dass ______?</p>
        </div>
        <div class="card">
           <p>Übergangsfrage</p>
           <p>Es ist möglich, dass _____. Welche Annahme verursacht, dass das sie daran hindert, ______?</p>
        </div>
    </div>
    <div class="cards">
        <div class="card">
           <p>Befriende alternative Annehme</p>
        </div>
    </div>
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

    .question + .question {
        margin-top: 10px;
    }

    button.active {
        background-color: #059eac;
    }

    .cards {
        display: flex;
        justify-content: space-around;
    }

    .cards + .cards {
        margin-top: 30px;
    }

    .card {
        padding: 20px;
        background-color: #fffdf5;
        box-shadow: 1px 2px 7px #fffdf5;
        border-radius: 5px;
        width: 30%;
        text-align: center;
    }

    .card p:nth-child(odd) {
        font-weight: 600;
    }


    .arrow-down:after {
        content: url('data:image/svg+xml; utf8, <svg width="30" height="30" viewBox="0 0 30 203" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.5801 0.369293L0.146321 25.3693H29.0138L14.5801 0.369293ZM17.0801 202.051L17.0801 22.8693H12.0801L12.0801 202.051H17.0801Z" fill="black"/></svg>');
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        transform: rotate(180deg);
    }

    .arrow-right:after {
        content: url('data:image/svg+xml; utf8, <svg width="30" height="30" viewBox="0 0 30 203" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.5801 0.369293L0.146321 25.3693H29.0138L14.5801 0.369293ZM17.0801 202.051L17.0801 22.8693H12.0801L12.0801 202.051H17.0801Z" fill="black"/></svg>');
        position: absolute;
        bottom: -20px;
        left: 100px;
        right: 0;
        transform: rotate(135deg);
    }
</style>