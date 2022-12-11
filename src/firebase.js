// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDuvHRryq31YKKdCCzCne2Ytc6TCRthS-I',
  authDomain: 'ewasons-web.firebaseapp.com',
  projectId: 'ewasons-web',
  storageBucket: 'ewasons-web.appspot.com',
  messagingSenderId: '516693443122',
  appId: '1:516693443122:web:62b23f3c15489bcfacf22b',
  measurementId: 'G-06ZDVQRCVJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
