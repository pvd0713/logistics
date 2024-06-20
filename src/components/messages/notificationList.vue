<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  selectedCategory: {
    type: String,
    required: true
  },
  messages: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['selectItem'])

const notifications = ref([
  { category: 'Все' },
  {
    category: 'Сообщения',
    count: props.messages.filter((item) => item.category === 'Сообщения').length
  },
  {
    category: 'Запрос на сотрудничество',
    count: props.messages.filter((item) => item.category === 'Запрос на сотрудничество').length
  },
  {
    category: 'Проект договора',
    count: props.messages.filter((item) => item.category === 'Проект договора').length
  },
  { category: 'Заказ', count: props.messages.filter((item) => item.category === 'Заказ').length },
  {
    category: 'Приложения',
    count: props.messages.filter((item) => item.category === 'Приложения').length
  },
  {
    category: 'Заявка на отгрузку',
    count: props.messages.filter((item) => item.category === 'Заявка на отгрузку').length
  }
])

const selectItem = (category) => {
  emit('selectItem', category)
}
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
      <span class="count">{{
        index === 0
          ? props.messages.length
          : props.messages.filter((item) => item.category === notification.category).length
      }}</span>
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
  background-color: #ffefd6;
  border-radius: 50%;
  padding: 4px;
  height: 24px;
  width: 24px;
  text-align: center;
}
</style>
