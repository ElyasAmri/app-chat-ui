import * as Linking from 'expo-linking';
import {LinkingOptions} from "@react-navigation/native";

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: "Root",
    screens: {
      Root: {
        screens: {
          App: {
            initialRouteName: "MenuNavigation",
            screens: {
              MenuNavigation: {
                initialRouteName: "ChatMenuScreen",
                screens: {
                  ChatMenuScreen: "ChatMenuScreen",
                  SettingsScreen: 'SettingsScreen',
                },
              },
              ChatScreen: 'ChatScreen',
            },
          },
          Auth: {
            initialRouteName: "Login", // TODO: sign up,
            screens: {
              Login: "Login",
              // sign up, forgot password, etc...
            }
          },
        }
      },
      NotFound: '*',
    },
  },
} as LinkingOptions;
