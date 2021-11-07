import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from "./Themed";
import {Image, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ChatInfo, Message, UserInfo, RootState} from "../types";
import {db, storage} from "../utilities/Firebase";
import {useSelector} from "react-redux";

export default function ChatMenuItem({chat}: {chat: ChatInfo}) {
  const navigation = useNavigation();
  const user = useSelector<RootState>(state => state.user) as UserInfo;

  const [image, setImage] = useState("");
  const [last, setLast] = useState<Message>();
  const lastMessage = last ?
      ((last.sender.id === user.id ? "You" : last.sender.name) + ' said: ' + last.content)
      : 'No message'

  useEffect(() => {
    if(chat.image){
      storage.refFromURL(chat.image).getDownloadURL().then(setImage);}
    db.ref(`chats/${chat.id}/messages`).limitToLast(1)
        .on('value', snapshot => {
          const val = snapshot.val();
          setLast(val ? Object.values(val)[0] as Message : undefined);
        });
  }, []);

  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ChatScreen", {id: chat.id, name: chat.name})}}
                      bordered={true} style={styles.container}>
      <Image resizeMethod="scale" style={styles.image} source={
        image ? {uri: image} :
        require('../assets/images/qm.png')
      }/>
      <View style={styles.details}>
        <Text style={styles.name}>{chat.name}</Text>
        <Text style={styles.status}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 100,
    marginVertical: 2,
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
    flexDirection: "row"
  },
  image: {
    height: "100%",
    maxWidth: 90,
    aspectRatio: 1,
    backgroundColor: '#4e4e4e',
    borderRadius: 50,
  },
  details: {
    flexDirection: "column",
    paddingHorizontal: 10
  },

  name: {
    fontSize: 20,
  },

  status: {
    fontSize: 12,
    marginLeft: 4,
  }
})
