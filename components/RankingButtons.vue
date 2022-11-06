<template>
  <button
    class="ranking-btn"
    v-for="num in numsArray"
    :key="num"
    @click="handleClick(num)"
  >
    {{ num + 1 }}
  </button>
</template>

<script setup lang="ts">
import useForm from "../composables/composables";
const { setSelected } = useForm();

const handleClick = (num: number) => {
  setSelected(num);
  
}

const numsArray: Array<number> = [...Array(5).keys()];
</script>
