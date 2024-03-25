<script setup>
  import {
    Menu as IconMenu,
  } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  const activeIndex = ref('1')
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <div >
    <div class="my-header">
      <h2 class="font-names">Mychael & Moema</h2>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-colap"
        mode="horizontal"
        :ellipsis="false"
        background-color="none"
        @select="handleSelect"
        :router="true"
      >
        <div class="flex-grow" />
        <el-sub-menu index="1">
          <template #title><el-icon><icon-menu /></el-icon></template>
          <el-menu-item route="/" index="1-1">Início</el-menu-item>
          <el-menu-item route="/about" index="1-2">Nossa história</el-menu-item>
          <el-menu-item route="/weddingday" index="1-3">Dia do casamento</el-menu-item>
          <el-menu-item route="/giftsList" index="1-4">Lista de presentes</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.my-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}


</style>
