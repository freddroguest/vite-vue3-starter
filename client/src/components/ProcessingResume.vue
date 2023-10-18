<script setup lang="ts">
    import { ref } from 'vue'
    import { dateToString, dateDiff } from '../utils/dateHelper'
    import { beautify } from '../utils/stringHelper'
    const props = defineProps(['processing'])
    
    const bestResult = ref(props.processing?.bestResult())
</script>

<template>
    <div id="processing-resume">
        <div v-if="props.processing">
            <p><i class="pi pi-calendar" /> {{ dateToString(props.processing?.start_at) }}</p>
            <p><i class="pi pi-stopwatch" /> {{ dateDiff(props.processing?.start_at, props.processing?.end_at) }}</p>
            <div v-if="bestResult">
                <p><i class="pi pi-star" /> {{ bestResult.ml_model_name }}</p>
                <p><i class="pi pi-calculator" /><span>&nbsp;{{ beautify(bestResult.mainMetric().name) }}</span> {{ bestResult.mainMetric().value }}</p>
            </div>
        </div>
        <div v-else>No processing yet</div>
    </div>
</template>

<style scoped>

</style>