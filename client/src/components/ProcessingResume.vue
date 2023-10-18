<script setup lang="ts">
    import { ref } from 'vue'
    import { dateToString, dateDiff } from '../utils/datesHelper'
    const props = defineProps(['processing'])
    
    const bestResult = ref(props.processing.bestResult())
</script>

<template>
    <div id="processing-resume">
        <p><span class="font-semibold">Start</span> {{ dateToString(props.processing.start_at) }}</p>
        <p><span class="font-semibold">Duration</span> {{ dateDiff(props.processing.start_at, props.processing.end_at) }}</p>
        <div v-if="bestResult">
            <p><span class="font-semibold">Best model</span> {{ bestResult.ml_model_name }}</p>
            <p><span class="font-semibold">{{ bestResult.mainMetric().name }}</span> {{ bestResult.mainMetric().value }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>../utils/datesHelper