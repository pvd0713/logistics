<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['pageChange'])
const currentPage = ref(1)

const goToPage = (page) => {
  currentPage.value = page
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < props.totalPages) {
    currentPage.value++
  }
}

watch(currentPage, (newPage) => {
  emit('pageChange', newPage)
})
</script>

<template>
  <div class="pagination">
    <button class="icon rounded-l" @click="goToPage(1)" :disabled="currentPage === 1">«</button>
    <button class="icon" @click="prevPage" :disabled="currentPage === 1">‹</button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
    <button class="icon" @click="nextPage" :disabled="currentPage === totalPages">›</button>
    <button
      class="icon rounded-r"
      @click="goToPage(totalPages)"
      :disabled="currentPage === totalPages"
    >
      »
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: right;
  border-bottom: 1px solid #dfe7f2;
  margin-left: 280px;
  margin-right: 20px;
  padding: 5px;
  height: 50px;
}

button {
  width: 48px;
  height: 40px;
  border: 1px solid #e1e3e3;
  background-color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: #727171;
  display: flex;
  justify-content: center;
  align-items: center;
}

button.active {
  background-color: orange;
  color: #64748b;
  font-size: 16px;
  line-height: 24px;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  border: 1px solid #01080841;
}

.icon {
  font-size: 26px;
}
</style>
