export const formatPrice = (price: string) => {
  const regex = /\$\d+(\.\d+)?/;

  const extractedPrice = price.match(regex);

  if (extractedPrice) {
    return extractedPrice[0];
  }

  return price;
};
