<template>
  <v-form @submit.prevent="enviar" class="form">
    <div>
      <p class="form__title">CARDHOLDER NAME</p>
      <input
        type="text"
        class="form__camp"
        v-model="name"
        placeholder="e.g Jane Appleseed"
        maxlength="43"
      />
    </div>
    <div>
      <p class="form__title">CARD NUMBER</p>
      <input
        class="form__camp"
        v-model="numCard"
        placeholder="e.g 1234 5678 9123 0000"
        maxlength="16"
      />
    </div>
    <div class="form__boxContent">
      <div>
        <p class="form__boxContent__title">EXP. DATA</p>
        <input
          class="form__boxContent__camp"
          v-model="mm"
          placeholder="MM"
          maxlength="2"
        />
      </div>
      <div>
        <p class="form__boxContent__title">(MM/YY)</p>
        <input
          class="form__boxContent__camp"
          v-model="yy"
          placeholder="YY"
          maxlength="2"
        />
      </div>
      <div>
        <p class="form__boxContent__title">CVC</p>
        <input
          type="text"
          class="form__boxContent__campAltern"
          v-model="cvc"
          placeholder="e.g 123"
          maxlength="3"
        />
      </div>
    </div>
    <v-btn type="submit" class="form__btn">confirm</v-btn>
  </v-form>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import { useUserStore } from "@/store/user";
import { useGeneralStore } from "@/store/general";

const userStore = useUserStore();
const generalStore = useGeneralStore();

const name: Ref<string> = ref("");
const numCard: Ref<string> = ref("");
const mm: Ref<string> = ref("");
const yy: Ref<string> = ref("");
const cvc: Ref<string> = ref("");

function enviar() {
  if (checkCamp()) {
    return generalStore.setMessageSnackbar("preencha todos os campos");
  }

  generalStore.loading = true;
  setTimeout(() => {
    generalStore.loading = false;
    userStore.name = name.value.toUpperCase();
    userStore.numCard = numCard.value;
    userStore.mm = mm.value;
    userStore.yy = yy.value;
    userStore.cvc = cvc.value;
    generalStore.setMessageSnackbar("Cadastro finalizado");
  }, 2000);
}

function checkCamp() {
  if (!name.value || !numCard.value || !mm.value || !yy.value || !cvc.value) {
    return true;
  } else {
    return false;
  }
}
const limitedCaracteres = (item: string) => {
  if (item.length === 2) {
    const res = item;
    return res;
  } else {
    return item;
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 440px;
  height: 400px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &__title {
    font-family: sans-serif;
    font-weight: bold;
    color: #31074e;
    font-size: 14px;
    margin-bottom: 7px;
  }
  &__camp {
    height: 40px;
    width: 100%;
    border: 2px solid rgba(128, 128, 128, 0.192);
    border-radius: 4px;
    padding: 0 4px;
  }
  &__boxContent {
    display: flex;
    justify-content: space-between;
    &__title {
      font-family: sans-serif;
      font-weight: bold;
      color: #31074e;
      font-size: 14px;
      margin-bottom: 7px;
    }
    &__camp {
      height: 40px;
      width: 90px;
      border: 2px solid rgba(128, 128, 128, 0.192);
      border-radius: 4px;
      padding: 0 4px;
    }
    &__campAltern {
      height: 40px;
      width: 180px;
      border: 2px solid rgba(128, 128, 128, 0.192);
      border-radius: 4px;
      padding: 0 4px;
    }
  }
  &__btn {
    background: #31074e;
    color: #fff;
    width: 100%;
    height: 60px !important;
    border-radius: 7px;
  }
}
</style>
