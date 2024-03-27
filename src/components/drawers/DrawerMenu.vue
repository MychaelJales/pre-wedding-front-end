<script setup>
import { ref, watch, defineEmits } from 'vue'

const emit = defineEmits(['closeDrawer'])
const props = defineProps({
  drawerIsOpenProp: {
    type: Boolean,
    required: true,
  },
})
const drawerIsOpen = ref(props.drawerIsOpenProp)
const activeIndex = ref('1')
const handleSelect = () => {
  drawerIsOpen.value = false
}

watch(() => props.drawerIsOpenProp, (newValue) => {
  drawerIsOpen.value = newValue
})

watch(drawerIsOpen, async (newValue) => {
  if (!newValue) {
    emit('closeDrawer')
  }
})
</script>

<template>
  <el-drawer class="bgd-drawer" v-model="drawerIsOpen" size="50%" direction="rtl">
    <template #default>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#903727"
        :default-active="activeIndex"
        text-color="#fff"
        @select="handleSelect"
        :router="true"
      >
        <el-menu-item  route="/" index="1">
          <span>Início</span>
        </el-menu-item>
        <el-menu-item route="/about" index="2">
          <span>Nossa história</span>
        </el-menu-item>
        <el-menu-item route="/weddingday" index="3">
          <span>Dia do casamento</span>
        </el-menu-item>
        <el-menu-item route="/giftsList" index="4">
          <span>Lista de presentes</span>
        </el-menu-item>
      </el-menu>
    </template>
  </el-drawer>
</template>

<style scoped>
.teste {
  color: #fff!important;
}
</style>
