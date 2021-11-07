import React from 'react';
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {AuthStackParamList} from "../types";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen}
                      options={TransitionPresets.ModalSlideFromBottomIOS}/>
      </Stack.Navigator>
  );
};

export default AuthNavigation;
