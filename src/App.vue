<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  import CustomParticules from './components/CustomParticules.vue'
  import MainSidebar from './components/MainSidebar.vue'

</script>

<template>
  <Toast />
  <MainSidebar />
  <RouterView />
  <CustomParticules />
</template>

<style scoped>

</style>
