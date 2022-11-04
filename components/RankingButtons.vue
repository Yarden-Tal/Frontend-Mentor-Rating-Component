<template>
  <button v-for="num in numsArray" :key="num" @click="emitSelection(num)">
    {{ num + 1 }}
  </button>
</template>

<script lang="ts">
export default {
  methods: {
    emitSelection(e: number) {
      this.$emit("clicked", e + 1);
    },
  },
  data() {
    return {
      numsArray: [...Array(5).keys()] as Array<number>,
    };
  },
};
</script>
