import React from 'react';
import MenuNavigation from "./MenuNavigation";
import {createStackNavigator} from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen";
import {AppStackParamList} from "../types";

const Stack = createStackNavigator<AppStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"MenuNavigation"} component={MenuNavigation}/>
      <Stack.Screen name={"ChatScreen"} component={ChatScreen}/>
    </Stack.Navigator>
  );
}
