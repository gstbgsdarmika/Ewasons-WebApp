function currencyFormatter(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number).replace(/(\.|,)00$/g, '');
}

function ratingFormatter(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

export {
  currencyFormatter,
  ratingFormatter,
};
