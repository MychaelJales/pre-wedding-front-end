<script setup>
const publicKeyMp = process.env.VITE_MP_PUBLIC_KEY;
const props = defineProps({
  preferenceId: {
  }
})
  console.log(props.preferenceId);
const mp = new MercadoPago(publicKeyMp, {
  locale: 'pt-BR',
})

mp.bricks().create("wallet", `wallet_container`, {
  initialization: {
      preferenceId: props.preferenceId,
  },
  customization: {
    texts: {
      valueProp: 'smart_option',
    },
  },
});

</script>

<template>
  <div id="wallet_container"></div>
</template>