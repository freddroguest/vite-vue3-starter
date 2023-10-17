<script setup lang="ts">
    import { ref, defineProps } from 'vue'
    import { useRouter } from 'vue-router'
    const props = defineProps(['project'])
    
</script>

<template>
    <div class="w-full hover:bg-slate-200 p-4 cursor-pointer" @click="project.show">
        <i class="pi pi-chevron-right"></i>
        <span class="ml-2"> {{ project.title }}</span>
    </div>
</template>

<style scoped>

</style>