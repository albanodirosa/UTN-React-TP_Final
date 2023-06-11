import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyBP9PB2Rd7nKzEc9jbFG6aaVOL10_EigEI",
  authDomain: "utn-react-tp-unidad3.firebaseapp.com",
  projectId: "utn-react-tp-unidad3",
  storageBucket: "utn-react-tp-unidad3.appspot.com",
  messagingSenderId: "1098271081821",
  appId: "1:1098271081821:web:5d61436beda370be5dd4b4"
};

firebase.initializeApp(firebaseConfig)

export default firebase