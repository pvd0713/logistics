<script setup>
const props = defineProps(['activeIndex'])
import { ref } from 'vue'
const placeholder = 'Телефон/Email/Telegram'
const options = [
  { value: 'option1', text: 'Телефон' },
  { value: 'option2', text: 'Email' },
  { value: 'option3', text: 'Telegram' }
]
const selected = ref('')
// const handleSelectChange = () => {

// }
</script>
<template>
  <div v-if="props.activeIndex === 4" class="py-5 px-7 min-w-[800px]">
    <div class="w-full mb-6">
      <h2 class="title mb-4">Общее</h2>
      <div class="flex justify-between mb-4 gap-4">
        <div class="w-1/4">
          <p class="titleInput mb-1 whitespace-nowrap">Права пользования</p>
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
        <div class="w-1/4">
          <p class="titleInput mb-1 whitespace-nowrap">ФИО</p>
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
        <div class="w-1/4">
          <p class="titleInput mb-1 whitespace-nowrap">Должность</p>
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
        <div class="w-1/4">
          <p class="titleInput mb-1 whitespace-nowrap">Структурное подразделение</p>
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
      </div>
      <p class="titleChange cursor-pointer">Изменить</p>
    </div>
    <div class="w-full mb-6">
      <h2 class="title mb-4">Авторизация</h2>
      <div class="flex mb-4 gap-4">
        <div class="w-1/4">
          <p class="titleInput mb-1 whitespace-nowrap">Логин</p>
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
        <div class="w-1/4">
          <p class="titleInput mb-1 whitespace-nowrap">Пароль</p>
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[172px]">Вход в систему</p>
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
        <div class="flex items-center gap-4">
          <p class="img-action">&ndash;</p>
          <p class="img-action">+</p>
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[172px]">Совершение операций</p>
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
        </div>
        <div class="flex items-center gap-4">
          <p class="img-action">&ndash;</p>
          <p class="img-action">+</p>
        </div>
      </div>
      <p class="titleChange cursor-pointer">Изменить</p>
    </div>
    <div class="w-full mb-6">
      <h2 class="title mb-4">Полномочия и ЭЦП</h2>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="file" />
        </div>
        <div class="flex items-center gap-4">
          <p class="img-action">&ndash;</p>
          <p class="img-action">+</p>
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="text" />
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-full" type="file" />
        </div>
        <div class="flex items-center gap-4">
          <p class="img-action">&ndash;</p>
          <p class="img-action">+</p>
        </div>
      </div>
      <p class="titleChange cursor-pointer">Изменить</p>
    </div>
    <div class="w-full mb-6">
      <h2 class="title mb-4">Средства связи</h2>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[100px]">Телефон</p>
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-[300px]" type="text" />
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[100px]">Email</p>
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-[300px]" type="text" />
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[100px]">Telegram</p>
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] py-1 px-2 w-[300px]" type="text" />
        </div>
      </div>
      <p class="titleChange cursor-pointer">Изменить</p>
    </div>
    <div class="w-full mb-6">
      <h2 class="title mb-4">Средства связи</h2>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[350px]">Приоритетное средство связи</p>
        <div class="flex gap-4 grow">
          <select
            class="border rounded border-[#C4C4C4] py-1 px-2 w-[300px]"
            v-model="selected"
            @change="handleSelectChange"
            :class="{ placeholder: !selected }"
          >
            <option value="" disabled hidden>{{ placeholder }}</option>

            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[350px]">Информирование о личных сообщениях</p>
        <div class="flex justify-start gap-4 grow">
          <input class="border rounded border-[#C4C4C4] ml-4" type="checkbox" />
        </div>
      </div>
      <div class="flex items-center gap-4 w-full justify-between mb-4">
        <p class="whitespace-nowrap min-w-[350px]">Информирование о технических уведовлениях</p>
        <div class="flex gap-4 grow">
          <input class="border rounded border-[#C4C4C4] ml-4" type="checkbox" />
        </div>
      </div>
      <p class="titleChange cursor-pointer">Изменить</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.titleInput {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #626262;
}

.titleChange {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #626262;
  text-align: right;
  text-decoration: underline;
}

.img-action {
  color: #394a58;
  font-size: 36px;
  line-height: 0px;
  margin-top: -10px;
}

select {
  color: black;
}

select.placeholder {
  color: #999;
}

option {
  color: black;
}
</style>
