<script setup>
import { ref } from 'vue'
const imagem = ref('/images/img-1.jpg')
const publicKeyMp = process.env.VITE_MP_PUBLIC_KEY;
const imgCar1 = ref('/images/car-1.jpg')
const imgCar2 = ref('/images/car-2.jpg')
const imgCar3 = ref('/images/car-3.jpg')
const imgCar4 = ref('/images/car-4.jpg')
const imgCar5 = ref('/images/car-5.jpg')
const imgCar6 = ref('/images/car-6.jpg')

const mp = new MercadoPago(publicKeyMp, {
  locale: 'pt-BR',
})
const bricksBuilder = mp.bricks().create("wallet", "wallet_container", {
  initialization: {
      preferenceId: "197269940-390f5b99-f98e-49e2-a66b-fc68d960750c",
  },
  customization: {
    texts: {
      valueProp: 'smart_option',
    },
  },
});
</script>

<template>
  <div>
    <div class="img-bgd text-img">
      <h1 class="font-header color-bgd-img-1 mt-1">Vamos nos casar!</h1>
      <!-- <h1 class="font-names color-bgd-img-2">Mychael & Moema</h1>
      <h1 class="font-header color-bgd-img-1">01 de Junho de 2024</h1> -->
    </div>
    <div>
      <!-- <img :src="imagem" class="img mt-1" alt="imagem de casal"> -->
      <div>
        <h1 class="font-header">Depois de 5 anos juntos</h1>
        <!-- <h1 class="font-names">Decidimos dar o Nó</h1> -->
        <p class="text-justify recoil mt-1">Decidimos celebrar nossa união com as bençãos de Deus e das pessoas que amamos e fazem parte de nossa história.</p>
        <el-button class="mt-1" color="#903727" size="large" plain tag="a"
        href="/about">Nossa história</el-button>
      </div>
    </div>
    <div class="mt-1">
      <h1 class="font-header my-1">Por isso, contamos com sua presença</h1>
      <p class="text-justify recoil mt-1">Para que juntos possamos celebrar e partilhar a alegria desse dia tão especial em nossas vidas.</p>
      <h2 class="font-names mt-1">Por favor, confirme sua presença</h2>
      <el-button class="mt-1" color="#903727" size="large" plain >Avise-nos</el-button>
      <!-- <div id="wallet_container"></div> -->
    </div>
    <el-carousel class="mt-1" :interval="4000" type="card" height="170px">
      <el-carousel-item v-for="key in 6" :key="key">
        <img v-if="key==1" :src="imgCar1" center class="img-carousel-home" alt="dress code">
        <img v-else-if="key==2" :src="imgCar2" center class="img-carousel-home" alt="dress code">
        <img v-else-if="key==3" :src="imgCar3" center class="img-carousel-home" alt="dress code">
        <img v-else-if="key==4" :src="imgCar4" center class="img-carousel-home" alt="dress code">
        <img v-else-if="key==5" :src="imgCar5" center class="img-carousel-home" alt="dress code">
        <img v-else :src="imgCar6" center class="img-carousel-home" alt="dress code">
      </el-carousel-item>
    </el-carousel>

  </div>

</template>

<style>
.img-bgd {
   /* width: 100vw;largura desejada */
   width: 100%;
   height: 300px; /* altura desejada */
   background-image: url("images/img-5.jpg");
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
}

.img {
  padding-top: 2px;
  width: 100%;
  height: auto;
}

.text-img {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.color-bgd-img-1 {
  padding-top: 5px;
  color: #fdfdfd;
}

.color-bgd-img-2 {
  text-shadow: 0.5px 0.5px 0 #cd907b, 
                     -0.5px 0.5px 0 #cd907b, 
                     0.5px -0.5px 0 #cd907b, 
                     -0.5px -0.5px 0 #cd907b;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.img-carousel-home {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
