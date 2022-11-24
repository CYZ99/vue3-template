<template>
  <div class="Admin">
    <el-container class="warpper">
      <el-header class="header-top">
        <div class="header-left ml-5">
          <span class="title">后台管理系统</span>
          <span class="text-red-500 text-2xl ml-10">
            <app-icons icon="line-md:menu-fold-right" v-if="collapse" @click="handleAsideChange" />
            <app-icons v-else icon="line-md:menu-fold-left" @click="handleAsideChange" />
          </span>
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
      <el-container class="aside-container">
        <el-aside :width="asideWidth" class="aside">
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="collapse"
            :collapse-transition="false"
            @select="handleMenuChange"
          >
            <el-menu-item index="1">
              <el-icon>
                <Setting />
              </el-icon>
              <span>控制面板</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <User />
                </el-icon>
                <span>用户管理</span>
              </template>
              <el-menu-item index="2-1">用户列表</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppIcons from '@/components/common/appIcons.vue'
import { ref, computed } from 'vue'
import { User, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const asideWidth = ref('200px')

const collapse = computed(() => {
  return asideWidth.value !== '200px'
})

const router = useRouter()
// 选中菜单进行路由跳转
const handleMenuChange = (index: string) => {
  switch (index) {
    case '1':
      router.push({ name: 'Dashboard' })
      break
    case '2-1':
      router.push({ name: 'UserList' })
      break
  }
}

const handleAsideChange = () => {
  asideWidth.value = asideWidth.value === '200px' ? '60px' : '200px'
}
</script>

<style lang="less" scoped>
.Admin {
  @apply w-full h-full;
}

.warpper {
  @apply w-full h-full;
}

.header-top {
  @apply bg-gray-300;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 16px;
  }
}

.aside-container {
  height: calc(100% - 60px);
  overflow-y: auto;
}

.aside {
  transition: width ease 0.15s;
  @apply bg-white;
  overflow-x: hidden;
}

.main {
  @apply bg-slate-400;
}
</style>
