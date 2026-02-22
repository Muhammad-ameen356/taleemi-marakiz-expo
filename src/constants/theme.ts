import { Platform } from 'react-native';

export const Colors = {
  primary: '#01696C',
  basic: '#1d9fa3',
  lowBasic: '#e1e2e2',
  white: '#ffffff',
  black: '#000000',
  platinum: '#A9FEEC',
  gray: 'gray',
  grayLow: '#d5d5d5',
  red: '#ff0000',
  lightRed: '#ffa8a8',
  
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#01696C',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#01696C',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
  },
};

export const Fonts = {
  urdu: 'NotoNastaliqUrdu',
  urduBold: 'NotoNastaliqUrdu-Bold',
  sans: Platform.select({
    ios: 'system-ui',
    default: 'normal',
  }),
};

export const Theme = {
  colors: Colors,
  fonts: Fonts,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  }
};
