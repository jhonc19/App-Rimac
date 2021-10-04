export const formatAmount = (amount: number) => {
  const formatAmount = new Intl.NumberFormat('en-US').format(amount);

  return formatAmount;
};