export const formatMoney = (value) => {
  if (value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  } else {
    return null
  }
};
