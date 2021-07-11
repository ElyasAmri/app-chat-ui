import firebase from "firebase";
import {setUser, store} from "./Store";

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
{
  const onError = (error:any) => {
    console.log(error);
  }

  const onUserChanged = (user : firebase.User | null) => {
    if(!user) {
      store.dispatch(setUser({id: "", name: "", auth: false}))
      console.log("Auth state changed to "+ store.getState().user.auth);
      return;
    }
    const userRef = db.ref('users/' + user.uid);
    userRef.get().then(snapshot => {
      store.dispatch(setUser({id: snapshot.key, ...snapshot.val(), auth: true}));
      console.log("User : ", store.getState().user, "Auth is now true");
    });
  }

  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(onUserChanged, onError);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
export default firebase;
