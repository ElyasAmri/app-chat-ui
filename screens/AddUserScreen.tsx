import React, {useState} from 'react';
import {View, Text, TextInput} from "../components/Themed"
import {Button, StyleSheet} from "react-native";
import {db} from "../utilities/Firebase";

export default function AddUserScreen({navigation, route}) {
  const chatID = route.params.id;
  const [input, setInput] = useState("");

  const addUser = async () => {
    const user = await db.ref('users')
        .orderByChild('email')
        .equalTo(input)
        .limitToFirst(1).get()
    const operation = {
      [`users/${user.key}/chats/${chatID}`]: route.params,
      [`chats/${chatID}/members`]: true
    }
    console.log(operation)
    return;
    db.ref().update(operation)
        .catch(console.error);
  }

  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text>Email: </Text>
        <TextInput style={styles.textInput} />
      </View>
      <Button title="Button" onPress={addUser}/>
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
