<template>
  <div class="home">
    <div class="home__left"></div>
    <div class="home__rigth">
      <div class="home__rigth__cards">
        <div class="home__rigth__cards__cardColor"></div>
        <div class="home__rigth__cards__cardWhite"></div>
      </div>
      <div class="home__rigth__form">
        <Form />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from "@/components/Form/index.vue";
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  input::placeholder {
    color: rgba(128, 128, 128, 0.363);
  }
  &__left {
  }
  &__rigth {
    &__form {
    }
  }
}
</style>
