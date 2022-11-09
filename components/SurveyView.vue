<template>
  <div class="survey-view">
    <div class="star-icon-section">
      <span class="star-container">
        <img src="/images/icon-star.svg" alt="Star" />
      </span>
    </div>
    <section class="text-section">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </section>
    <section class="nums-section">
      <RankingButtons />
    </section>
    <section class="form-section">
      <form>
        <button @click.prevent="$emit('submit')" class="submit-btn" type="submit">SUBMIT</button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const title: string = "How did we do?";
const text: string =
  "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
</script>
