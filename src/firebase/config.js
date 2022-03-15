import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA-neoiLMvZGRn_4puKl9WP9ShxLp1uSWM",
    authDomain: "fir-a4783.firebaseapp.com",
    projectId: "fir-a4783",
    storageBucket: "fir-a4783.appspot.com",
    messagingSenderId: "694709364717",
    appId: "1:694709364717:web:f158826f1dd8203f49a9e4",
    measurementId: "G-FRZRF6LT1Q"
  };

 export default firebase.initializeApp(firebaseConfig)