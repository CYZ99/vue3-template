<template>
  <div class="front">
    <h2>front</h2>
    <div>num:{{ countStore.num }}</div>
    <button @click="incrementClick">+1</button>
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
