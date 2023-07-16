<script lang="ts">
    import '../styles.css';
    import Card from './Card.svelte';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import { language } from '../stores/language';
    import { nextOutcomes } from '../data/nextOutcomes';
    import { questions } from '../data/questions';
    import NextOutcome from '../components/NextOutcome.svelte';

    let showAnswers: boolean = false;

    const TEXT: { [key: string]: {[key: string]: string} } = {
        en: {
            title: "Next outcomes",
            generalQuestions: "General Questions",
            showAnswers: "Always show answers",
            break: "Waves and Pauses",            
            breakStep1: "What did the thinker just do?",
            breakStep2: "Is the outcome still the same?",
            breakStep3: "What does the thinker need not wo think for them self?",
            remember: "Don't forget",
            remember1: "Das darf sein, auch das darf sein.",
            remember2: "Denke dass du dich mehr anvertraust.",
            remember3: "Jede Frage hat die funktion die letze zu sein.",
            remember4: "Sitzungsergebnis: --> denkende soll für sich selbst denken.",
            remember5: "I will give you my thinking but what more do you think or feel or want to say?",
            remember6: "Why am I talking (WAIT)",
            remember7: "Das nimmst du an, denkst du dass es wahr ist?",
        },
        de: {
            title: "Sitzungsergebnisse",
            generalQuestions: "Allgemeine Fragen",
            showAnswers: "Zeige antworten",
            break: "Pausenüberlegung",
            breakStep1: "Wo kommt der denkende her?",
            breakStep2: "Wo will der denkende hin?",
            breakStep3: "Was braucht der denkende von mir?",
            remember: "Nicht vergessen",
            remember1: "Das darf sein, auch das darf sein.",
            remember2: "Denke dass du dich mehr anvertraust.",
            remember3: "Jede Frage hat die funktion die letze zu sein.",
            remember4: "Sitzungsergebnis: --> denkende soll für sich selbst denken.",
            remember5: "Ich kann dir eine Gedanken teil aber was noch, denkst du, fühlst du oder möchtest du außerdem nocht sagen?",
            remember6: "Why am I talking (WAIT)",
            remember7: "Das nimmst du an, denkst du dass es wahr ist?",
        }
    }

    function changeLang(lang: string) {
        language.set(lang);
    }
</script>
<section>
    <h1>Practice Time to Think Concepts</h1>

    <button class="lang" class:active={$language === "en"} on:click={() => changeLang("en")}>en</button>
    <button class="lang" class:active={$language === "de"} on:click={() => changeLang("de")}>de</button>

    <h2>{TEXT[$language].break}</h2>
    <ul>
        <li>{TEXT[$language].breakStep1}</li>
        <li>{TEXT[$language].breakStep2}</li>
        <li>{TEXT[$language].breakStep3}</li>
    </ul>

    <h2>{TEXT[$language].generalQuestions}</h2>
    <ul>
        {#each questions[$language] as question}
            <li class="question">{question}</li>
        {/each}
    </ul>

    <h2>{TEXT[$language].title}</h2>


    <NextOutcome section={1} {showAnswers}/>

    <NextOutcome section={2} {showAnswers}/>

    <NextOutcome section={3} {showAnswers}/>

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

    <h2>{TEXT[$language].remember}</h2>
    <ul>
        <li>{TEXT[$language].remember1}</li>
        <li>{TEXT[$language].remember2}</li>
        <li>{TEXT[$language].remember3}</li>
        <li>{TEXT[$language].remember4}</li>
        <li>{TEXT[$language].remember5}</li>
        <li>{TEXT[$language].remember6}</li>
        <li>{TEXT[$language].remember7}</li>
    </ul>
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

    * + h2 {
        margin-top: 50px;
    }

    .question + .question {
        margin-top: 10px;
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