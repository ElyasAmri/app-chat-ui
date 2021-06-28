import React, {useRef} from 'react';
import {TextInput, View} from "../components/Themed";
import {Button, StyleSheet} from "react-native";
import {auth} from "../utilities/Firebase";

export default function LoginScreen() {

  const email = useRef("");
  const password = useRef("");
  const setEmail = (text: string) => email.current = text;
  const setPassword = (text: string) => password.current = text;

  const submit = () => {
    auth.signInWithEmailAndPassword(email.current, password.current);
  }

  return (
    <View>
      <TextInput onChangeText={setEmail} placeholder="Email" bordered style={styles.input} textContentType={'emailAddress'}/>
      <TextInput onChangeText={setPassword} placeholder="Password" bordered style={styles.input} textContentType={'password'}/>
      <Button title="Login" onPress={submit}/>
      <Button title="DS1" onPress={() => auth.signInWithEmailAndPassword("user1@acui.me", "password")}/>
      <Button title="DS2" onPress={() => auth.signInWithEmailAndPassword("user2@acui.me", "password")}/>
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
