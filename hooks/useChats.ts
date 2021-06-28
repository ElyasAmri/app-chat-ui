import {Chat} from "../types";
import {useEffect, useState} from "react";
import {db} from "../utilities/Firebase";
//import useUser from "./useUser";

export default function useChats() : Chat[] {
    const [chats, setChats] = useState<Chat[]>([]);
    //const user = useUser();

    useEffect(() => {
        db.ref('chats').get()
            .then(snapshot => {
                const val = snapshot.val();
                const chats = Object.entries<Chat>(val)
                    .map(([key, value]) => ({...value, id: key}))
                setChats(chats)
            })
            .catch(err => console.log(Object.keys(err)))
    }, [])

    return chats;
}
