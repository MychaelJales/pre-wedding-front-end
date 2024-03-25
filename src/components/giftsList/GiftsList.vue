<script setup>
import { ref } from 'vue'
import Card from '../card/Card.vue';
import { listGifts } from '@/utils/listGifts';
const products = listGifts;
</script>

<template>
  <div>
    <div class="container-obs">
      <el-text class="mx-1 text-obs">
        Olá, você pode nos presentear com pix do valor desejado. Basta enviar para nossa chave: mychael_duarte@hotmail.com <br />Ou se preferir pode escolher um item da nossa lista de presentes e efetuar o pagamento via mercado pago.
      </el-text>
    </div>
    <div class="products-list">
      <div v-for="product in products">
        <Card :product="product" />
      </div>
    </div>
  </div>

</template>

<style>
.text-obs {
  color: #762516;
}
.container-obs {
  border: 1px solid #762516;
  border-radius: 10px;
  background-color: #efd4cb;
  padding: 10px;

}
.products-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
}
</style>
