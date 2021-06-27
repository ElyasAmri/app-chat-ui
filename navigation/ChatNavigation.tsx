import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen";
import ChatsMenuScreen from "../screens/ChatsMenuScreen";

const Stack = createStackNavigator();

export default function ChatNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatsMenu" component={ChatsMenuScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
