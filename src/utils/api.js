// import { loginStart, loginSuccess } from '../redux/userRedux';

import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from '../redux/userRedux';

/* eslint-disable no-alert */
const BASE_URL = 'https://mysterious-wear-fox.cyclic.app/api';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      token: `Bearer ${getAccessToken()}`,
    },
  });
}

async function getUserProducts(sellerId) {
  const response = await fetchWithToken(`${BASE_URL}/products/shop/${sellerId}`);
  if (response.ok !== true) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

async function addProductList(product) {
  const response = await fetchWithToken(`${BASE_URL}/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (response.ok !== true) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

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

async function getTokenSB(transaction) {
  const response = await fetch(`${BASE_URL}/checkoutsb`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });

  if (response.status !== 200) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

async function createTransactionSB(body) {
  const { error, data } = await getTokenSB(body);
  if (!error) {
    window.snap.pay(data.transactionToken, {
      onSuccess(result) {
        /* You may add your own implementation here */
        console.log('payment success!');
        console.log(result);
      },
      onPending(result) {
        /* You may add your own implementation here */
        console.log('wating your payment!');
        console.log(result);
      },
      onError(result) {
        /* You may add your own implementation here */
        console.log('payment failed!');
        console.log(result);
      },
      onClose() {
        /* You may add your own implementation here */
        console.log('you closed the popup without finishing the payment');
      },
    });
  }
}

async function getToken(transaction) {
  const response = await fetch(`${BASE_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });

  if (response.status !== 200) {
    return { error: true, data: null };
  }
  const responseJson = await response.json();
  return { error: false, data: responseJson };
}

async function createTransaction() {
  const { error, snapToken } = await getToken();
  if (!error) {
    window.snap.pay(snapToken, {
      onSuccess(result) {
        /* You may add your own implementation here */
        console.log('payment success!');
        console.log(result);
      },
      onPending(result) {
        /* You may add your own implementation here */
        console.log('wating your payment!');
        console.log(result);
      },
      onError(result) {
        /* You may add your own implementation here */
        console.log('payment failed!');
        console.log(result);
      },
      onClose() {
        /* You may add your own implementation here */
        console.log('you closed the popup without finishing the payment');
      },
    });
  }
}

async function login(dispatch, user) {
  dispatch(loginStart());
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 200) {
    dispatch(loginFailure());
    const errorStatus = response.status;
    return { error: errorStatus, data: null };
  }
  const responseJson = await response.json();
  dispatch(loginSuccess(responseJson));
  return { error: false, data: responseJson };
  // if (responseJson.status !== 'success') {
  //   alert(responseJson.message);
  //   return { error: true, data: null };
  // }
  // return { error: false, data: responseJson.data };
}

async function register(dispatch, user) {
  dispatch(registerStart());
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 200) {
    dispatch(registerFailure());
    const errorStatus = response.status;
    return { error: errorStatus, data: null };
  }
  const responseJson = await response.json();
  dispatch(registerSuccess(responseJson));
  return { error: false, data: responseJson };
}

export {
  getProducts,
  getProduct,
  getUserProducts,
  addProductList,
  getTokenSB,
  createTransactionSB,
  getToken,
  createTransaction,
  login,
  putAccessToken,
  getAccessToken,
  register,
};
