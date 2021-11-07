import React, {useRef, useState} from 'react';
import {Text, TextInput, View} from "../components/Themed";
import {ActivityIndicator, Button, StyleSheet} from "react-native";
import {auth} from "../utilities/Firebase";
import {useNavigation} from "@react-navigation/native";

export default function LoginScreen() {
  const email = useRef("");
  const password = useRef("");
  const nav = useNavigation();
  const [overlay, setOverlay] = useState(false);
  const setEmail = (text: string) => email.current = text;
  const setPassword = (text: string) => password.current = text;

  const tempSubmit = (email: string, password: string) => {
    console.log("Temp signing")
    setOverlay(false);
    auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
          setOverlay(true);
          console.log("Failed to login", err)
        });
  }

  const submit = () => {
    setOverlay(true);
    auth.signInWithEmailAndPassword(email.current, password.current)
        .then(_ => console.log("Signed in"))
        .catch(err => {
          setOverlay(false);
          console.log("Failed to login", err)
        });
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setEmail} placeholder="Email" bordered style={styles.input} textContentType={'emailAddress'}/>
      <TextInput onChangeText={setPassword} placeholder="Password" bordered style={styles.input} textContentType={'password'}/>
      <Button title="Login" onPress={submit}/>
      <Button title="DS1" onPress={() => tempSubmit("user1@acui.me", "password")}/>
      <Button title="DS2" onPress={() => tempSubmit("user2@acui.me", "password")}/>
      <Button title="Signup" onPress={() => nav.navigate("Signup")}/>
      <Text>{overlay ? 'true' : 'false'}</Text>
      {overlay &&
      <View style={styles.overlay}>
        <ActivityIndicator size="small" color="blue"/>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginVertical: 2,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },

  container: {
    flex: 1,
  },

  overlay: {
    position: 'absolute',
    backgroundColor: "rgba(31,31,31,0.1)",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
