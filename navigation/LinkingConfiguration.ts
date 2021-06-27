import * as Linking from 'expo-linking';
import {LinkingOptions} from "@react-navigation/native";

const linkingOptions : LinkingOptions =
    {
      prefixes: [Linking.makeUrl('/')],
      config: {
        initialRouteName: "Root",
        screens: {
          Root: {
            screens: {
              App: {
                screens: {
                  MenuNavigation: {
                    screens: {
                      ChatsMenu: 'ChatsMenu',
                      Settings: 'Settings'
                    }
                  },
                  ChatScreen: "ChatScreen"
                }
              },
              Auth: {
                screens: {
                  Login: 'Login'
                }
              }
            }
          },
          NotFound: '*',
        },
      },
    }

export default {...linkingOptions}
