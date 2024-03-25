<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/Header.vue'

</script>

<template>
  <div>
    <header>
     <Header />
    </header>
    <RouterView />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Sail&display=swap');
</style>