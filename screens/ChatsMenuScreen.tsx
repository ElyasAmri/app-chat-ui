import React from 'react';
import {Text, View} from "../components/Themed";
import ChatMenuItem from "../components/ChatMenuItem";
import {FlatList, ListRenderItemInfo, StyleSheet, TouchableOpacity} from "react-native";
import useChats from "../hooks/useChats";
import {ChatInfo} from "../types";
import {useNavigation} from "@react-navigation/native";

export default function ChatsMenuScreen() {
  const navigation = useNavigation();
  const chats = useChats();

  const renderItem = ({item: chat} : ListRenderItemInfo<ChatInfo>) =>
      <ChatMenuItem chat={chat}/>

  return (
    <View style={styles.container}>
      <FlatList data={chats}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}/>
      <TouchableOpacity style={styles.addChat} onPress={() => navigation.navigate("AddChatScreen")}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    position: 'relative',
    flex: 1,
  },

  addChat: {
    position: "absolute",
    bottom: 30,
    right: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2dcb34',
    borderRadius: 30,
    width: 50,
    height: 50,
    shadowRadius: 5,
    shadowOffset: {height: .5 , width: 0},
    shadowOpacity: .5
  },

  text: {
    fontSize: 26,
  }
})
