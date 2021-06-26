import { ExpoConfig } from '@expo/config';

const config : ExpoConfig = {
  name: "new-chat-app",
  slug: "new-chat-app",
  version: "0.1.0",
  userInterfaceStyle: "automatic",
  orientation: "portrait",
  icon: "./assets/expo/icon.png",
  splash: {
    image: "./assets/expo/splash.png",
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
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/expo/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  web: {
    favicon: "./assets/expo/favicon.png"
  }
}

export default config;
