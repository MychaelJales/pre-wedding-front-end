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
        return formatMoney(props.product?.price);
      });
  
      return {
        formattedValue,
      };
  }
}

</script>

<template>
  <div>
    <div class="product-card">
      <div class="card-content">
        <el-space direction="horizontal">
          <el-text class="mx-1 product-name " >{{ product.name }}</el-text>
          <el-text class="mx-1 product-name" type="success" size="large">{{ formattedValue }}</el-text>
        </el-space>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  max-height: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
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

</style>
