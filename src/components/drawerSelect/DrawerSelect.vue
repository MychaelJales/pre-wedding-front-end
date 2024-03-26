<script setup>
import { ref, watch, defineEmits } from 'vue'
import BtnMp from '@/components/btnMp/BtnMp.vue'
import CardDrawer from '../cards/CardDrawer.vue'
// const publicKeyMp = process.env.VITE_MP_PUBLIC_KEY;
const emit = defineEmits(['selectGift'])
const props = defineProps({
  drawerProp: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  }
})
const drawer = ref(props.drawerProp)
  console.log(props.product.preferenceId);
// const mp = new MercadoPago(publicKeyMp, {
//   locale: 'pt-BR',
// })


watch(() => props.drawerProp, (newValue) => {
  drawer.value = newValue
  // if (newValue == true) {
  //   mp.bricks().create("wallet", `wallet_container_${props.product.id}`, {
  //     initialization: {
  //         preferenceId: props.product.preferenceId,
  //     },
  //     customization: {
  //       texts: {
  //         valueProp: 'smart_option',
  //       },
  //     },
  //   });
  // }
})
watch(drawer, async (newValue) => {
  if (!newValue) {
    emit('selectGift', {}, newValue)
  }
})
</script>

<template>
  <el-drawer v-model="drawer" direction="btt">
    <template #header>
      <h4>Produto selecionado</h4>
    </template>
    <template #default>
      <div>
        <CardDrawer :product="product" />
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <!-- <el-button @click="$emit('selectGift', {}, false)">Cancelar</el-button> -->
        <!-- <div :id="`wallet_container_${props.product.id}`"></div> -->
        <BtnMp v-if="drawer" :preferenceId="props.product.preferenceId" />
      </div>
    </template>
  </el-drawer>
</template>
