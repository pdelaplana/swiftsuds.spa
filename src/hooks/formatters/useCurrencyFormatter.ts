export const useCurrencyFormatter = () : { currencyFormatter: (amount: number) => string } => {
  const currencyFormatter = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
  };

  return {
    currencyFormatter: (amount: number) => currencyFormatter(amount)
  };
};
