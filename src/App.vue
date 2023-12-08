<script setup lang="ts">
import {AuthApi} from "@/apis";

const initData = async () => {
  const {data} = await AuthApi.test()
  console.log(data)
}
initData()
</script>

<template>
  <div>hello world</div>
</template>

<style scoped>

</style>
