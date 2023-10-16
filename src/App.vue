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
  <img id="watermark_iias" class="fixed" src="/images/IIAS_MINIATURE.png" />
  <CustomParticules />
</template>

<style scoped>
#watermark_iias {
  height: 50px;
  right: 20px;
  bottom: 20px;
}
</style>
