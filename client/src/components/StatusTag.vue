<script setup lang="ts">
    import { ref } from 'vue'
    const props = defineProps(['status'])

    const status_data:any = {
        finished: {
            color: "#6EC3C2",
            name: "Finished",
            icon: 'pi pi-check'
        },
        cancelled: {
            color: "#64748B",
            name: "Cancelled",
            icon: 'pi pi-ban'
        },
        error: {
            color: "#FC9297",
            name: "Error",
            icon: 'pi pi-times'
        },
        pending: {
            color: "#9AD8DE",
            name: "Pending",
            icon: 'pi pi-stopwatch'
        },
        waiting: {
            color: "#F0E09D",
            name: "Waiting",
            icon: 'pi pi-pause'
        }
    }


    console.log(props.status)
</script>

<template>
    <div> <!-- Avoid height issues-->
        <div class="tag flex place-content-around" :class="props.status" :style="{'background-color': status_data[props.status].color}">
            <i :class="status_data[props.status].icon" class="mt-1"/>
            <span class="ml-2">{{ status_data[props.status].name }}</span>
        </div>
    </div>
</template>

<style scoped>
    .tag {
        padding: 5px 10px;
        border-radius: 3px;
        color: white;
        width: 130px;
        display: inline-block;
    }

    .tag.pending {
        background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,rgba(255,255,255,0) 25%,rgba(255,255,255,0) 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,rgba(255,255,255,0) 75%,rgba(255,255,255,0))!important;
        background-size: 40px 40px!important;
        animation: moving_strip infinite linear 1s;
    }

    @keyframes moving_strip {
        from {background-position: 0 0;}
        to {background-position: 0 -40px;}
    }
</style>