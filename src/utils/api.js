const BASE_URL = 'https://web-production-7dfe.up.railway.app/api';
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODE5YTNlMzNhZjYyYjhiYmQ1ZThkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTQzODMxNCwiZXhwIjoxNjY5Njk3NTE0fQ.hpYucrsrcEklFeMt54DMVmHvEmw6BZZR6pGSkmH5rR0';

// function getAccessToken() {
//   return localStorage.getItem('accessToken');
// }

// function putAccessToken(accessToken) {
//   return localStorage.setItem('accessToken', accessToken);
// }

// async function fetchWithToken(url, options = {}) {
//   return fetch(url, {
//     ...options,
//     headers: {
//       ...options.headers,
//       Authorization: `Bearer ${getAccessToken()}`,
//     },
//   });
// }

async function getProducts(category) {
  const response = await fetch(
    category
      ? `${BASE_URL}/products/?categories=${category}`
      : `${BASE_URL}/products`,
  );
  if (response.ok !== true) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/find/${id}`);
  if (response.ok !== true) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

export {
  getProducts,
  getProduct,
};
