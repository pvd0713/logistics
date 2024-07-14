<script setup>
const props = defineProps(['activeIndex'])
</script>
<template>
  <h1 v-if="props.activeIndex === 2">Автомобильный</h1>
</template>