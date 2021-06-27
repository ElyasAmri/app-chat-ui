import React from 'react';
import {TextInput, View} from "../components/Themed";
import {Button, StyleSheet} from "react-native";
import storage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  return (
    <View>
      <TextInput placeholder="Email" bordered style={styles.input} textContentType={'emailAddress'}/>
      <TextInput placeholder="Password" bordered style={styles.input} textContentType={'password'}/>
      <Button title="Login" onPress={() => {storage.setItem("@logged", "true")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginVertical: 2,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  }
})
