<template>
  <div class="card">
    <div class="card__user">
      <div class="card__user__img"></div>
      <div class="card__user__circle"></div>
    </div>
    <div class="card__num">
      <span class="card__num__title">{{ setString(num) }}</span>
    </div>
    <div class="card__name">
      <p class="card__name__text">{{ name }}</p>
      <p class="card__name__text">{{ mm }}/{{ yy }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef } from "vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const num: ComputedRef<string> = computed(() => userStore.numCard);
const name: ComputedRef<string> = computed(() => userStore.name);
const mm: ComputedRef<string> = computed(() => userStore.mm);
const yy: ComputedRef<string> = computed(() => userStore.yy);

const setString = (item: string) => {
  let res = item.split("");
  res.splice(4, 0, " ");
  res.splice(9, 0, " ");
  res.splice(14, 0, " ");
  console.log("res", res.join(""));
  return res.join("");
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 25px;

  &__user {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    &__img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #fff;
      margin-right: 10px;
    }
    &__circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: transparent;
      border: 1px solid #fff;
    }
  }
  &__num {
    height: 85px;
    display: flex;
    align-items: flex-end;
    &__title {
      color: #ffff;
      font-size: 24px;
      font-family: sans-serif;
    }
  }
  &__name {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__text {
      color: #ffff;
      font-size: 14px;
      font-family: sans-serif;
    }
  }
}
</style>
