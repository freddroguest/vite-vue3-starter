<script setup lang="ts">
    import { ref, watch } from 'vue'


    const props = defineProps({
        stripe: {default: true},
        error: {default: false},
        value: {default: 0}
    })
    const progress:ref<number> = ref(props.value)

    if(progress.value > 100)
        progress.value = 100
    else if(progress.value < 0)
        progress.value = 0

</script>

<template>
    <div class="z-1 any-progress-bar relative">
        <div class="any-progress-background transition-all z-2 absolute h-full" :class="{in_error: props.error, finish: (progress >= 100), with_strip: props.stripe}" :style="{ width: `${progress}%`}"></div>
        <div class="z-3 w-full h-full relative">
            <slot></slot> <!-- slot outlet -->
        </div>
    </div>
</template>

<style scoped>

.any-progress-background {
    background-color: #F0E09D;
}
.any-progress-background.in_error {
    background-color: #FC9297;
    }

.any-progress-background.finish:not(.in_error) {
    background-color: #6EC3C2;
}

.with_strip {
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(255,255,255,0) 25%,rgba(255,255,255,0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(255,255,255,0) 75%,rgba(255,255,255,0))!important;
    background-size: 40px 40px!important;
    animation: moving_strip infinite linear 1s;
}

@keyframes moving_strip {
    from {background-position: 0 0;}
    to {background-position: 0 40px;}
}
</style>