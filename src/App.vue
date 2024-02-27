<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>

<template>

  <body>
    <div class="px-10">
      <Header />
    </div>

    <div class="px-10">
      <RouterView />
    </div>

    <div class="mt-10">
      <Footer />
    </div>
  </body>

</template>

<style scoped>
</style>
