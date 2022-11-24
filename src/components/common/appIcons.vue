<template>
  <div class="app-icon">
    <Icon :icon="props.icon" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps<{
  icon: string
}>()
</script>

<style lang="less" scoped></style>
