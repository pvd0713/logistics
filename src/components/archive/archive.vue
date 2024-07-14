<script setup>
const props = defineProps(['activeIndex'])
</script>
<template>
  <h1 v-if="props.activeIndex === 5">Архив</h1>
</template>