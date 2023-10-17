<script setup lang="ts">
    import { ref, defineProps, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import MenuProjectItem from './MenuProjectItem.vue'
    import Project from '../types/Project.ts'

    const sidebarVisible = ref(false);

    const router = useRouter()

    const my_projects = ref([]);

    onMounted(async () => {
        my_projects.value = await Project.getAll()
    })

    const hideSidebar = () => {
        sidebarVisible.value = false
    }

</script>

<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="sidebarVisible" @click="hideSidebar()">
            <template #header>
                <span class="text-3xl font-bold">AutoML</span>
            </template>
            <Button label="New project" icon="pi pi-plus" class="w-full" @click="router.push({name: 'home'})"/>
            <div class="mt-6">
                <div class="text-2xl font-semibold mb-2">My projects</div>
                <div v-for="(project, index) in my_projects" :key="index">
                    <MenuProjectItem :project="project" />
                </div>
            </div>


        </Sidebar>
        <div class="flex mt-3 ml-3 cursor-pointer fixed z-50" @click="sidebarVisible = true">
            <Avatar image="/images/random_avatar.png" class="mr-2" size="large" shape="circle" />
            <div class="leading-4 mt-[0.72rem]">
                <span class="font-semibold">Didier Moulard</span>
                <br />
                <span class="italic text-xs text-gray-500">Click to show menu</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>