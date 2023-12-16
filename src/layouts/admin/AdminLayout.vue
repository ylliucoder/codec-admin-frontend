<script setup lang="ts">
</script>

<template>
  <div class="w-full h-full flex">
    <div class="h-full bg-red-100">
      <admin-aside></admin-aside>
    </div>
    <div class="flex-1 bg-red-600 flex flex-col">
      <div class="h-[50px] bg-green-100"></div>
      <div class="flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
