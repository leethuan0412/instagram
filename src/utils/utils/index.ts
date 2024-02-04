export const numberHelper = (price: number) => {
  if (price > 0) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return '0';
};
