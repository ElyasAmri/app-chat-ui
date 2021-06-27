import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {RootStackParamList} from "../types";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import NotFoundScreen from "../screens/NotFoundScreen";
import {ColorSchemeName} from "react-native";
import AppNavigation from "./AppNavigation";
import useUser from "../hooks/useUser";
import AuthNavigation from "./AuthNavigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName})
{
  const user = useUser('user1');

  return (
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={user ? AppNavigation : AuthNavigation}/>
          <Stack.Screen name="NotFound" component={NotFoundScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
