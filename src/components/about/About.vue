<script setup>
import { ref } from 'vue'
const imagem = ref('/images/img-2.jpg');
</script>

<template>
  <div>
    <div>
      <img :src="imagem" class="img mt-1" alt="imagem de casal">
      <div>
        <h1 class="font-header">Como chegar</h1>
        <h1 class="font-names">a nossa história</h1>
        <p>Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a digitar. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque.</p>
        <!-- <el-button class="mt-1" color="#903727" size="large" plain>Quem somos</el-button> -->
      </div>
    </div>
  </div>

</template>

<style>
</style>
