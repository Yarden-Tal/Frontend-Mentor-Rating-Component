<template>
  <div class="main-container">
    <SurveyView
      v-show="!didSubmit"
      :handle-submit="handleSubmit"
      :handle-click="handleClick"
    />
    <ThanksView v-show="didSubmit" :selected="selected" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selected: null as number,
      didSubmit: false as boolean,
    };
  },
  computed: {
    errorMsg(): string {
      return "Please rank us before submitting 🙂";
    },
  },
  methods: {
    handleSubmit(): void {
      if (this.selected === null) {
        alert(this.errorMsg);
      } else {
        this.didSubmit = true;
      }
    },
    handleClick(e: { target: { value: number } }) {
      alert(e);
      this.selected = e.target.value;
    },
  },
};
</script>
