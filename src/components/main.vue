<script setup>
import Messages from './messages/messages.vue'
import Settings from './settings/settings.vue'
import Supply from './supply/supply.vue'
import Road from './road/road.vue'
import Railway from './railway/railway.vue'
import Archive from './archive/archive.vue'

defineProps(['activeIndex', 'activeBlock', 'isModalOpen', 'closeModal'])
</script>

<template>
  <div class="main pt-7 pr-10 pb-2 pl-5">
    <div class="main__block bg-white w-full h-full rounded-lg overflow-y-scroll">
      <Messages
        :activeBlock="activeBlock"
        :activeIndex="activeIndex"
        :isModalOpen="isModalOpen"
        :closeModal="closeModal"
      />
      <Supply :activeIndex="activeIndex" />
      <Road :activeIndex="activeIndex" />
      <Railway :activeIndex="activeIndex" />
      <Settings :activeIndex="activeIndex" :activeBlock="activeBlock" />
      <Archive :activeIndex="activeIndex" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 94%;

  &__block {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  }

  &__block::-webkit-scrollbar {
    width: 8px;
  }
  &__block::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
  &__block::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
}
</style>
