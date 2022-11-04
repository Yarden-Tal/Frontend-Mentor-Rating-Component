<template>
  <div class="survey-view">
    <!-- Icon row -->
    <section class="star-icon-section">
      <div class="star-container">
        <img src="" alt="star" />
      </div>
    </section>
    <!-- Title row -->
    <section class="text-section">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </section>
    <!-- Numbers row - Flex -->
    <section class="nums-section">
      <RankingButtons @clicked="handleClick" />
    </section>
    <section>
      <form @submit!.prevent="handleSubmit">
        <button class="submit-btn" type="submit">SUBMIT</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    handleClick: {
      type: Function,
    },
    handleSubmit: {},
  },
  computed: {
    title(): string {
      return "How did we do?";
    },
    text(): string {
      return "Please let us know how we did with your support request. All feedback isappreciated to help us improve our offering!";
    },
  },
};
</script>
