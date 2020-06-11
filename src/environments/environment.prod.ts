export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAWNu0Uk-DYm5A2_-P7f0SEnYd0USLsVFY",
    authDomain: "etikoppa-aacfe.firebaseapp.com",
    databaseURL: "https://etikoppa-aacfe.firebaseio.com",
    projectId: "etikoppa-aacfe",
    storageBucket: "etikoppa-aacfe.appspot.com",
    messagingSenderId: "510040058032",
    appId: "1:510040058032:web:904c0b252eda43b4daf375",
    measurementId: "G-J1H3EGK8HF"
  },
  cloudFunctions : {
    createOrder: 'https://us-central1-etikoppa-aacfe.cloudfunctions.net/createOrder',
    capturePayment: 'https://us-central1-etikoppa-aacfe.cloudfunctions.net/capturePayments'
  },
  RAZORPAY_KEY_ID: 'rzp_test_PYEQ2bi2cL6DYp'
};
