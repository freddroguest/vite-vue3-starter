<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  import MainSidebar from './components/MainSidebar.vue'

</script>

<template>
  <MainSidebar />
  <RouterView />
</template>

<style scoped>

</style>
