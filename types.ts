export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
}

export type AppStackParamList = {
  ChatScreen: {chatID: string};
  MenuNavigation: undefined;
}

export type MenuNavigationParamList = {
  ChatsMenu: undefined;
  Settings: undefined;
}

export type AuthStackParamList = {
  Login: undefined;
}

export type User = {
  id: string;
  name: string;
  chats: string[];
}

export type Chat = {
  id: string;
  image: string;
  name: string;
  members: User[];
  messages: Message[];
}

export type Message = {
  id: string;
  sender: any;
  content: string;
  timestamp: number | Date;
}
