import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'src/themes';

export default StyleSheet.create({
  text: {
    fontWeight: Fonts.weight.normal as any,
    fontSize: Fonts.size.B0,
    color: Colors.gray[900],
    lineHeight: Fonts.lineHeight.B0,
    fontFamily: Fonts.family.Pretendard_Regular,
  },
  semiBold: {
    fontWeight: Fonts.weight.semibold as any,
  },
  bold: {
    fontWeight: Fonts.weight.bold as any,
  },
  italic: {
    fontStyle: 'italic',
  },
  tiny: {
    fontSize: Fonts.size.C1,
    lineHeight: Fonts.lineHeight.C1,
  },
  xSmall: {
    fontSize: Fonts.size.B2,
    lineHeight: Fonts.lineHeight.B2,
  },
  small: {
    fontSize: Fonts.size.B1,
    lineHeight: Fonts.lineHeight.B1,
  },
  large: {
    fontSize: Fonts.size.H2,
    lineHeight: Fonts.lineHeight.H2,
  },
  xLarge: {
    fontSize: Fonts.size.H1,
    lineHeight: Fonts.lineHeight.H1,
  },
  xxLarge: {
    fontSize: Fonts.size.H0,
    lineHeight: Fonts.lineHeight.H0,
  },
  black: {
    color: Colors.black,
  },
  white: {
    color: Colors.white,
  },
  darkGrey: {
    color: 'rgba(0,0,0,.7)',
  },
  grey: {
    color: Colors.gray[500],
  },
  disabled: {
    color: Colors.gray[400],
  },
  primary: {
    color: Colors.primary,
  },
  error: {
    color: Colors.state.error,
  },
});
