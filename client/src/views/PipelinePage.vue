<script setup lang="ts">
import {onMounted, ref} from "vue";

import json from '@/pipeline-small.json';
import PipeLine from '../components/PipeLine.vue'


// import axios from "axios";
// const loading = ref(false);
// const sendDataset = async () => {
//   let dataToSend = JSON.parse(JSON.stringify(activeNode.value));
//   delete dataToSend['_key'];
//   try {
//     loading.value = true;
//     await axios.put(`/update/${activeNode.value.id}`, dataToSend);
//   } catch (e) {
//     console.error(e)
//   } finally {
//     setTimeout(() => {
//       loading.value = false;
//     }, 500)
//   }
// }

</script>

<template>
  <div class="pipeline_container">
    <PipeLine :json_pipeline="json"/>
  </div>
</template>

<style scoped>
  .pipeline_container {
    width: 100vw;
    height: 100vw;
    padding: 30px;
    box-sizing: border-box;
  }

</style>