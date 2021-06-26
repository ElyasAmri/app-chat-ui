import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {RootStackParamList} from "../types";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import NotFoundScreen from "../screens/NotFoundScreen";
import {ColorSchemeName} from "react-native";
import BottomTabsNavigation from "./BottomTabsNavigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName})
{
  return (
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={BottomTabsNavigation}/>
          <Stack.Screen name="NotFound" component={NotFoundScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
