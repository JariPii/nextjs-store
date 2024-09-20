export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat('se-SE', {
    style: 'currency',
    currency: 'SEK',
  }).format(value);
};
