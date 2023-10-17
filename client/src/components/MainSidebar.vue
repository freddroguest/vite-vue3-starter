<script setup lang="ts">
    import { ref, defineProps, onMounted } from 'vue'
    import MenuItem from './MenuItem.vue'
    import Project from '../types/Project.ts'

    const sidebarVisible = ref(false);

    const projectToItem = (project:Project) => {
        return {
            label: project.title,
            icon: 'pi pi-chevron-right',
            path: `/projects/${project.id}`
        }
    }



    const my_projects = ref([]);

    onMounted(async () => {
        const projects = await Project.getAll()
        my_projects.value = Array.from(projects.map(projectToItem))
        
    })

</script>

<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="sidebarVisible">
            <template #header>
                <span class="text-3xl font-bold">AutoML</span>
            </template>
            <Button label="New project" icon="pi pi-plus" class="w-full" />
            <div class="mt-6">
                <div class="text-2xl font-semibold mb-2">My projects</div>
                <div v-for="(item, index) in my_projects" :key="index">
                    <MenuItem :item="item" />
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