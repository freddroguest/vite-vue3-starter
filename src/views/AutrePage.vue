<script setup lang="ts">
import {onMounted, ref} from "vue";
import { useRouter } from 'vue-router'
import json from '@/pipeline.json';
import axios from "axios";

const dataset = ref(json);
const copyDataset = ref(null)

const activeNode = ref();

const overlayPanel = ref();
const loading = ref(false);

const changeActiveNode = (event: any, node: any) => {
  activeNode.value = node.value;
  overlayPanel.value.toggle(event);
}

const sendDataset = async () => {
  let dataToSend = JSON.parse(JSON.stringify(activeNode.value));
  delete dataToSend['_key'];
  try {
    loading.value = true;
    await axios.put(`/update/${activeNode.value.id}`, dataToSend);
  } catch (e) {
    console.error(e)
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 500)
  }
}

const router = useRouter();

onMounted(() => {
  router.push({ name: 'home',})
  // router.push({ path: '/' })
})


</script>

<template>
coucou
<router-link to="/"> Clique-moi</router-link>  
</template>

<style scoped>
.tree-node {
  width: fit-content;
  height: 2rem;
  padding: 0.5rem;
  border-radius: .5rem;
  background-color: lightcoral;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-red {
  background-color: red;
}
</style>