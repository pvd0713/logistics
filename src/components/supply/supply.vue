<script setup>
const props = defineProps(['activeIndex'])
</script>
<template>
  <h1 v-if="props.activeIndex === 1">Цепочка поставок</h1>
</template>