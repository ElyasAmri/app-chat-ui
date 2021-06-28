import {User} from "../types";
import {auth, db} from "../utilities/Firebase";
import {useEffect, useState} from "react";

export default function useUser() : User{
  const [user, setUser] = useState<User>();

  useEffect(() => {
    db.ref('users/' + auth.currentUser?.uid).get()
        .then((snapshot) => {setUser({id: snapshot.key, ...snapshot.val()})})
    }, [])

  return user as User;
}
