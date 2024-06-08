<script lang="ts" setup></script>

<template>
  <div class="footer h-10 w-full border border-[#E1E3E3] bg-white flex justify-between px-8">
    <div class="about">
      <p class="about__title">Информация о нас</p>
      <div class="about__icons">
        <img src="/img/telegram.svg" alt="icon" />
        <img src="/img/vk.svg" alt="icon" />
        <img src="/img/odnoklass.svg" alt="icon" />
        <img src="/img/r.svg" alt="icon" />
      </div>
    </div>
    <div class="copyright flex justify-center items-center">ST&L 2023</div>
  </div>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  &__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 11px;
    line-height: 13px;
    color: #8e9192;
  }
  &__icons {
    display: flex;
    gap: 10px;
  }
}
.copyright {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 11px;
  line-height: 24px;
  color: #8e9192;
}
</style>
