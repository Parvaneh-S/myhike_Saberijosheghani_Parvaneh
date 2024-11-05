//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyASHSt-KLdTzAFu-YxerxclST4QBoq2ISI",
    authDomain: "comp1800-202430-demo-6031e.firebaseapp.com",
    projectId: "comp1800-202430-demo-6031e",
    storageBucket: "comp1800-202430-demo-6031e.firebasestorage.app",
    messagingSenderId: "30857999342",
    appId: "1:30857999342:web:52de8395ba042a531b94ff"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
