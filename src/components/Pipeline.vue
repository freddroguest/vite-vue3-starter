<script setup lang="ts">
import { ref, defineProps } from 'vue'

// VueFlow
import { VueFlow, MarkerType, Position  } from '@vue-flow/core'
import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';

const props = defineProps(['json_pipeline'])

// Recursive function
// Parse JSON from Python Package to Array of elements for VueFlow
//
// pipeline = JSON from Python package
// 
// Others parameters are useless for the first recursion
// parentId = id of the Node of the previous recrusion. Use for Edge
// depth = Number of parent from the root. Use for x position
// level = Number of sibling of the same depth. Use for y position
//
const X_GAP = 250
const Y_GAP = 100
const parsePipeline = (pipeline:any, parentId:any=undefined, depth:number=0, level:number=0) => {
    // Elements for VueFlow (Node & Edge)
    let elements:Array<object> = []

    // Total number of children which do not have children. Used to compute y position
    let totalNumberOfChildLeaf:number = 0;

  // Node
    elements.push({
        id: String(pipeline.value.id),
        label: pipeline.value.name, 
        position: { x: X_GAP*depth, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: pipeline.value,
        events: {
            click: (elem) => {
            changeActiveNode(elem.event, elem.node)
            }
        },
        totalNumberOfChildLeaf: 0
    });

  // Edge
    if(parentId) {
        elements.push({
            id: parentId + "_" + pipeline.value.id,
            source: String(parentId),
            target: String(pipeline.value.id),
            markerEnd: MarkerType.Arrow
        });
    }

  // Children
    for(const child of pipeline.children) {
        let childElements:Array<any> = parsePipeline(child, pipeline.value.id, depth+1, (totalNumberOfChildLeaf+level));
        totalNumberOfChildLeaf += childElements[0].totalNumberOfChildLeaf;

        elements = elements.concat(childElements);
    }
    
    elements[0].totalNumberOfChildLeaf = Math.max(totalNumberOfChildLeaf, 1);
    elements[0].position.y = ((elements[0].totalNumberOfChildLeaf/2+0.5)+level)*Y_GAP+Y_GAP;

    return elements;
}

const elements = ref(parsePipeline(props.json_pipeline)) // Elements from VueFlow (Edges & Nodes)
const activeNode = ref(); // Last clicked Node
const overlayPanel = ref(); // Overlay from describe & configure a node


// Call on click on a node, change active node & open overlayPanel
const changeActiveNode = (event: any, node: any) => {
    activeNode.value = node;
    overlayPanel.value.toggle(event);
}

</script>

<template>
    <VueFlow v-model="elements" />
    
    <OverlayPanel ref="overlayPanel">
        <div class="flex flex-col gap-2">
            <!-- Description -->
            <span>{{ activeNode.data.description }}</span>

            <!-- Configuration -->
            <div v-if="activeNode.data.configuration !== undefined">
                <div v-for="(configurationKey, index) in Object.keys(activeNode.data.configuration)" :key="index">
                    <span>{{ configurationKey }}</span>
                    <InputText v-model="activeNode.data['configuration'][configurationKey].value" />
                </div>
                <Button label="Enregistrer" class="mt-2 w-full" :loading="loading" @click="sendDataset()" />
            </div>
        </div>
    </OverlayPanel>
</template>

<style scoped>
</style>