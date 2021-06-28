import React from 'react';
import {View} from "../components/Themed";
import ChatMenuItem from "../components/ChatMenuItem";
import {FlatList, ListRenderItemInfo, StyleSheet} from "react-native";
import useChats from "../hooks/useChats";
import {Chat} from "../types";

export default function ChatsMenuScreen() {
  const chats = useChats();

  const renderItem = ({item: chat} : ListRenderItemInfo<Chat>) =>
      <ChatMenuItem chat={chat}/>

  return (
    <View style={styles.container}>
      <FlatList data={chats}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  }
})
