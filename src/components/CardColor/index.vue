<template>
  <div class="card">
    <div class="card__user">
      <div class="card__user__img"></div>
      <div class="card__user__circle"></div>
    </div>
    <div class="card__num">
      <span class="card__num__title">0000 0000 0000 0000</span>
    </div>
    <div class="card__name">
      <p class="card__name__text">JANE APPLESEED</p>
      <p class="card__name__text">00/00</p>
    </div>
  </div>
</template>

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
      border: 1px solid gray;
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
