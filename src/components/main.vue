<script setup>
import Messages from './messages/messages.vue'
// defineProps({
//   activeIndex: { type: Number, required: true },
//   activeBlock: { type: Number, required: true },
//   isModalOpen: { type: Boolean, required: true },
//   closeModal: { type: Function }
// })

defineProps(['activeIndex', 'activeBlock', 'isModalOpen', 'closeModal'])
</script>

<template>
  <div class="main w-full pt-7 pr-10 pb-2 pl-5">
    <div class="main__block bg-white w-full h-full rounded-lg">
      <Messages
        :activeBlock="activeBlock"
        :activeIndex="activeIndex"
        :isModalOpen="isModalOpen"
        :closeModal="closeModal"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 100px);

  &__block {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>
