<script setup>
import Header from './header.vue'
import Navigation from './navigation.vue'
import Main from './main.vue'
import Footer from './footer.vue'
import { ref } from 'vue'

const props = defineProps(['index', 'block'])

const activeIndex = ref(props.index)
const activeBlock = ref(props.block)

const selectMenuItem = (index) => {
  activeIndex.value = index
  activeBlock.value = null
}

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const selectBlock = (index) => {
  activeBlock.value = index
  activeIndex.value === 0 && activeBlock.value === 0 && openModal()
}
</script>

<template>
  <div class="app">
    <Header />
    <div class="flex h-[93%]">
      <Navigation
        :activeIndex="activeIndex"
        :activeBlock="activeBlock"
        :selectMenuItem="selectMenuItem"
        :selectBlock="selectBlock"
        :openModal="openModal"
      />
      <div class="flex-col w-full h-full bg-[#F8F8F8]">
        <Main
          :activeIndex="activeIndex"
          :activeBlock="activeBlock"
          :isModalOpen="isModalOpen"
          :closeModal="closeModal"
        />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 97.7vh;
}
</style>
