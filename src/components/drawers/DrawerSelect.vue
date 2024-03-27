<script setup>
import { ref, watch, defineEmits } from 'vue'
import BtnMp from '@/components/btnMp/BtnMp.vue'
import CardDrawer from '../cards/CardDrawer.vue'
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

watch(() => props.drawerProp, (newValue) => {
  drawer.value = newValue
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
      <h4 class="text-white">Produto selecionado</h4>
    </template>
    <template #default>
      <div>
        <CardDrawer :product="product" />
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <BtnMp v-if="drawer" :preferenceId="props.product.preferenceId" />
      </div>
    </template>
  </el-drawer>
</template>
