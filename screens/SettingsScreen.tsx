import React from 'react';
import {Text, View} from "../components/Themed";
import {Button, StyleSheet} from "react-native";
import {auth} from "../utilities/Firebase";
import {useSelector} from "react-redux";
import {RootState} from "../types";
import {UserInfo} from "../types";

export default function SettingsScreen() {
  const user = useSelector<RootState>(state => state.user) as UserInfo;

  return (
    <View>
      <View style={styles.info}>
        <Text>id: {user.id}</Text>
        <Text>Name: {user.name}</Text>
      </View>
      <Button title="Logout" onPress={() => auth.signOut()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 10,
  }
})
