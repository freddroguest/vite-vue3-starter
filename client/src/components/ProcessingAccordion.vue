<script setup lang="ts">
    import { ref } from 'vue'
    import StatusTag from './StatusTag.vue';
    import { dateToString, dateDiff } from '../utils/dateHelper'
    import { beautify } from '../utils/stringHelper'
    const props = defineProps(['processings'])
    
    // const bestResult = ref(props.processing.bestResult())
</script>

<template>
    <Accordion :activeIndex="0">
        <AccordionTab v-for="processing in props.processings" :key="processing.id">
            <template #header>
                <div class="grid grid-cols-5 gap-4 w-full">
                    <p><i class="pi pi-calendar" /> {{ dateToString(processing.start_at) }}</p>
                    <p><i class="pi pi-stopwatch" /> {{ dateDiff(processing.start_at, processing.status == 'pending' ? new Date() : processing.end_at) }}</p>
                    <p>
                        <i class="pi pi-star" />
                        <span v-if="processing.bestResult()">&nbsp;{{ processing.bestResult().ml_model_name }}</span>
                        <span v-else> - </span>
                    </p>
                    <p>
                        <i class="pi pi-calculator" />
                        <span v-if="processing.bestResult()"><span>&nbsp;{{ beautify(processing.bestResult().mainMetric().name) }}</span> {{ processing.bestResult().mainMetric().value }}</span>
                        <span v-else> - </span>
                    </p>
                    <StatusTag :status="processing.status" />
                </div>
            </template>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionTab>
    </Accordion>
</template>

<style scoped>

</style>