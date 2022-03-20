import firebase from "firebase";
import "firebase/database";

// npm install firebase@8.3.1 --save

const firebaseConfig = {
  apiKey: "AIzaSyDNky_xsbPkY-7EU3BAc4Yn2irMs4Z-2_g",
  authDomain: "user-information-30b87.firebaseapp.com",
  projectId: "user-information-30b87",
  storageBucket: "user-information-30b87.appspot.com",
  messagingSenderId: "538271584478",
  appId: "1:538271584478:web:3390ffd2ccb3055a0f724f",
};

var db = firebase.initializeApp(firebaseConfig);

export default db.database().ref();
