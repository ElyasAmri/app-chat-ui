import React from 'react';
import {Text, View} from "./Themed";
import {StyleSheet} from "react-native";
import {Message} from "../types";



export default function MessageBlock({content, self, sender, timestamp}: Message & { self: boolean }) {
  return (
    <View bordered style={[styles.container, self && styles.selfContainer]}>
      <Text style={styles.sender}>{sender.name}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.timestamp}>{timestamp.toLocaleTimeString()}</Text>
      <View style={self ? styles.indicatorRight : styles.indicatorLeft}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    marginVertical: 4,
    borderRadius: 5,
    marginHorizontal: 5,
    paddingHorizontal: 4,
    alignSelf: "baseline",
    maxWidth: "80%",
    position: 'relative'
  },

  indicatorLeft: {
    position: 'absolute',
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: 'yellow'
  },

  indicatorRight: {
    position: 'absolute',
    right: -5,
    width: 10,
    height: 10,
    backgroundColor: 'yellow'
  },

  selfContainer: {
    alignSelf: "flex-end",
    backgroundColor: 'green'
  },

  sender: {fontSize: 12, backgroundColor: 'red'},
  content: {},
  timestamp: {fontSize: 10, fontStyle: 'italic'},
})
