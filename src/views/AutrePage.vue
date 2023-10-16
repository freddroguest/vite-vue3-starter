<script setup lang="ts">
import {onMounted} from "vue";
import { useRouter } from 'vue-router'

const router = useRouter();

onMounted(() => {
  router.push({ name: 'home',})
  // router.push({ path: '/' })
})


</script>

<template>
  <router-link to="/"> Clique-moi</router-link>  
</template>

<style scoped>

</style>