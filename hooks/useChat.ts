import {Chat, Message} from "../types";
import {useEffect, useState} from "react";
import {db} from "../utilities/Firebase";

type FirebaseMessageObject = Omit<Message, "id">;
type FirebaseChatObject = Omit<Chat, "messages"> & {messages: {[id: string]: FirebaseMessageObject}};

export default function useChat(chatID: string): Chat {
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    db.ref('chats/'+chatID).on('value', (snapshot) => {
      const {messages, id, ...rest} : FirebaseChatObject  = snapshot.val();
      const messagesMapped = Object.entries<FirebaseMessageObject>(messages)
          .map(([id, value]) => ({id, ...value}))
          .sort((l:Message, r:Message) => {return l.timestamp < r.timestamp ? 1 : -1})

      setChat({id: snapshot.key as string, ...rest, messages: messagesMapped});
    })
  }, []);

  return chat as Chat;
}
