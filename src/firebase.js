import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6cleqI4IrWj-laRsAqA8TwViSx-DnRAM",
  authDomain: "ayg-react-6c934.firebaseapp.com",
  databaseURL: "https://ayg-react-6c934-default-rtdb.firebaseio.com/",
  projectId: "ayg-react-6c934",
  storageBucket: "ayg-react-6c934.appspot.com",
  messagingSenderId: "699784120785",
  appId: "1:699784120785:web:ae7d6eb8b139ba2a4478f0"  
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const database = getDatabase(app);
