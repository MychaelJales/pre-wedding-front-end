<script setup>
import { ref } from 'vue'
const imagem = ref('/images/img-4.jpg');
const imgPaleta = ref('/images/paleta.png');
const imgDressCode1 = ref('/images/dress-code-1.jpg')
const imgDressCode2 = ref('/images/dress-code-2.jpg')
const imgDressCode3 = ref('/images/dress-code-3.jpg')
const imgsDressCode = [1, 2, 3];
</script>

<template>
  <div>
    <div>
      <img :src="imagem" class="img mt-1" alt="imagem de casal">
      <div>
        <h1 class="font-header">01 de Junho de 2024</h1>
        <h1 class="font-names">marque essa data</h1>
        <p>Fique atento as informações e cuidado para não atrasar mais que a noiva. &#128514;</p>
        <h3 class="mt-1 color-1">Cerimónia</h3>
        <p>16h - Santuário do Lima, Patu-RN</p>
        <h3 class="mt-1 color-1">Recepção para família e amigos</h3>
        <p class="mt-1">Logo após o término da cerimônia - Casa Suassuna, Patu-RN</p>
        <h3 class="mt-1 color-1">Dress code</h3>
        <p class="mt-1">A paleta de cores abaixo é exclusiva dos padrinhos e madrinhas.</p>
        <img :src="imgPaleta" class="img mt-1" alt="imagem de casal">
        <el-text class="mx-1" type="danger">Vale lembrar que o branco, bege, off white e qualquer tom parecido é de exclusividade da noiva.</el-text>
        <p class="mt-1">Sabendo dessas informações, escolha uma roupa que se sinta bonito(a) e confortável e venha celebrar e festejar conosco.</p>
        <!-- <el-button class="mt-1" color="#903727" size="large" plain>Quem somos</el-button> -->
        <el-carousel class="mt-1" :interval="3000" type="card" height="225px">
          <el-carousel-item v-for="key in imgsDressCode" :key="key">
            <img v-if="key==1" :src="imgDressCode1" class="img-carousel" alt="dress code">
            <img v-else-if="key==2" :src="imgDressCode2" class="img-carousel" alt="dress code">
            <img v-else :src="imgDressCode3" class="img-carousel" alt="dress code">
          </el-carousel-item>
        </el-carousel>
        <h3 class="mt-1 color-1">Hospedagem</h3>
        <p class="mt-1">Pousada Voo Livre - (84) 99850-4521 </p>
        <p class="mt-1">Pousada Cidade do Sol - (84) 99622-1756</p>
      </div>
    </div>
  </div>

</template>

<style>
.img-carousel {
  width: 100%;
  height: auto;
}
</style>