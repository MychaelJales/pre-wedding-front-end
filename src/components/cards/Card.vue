<script>
import { computed } from 'vue'
import { formatMoney } from '@/utils/moneyFormat';
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
      // Use computed para formatar o valor automaticamente quando o valor original mudar
      const formattedValue = computed(() => {
        return formatMoney(props.product.price);
      });
  
      return {
        formattedValue,
      };
  }
}

</script>

<template>
  <el-card shadow="always" body-class="product-card">
    <img :src="product.image" class="product-image" />
    <div class="card-content">
      <el-space direction="vertical">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="product.name"
          placement="top"
        >
          <el-text class="mx-1 product-name text-center w-120px" line-clamp="2" >{{ product.name }}<br />-</el-text>
        </el-tooltip>
        <el-text  class="product-description w-120px text-center" size="small">*Imagem meramente ilustrativa</el-text>
        <el-text class="mx-1 product-name" size="large">{{ formattedValue }}</el-text>
      </el-space>
      <el-button @click="$emit('selectGift', product, true)" class="mt-1" color="#903727">Selecionar</el-button>
    </div>
  </el-card>
</template>

<style>
.product-card {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  width: 150px;
}
.product-image {
  width: 100px;
  height: 100px;
  max-height: 100px;
}
.card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  margin-right: 8px;
}
.product-name {
  margin: 0;
  font-weight: bold;
}
.product-description {
  color: #666;
}
.product-price {
  margin: 10px 0;
  font-size: 1.3em;
  color: #333;
}
.w-120px {
  width: 120px;
}

.box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
