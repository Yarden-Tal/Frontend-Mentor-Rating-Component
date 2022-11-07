<template>
  <div class="main-container">
    <div class="main-container__inner">
      <SurveyView v-show="!didSubmit" @submit="handleSubmit" />
      <ThanksView v-show="didSubmit" />
    </div>
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
  else submit();
};

const submit = (): void => {
  setTimeout(() => {
    didSubmit.value = true;
    navigateTo("/sent");
  }, 400);
};

const errorMsg: string = "Please rank us before submitting 🙂";
</script>

<style lang="scss">
// Font imports
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");

// Colors
$bg: hsl(216, 12%, 8%);
$card-bg: #1f2631;
$star-bg: hsl(213, 19%, 18%);
$number-bg: hsl(216, 12%, 54%);
$btn-bg: hsl(217, 12%, 63%);
$orange: hsl(25, 97%, 53%);
$title-color: hsl(0, 0%, 100%);
$txt-color: hsl(217, 12%, 63%);

// Typography
$body-font-size: 15px;
$body-font-family: "Nunito Sans", sans-serif;
$body-font-weight-regular: 400;
$body-font-weight-bold: 700;

// Screen sizes
$mobile: 375px;
$desktop: 1440px;

// Mixins
@mixin btn-radius {
  border-radius: 30px;
  border-color: transparent;
}

@mixin card-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $card-bg;
  padding: 20px;
  border-radius: 15px;
}

html {
  overflow: hidden;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background-color: $bg;
  font-family: $body-font-family;
  font-weight: $body-font-weight-regular;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
}

p {
  font-size: $body-font-size;
}

#__nuxt {
  margin: auto auto;
}

.main-container {
  display: flex;
  justify-content: space-between;
  width: 335px;
  &__inner {
    min-height: 305px;
    height: 100%;
    @include card-style;
  }
}
.survey-view {
  background-color: $card-bg;
  .star-icon-section {
    & .star-container {
      background-color: $star-bg;
      padding: 5px;
      @include btn-radius;
    }
  }
  & .text-section {
    & > h1 {
      color: $title-color;
    }
    & > p {
      color: $txt-color;
    }
  }
  & .nums-section {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    & .ranking-btn {
      background-color: $star-bg;
      color: $txt-color;
      @include btn-radius;
      cursor: pointer;
      &:hover {
        background-color: $btn-bg;
        color: $title-color;
      }
    }
  }
  & form {
    width: 100%;
    .submit-btn {
      @include btn-radius;
      letter-spacing: 1px;
      width: 100%;
      background-color: $orange;
      color: $title-color;
      padding: 3px 40px;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        background-color: $title-color;
        color: $orange;
      }
    }
  }
}

.thanks-view {
  /* @include card-style; */
  
  text-align: center;
  & .img-section {

  }
  & .choice-section {
    & > span {
      background-color: $star-bg;
      @include btn-radius;
      color: $orange;
    }
  }
  & .txt-section {
    & > h2 {
      color: $title-color;
    }
    & > p {
      color: $txt-color;
    }
  }
}


/* For selected ranking button only */
.orange-bg {
  background-color: $orange !important;
  color: $title-color !important;
}
</style>
