<script setup lang="ts"></script>

<template>
  <header class="header relative z-10">
    <div class="logo" @click="$router.push('/logistics')">
      <img src="@/assets/img/arrow_back_gray.svg" alt="arrow" class="logo__arrow_back w-14" />
      <h2 class="logo__name">ST <span class="logo__name__umpersand">&</span> L</h2>
    </div>
    <div class="menu">
      <p class="menu__title">Личный кабинет</p>
      <img src="@/assets/img/arrow_down.svg" alt="arrow" class="menu__arrow_down" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7%;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;

  &__arrow_back {
    height: 60px;
    padding: 16px 20px;
    border-right: 0.75px solid #c4c4c4;
    cursor: pointer;
  }

  &__name {
    margin-left: 30px;
    font-size: 36px;
    line-height: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    cursor: pointer;
    color: #727171;

    &__umpersand {
      color: #f69912;
    }
  }
}

.menu {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 40px;
  cursor: pointer;

  &__title {
    color: #626262;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;

    &__arrow_down {
      width: 24px;
      height: 24px;
      padding: 8px 6px;
    }
  }
}
</style>
