<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<template>
  <nav class="nav w-[185px] bg-[#727171]">
    <div
      class="nav__item w-[185px] h-14 flex justify-start items-center pl-3 text-white hover:scale-105 cursor-pointer transition-all"
    >
      Уведомления
    </div>
    <div
      class="nav__item w-[185px] h-14 flex justify-start items-center pl-3 text-white hover:scale-105 cursor-pointer transition-all"
    >
    Цепочка поставок
    </div>
    <div
      class="nav__item w-[185px] h-14 flex justify-start items-center pl-3 text-white hover:scale-105 cursor-pointer transition-all"
    >
    Автомобильный транспорт
    </div>
    <div
      class="nav__item w-[185px] h-14 flex justify-start items-center pl-3 text-white hover:scale-105 cursor-pointer transition-all"
    >
    Железнодорожный транспорт
    </div>
    <div
      class="nav__item w-[185px] h-14 flex justify-start items-center pl-3 text-white hover:scale-105 cursor-pointer transition-all"
    >
    ???
    </div>
    <div
      class="nav__item w-[185px] h-14 flex justify-start items-center pl-3 text-white hover:scale-105 cursor-pointer transition-all"
    >
    Настройки
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  height: calc(100vh - 60px);

  &__item {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
