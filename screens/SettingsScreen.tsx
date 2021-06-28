import React from 'react';
import {View} from "../components/Themed";
import {Button} from "react-native";
import {auth} from "../utilities/Firebase";

export default function SettingsScreen() {
  return (
    <View>
      <Button title="Logout" onPress={() => auth.signOut()}/>
    </View>
  );
}
