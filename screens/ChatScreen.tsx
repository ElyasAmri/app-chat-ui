import React from 'react';
import {AppStackParamList, Message} from "../types";
import useChat from "../hooks/useChat";
import {FlatList, ListRenderItemInfo, StyleSheet} from "react-native";
import MessageBlock from "../components/MessageBlock";
import {View} from "../components/Themed";
import {StackScreenProps} from "@react-navigation/stack";
import {auth} from "../utilities/Firebase";

export default function ChatScreen({route}: StackScreenProps<AppStackParamList, "ChatScreen">) {
  const userID = auth.currentUser?.uid;
  const chat = useChat(route.params.chatID)

  const renderMessageBlock = ({item}: ListRenderItemInfo<Message>) => {
    return <MessageBlock {...item} self={item.sender.id === userID}/>
  }

  if(!chat) return <></>;

  return (
    <View style={styles.container}>
      <FlatList inverted
                data={chat.messages}
                renderItem={renderMessageBlock}
                keyExtractor={(item: any) => item.id.toString()}
                style={styles.messages}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#093fa5'
  },
  messages: {

  }
})
