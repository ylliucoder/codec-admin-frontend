<script setup lang="ts">
import {AuthApi} from "@/apis";

const initData = async () => {
  const r = await AuthApi.test()
  console.log(r)
}
initData()
</script>

<template>
  <div>hello world</div>
</template>

<style scoped>

</style>
