import { acceptHMRUpdate, defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useUserStore = defineStore("useUserStore", () => {
  const name: Ref<string> = ref("JANE APPLESEED");
  const numCard: Ref<string> = ref("0000000000000000");
  const mm: Ref<string> = ref("00");
  const yy: Ref<string> = ref("00");
  const cvc: Ref<string> = ref("000");

  return {
    numCard,
    name,
    cvc,
    mm,
    yy,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
