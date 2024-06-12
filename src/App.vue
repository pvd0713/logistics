<script setup>
import Header from './components/header.vue'
import Navigation from './components/navigation.vue'
import Main from './components/main.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <div class="flex">
      <Navigation />
      <div class="lex-col w-full bg-[#F8F8F8]">
        <Main />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
}
</style>
