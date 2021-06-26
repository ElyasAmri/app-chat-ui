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
              BottomTabs: {
                screens: {
                  Chats: 'Chats',
                  Settings: 'Settings'
                }
              }
            }
          },
          NotFound: '*',
        },
      },
    }

export default {...linkingOptions}
