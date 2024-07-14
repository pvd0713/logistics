<script setup>
const props = defineProps(['activeIndex'])
</script>
<template>
  <h1 v-if="props.activeIndex === 3">Железнодорожный</h1>
</template>