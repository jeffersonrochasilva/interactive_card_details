<template>
  <v-overlay v-model="loading" contained class="align-center justify-center">
    <v-progress-circular
      :size="50"
      indeterminate
      color="red"
    ></v-progress-circular>
  </v-overlay>
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";
import { useGeneralStore } from "@/store/general";

const generalStore = useGeneralStore();
const loading: ComputedRef<boolean> = computed(() => generalStore.loading);
</script>

<style lang="scss" scoped></style>
