<template>
  <div class="main-container">
    <SurveyView v-show="!didSubmit" @submit="handleSubmit" />
    <ThanksView v-show="didSubmit" />
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import useForm from "./composables/composables";

onMounted(() => navigateTo("/"));

const { selected } = useForm();
const didSubmit: Ref<boolean> = ref(false);

const handleSubmit = (): void => {
  if (selected.value === null) return alert(errorMsg);
  else {
    didSubmit.value = true;
    navigateTo("/sent");
  }
};

const errorMsg: string = "Please rank us before submitting 🙂";
</script>
