import React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  TouchableOpacity as DefaultTouchableOpacity,
} from 'react-native';
import {SafeAreaView as DefaultSafeAreaView} from 'react-native-safe-area-context';
import {NativeSafeAreaViewProps} from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  bordered?: boolean;
};

export function Text(props: ThemeProps & DefaultText['props']) {
  const { style, lightColor, darkColor,bordered, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  if (bordered) {
    const borderColor = useThemeColor({light: lightColor, dark: darkColor}, 'border');
    return <DefaultText style={[{ color }, {borderColor}, style]} {...otherProps} />;
  }

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props: ThemeProps & DefaultTextInput['props']) {
  const { style, lightColor, darkColor,bordered, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  if (bordered) {
    const borderColor = useThemeColor({light: lightColor, dark: darkColor}, 'border');
    return <DefaultTextInput placeholderTextColor={color} style={[{ color }, {borderColor}, style]} {...otherProps} />;
  }

  return <DefaultTextInput placeholderTextColor={color} style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ThemeProps & DefaultView['props']) {
  const { style, lightColor, darkColor,bordered, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  if (bordered) {
    const borderColor = useThemeColor({light: lightColor, dark: darkColor}, 'border');
    return <DefaultView style={[{ backgroundColor }, { borderColor }, style]} {...otherProps} />;
  }

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: ThemeProps & DefaultTouchableOpacity['props']) {
  const { style, lightColor, darkColor,bordered, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  if (bordered) {
    const borderColor = useThemeColor({light: lightColor, dark: darkColor}, 'border');
    return <DefaultTouchableOpacity style={[{ backgroundColor }, { borderColor }, style]} {...otherProps} />;
  }

  return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SafeAreaView(props: ThemeProps & NativeSafeAreaViewProps) {
  const { style, lightColor, darkColor,bordered, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  if (bordered) {
    const borderColor = useThemeColor({light: lightColor, dark: darkColor}, 'border');
    return <DefaultSafeAreaView style={[{ backgroundColor }, { borderColor }, style]} {...otherProps} />;
  }

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
