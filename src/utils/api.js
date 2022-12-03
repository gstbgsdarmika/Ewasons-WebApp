// import { loginStart, loginSuccess } from '../redux/userRedux';

import { loginFailure, loginStart, loginSuccess } from '../redux/userRedux';

/* eslint-disable no-alert */
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

async function getTokenSB() {
  const response = await fetch(`${BASE_URL}/checkoutsb`);

  const responseJson = await response.json();
  // if (responseJson.status !== 'success') {
  //   alert(responseJson.message);
  //   return { error: true, data: null };
  // }
  console.log(responseJson);
  return responseJson;
  // return { error: false, data: responseJson.data };
}

async function createTransactionSB() {
  const { error, snapToken } = await getTokenSB();
  if (!error) {
    console.log(snapToken);
    window.snap.pay(snapToken);
  }
}

async function getToken() {
  const response = await fetch(`${BASE_URL}/checkout`);

  const responseJson = await response.json();
  // if (responseJson.status !== 'success') {
  //   alert(responseJson.message);
  //   return { error: true, data: null };
  // }
  console.log(responseJson);
  return responseJson;
  // return { error: false, data: responseJson.data };
}

// async function login({ email, password }) {
//   const response = await fetch(`${BASE_URL}/auth/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (response.ok !== true) {
//     return { error: true, data: null };
//   }
//   const responseJson = await response.json();
//   return { error: false, data: responseJson.accessToken };
//   // if (responseJson.status !== 'success') {
//   //   alert(responseJson.message);
//   //   return { error: true, data: null };
//   // }
//   // return { error: false, data: responseJson.data };
// }

async function login(dispatch, user) {
  dispatch(loginStart());
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.ok !== true) {
    dispatch(loginFailure());
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  dispatch(loginSuccess(responseJson));
  return { error: false, data: responseJson.accessToken };
  // if (responseJson.status !== 'success') {
  //   alert(responseJson.message);
  //   return { error: true, data: null };
  // }
  // return { error: false, data: responseJson.data };
}

async function createTransaction() {
  const { error, snapToken } = await getToken();
  if (!error) {
    console.log(snapToken);
    window.snap.pay(snapToken, {
      onSuccess(result) {
        /* You may add your own implementation here */
        alert('payment success!');
        console.log(result);
      },
      onPending(result) {
        /* You may add your own implementation here */
        alert('wating your payment!');
        console.log(result);
      },
      onError(result) {
        /* You may add your own implementation here */
        alert('payment failed!');
        console.log(result);
      },
      onClose() {
        /* You may add your own implementation here */
        alert('you closed the popup without finishing the payment');
      },
    });
  }
}

// Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
// window.snap.pay('ec66a542-72d4-4c50-ac06-c09f638b5eb8');
// customer will be redirected after completing payment pop-up

export {
  getProducts,
  getProduct,
  getTokenSB,
  createTransactionSB,
  getToken,
  createTransaction,
  login,
};
