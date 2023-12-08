<script setup lang="ts">
import {AuthApi} from "@/apis";

const initData = async () => {
  const a = await AuthApi.test()
  console.log(a)
}
initData()
</script>

<template>
  <div>hello world</div>
</template>

<style scoped>

</style>
