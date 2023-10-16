<script setup lang="ts">
    import { ref, defineProps } from 'vue'
    import MenuItem from './MenuItem.vue'

    const sidebarVisible = ref(false);

    const my_projects = ref([
        {
            label: 'ConcilIA',
            icon: 'pi pi-chevron-right',
            path: 'home'
        },
        {
            label: 'Swanodeep',
            icon: 'pi pi-chevron-right',
            path: 'home'
        },
        {
            label: 'CoagIA',
            icon: 'pi pi-chevron-right',
            path: 'home'
        },
        {
            label: 'PasscomAct',
            icon: 'pi pi-chevron-right',
            path: 'home'
        }
    ]);

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