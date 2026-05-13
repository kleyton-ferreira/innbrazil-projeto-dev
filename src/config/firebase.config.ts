import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAlssJnuzXHCMU_neTKkyymnHh26ZJasf8",
    authDomain: "innbrazil-project.firebaseapp.com",
    projectId: "innbrazil-project",
    storageBucket: "innbrazil-project.firebasestorage.app",
    messagingSenderId: "826701598696",
    appId: "1:826701598696:web:5ef35787f8a3cc6e071e5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)