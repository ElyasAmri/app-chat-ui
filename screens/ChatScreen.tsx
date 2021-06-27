import React, {useEffect, useRef} from 'react';
import useUser from "../hooks/useUser";
import {AppStackParamList} from "../types";
import useChat from "../hooks/useChat";
import {FlatList, StyleSheet} from "react-native";
import MessageBlock from "../components/MessageBlock";
import {View} from "../components/Themed";
import {StackScreenProps} from "@react-navigation/stack";

export default function ChatScreen({route}: StackScreenProps<AppStackParamList, "ChatScreen">) {
  const user = useUser('user1');
  const messages = useRef();
  const chat = useChat(route.params.chatID)


  useEffect(() => {
    setTimeout(() => (messages.current as any).scrollToEnd(), 20)
  }, [])

  const renderMessageBlock = ({item}: any) => {
    return <MessageBlock {...item} self={item.sender.id === user.id}/>
  }

  return (
    <View style={styles.container}>
      <FlatList data={chat.messages}
                ref={messages as any}
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
