<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import { useRouter } from 'vue-router'
  import CardSelector from '../components/CardSelector.vue'
  import PipelineType from '../types/PipelineType'
  import Project from '../types/Project'
  import ApplicationName from "../components/ApplicationName.vue";
  
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const router = useRouter();

  const onUpload = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  };

  const onSelect = () => {
    fileIsSelected.value = true
    toast.add({ severity: 'success', summary: 'File Selected !', detail: 'Tell us more about your project.', life: 3000 });
  };

  const createProject = async () => {
    project.value = await project.value.save()
    project.show()
  }

  const fileIsSelected:ref<boolean> = ref(false);

  const selectProcessing = (id:number) => {
    project.value.pipeline_type_id = id
  }

  const processings = ref([])
  
  onMounted(async () => {
    processings.value = await PipelineType.getAll()
  })

  const project:ref<Project> = ref(new Project())
</script>

<template>
  <div class="w-[700px] ml-auto mr-auto new-project-form" :class="{'with-selected-file': fileIsSelected}">
    <ApplicationName class="!mb-20" />
    <FileUpload class="w-fit !m-auto !block" mode="basic" name="demo[]" url="./upload.php" :maxFileSize="1000000" @upload="onUpload"  @select="onSelect" chooseLabel="Choose a CSV file"/>
    <div v-if="fileIsSelected">
      <div class="text-3xl  mt-12 mb-5">Choose the type of processing</div>
      <div class="flex place-content-around">
        <div v-for="(processing, index) in processings" :key="index" class="w-[30%]">
          <CardSelector :item="processing" :active="project.pipeline_type_id === processing.id" @click="selectProcessing(processing.id)" />
        </div>
      </div>
      <div>
        <div class="text-3xl mt-12 mb-5">Tell us more about your project</div>
        <span class="p-float-label my-10">
            <InputText id="project_name" v-model="project.title" class="w-full"/>
            <label for="username">Project name</label>
        </span>
        <span class="p-float-label my-10">
          <Textarea v-model="project.description" rows="5" class="w-full" />
          <label>Description</label>
        </span>
      </div>
      <Button label="Upload Data & Predict !" icon="pi pi-check" class="!block w-fit !ml-auto" @click="createProject()" />
    </div>
  </div>
  </template>

<style scoped>
.new-project-form {
  padding-top: calc(50vh - 170px);
  transition: .5s;
}

.new-project-form.with-selected-file {
  padding-top: 20vh;
  padding-bottom: 40vh;
}

</style>