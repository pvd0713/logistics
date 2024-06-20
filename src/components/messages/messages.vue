<script setup>
import { ref, computed } from 'vue'
import NotificationList from './notificationList.vue'
import MessageList from './message-list.vue'
import Pagination from './pagination.vue'
import CreateMessage from './create-message.vue'

const props = defineProps(['activeIndex', 'activeBlock', 'isModalOpen', 'closeModal'])

const handleFormSubmit = (form) => {
  console.log('Form submitted:', form)
  // handle form submission (e.g., send data to an API)
}

if (props.activeIndex === 0 && props.activeBlock === 0) {
  ;('openModal')
}

const messages = ref([
  {
    id: 1,
    time: '20:55',
    date: '17.10',
    title: 'Заявка на отгрузку',
    company: 'ООО Главный',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 2,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    id: 3,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    id: 4,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    id: 5,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  },
  {
    id: 6,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 7,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 8,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 9,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 10,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 11,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 12,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 13,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    id: 14,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    id: 15,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    id: 16,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  },
  {
    id: 17,
    time: '20:55',
    date: '17.10',
    title: 'Заявка на отгрузку',
    company: 'ООО Главный',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 18,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    id: 19,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    id: 20,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    id: 21,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Приложения',
    subtitle: 'приложения №123456',
    category: 'Приложения'
  },
  {
    id: 22,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 23,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 24,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 25,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 26,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 27,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 28,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заявка на отгрузку',
    subtitle: 'заявка на отгрузку №123456',
    category: 'Заявка на отгрузку'
  },
  {
    id: 29,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Запрос на сотрудничество',
    subtitle: 'запрос на сотрудничество №123456',
    category: 'Запрос на сотрудничество'
  },
  {
    id: 30,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Проект договора',
    subtitle: 'проект договора №123456',
    category: 'Проект договора'
  },
  {
    id: 31,
    time: '20:55',
    date: '17.10',
    company: 'ООО Главный',
    title: 'Заказ',
    subtitle: 'заказ №123456',
    category: 'Заказ'
  },
  {
    id: 32,
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

const deleteMessage = (id) => {
  messages.value = messages.value.filter((message) => message.id !== id)
}
</script>

<template>
  <div class="messages" v-if="props.activeIndex === 0 && props.activeBlock === 1">
    <div class="container">
      <NotificationList
        @selectItem="handleSelectItem"
        :selectedCategory="selectedCategory"
        :messages="messages"
      />
      <MessageList :messages="filteredMessages" @deleteMessage="deleteMessage" />
    </div>
    <Pagination v-if="totalPages > 0" @pageChange="handlePageChange" :totalPages="totalPages" />
  </div>

  <CreateMessage
    v-if="isModalOpen"
    :isOpen="isModalOpen"
    @close="closeModal"
    @submit="handleFormSubmit"
  />
</template>

<style scoped>
.messages {
  height: 100%;
  padding-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
}

.container {
  display: flex;
}
</style>
