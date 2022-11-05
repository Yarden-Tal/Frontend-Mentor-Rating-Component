import { ref } from "vue";

const useCounter = () => {
  const selected = ref<number>(null);
  const didSubmit = ref<boolean>(false);

  const setSelected = (newValue: number) => {
    alert(selected.value);
    selected.value = newValue + 1;
    alert(selected.value);
    nextTick();
  };

  const toggleDidSubmit = (): boolean => (didSubmit.value = !didSubmit.value);

  return {
    selected,
    setSelected,
    didSubmit,
    toggleDidSubmit,
  };
};

export default useCounter;
