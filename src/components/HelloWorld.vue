<script setup lang="ts">
import {useAppStore} from "../store";

const appStore = useAppStore()
const changeTheme = () => {
  appStore.toggleTheme()
}
</script>

<template>
  <div>{{ appStore.theme }}</div>
  <button @click="changeTheme">click me</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
