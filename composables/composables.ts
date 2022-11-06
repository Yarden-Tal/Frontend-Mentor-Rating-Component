import { ref } from "vue";
import { UseFormProps } from "~~/ts/interfaces";
const selected = ref<number>(null);

const useForm = (): UseFormProps => {
  const setSelected = (newValue: number): number =>
    (selected.value = newValue + 1);

  return {
    selected,
    setSelected,
  };
};

export default useForm;
