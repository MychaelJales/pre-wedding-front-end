<script setup>
  import IconMenu from '@/components/icons/IconMenu.vue';
  import DrawerMenu from '@/components/drawers/DrawerMenu.vue';
  import { ref } from 'vue';
  const menuIsOpen = ref(false);
  const closeDrawer = () => {
    console.log(!menuIsOpen.value);
    menuIsOpen.value = false
  }
</script>

<template>
  <div >
    <div class="my-header">
      <h2 class="font-names">Mychael & Moema</h2>
      <el-button text @click="menuIsOpen = true">
        <IconMenu />
      </el-button>
    </div>
    <DrawerMenu :drawer-is-open-prop="menuIsOpen" @close-drawer="closeDrawer" />
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
