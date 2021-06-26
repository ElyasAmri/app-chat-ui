import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ChatsScreen from "../screens/ChatsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const BottomTabs = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  return (
    <BottomTabs.Navigator tabBarOptions={{labelPosition: 'beside-icon'}}>
      <BottomTabs.Screen name={"Chats"} component={ChatsScreen}/>
      <BottomTabs.Screen name={"Settings"} component={SettingsScreen}/>
    </BottomTabs.Navigator>
  );
}
