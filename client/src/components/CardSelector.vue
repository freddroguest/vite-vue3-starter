<script setup lang="ts">
    import { ref, defineProps } from 'vue'
    const props = defineProps(['item', 'active'])
</script>

<template>
    <Card class="cursor-pointer" :class="{'selected-card': props.active}">
        <template #header>
            <img alt="user header" :src="props.item.image" />
        </template>
        <template #title> 
            <div class="h-16">
            {{ props.item.name }}
            </div>
        </template>
        <template #content>
            <ScrollPanel class="h-52">
                <p> {{ props.item.description }} </p>
            </ScrollPanel>
        </template>
    </Card>
</template>

<style scoped>

.selected-card {
    background-color: #144358;
    color: white;
}

</style>

<style>
.p-card-body {
    padding-bottom: 0 !important; /* TODO Comment faire mieux ?*/
}
</style>