import React from 'react';
import {Text, View} from "./Themed";
import {StyleSheet} from "react-native";
import {Message} from "../types";

export default function MessageBlock({content, self, sender, timestamp}: Message & { self: boolean }) {
  return (
    <View bordered style={[styles.container, self && styles.selfContainer, self ? styles.containerCurveRight : styles.containerCurveLeft]}>
      <View style={[styles.senderHolder ,self ? styles.senderCurveRight : styles.senderCurveLeft]}>
        <Text style={styles.sender}>{sender.name}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Text style={[styles.timestamp, self ? styles.textLeft : styles.textRight]}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 5,
    alignSelf: "baseline",
    maxWidth: "80%",
    position: 'relative',
    backgroundColor: '#e0e0e0'
  },

  selfContainer: {
    alignSelf: "flex-end",
    backgroundColor: '#188459'
  },

  containerCurveRight: {
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  containerCurveLeft: {
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  senderCurveRight: {
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 1,
  },

  senderCurveLeft: {
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 1,
  },

  sender: {
    fontSize: 12,
    overflow: "hidden",
  },

  senderHolder: {
    backgroundColor: '#ffc636',
    height: 20,
    paddingHorizontal: 8,
    paddingTop: 2,
  },

  content: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  timestamp: {
    fontSize: 10,
    fontStyle: 'italic',
    minWidth: 100,
    paddingHorizontal: 4,
    paddingBottom: 2,
  },

  textLeft: {
    textAlign: "left",
  },

  textRight: {
    textAlign: 'right',
  }
})
