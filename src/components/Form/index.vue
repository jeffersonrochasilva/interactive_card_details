<template>
  <v-form @submit.prevent="enviar" class="form">
    <div>
      <p class="form__title">CARDHOLDER NAME</p>
      <input
        class="form__camp"
        v-model="name"
        placeholder="e.g Jane Appleseed"
      />
    </div>
    <div>
      <p class="form__title">CARD NUMBER</p>
      <input
        class="form__camp"
        v-model="numCard"
        placeholder="e.g 1234 5678 9123 0000"
      />
    </div>
    <div class="form__boxContent">
      <div>
        <p class="form__boxContent__title">EXP. DATA</p>
        <input class="form__boxContent__camp" v-model="mm" placeholder="MM" />
      </div>
      <div>
        <p class="form__boxContent__title">(MM/YY)</p>
        <input class="form__boxContent__camp" v-model="yy" placeholder="YY" />
      </div>
      <div>
        <p class="form__boxContent__title">CVC</p>
        <input
          class="form__boxContent__campAltern"
          v-model="cvc"
          placeholder="e.g 123"
        />
      </div>
    </div>
    <v-btn type="submit" class="form__btn">confirm</v-btn>
  </v-form>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";

const name: Ref<string> = ref("");
const numCard: Ref<string> = ref("");
const mm: Ref<string> = ref("");
const yy: Ref<string> = ref("");
const cvc: Ref<string> = ref("");

function enviar() {
  console.log("enviou");
}
</script>

<style lang="scss" scoped>
.form {
  width: 440px;
  height: 400px;
  padding: 25px;
  display: flex;
  flex-direction: column;
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
