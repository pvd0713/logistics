<script setup>
import { reactive, defineEmits } from 'vue'

const emits = defineEmits(['close', 'submit'])

const form = reactive({
  to: '',
  subject: '',
  body: ''
})

const closeModal = () => {
  emits('close')
}

const clearForm = () => {
  form.to = ''
  form.subject = ''
  form.body = ''
}

const handleSubmit = () => {
  emits('submit', form)
  closeModal()
}
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2 class="modal-title">Новое сообщение</h2>
      <button class="close-button" @click="closeModal">&times;</button>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="input-block grid grid-cols-2 gap-4 m-5">
          <div class="form-group">
            <p for="to">Кому</p>
            <div class="input-container">
              <img class="input-icon" src="/img/user.svg" alt="icon" />
              <input id="to" v-model="form.to" type="text" class="input" />
            </div>
          </div>
          <div class="form-group">
            <p for="subject">Тема</p>
            <div class="input-container">
              <img class="input-icon" src="/img/pencil.svg" alt="icon" />
              <input id="subject" v-model="form.subject" type="text" class="input" />
            </div>
          </div>
        </div>

        <div class="textarea-block">
          <h2 class="textarea-title">
            <img src="/img/skrepka.svg" alt="icon" />
            <img src="/img/flag.svg" alt="icon" />
          </h2>
          <textarea class="textarea" v-model="form.body" placeholder="Введите текст"> </textarea>
        </div>
        <div class="form-actions">
          <button class="submit" type="submit">Отправить</button>
          <button class="button" type="button" @click="clearForm">Очистить форму</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 1050px;
  max-width: 90%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}

.modal-title {
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  background-color: #e1e3e3;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 4px 4px 0 0;
}

.close-button {
  position: absolute;
  top: -4px;
  right: 26px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
}

.form {
  height: 100%;
}

.input {
  width: 100%;
  height: 36px;
  padding-left: 30px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  //   margin-bottom: 15px;
  height: 100%;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }
}

.textarea-block {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px 20px 18px;
}

.textarea-title {
  height: 30px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border: 1px solid #cbd5e1;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 14px;
  padding-right: 10px;
}

.textarea {
  min-height: 200px;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
}

.input-container {
  position: relative;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #ccc;
}

.form-actions {
  height: 56px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 20px;
}

.submit {
  width: 95px;
  height: 36px;
  background: #f69912;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
}

.button {
  width: 133px;
  height: 36px;
  background: #8e9192;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
}
</style>
