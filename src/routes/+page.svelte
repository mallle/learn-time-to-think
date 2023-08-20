<script lang="ts">
    import "../styles.css";
    import { language } from "../stores/language";
    import { questions } from "../data/questions";
    import NextOutcome from "@components/NextOutcome.svelte";
    import { assumptions, incisiveQuestion } from "../data/assumptions";

    let showAnswers: boolean = false;

    const TEXT: { [key: string]: { [key: string]: string | string[] } } = {
        en: {
            title: "Next outcomes",
            generalQuestions: "General Questions",
            showAnswers: "Always show answers",
            assumptions: "Blocking Assumption",
            break: "Waves and Pauses",
            breakStep1: "What did the thinker just do?",
            breakStep2: "Is the outcome still the same?",
            breakStep3:
                "What does the thinker need not in order to think for them self?",
            rememberTitle: "Remember",
            remember: [
                "Which step would you like to take in your life and haven't done yet?",
                "That may be, that may also be.",
                "Thank you for entrusting yourself to me.",
                "Every question is may to be the last.",
                "Outcome: --> Thinkers should think for themselves.",
                "I will give you my thinking but what more do you think or feel or want to say?",
                "Why am I talking (WAIT)",
                "You assume that, do you think it's true?",
            ],
        },
        de: {
            title: "Sitzungsergebnisse",
            generalQuestions: "Allgemeine Fragen",
            showAnswers: "Zeige antworten",
            assumptions: "Blockierende Annahme",
            break: "Pausenüberlegung",
            breakStep1: "Wo kommt der denkende her?",
            breakStep2: "Wo will der denkende hin?",
            breakStep3: "Was braucht der denkende von mir?",
            rememberTitle: "Nicht vergessen",
            remember: [
                "Welchen schritt möchtest du in deinem leben angehen und tust es noch nicht? ",
                "Das darf sein, auch das darf sein.",
                "Danke dass du dich mir anvertraust.",
                "Jede Frage hat die funktion die letze zu sein.",
                "Sitzungsergebnis: --> denkende soll für sich selbst denken.",
                "Ich kann dir meine Gedanken teilen aber was noch, denkst du, fühlst du oder möchtest du außerdem nocht sagen?",
                "Why am I talking (WAIT)",
                "Das nimmst du an, denkst du dass es wahr ist?",
            ],
        },
    };

    function changeLang(lang: string) {
        language.set(lang);
    }
</script>

<section>
    <h1>Practice Time to Think Concepts</h1>

    <div class="lang-switch">
        <button
            class="lang"
            class:active={$language === "en"}
            on:click={() => changeLang("en")}>en</button
        >
        <button
            class="lang"
            class:active={$language === "de"}
            on:click={() => changeLang("de")}>de</button
        >
    </div>

    <h2>{TEXT[$language].break}</h2>
    <ul>
        <li class="question">{TEXT[$language].breakStep1}</li>
        <li class="question">{TEXT[$language].breakStep2}</li>
        <li class="question">{TEXT[$language].breakStep3}</li>
    </ul>

    <h2>{TEXT[$language].generalQuestions}</h2>
    <ol>
        {#each questions[$language] as question}
            <li class="question">{question}</li>
        {/each}
    </ol>
</section>

<section>
    <h2>{TEXT[$language].assumptions}</h2>

    <div class="cards">
        {#each assumptions[$language].assumption as type}
            <div class="card big description">
                <p>{type.type}</p>
                <p>{type.question}</p>
                {#if type.descriptions}
                    {#each type.descriptions as description}
                        <p>{description}</p>
                    {/each}
                {/if}
            </div>
        {/each}
    </div>
    <div class="cards">
        {#each assumptions[$language].types as type, index}
            <div class="card arrow-down" class:arrow-up={index > 2}>
                {#if type.thinker}
                    <p>{type.thinker}</p>
                {/if}
                {#if type.criteria}
                    <p>{type.criteria}</p>
                {/if}
                {#if type.descriptions}
                    {#each type.descriptions as description}
                        <p>{description}</p>
                    {/each}
                {/if}
            </div>
        {/each}
    </div>
    <div class="cards">
        {#each assumptions[$language].types as type, index}
            <div
                class="card description"
                class:arrow-down={index <= 2}
                class:arrow-up={index > 2}
            >
                <p>{type.type}</p>
                <p>{type.question}</p>
            </div>
        {/each}
    </div>
    <div class="half cards">
        <div class="card big description">
            <p>{incisiveQuestion[$language].name}</p>
            <p>{incisiveQuestion[$language].type}</p>
            {#each incisiveQuestion[$language].questions as question}
                <p>{question}</p>
            {/each}
        </div>
    </div>
</section>

<section>
    <h2>{TEXT[$language].title}</h2>

    <button
        class:active={showAnswers}
        on:click={() => (showAnswers = !showAnswers)}
        >{TEXT[$language].showAnswers}</button
    >

    <NextOutcome section={1} {showAnswers} />

    <NextOutcome section={2} {showAnswers} />

    <NextOutcome section={3} {showAnswers} />
</section>

<section>
    <h2>{TEXT[$language].rememberTitle}</h2>
    <ul>
        {#each TEXT[$language].remember as remember}
            <li>{remember}</li>
        {/each}
    </ul>
</section>

<style>
    section {
        max-width: 1000px;
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

    .lang-switch {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    .question + .question {
        margin-top: 20px;
    }

    .cards {
        display: flex;
        justify-content: space-around;
        gap: 10px;
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

    .big {
        width: 100%;
    }

    .description p:first-child {
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

    .arrow-up:before {
        content: url('data:image/svg+xml; utf8, <svg width="30" height="30" viewBox="0 0 30 203" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.5801 0.369293L0.146321 25.3693H29.0138L14.5801 0.369293ZM17.0801 202.051L17.0801 22.8693H12.0801L12.0801 202.051H17.0801Z" fill="black"/></svg>');
        position: absolute;
        top: -20px;
        right: 100px;
    }

    .half {
        width: 60%;
    }
</style>
