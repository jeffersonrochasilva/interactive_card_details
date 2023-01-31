<template>
  <router-view />
  <v-snackbar v-model="generalStore.flagSnackbar">
    {{ generalStore.messageSnackkbar }}
  </v-snackbar>
  <Loading />
</template>

<script lang="ts" setup>
import { useGeneralStore } from "./store/general";
import Loading from "@/components/Loading/index.vue";
const generalStore = useGeneralStore();
//
</script>
