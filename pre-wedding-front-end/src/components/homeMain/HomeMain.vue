<script setup>
import { ref } from 'vue'
const imagem = ref('/images/img-1.jpg');
</script>

<template>
  <div>
    <div class="img-bgd text-img">
      <h1 class="font-header color-bgd-img-1">O dia chegou, vamos nos casar!</h1>
      <h1 class="font-names color-bgd-img-2">Mychael & Moema</h1>
      <h1 class="font-header color-bgd-img-1">01 de Junho de 2024</h1>
    </div>
    <div>
      <img :src="imagem" class="img mt-1" alt="imagem de casal">
      <div>
        <h1 class="font-header">Depois de 5 anos juntos</h1>
        <h1 class="font-names">Decidimos dar o Nó</h1>
        <p>Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a digitar. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque.</p>
        <el-button class="mt-1" color="#903727" size="large" plain>Quem somos</el-button>
      </div>
    </div>
    <div class="mt-1">
      <h1 class="font-header">Por isso, esperamos que venha</h1>
      <h1 class="font-names">Por favor avise-nos</h1>
      <p>Este é o lugar onde o seu texto começa. Pode clicar aqui e começar a digitar. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque.</p>
      <el-button class="mt-1" color="#903727" size="large" plain >Avise-nos</el-button>
    </div>

  </div>

</template>

<style>
.img-bgd {
   /* width: 100vw;largura desejada */
   width: 100%;
   height: 600px; /* altura desejada */
   background-image: url("images/img-3.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
}

.img {
  padding-top: 2px;
  width: 100%;
  height: auto;
}

.text-img {
  padding-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}

.color-bgd-img-1 {
  text-shadow: 0.5px 0.5px 0 #903727, 
                     -0.5px 0.5px 0 #903727, 
                     0.5px -0.5px 0 #903727, 
                     -0.5px -0.5px 0 #903727;
}

.color-bgd-img-2 {
  text-shadow: 0.5px 0.5px 0 #cd907b, 
                     -0.5px 0.5px 0 #cd907b, 
                     0.5px -0.5px 0 #cd907b, 
                     -0.5px -0.5px 0 #cd907b;
}
</style>
