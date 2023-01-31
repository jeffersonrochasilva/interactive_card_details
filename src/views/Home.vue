<template>
  <div class="home">
    <div class="home__left"></div>
    <div class="home__rigth">
      <div class="home__rigth__cards">
        <div class="home__rigth__cards__cardColor">
          <CardColor />
        </div>
        <div class="home__rigth__cards__cardWhite">
          <CardWhite />
        </div>
      </div>
      <div class="home__rigth__form">
        <Form />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from "@/components/Form/index.vue";
import CardColor from "@/components/CardColor/index.vue";
import CardWhite from "@/components/CardWhite/index.vue";
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  input::placeholder {
    color: rgba(128, 128, 128, 0.363);
  }
  &__left {
    width: 33.333%;
    background-image: linear-gradient(
      -225deg,
      #2c0e1e 0%,
      #562b7c 52%,
      #130e2c 70%,
      #2c0e1e 100%
    );
  }
  &__rigth {
    width: 66.666%;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    &__cards {
      width: 50%;
      position: fixed;
      &__cardColor {
        width: 440px;
        height: 220px;
        border-radius: 5px;
        background-image: linear-gradient(
          -225deg,
          #6713d2 0%,
          #6713d2 40%,
          #cc208e 80%,
          #6713d2 100%
        );

        position: relative;
        right: 300px;
      }
      &__cardWhite {
        width: 440px;
        height: 220px;
        border-radius: 5px;
        background: #dcdcdc;
        margin-top: 40px;
        position: relative;
        right: 150px;
      }
    }
    &__form {
      width: 50%;
      position: relative;
      left: 400px;
    }
  }
}
</style>
