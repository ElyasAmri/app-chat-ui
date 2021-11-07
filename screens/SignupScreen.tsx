import React, {useState} from 'react';
import {Text, TextInput, View} from "../components/Themed";
import {Button, StyleSheet} from "react-native";
import {auth, db} from "../utilities/Firebase";

export default function SignupScreen() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async () => {
    let noerror = false;
    if(password != confirmPassword)
      alert("Passwords do not match");
    else if(password.length < 8)
      alert("Password must be 8 or more characters");
    else if(email.length * password.length * confirmPassword.length * name.length == 0)
      alert("Please Fill all of the fields")
    else noerror = true;
    if(!noerror) return;

    const key = db.ref().push();
    const userCredential = await auth.createUserWithEmailAndPassword(email, password)
    const operation = {
      [`users/${userCredential.user?.uid}`]: {name, email: userCredential.user?.email}
    }
    try{
      await db.ref().update(operation)
    }
    catch{}
  }
  return (
      <View style={styles.container}>
        <View style={styles.horizontal}>
          <Text>Name</Text>
          <TextInput style={styles.textInput} onChangeText={setName}/>
        </View>
        <View style={styles.horizontal}>
          <Text>Email</Text>
          <TextInput style={styles.textInput} onChangeText={setEmail}/>
        </View>
        <View style={styles.horizontal}>
          <Text>Password</Text>
          <TextInput style={styles.textInput} onChangeText={setPassword}/>
        </View>
        <View style={styles.horizontal}>
          <Text>Confirm Password</Text>
          <TextInput style={styles.textInput} onChangeText={setConfirmPassword}/>
        </View>
        <Button title="Signup" onPress={signup}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // justifyContent: "center",
    // alignItems: "center",
  },

  textInput: {
    backgroundColor: "#e8e8e8",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 30,
    marginLeft: 4,
    flex: 1,
  },

  horizontal: {
    flexDirection: "row",
    marginVertical: 4,
    width: '100%'
  }
});
