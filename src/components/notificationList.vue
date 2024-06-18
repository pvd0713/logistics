<script setup>
import { ref, defineProps, defineEmits } from 'vue'

defineProps({
  selectedCategory: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selectItem'])

const notifications = ref([
  { category: 'Все', count: 25 },
  { category: 'Сообщения', count: 10 },
  { category: 'Запрос на сотрудничество', count: 5 },
  { category: 'Проект договора', count: 2 },
  { category: 'Заказ', count: 2 },
  { category: 'Приложения', count: 1 },
  { category: 'Заявка на отгрузку', count: 1 }
])

const selectItem = (category) => {
  emit('selectItem', category)
}

// console.log(selectedCategory)
</script>

<template>
  <div class="notification-list">
    <div
      class="notification-item"
      v-for="(notification, index) in notifications"
      :key="index"
      :class="{ active: notification.category === selectedCategory }"
      @click="selectItem(notification.category)"
    >
      <span>{{ notification.category }}</span>
      <span class="count">{{ notification.count }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification-list {
  min-width: 240px;
  margin: 20px;
}

.notification-item {
  height: 32px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border: 1px solid #eee;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 2px;
  align-items: center;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
  }
}

.notification-item.active {
  background-color: orange;
}

.count {
  background-color: #FFEFD6;
  border-radius: 50%;
  padding: 4px;
  height: 24px;
  width: 24px;
  text-align: center;
}
</style>
