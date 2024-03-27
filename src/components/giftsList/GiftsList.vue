<script setup>
import { ref } from 'vue'
import Card from '../cards/Card.vue';
import { listGifts } from '@/utils/listGifts';
import DrawerSelect from '@/components/drawers/DrawerSelect.vue'
const products = listGifts;
let drawer = ref(false)
let productSelected = ref({})
const selectGift = (product, openDialog = true) => {
  console.log(product);
  productSelected.value = product
  drawer.value = openDialog
}
</script>

<template>
  <div>
    <div class="container-obs">
      <el-text class="mx-1 text-obs">
        Olá, você pode nos presentear com pix do valor desejado. Basta enviar para nossa chave: mychael_duarte@hotmail.com <br />Ou se preferir pode escolher um item da nossa lista de presentes e efetuar o pagamento via mercado pago.
      </el-text>
    </div>
      <el-space
        fill
        wrap
        fill-ratio="0"
        direction="horizontal"
        style="width: 100%;"
      >
      <div v-for="product in products" :key="product.id">
        <Card :product="product" @select-gift="selectGift" />
      </div>
    </el-space>
    <DrawerSelect :drawerProp="drawer" :product="productSelected"  @select-gift="selectGift" />
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
  margin-bottom: 15px;
}
</style>
