import React, {useRef, useState} from 'react';
import {TextInput, View} from "../components/Themed";
import {Button, StyleSheet} from "react-native";
import {auth} from "../utilities/Firebase";

export default function LoginScreen() {
  const email = useRef("");
  const password = useRef("");
  const [submitting, setSubmitting] = useState(false);
  const setEmail = (text: string) => email.current = text;
  const setPassword = (text: string) => password.current = text;

  const tempSubmit = (email: string, password: string) => {
    console.log("Temp signing")
    setSubmitting(true);
    auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
          setSubmitting(false);
          console.log("Failed to login", err)
        });
  }

  const submit = () => {
    setSubmitting(true);
    auth.signInWithEmailAndPassword(email.current, password.current)
        .then(_ => console.log("Signed in"))
        .catch(err => {
          setSubmitting(false);
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
      <View style={[styles.overlay, !submitting && {display: "none"}]}/>
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
  }
})
