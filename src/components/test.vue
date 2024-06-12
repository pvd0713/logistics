<template>
    <div class="notification-bell">
      <svg class="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2C11.4 2 11 2.4 11 3V4C8.2 4.5 6 7 6 10V15L4 17V18H20V17L18 15V10C18 7 15.8 4.5 13 4V3C13 2.4 12.6 2 12 2zM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22z"/>
      </svg>
      <span v-if="unreadCount > 0" class="notification-count">{{ unreadCount }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  

  const unreadCount = ref(5);
  </script>
  
  <style scoped>
  .notification-bell {
    position: relative;
    display: inline-block;
  }
  
  .bell-icon {
    width: 24px;
    height: 24px;
  }
  
  .notification-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: rgba(255,255,255,0.7);
    color: black;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }
  </style>
  