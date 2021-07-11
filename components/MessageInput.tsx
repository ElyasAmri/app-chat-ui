import React, {useState} from 'react';
import {db} from "../utilities/Firebase";
import {UserInfo} from "../types";
import {TextInput} from "./Themed";
import {Button, StyleSheet, View} from "react-native";

type Props = {
  user: UserInfo;
  chatID: string;
}

export default function MessageInput({user, chatID}: Props) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    db.ref(`chats/${chatID}/messages`)
        .push({
          sender: {id: user.id, name: user.name},
          content: message,
          timestamp: Date.now()});
    setMessage("");
  }

  return (
      <View style={styles.container}>
        <TextInput bordered value={message} style={styles.messageInput} onChangeText={setMessage}/>
        <Button color="green" title="<>" onPress={sendMessage} disabled={message.length === 0}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 6,
    marginTop: 2,
    marginHorizontal: 6,
    backgroundColor: 'transparent'
  },
  messageInput: {
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginRight: 4,
  }
});
