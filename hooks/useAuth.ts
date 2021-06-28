import {useEffect, useState} from 'react';
import {auth} from "../utilities/Firebase";
import firebase from "firebase";

export default function useAuth() {
  const [user, setUser] = useState<firebase.User | null>();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    let abort = false;
    auth.onAuthStateChanged((user) => {
      if(abort) return;
      setUser(user);
      setLogged(!!user);
    });
    return () => {abort = true};
  });
  return [logged, user];
}
