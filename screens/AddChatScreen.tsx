import React, {useState} from 'react';
import {Text, TextInput, View} from "../components/Themed";
import {Button, Keyboard, StyleSheet} from "react-native";
import {db} from "../utilities/Firebase";
import {Chat, RootState, UserInfo} from "../types";
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";

export default function AddChatScreen() {
  const [name, setName] = useState("");
  const user = useSelector<RootState>(state => state.user) as UserInfo;
  const nav = useNavigation();

  const addChat = () => {
    if(!name) {
      console.log("Tried to create a chat with no name");
      return;
    }

    const info = {name, image: ""}
    db.ref('chats').push({info, messages: [], members: [user.id] })
        .then(async pushed => {
          await db.ref(`users/${user.id}/chats/${pushed.key}`).set(info)
        })
        .then(() => {Keyboard.dismiss(); nav.goBack()});
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Name: </Text>
        <TextInput value={name} bordered onChangeText={setName} style={styles.input} />
      </View>
      <Button title="Add" onPress={addChat}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
  },

  inputContainer: {
    flexDirection: "row",
  },

  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    marginLeft: 10,
    flex: 1,
  }
});
