const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const dateFormatter = new Intl.DateTimeFormat('en-US',{
  dateStyle: 'medium',
  timeStyle: 'medium',
  timeZone: 'Australia/Sydney'
});

export { currencyFormatter, dateFormatter };
