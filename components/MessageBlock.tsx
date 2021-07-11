import React from 'react';
import {Text, View} from "./Themed";
import {StyleSheet} from "react-native";
import {Message} from "../types";

export default function MessageBlock({content, self, sender, timestamp}: Message & { self: boolean }) {
  return (
    <View bordered style={[styles.container, self && styles.selfContainer, self ? styles.curveRight : styles.curveLeft]}>
      {/*<View style={[styles.indicator, self ? styles.indicatorRight : styles.indicatorLeft]}/>*/}
      <Text style={[styles.sender, self ? styles.curveRight : styles.curveLeft]}>{sender.name}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    marginVertical: 4,
    marginHorizontal: 5,
    alignSelf: "baseline",
    maxWidth: "80%",
    position: 'relative'
  },

  curveRight: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  curveLeft: {
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  selfContainer: {
    alignSelf: "flex-end",
    backgroundColor: '#188459'
  },

  indicatorLeft: {
    left: -6,
  },
  indicatorRight: {
    right: -6,
  },

  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 10,
    height: 10,
    backgroundColor: 'yellow',
  },

  sender: {
    fontSize: 12,
    backgroundColor: 'red',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingHorizontal: 4,
    overflow: "hidden"
  },
  content: {paddingHorizontal: 4,},
  timestamp: {fontSize: 10, fontStyle: 'italic', paddingHorizontal: 4},
})
