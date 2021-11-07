import { ExpoConfig } from '@expo/config';

// noinspection JSUnusedGlobalSymbols
export default {
  name: "App Chat UI",
  slug: "app-chat-ui",
  version: "0.3.0",
  scheme: "acui",
  userInterfaceStyle: "automatic",
  orientation: "portrait",
  icon: "./assets/expo/images/icon.png",
  splash: {
    image: "./assets/expo/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/expo/images/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  web: {
    favicon: "./assets/expo/images/favicon.png"
  }
} as ExpoConfig
