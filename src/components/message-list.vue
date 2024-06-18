<script setup>
import { defineProps } from 'vue'

defineProps({
  messages: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="message-list">
    <div class="message-item" v-for="(message, index) in messages" :key="index">
      <div class="message-info">
        <div>
          <div class="message-time">{{ message.time }}</div>
          <div class="message-date">{{ message.date }}</div>
        </div>
      </div>
      <div class="message-content">
        <div class="message-title">
          {{ message.title }}
          <img class="icon attachments" src="/img/attachments.svg" alt="icon" />
        </div>
        <div class="message-company">{{ message.company }}</div>
      </div>
      <div class="message-subtitle">{{ message.subtitle }}</div>
      <div class="message-actions">
        <img class="icon bookmark" src="/img/bookmark-icon.svg" alt="icon" />
        <img class="icon email" src="/img/email-icon.svg" lt="icon" />
        <img class="icon delete" src="/img/delete-icon.svg" lt="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px 20px 0 0;
}

.message-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dfe7f2;
  height: 50px;
}

.message-info {
  min-width: 74px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-time {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

.message-date {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
}

.message-content {
  min-width: 176px;
}

.message-title {
  display: flex;
  justify-content: center;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.015em;
}

.message-company {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #626262;
  letter-spacing: 0.015em;
}

.message-subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #727171;
  letter-spacing: 0.01em;
  margin: 0 auto;
  min-width: 150px;
}

.message-actions {
  display: flex;
  min-width: 117px;
  justify-content: space-between;
  padding: 0 12px;
}

.icon {
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* .icon.attachments {
  background-image: url('img/attachments.svg');
}

.icon.bookmark {
  background-image: url('img/bookmark-icon.svg');
}

.icon.email {
  background-image: url('img/email-icon.svg');
}

.icon.delete {
  background-image: url('img/delete-icon.svg');
} */
</style>
