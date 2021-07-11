import {ChatInfo, UserInfo, RootState} from "../types";
import {useEffect, useState} from "react";
import {db} from "../utilities/Firebase";
import {useSelector} from "react-redux";

type FirebaseChatInfo = Omit<ChatInfo, "id">;

export default function useChats() : ChatInfo[] {
    const [chats, setChats] = useState<ChatInfo[]>([]);
    const user = useSelector<RootState>(state => state.user) as UserInfo;

    useEffect(() => {
      const userChats = db.ref(`users/${user.id}/chats`);
      userChats.get().then(snapshot => {
        const val = snapshot.val();
        const chats = val ? Object.entries<FirebaseChatInfo>(val)
            .map(([id, obj]) => ({id, ...obj})) : [];
        console.log("Chats : ", chats);
        setChats(chats);
      });
    }, [user.id])

    return chats;
}
