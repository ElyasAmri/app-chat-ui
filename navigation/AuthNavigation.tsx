import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {AuthStackParamList} from "../types";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
};

export default AuthNavigation;
