import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVyYA9cOFEORPw_lXknKwsXqA6XB2rwIM",
  authDomain: "swiggyprojectbydevanshu.firebaseapp.com",
  projectId: "swiggyprojectbydevanshu",
  storageBucket: "swiggyprojectbydevanshu.firebasestorage.app",
  messagingSenderId: "491391987881",
  appId: "1:491391987881:web:0e320fc703256ba43a39b8",
  measurementId: "G-C77WVTNFS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export{auth,provider}