import React, {Component, createRef, forwardRef, RefObject, useRef} from 'react';
import MenuNavigation from "./MenuNavigation";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {AppStackParamList} from "../types";
import {Platform} from "react-native";
import ChatScreen from "../screens/ChatScreen";
import AddChatScreen from "../screens/AddChatScreen";
import AddUserScreen from "../screens/AddUserScreen";
import ChatDropdown from "../components/ChatDropdown";


const Stack = createStackNavigator<AppStackParamList>();

const chatScreenOptions = ({route} : any) => {
  if(Platform.OS === "ios")
    return {title: route.params.name};
  return {
    title: route.params.name,
    headerRight: (_ : any) => <ChatDropdown/>
  };
}

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuNavigation" component={MenuNavigation}/>
      <Stack.Screen name="AddChatScreen" component={AddChatScreen}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen}
                    options={chatScreenOptions}/>
      <Stack.Screen name="AddUserScreen" component={AddUserScreen}
                    options={TransitionPresets.ModalSlideFromBottomIOS}/>
    </Stack.Navigator>
  );
}
