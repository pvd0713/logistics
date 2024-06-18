<script setup>
import { ref, computed } from 'vue'
import NotificationList from './notificationList.vue'
import MessageList from './message-list.vue'
import Pagination from './pagination1.vue'

const messages = ref([
  {
    time: '20:55',
    date: '17.10',
    title: 'Заявка на отгрузку',
    company: 'ООО Главный',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  },
  {
    time: '20:55',
    date: '17.10',
    title: 'Заявка на отгрузку',
    company: 'ООО Главный',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  }
])

const selectedCategory = ref('Все')
const currentPage = ref(1)
const itemsPerPage = 10

const filteredMessages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  if (selectedCategory.value === 'Все') {
    return messages.value.slice(start, end)
  }

  const filtered = messages.value.filter((message) => message.category === selectedCategory.value)

  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  if (selectedCategory.value === 'Все') {
    return Math.ceil(messages.value.length / itemsPerPage)
  }

  const filteredCount = messages.value.filter(
    (message) => message.category === selectedCategory.value
  ).length

  return Math.ceil(filteredCount / itemsPerPage)
})

const handleSelectItem = (category) => {
  selectedCategory.value = category
  currentPage.value = 1 // Сбрасываем текущую страницу при смене категории
}

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>

<template>
  <div class="messages">
    <div class="container">
      <NotificationList @selectItem="handleSelectItem" :selectedCategory="selectedCategory" />
      <MessageList :messages="filteredMessages" />
    </div>
    <Pagination v-if="totalPages > 0" @pageChange="handlePageChange" :totalPages="totalPages" />
  </div>
</template>

<style scoped>
.messages {
  height: 100%;
  padding-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  display: flex;
}
</style>
