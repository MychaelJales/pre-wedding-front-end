<script setup>
import { ref } from 'vue'
const imagem = ref('/images/img-4.jpg');
</script>

<template>
  <div>
    <div>
      <img :src="imagem" class="img mt-1" alt="imagem de casal">
      <div>
        <h1 class="font-header">01 de Junho de 2024</h1>
        <h1 class="font-names">marque essa data</h1>
        <p>Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a digitar. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque.</p>
        <h3 class="mt-1">Cerimónia</h3>
        <p>16h - Santuário do Lima, Patu-RN</p>
        <h3 class="mt-1">Festa para família e amigos</h3>
        <p>17h - Casa Suassuna, Patu-RN</p>
        <!-- <el-button class="mt-1" color="#903727" size="large" plain>Quem somos</el-button> -->
      </div>
    </div>
  </div>

</template>

<style>
</style>