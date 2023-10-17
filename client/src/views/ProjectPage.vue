<script setup lang="ts">
import {onMounted, ref } from "vue";
import {useRoute, onBeforeRouteUpdate} from "vue-router";

import PipeLine from '../components/PipeLine.vue'
import Project from '../types/Project'

const project:Ref<Project> = ref()
const route = useRoute();

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    loadProject(to.params.id)
  }
})

onMounted(() => {
  loadProject(route.params.id)
})

const loadProject = async (id:number) => {
  project.value = await Project.find(id)
}

const save = () => {
  project.value.save()
}


</script>

<template>
  <div v-if="project" class="pipeline_container">
    <PipeLine :json_pipeline="project.pipeline" :key="project.id" @save_change="save()"/>
  </div>
</template>

<style scoped>
  .pipeline_container {
    width: 100vw;
    height: 100vh;
    padding: 30px;
    box-sizing: border-box;
  }

</style>