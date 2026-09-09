// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCITuHiyCoctz4P7woKeFH_VNRbDBPejOI",
  authDomain: "dev-nomad-bfb4d.firebaseapp.com",
  projectId: "dev-nomad-bfb4d",
  storageBucket: "dev-nomad-bfb4d.firebasestorage.app",
  messagingSenderId: "12697395821",
  appId: "1:12697395821:web:e131ada18e6eb2f4425564",
  measurementId: "G-PR7H4X8Q3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);