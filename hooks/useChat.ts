import {Chat, Message} from "../types";
import {useEffect, useState} from "react";
import {db} from "../utilities/Firebase";

type FirebaseMessageObject = Omit<Message, "id">;
type FirebaseChatObject =
    Omit<Chat, "messages"> & {messages: {[id: string]: FirebaseMessageObject}};
const empty = [] as any;

export default function useChat(chatID: string): Chat {
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    const ref = db.ref('chats/'+chatID);
    ref.on('value', (snapshot) => {
      const {messages, info, ...rest} : FirebaseChatObject  = snapshot.val();
      const messagesMapped = !messages ? empty :
          Object.entries<FirebaseMessageObject>(messages)
          .map(([id, value]) => ({id, ...value}))
          .sort((l:Message, r:Message) => l.timestamp < r.timestamp ? 1 : -1);

      setChat({
        info: {...info, id: snapshot.key as string},
        messages: messagesMapped,
        ...rest}
      );
    });
    return () => ref.off();
  }, []);

  return chat as Chat;
}
