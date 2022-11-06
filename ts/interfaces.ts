import { Ref } from "nuxt/dist/app/compat/capi";

export interface UseFormProps {
  selected: Ref<number>;
  setSelected: (newValue: number) => number;
}
