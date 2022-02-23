export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD'
  }).format(value);
};
