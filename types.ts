import {store} from "./utilities/Store";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
}

export type AppStackParamList = {
  ChatScreen: {id: string; name: string;};
  MenuNavigation: undefined;
  AddChatScreen: undefined;
  AddUserScreen: undefined;
}

export type MenuNavigationParamList = {
  ChatsMenu: undefined;
  Settings: undefined;
}

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
}

export type UserInfo = {
  id: string;
  name: string;
  auth: boolean;
}

export type User = {
  info: UserInfo;
  chats: string[];
}

export type ChatInfo = {
  id: string;
  image: string;
  name: string;
}

export type Chat = {
  info: ChatInfo;
  members: User[];
  messages: Message[];
}

export type Message = {
  id: string;
  sender: UserInfo;
  content: string;
  timestamp: number | Date;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
