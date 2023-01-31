import { acceptHMRUpdate, defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useGeneralStore = defineStore("useGeneralStore", () => {
  const messageSnackkbar: Ref<string> = ref("");
  const flagSnackbar: Ref<boolean> = ref(false);
  const loading: Ref<boolean> = ref(false);

  const setMessageSnackbar = (item: string) => {
    messageSnackkbar.value = item;
    flagSnackbar.value = true;
  };

  return {
    setMessageSnackbar,
    messageSnackkbar,
    flagSnackbar,
    loading,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot));
