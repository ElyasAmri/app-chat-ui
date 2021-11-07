import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {RootStackParamList, RootState} from "../types";
import {ColorSchemeName} from "react-native";
import NotFoundScreen from "../screens/NotFoundScreen";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import {useSelector} from "react-redux";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName})
{
  const auth = useSelector<RootState>(state => state.user.auth);
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  return (
      <NavigationContainer linking={LinkingConfiguration} theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={auth ? AppNavigation : AuthNavigation}/>
          <Stack.Screen name="NotFound" component={NotFoundScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
