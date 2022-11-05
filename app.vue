<template>
  <div class="main-container">
    <SurveyView v-show="!didSubmit" @submit="handleSubmit" />
    <ThanksView v-show="didSubmit" />
  </div>
</template>

<script setup lang="ts">
import useCounter from "./composables/composables";

const { selected, didSubmit, toggleDidSubmit } = useCounter();

const handleSubmit = (): void => {
  if (selected.value === null) {
    return alert(errorMsg);
  } else {
    toggleDidSubmit();
  }
};

const errorMsg: string = "Please rank us before submitting 🙂";
</script>
