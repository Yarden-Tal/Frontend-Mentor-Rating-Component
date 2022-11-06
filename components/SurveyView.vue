<template>
  <div class="survey-view">
    <section class="star-icon-section">
      <span class="star-container">
        <img src="/images/icon-star.svg" alt="star" />
      </span>
    </section>
    <section class="text-section">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </section>
    <section class="nums-section">
      <RankingButtons />
    </section>
    <section>
      <form @submit.prevent="$emit('submit')">
        <button class="submit-btn" type="submit">SUBMIT</button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const title: string = "How did we do?";
const text: string =
  "Please let us know how we did with your support request. All feedback isappreciated to help us improve our offering!";
</script>
