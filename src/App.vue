<script setup lang="ts">
const counter = ref(100)
</script>

<template>
  <div>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
    <a-spin/>
    <div>{{ counter }}</div>
  </div>
</template>

<style scoped>

</style>
