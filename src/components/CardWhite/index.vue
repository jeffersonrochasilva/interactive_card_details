<template>
  <div class="card">
    <div class="card__leitor"></div>
    <div class="card__cod">
      <p class="card__cod__num">000</p>
    </div>
    <div class="card__description">
      <div class="card__description__line"></div>
      <div class="card__description__line"></div>
      <div class="card__description__line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 25px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &__leitor {
    width: 100%;
    height: 50px;
    background: #1c1c1c;
  }
  &__cod {
    background: rgba(128, 128, 128, 0.363);
    width: 90%;
    border-radius: 4px;
    margin-top: 25px;
    margin-bottom: 18px;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    &__num {
      font-family: sans-serif;
      font-size: 15px;
      color: #fff;
    }
  }
  &__description {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__line {
      width: 40%;
      border: 3px solid gray;
      border-radius: 3px;
      margin-top: 7px;
    }
  }
}
</style>
