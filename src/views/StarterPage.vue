<script setup lang="ts">
const eleves = [
  {
    nom: 'Kellon',
    prenom: 'John',
    age: 12,
    notes: [10, 21, 16 ,18]
  },
  {
    nom: 'Hollidays',
    prenom: 'Johnny',
    age: 13,
    notes: [10, 21, 16 ,18]
  },
  {
    nom: 'Mère',
    prenom: 'Yeux',
    age: 21,
    notes: [10, 21, 16 ,18]
  },
  {
    nom: 'TheKid',
    prenom: 'Billy',
    age: 11,
    notes: [10, 21, 16 ,18]
  },
]
</script>

<template>
  <div class="font-bold text-3xl p-4"> Elèves </div>
<DataTable :value="eleves">
  <Column field="nom" header="nom"></Column>
  <Column field="prenom" header="prenom"></Column>
  <Column field="age" header="age"></Column>
  <Column field="notes" header="notes"></Column>
</DataTable>
</template>

<style scoped>

</style>