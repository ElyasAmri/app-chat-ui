import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import useColorScheme from "./hooks/useColorScheme";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from './navigation'
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// noinspection JSUnusedGlobalSymbols
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if(!isLoadingComplete) return null;

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Navigation colorScheme={colorScheme}/>
        </SafeAreaView>
        <StatusBar backgroundColor={"red"}/>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
