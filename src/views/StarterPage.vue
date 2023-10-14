<script setup lang="ts">
import {onMounted, ref} from "vue";
import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";
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

onMounted(() => {
  copyDataset.value = JSON.parse(JSON.stringify(dataset.value))
})

</script>

<template>
  <vue-tree
      :dataset="dataset" direction="horizontal"
      :collapseEnabled="false"
      :config="{
        nodeWidth: 100,
        nodeHeight: 50,
        levelHeight: 300,
      }"
      class="min-h-screen"
  >
    <template v-slot:node="{ node, collapsed }">
        <span
            class="tree-node shadow-2xl"
            :style="{ border: collapsed ? '2px solid grey' : '' }"
            :class="{ 'bg-red': activeNode === node.value }"
            @click="changeActiveNode($event, node)"
        >
          {{ node.value.name }}
        </span>

    </template>
  </vue-tree>
  <OverlayPanel ref="overlayPanel">
    <div class="flex flex-col gap-2">
      <div v-for="(key, index) in Object.keys(activeNode).filter(e => e !== '_key')" :key="index">
        <div v-if="key === 'configuration'">
          <span>{{ key }}</span>
          <div
              v-for="(configurationKey, configurationIndex) in Object.keys(activeNode['configuration']).filter(e => e !== '_key')"
              :key="index"
              class="flex flex-col"
          >
            <span>{{ configurationKey }}</span>
            <div v-if="(typeof activeNode['configuration'][configurationKey] === 'object')">
              <div
                  v-for="(objectConfigurationKey, objectConfigurationIndex) in Object.keys(activeNode['configuration'][configurationKey]).filter(e => e === 'value')"
                  :key="index"
                  class="flex flex-col"
              >
                <InputText v-model="activeNode['configuration'][configurationKey].value" />
              </div>
            </div>
            <InputText
                v-else
                v-model="activeNode['configuration'][configurationKey]"
            />
          </div>

        </div>
        <div v-else>
          {{ key }}
          :
          {{ activeNode[key] }}
        </div>
      </div>
      <Button label="Enregistrer" class="mt-2 w-full" :loading="loading" @click="sendDataset()" />
    </div>
  </OverlayPanel>
</template>

<style scoped>
.tree-node {
  width: fit-content;
  height: 2rem;
  padding: 0.5rem;
  border-radius: .5rem;
  background-color: lightcoral;
  text-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-red {
  background-color: red;
}
</style>