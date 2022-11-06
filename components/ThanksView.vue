<template>
  <div class="thanks-view">
    <section class="img-section">
      <div class="img-wrapper">
        <img src="images/illustration-thank-you.svg" alt="Sent" />
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

<script setup lang="ts">
import { ComputedRef } from "vue";
import useForm from "../composables/composables";

const { selected } = useForm();

const thanksTitle: string = "Thank you!";
const thanksTxt: string =
  "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

const selectionTxt: ComputedRef<string> = computed(
  (): string => `You selected ${selected.value} out of 5`
);
</script>
