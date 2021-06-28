import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtROPD6kECFb2at_9cBfB18JPyd6X2oXw",
  authDomain: "new-chat-app-4e7e8.firebaseapp.com",
  projectId: "new-chat-app-4e7e8",
  storageBucket: "new-chat-app-4e7e8.appspot.com",
  messagingSenderId: "279351705096",
  databaseURL: "https://new-chat-app-4e7e8-default-rtdb.europe-west1.firebasedatabase.app/",
  appId: "1:279351705096:web:375c19fc2126bf00c69bbd",
  measurementId: "G-0MJ1RXQQZF"
}

if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
export default firebase
