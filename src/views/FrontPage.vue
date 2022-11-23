<template>
  <div class="front">
    <h2>front</h2>
    <div>num:{{ countStore.num }}</div>
    <button class="rounded px-2 py-2 bg-red-200" @click="incrementClick">+1</button>
    <el-button type="primary" size="default">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import useCountStore from '@/store/modules/useCountStore'
const countStore = useCountStore()
function incrementClick() {
  countStore.incrementAction()
}
</script>

<style lang="less" scoped>
.front {
  color: red;
}
</style>
