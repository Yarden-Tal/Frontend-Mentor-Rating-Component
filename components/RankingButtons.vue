<template>
  <div class="ranking-btn-container"
  v-for="num in numsArray"
  :key="num"
  @click="handleClick(num)"
  >
  <button
  :class="{ 'orange-bg' : num + 1 === selected}"
  class="ranking-btn"
    >
      {{ num + 1 }}
  </button>
  </div>
</template>

<script setup lang="ts">
import useForm from "../composables/composables";
const { selected, setSelected } = useForm();

const handleClick = (num: number) => {
  setSelected(num);
  
}

const numsArray: Array<number> = [...Array(5).keys()];
</script>
