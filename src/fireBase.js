import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_ibpYU35iBPAjoY7Mc9qchYBPkJ74Gzs",
  authDomain: "clone-2-a51ce.firebaseapp.com",
  projectId: "clone-2-a51ce",
  storageBucket: "clone-2-a51ce.appspot.com",
  messagingSenderId: "981440178966",
  appId: "1:981440178966:web:4b864022c21e3ab3c4be37",
};
firebase.initializeApp(firebaseConfig);
export default firebase.auth();
