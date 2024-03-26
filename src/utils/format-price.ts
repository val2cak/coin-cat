export const formatPrice = (price: string | number) => {
  const priceString = typeof price === 'number' ? price.toString() : price;

  if (priceString.includes('<sub')) {
    const formattedPriceString = priceString.replace(
      /<sub[^>]*>.*?<\/sub>/g,
      ''
    );

    if (formattedPriceString.trim() === '') {
      return '$0';
    }

    return formattedPriceString;
  }

  if (priceString.startsWith('$')) {
    return priceString;
  }

  const formattedPrice = parseFloat(priceString).toFixed(5);
  return `$${formattedPrice}`;
};
