const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyClcgMTjAAD1X0Wk97hzy2If1AGCFF4vTI",
    authDomain: "fir-crud-550f5.firebaseapp.com",
    projectId: "fir-crud-550f5",
    storageBucket: "fir-crud-550f5.appspot.com",
    messagingSenderId: "207841421257",
    appId: "1:207841421257:web:d59fa426f657cb350e6a18"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   var ref = fb.firestore().ref('product');
const db=firebase.firestore();

module.exports = { db };

// export const db = fb.firestore();