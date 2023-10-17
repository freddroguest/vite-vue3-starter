<script setup lang="ts">
    import { ref, defineProps } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();

    const props = defineProps(['item'])


    const goTo = (route_name:String) => {
        router.push({ name: route_name})
    }

</script>

<template>
    <div class="w-full hover:bg-slate-200 p-4 cursor-pointer" @click="goTo(item.path)">
        <i :class="item.icon"></i>
        <span class="ml-2"> {{ item.label }}</span>
    </div>
</template>

<style scoped>

</style>