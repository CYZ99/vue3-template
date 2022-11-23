<template>
  <div class="Admin">
    <el-container class="warpper">
      <el-header class="header-top">
        <div class="header-left ml-5">
          <span class="title">后台管理系统</span>
        </div>
        <div class="text-black">
          <app-icons icon="mdi:magnify" />
        </div>
        <div class="header-right">
          <el-dropdown>
            <span class="avatar">
              <el-avatar :size="30" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>修改头像</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppIcons from '@/components/common/appIcons.vue'
</script>

<style lang="less" scoped>
.Admin {
  @apply w-full h-full;
}

.warpper {
  @apply w-full h-full;
}

.header-top {
  @apply bg-indigo-300;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left {
    font-size: 20px;
    font-weight: 16px;
  }
}

.aside {
  @apply bg-slate-200;
}

.main {
  @apply bg-slate-400;
}
</style>
