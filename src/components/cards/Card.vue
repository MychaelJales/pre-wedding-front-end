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
  <el-card class="product-card mt-1">
    <img :src="product.image" class="product-image" />
    <div class="card-content">
      <el-space direction="vertical">
        <el-text class="mx-1 product-name text-center" >{{ product.name }}</el-text>
        <el-text  class="product-description" size="small">{{ product.description }}</el-text>
        <el-text class="mx-1 product-name" size="large">{{ formattedValue }}</el-text>
      </el-space>
      <el-button @click="$emit('selectGift', product, true)" class="mt-1" color="#903727">Selecionar</el-button>
    </div>
  </el-card>
</template>

<style scoped>
.product-card {
  max-width: 180px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  margin-right: 8px;
}
.product-image {
  width: 100%;
  height: auto;
  max-height: 150px;
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
</style>
