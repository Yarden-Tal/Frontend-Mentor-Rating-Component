<template>
  <button v-for="num in numsArray" :key="num" @click="handleClick(num)">
    {{ num + 1 }}
  </button>
</template>

<script setup lang="ts">
import useCounter from "../composables/composables";
const { setSelected } = useCounter();

const handleClick = (num: number) => setSelected(num);

const numsArray: Array<number> = [...Array(5).keys()];
</script>
