<template>
  <div class="thanks-view">
    <section class="img-section">
      <div class="img-wrapper">
        <img src="../public/images/illustration-thank-you.svg" alt="Sent" />
      </div>
    </section>
    <section class="choice-section">
      {{ selectionTxt }}
    </section>
    <section class="txt-section">
      <h2>{{ thanksTitle }}</h2>
      <p>{{ thanksTxt }}</p>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selected: {
      type: Number,
      default: null,
    },
  },
  computed: {
    selectionTxt(): string {
      return `You selected ${this.selected} out of 5`;
    },
    thanksTitle(): string {
      return "Thank you!";
    },
    thanksTxt(): string {
      return "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    },
  },
};
</script>
