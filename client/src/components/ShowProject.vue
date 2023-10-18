<script setup lang="ts">
import { ref, defineProps } from 'vue'
import AnyProgressBar from './AnyProgressBar.vue';

// const emit = defineEmits(['save_change'])

const props = defineProps(['mode', 'project'])
const project = ref(props.project)

const loadingTexts = [
    'Optimizing your data...',
    'Finding the best AI models...',
    'Optimizing hyperparameters...',
    'Extract data from complex columns...',
    'Analyzing feature importance...',
    'Fine-tuning model architecture...',
    'Evaluating performance metrics...',
    'Processing natural language...',
    'Training neural networks...',
    'Generating synthetic data...',
    'Performing cross-validation...',
    'Tuning regularization parameters...',
    'Implementing custom loss functions...',
    'Applying data augmentation techniques...',
    'Handling missing values...',
    'Normalizing input features...',
    'Scaling input data...',
    'Applying transfer learning...',
    'Utilizing ensemble methods...',
    'Implementing early stopping...',
    'Visualizing training progress...',
    'Handling class imbalances...',
    'Implementing gradient descent...',
    'Applying dropout regularization...',
    'Fine-tuning learning rates...',
    'Applying batch normalization...',
    'Handling multi-class classification...',
    'Performing one-hot encoding...',
    'Applying dimensionality reduction...',
    'Implementing unsupervised learning...',
    'Handling time-series data...',
    'Applying sequence-to-sequence models...',
    'Optimizing for interpretability...',
    'Handling imbalanced datasets...',
    'Applying attention mechanisms...',
    'Implementing recommendation systems...',
    'Handling skewed distributions...',
    'Implementing reinforcement learning...',
    'Applying generative adversarial networks...',
    'Optimizing for memory efficiency...',
    'Implementing graph-based models...',
    'Applying graph convolutional networks...',
    'Handling spatial data...',
    'Optimizing for real-time performance...',
    'Implementing federated learning...',
    'Applying self-supervised learning...',
    'Handling noisy data...',
    'Implementing semi-supervised learning...',
    'Applying meta-learning techniques...'
];

</script>

<template>
    <div class="container">
        <div id="project_title" class="mb-10">
            <div class="text-5xl">{{ project.title }}</div>
            <div class="text-xl ml-1 mt-1">{{ project.description }}</div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <AnyProgressBar :value="80" class="col-span-3 like-a-card">

                <div class="flex place-content-between">
                    <div class="progress-body">
                        <div>
                            <p class="text-3xl font-bold">Baiddy is processings your data !</p>
                            <p>It can take a while, you can leave this page and comeback later.</p>
                            <VueTyper :text='loadingTexts' :shuffle='true' pre-erase-delay='3000' erase-style='backspace' erase-delay='35'></VueTyper>
                        </div>
                    </div>
                    <div class="w-fit m-[0.85rem]">
                        <Button class="!mb-2" icon="pi pi-angle-double-right" severity="secondary" size="small" />
                        <br />
                        <Button class="" icon="pi pi-times" severity="danger" size="small" />
                    </div>
                </div>
            </AnyProgressBar>
            <Card class="">
                <template #content>
                    Something here
                </template>
            </Card>
            <Card class="col-span-4">
                <template #title>
                    <p>Input data sample</p>
                </template>
                <template #content>
                    <DataTable :value="project.data_sample.data" class="p-datatable-sm" tableStyle="min-width: 50rem">
                        <Column v-for="col of project.data_sample.headers" :key="col.field" :field="col.field" :header="col.name"></Column>
                    </DataTable>
                </template>
            </Card>
            <Card class="">
                <template #title>
                    <p>Last processing</p>
                </template>
                <template #content>
                    Something
                </template>
            </Card>
            <Card class="col-span-3">
                <template #title>
                    <p>Best processing</p>
                </template>
                <template #content>
                    <p>
                        Something
                    </p>
                </template>
            </Card>
            <Card class="col-span-4">
                <template #title>
                    <p>All processings</p>
                </template>
                <template #content>
                    <p>
                        Lorem ipsum dolor sit amet
                    </p>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 150px;
}

.like-a-card {
    background: #ffffff;
    color: #495057;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    overflow: hidden;
}

.progress-body {
    padding: 1.25rem;
}

</style>