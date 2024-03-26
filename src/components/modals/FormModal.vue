<script setup>
import { ref, watch, defineEmits } from 'vue';
const emit = defineEmits(['closeModal'])
const props = defineProps({
  modalIsOpen: {
    type: Boolean,
    required: true,
  },
})
const modalVisible = ref(props.modalIsOpen)

watch(() => props.modalIsOpen, (newValue) => {
  modalVisible.value = newValue
})

watch(modalVisible, async (newValue) => {
  if (!newValue) {
    emit('closeModal')
  }
})

</script>

<template>
  <el-dialog
    v-model="modalVisible"
    width="500"
    align-center
  >
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8kBxYBCPyTEiSKa7zO-XM1CsOV6zXoNEyx4kUE40Ezc54_w/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="modalVisible = false" color="#903727" size="large" plain>Fechar</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style>
iframe {
  width: 100%;
  height: 400px;
  
}
</style>
