<script setup lang="ts">
import {onMounted, ref} from "vue";
import { VueFlow, MarkerType, Position  } from '@vue-flow/core'

import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import json from '@/pipeline.json';
// import axios from "axios";

const activeNode = ref();
const overlayPanel = ref();

const changeActiveNode = (event: any, node: any) => {
  activeNode.value = node;
  overlayPanel.value.toggle(event);
}

// const loading = ref(false);

// TODO -> Move this in utils ?
// Recursive function
// Parse JSON from Python Package to Array of elements for VueFlow
//
// pipeline = JSON from Python package
// 
// Others parameters are useless for the first recursion
// parentId = id of the Node of the previous recrusion. Use for Edge
// depth = Number of parent from the root. Use for x position
// level = Number of sibling of the same depth. Use for y position
//
const parsePipeline = (pipeline:any, parentId:any=undefined, depth:number=0, level:number=0) => {
  let elements = []
  let totalNumberOfChildren:number = 0;

  // Node
  elements.push({
    id: String(pipeline.value.id),
    label: pipeline.value.name, 
    position: { x: 250*depth, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    events: {
      click: (elem) => {
        changeActiveNode(elem.event, elem.node)
      }
    },
    totalNumberOfChildren: 0
  });

  // Edge
  if(parentId) {
    elements.push({
      id: parentId + "_" + pipeline.value.id,
      source: String(parentId),
      target: String(pipeline.value.id),
      markerEnd: MarkerType.Arrow
    });
  }

  // Children
  for(const child of pipeline.children) {
    let childElements:Array<any> = parsePipeline(child, pipeline.value.id, depth+1, (totalNumberOfChildren+level));
    totalNumberOfChildren += childElements[0].totalNumberOfChildren;

    elements = elements.concat(childElements);
  }
  
  elements[0].totalNumberOfChildren = Math.max(totalNumberOfChildren, 1);
  elements[0].position.y = ((elements[0].totalNumberOfChildren/2+0.5)+level)*100+100;

  return elements;
}



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


const elements = ref(parsePipeline(json))

</script>

<template>
  <div class="vueflow_container">
    <VueFlow v-model="elements" />
  </div>
  <!-- <vue-tree
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
  </vue-tree> -->
  <OverlayPanel ref="overlayPanel">
    <div class="flex flex-col gap-2">
      <p>TODO</p>
      <!-- <div v-for="(key, index) in Object.keys(activeNode).filter(e => e !== '_key')" :key="index">
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
      </div> -->
      <Button label="Enregistrer" class="mt-2 w-full" :loading="loading" @click="sendDataset()" />
    </div>
  </OverlayPanel>
</template>

<style scoped>
.vueflow_container
  {
  width: 100vw;
  height: 100vw;
  padding: 30px;
  box-sizing: border-box;
  }

/* .tree-node {
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
} */
</style>