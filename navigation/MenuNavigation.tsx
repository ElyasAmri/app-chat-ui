import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ChatsMenuScreen from "../screens/ChatsMenuScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {MenuNavigationParamList} from "../types";

const BottomTabs = createBottomTabNavigator<MenuNavigationParamList>();

export default function MenuNavigation() {
  return (
      <BottomTabs.Navigator tabBarOptions={{labelPosition: 'beside-icon'}}>
        <BottomTabs.Screen name={"ChatsMenu"} component={ChatsMenuScreen}/>
        <BottomTabs.Screen name={"Settings"} component={SettingsScreen}/>
      </BottomTabs.Navigator>
  );
}
