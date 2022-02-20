import firebase  from "firebase";

import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCi_OcmlXl2ZijBPk_qLULmLr48-V93tT0",
  authDomain: "code-classroom-react.firebaseapp.com",
  projectId: "code-classroom-react",
  storageBucket: "code-classroom-react.appspot.com",
  messagingSenderId: "780718441787",
  appId: "1:780718441787:web:304840894d9e8e8647631e",
  measurementId: "G-VS9S6J52X4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;