import {Chat} from "../types";
import useChats from "./useChats";
import useUser from "./useUser";

export default function useChat(chatID: string): Chat {
  return useChats(useUser('user1'))
      .find(chat => chat.id === chatID) as Chat;
}
