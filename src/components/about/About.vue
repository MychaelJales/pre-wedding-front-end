<script setup>
import { ref } from 'vue'
const imagem = ref('/images/img-2.jpg');
</script>

<template>
  <div>
    <div>
      <img :src="imagem" class="img mt-1" alt="imagem de casal">
      <div>
        <h1 class="font-header">Nossa história</h1>
        <!-- <h1 class="font-names">a nossa história</h1> -->
        <p class="text-justify recoil">Nós crescemos na mesma cidade, Patu-RN, cercados de amigos em comum mas foi em Natal que nós conhecemos de verdade. Depois de boas conversas via internet resolvemos nos encontrar no Natal Shoping, dia 15 de março de 2019, e desde então nunca mais estivemos separados. Juntos nós evoluímos, fortalecemos nosso amor, superamos as dificuldades da vida um apoiando o outro, resolvemos morar juntos, formamos uma familhinha com nossos 3 filhos gatinhos (Ringo, Pirata e Fanta) e agora depois de 5 anos resolvemos selar diante de Deus e daqueles que amamos, a nossa união. Não poderíamos estar mais felizes e ansiosos para esse dia chegar.</p>
        <!-- <el-button class="mt-1" color="#903727" size="large" plain>Quem somos</el-button> -->
      </div>
    </div>
  </div>

</template>

<style>
</style>
