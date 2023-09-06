<script lang="ts">
  export let question: string;
  export let answer: string | undefined = undefined;
  export let questionsToAsk: string[] | undefined = undefined;
  export let additionalInfo: string[] | undefined = undefined;
  export let iq: string | undefined = undefined;
  export let alwaysFlipped: boolean = false;
  export let canFlip: boolean = true;

  let flipped: boolean = false;

  $: flipped;

  $: {
    alwaysFlipped;
    if (alwaysFlipped) {
      flipped = true;
    }
    if (!alwaysFlipped) {
      flipped = false;
    }
  }
</script>

<div class="scene">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="card"
    class:is-flipped={flipped && canFlip}
    on:click={() => (flipped = !flipped)}
  >
    <div class="card__face card__face--front">
      <p>{question}</p>
    </div>
    <div class="card__face card__face--back">
      <p>{@html answer}</p>
      {#if additionalInfo}
        {#each additionalInfo as info}
          <p>{info}</p>
        {/each}
      {/if}
      {#if questionsToAsk}
        <ul>
          {#each questionsToAsk as question}
            <li>{question}</li>
          {/each}
        </ul>
      {/if}
      {#if iq}
        <br />
        <p>Incisive Question</p>
        <p>{iq}</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .scene {
    display: inline-block;
    width: 100%;
    min-height: 360px;
    margin: 40px 0;
    perspective: 600px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transform-origin: center right;
    transition: transform 1s;
  }

  .card.is-flipped {
    transform: translateX(-100%) rotateY(-180deg);
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 16px;
    backface-visibility: hidden;
    padding: 12px;
    border-radius: 5px;
  }

  .card__face--front {
    background: #026670;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__face--back {
    background: #0393a1;
    transform: rotateY(180deg);
    overflow-y: auto;
  }
</style>
