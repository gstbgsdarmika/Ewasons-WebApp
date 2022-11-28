const BASE_URL = 'https://web-production-7dfe.up.railway.app';

async function getProducts(category) {
  const response = await fetch(
    category
      ? `${BASE_URL}/api/products/?categories=${category}`
      : `${BASE_URL}/api/products`,
  );
  if (response.ok !== true) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getProducts,
};
