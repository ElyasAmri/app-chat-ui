import React from 'react';
import useChat from "../hooks/useChat";
import {useSelector} from "react-redux";
import {View, Text} from "../components/Themed";
import {FlatList, ListRenderItemInfo, StyleSheet} from "react-native";
import MessageBlock from "../components/MessageBlock";
import MessageInput from "../components/MessageInput";
import {AppStackParamList, Message, UserInfo, RootState} from "../types";
import {StackScreenProps} from "@react-navigation/stack";

export default function ChatScreen({route}: StackScreenProps<AppStackParamList, "ChatScreen">) {
  const user = useSelector<RootState>(state => state.user) as UserInfo;
  const chat = useChat(route.params.id);

  const renderMessageBlock = ({item}: ListRenderItemInfo<Message>) => {
    return <MessageBlock {...item} self={item.sender.id === user.id}/>
  }

  return (
      <View style={styles.container}>
        {!chat ? <Text style={styles.noMessages}>No messages received</Text> :
            <FlatList inverted
                      data={chat.messages ?? []}
                      renderItem={renderMessageBlock}
                      keyExtractor={(item: any) => item.id.toString()}
                      style={styles.messages}/>}
        <MessageInput user={user} chatID={route.params.id}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#093fa5'
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  messages: {
    flex: 1,
  },

  noMessages: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20
  }
})
