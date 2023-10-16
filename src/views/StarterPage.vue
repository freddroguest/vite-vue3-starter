<script setup lang="ts">
import {onMounted, ref} from "vue";
import { useRouter } from 'vue-router'
import json from '@/pipeline.json';
import axios from "axios";

import { useToast } from "primevue/usetoast";

const toast = useToast();
const router = useRouter();

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const onSelect = () => {
  fileIsSelected.value = true
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Selected !', life: 3000 });
};

const selectProcessing = (index:number) => {
  selectedProcessing.value = index;
};

const createProject = () => {
  router.push({'name': 'pipeline'})
}

const fileIsSelected = ref(false);
const selectedProcessing = ref(-1);
const project = ref({
  name: "",
  description: ""
})

const processings = ref([
  {
  name: "Classification",
  description: "AI classification involves employing advanced algorithms to analyze data and categorize elements based on specific characteristics.",
  image: "/images/usercard.png"
  },
  {
  name: "Survival analysis",
  description: "Survival models in AI utilize advanced algorithms to assess and predict the time until a specific event occurs, such as a patient's survival after a medical diagnosis. These models play a crucial role in medical research and personalized treatment strategies.",
  image: "/images/usercard.png"
  },
  {
  name: "Time Series Forecasting",
  description: "Time series forecasting in AI involves the use of algorithms to analyze historical data and make predictions about future values based on patterns and trends within the time series data.",
  image: "/images/usercard.png"
  },
])

</script>

<template>
  <div class="w-[700px] ml-auto mr-auto new-project-form" :class="{'with-selected-file': fileIsSelected}">
    <FileUpload class="w-fit !m-auto !block" mode="basic" name="demo[]" url="./upload.php" :maxFileSize="1000000" @upload="onUpload"  @select="onSelect" chooseLabel="Choose a CSV file"/>
    <div v-if="fileIsSelected">
      <div class="text-3xl  mt-12 mb-5">Choose the type of processing</div>
      <div class="flex place-content-around">
        <div v-for="(processing, index) in processings" :key="index" class="w-[30%]">
          <Card class="cursor-pointer" :class="{'selected-card': index === selectedProcessing}" @click="selectProcessing(index)">
            <template #header>
                <img alt="user header" :src="processing.image" />
            </template>
            <template #title> 
              <div class="h-16">
                {{ processing.name }}
              </div>
            </template>
            <template #content>
                <ScrollPanel class="h-52">
                  <p> {{ processing.description }} </p>
                </ScrollPanel>
            </template>
          </Card>
        </div>
      </div>
      <div>
        <div class="text-3xl mt-12 mb-5">Tell us more about your project</div>
        <span class="p-float-label my-10">
            <InputText id="project_name" v-model="project.name" class="w-full"/>
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

.selected-card
  {
  background-color: #144358;
  color: white;
  }

.new-project-form {
  margin-top: calc(50vh - 50px);
  transition: .5s;
}

.new-project-form.with-selected-file {
  margin-top: 30vh;
  padding-bottom: 40vh;
}

</style>

<style>
.p-card-body {
  padding-bottom: 0 !important; /* TODO Comment faire mieux ?*/
}

</style>