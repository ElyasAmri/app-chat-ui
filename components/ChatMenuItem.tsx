import React from 'react';
import {Text, TouchableOpacity, View} from "./Themed";
import {Image, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Chat} from "../types";

export default function ChatMenuItem({chat}: {chat: Chat}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ChatScreen", {chatID: chat.id})}}
                      bordered={true} style={styles.container}>
      {chat.image ?
          <Image style={styles.image} source={{uri: chat.image}}/> :
          <View style={styles.image}/>
      }
      <View style={styles.details}>
        <Text style={styles.name}>{chat.name}</Text>
        {/*<Text style={styles.status}>{chat.lastMessage}</Text>*/}
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
    aspectRatio: 1,
    backgroundColor: 'red',
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
    fontSize: 12
  }
})
