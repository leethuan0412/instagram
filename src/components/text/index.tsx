import React from 'react';
import { LayoutChangeEvent, TextStyle, Text } from 'react-native';
import styles from './styles';

export interface TextProps {
  children: string | string[] | React.ReactNode[];
  fontSize?: 'tiny' | 'xSmall' | 'small' | 'large' | 'xLarge' | 'xxLarge';
  style?: TextStyle | TextStyle[];
  bold?: 'semiBold' | 'bold';
  color?:
    | 'black'
    | 'darkGrey'
    | 'grey'
    | 'white'
    | 'disabled'
    | 'primary'
    | 'error';
  italic?: boolean;
  numberOfLines?: number;
  onPress?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onTextLayout?: (event: any) => void;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export default function TextComponent(props: TextProps) {
  const {
    children,
    fontSize,
    style,
    bold,
    italic,
    numberOfLines,
    onPress,
    onLayout,
    onTextLayout,
    adjustsFontSizeToFit,
    color,
    allowFontScaling,
    maxFontSizeMultiplier = 0,
    ellipsizeMode,
  } = props;

  return (
    <Text
      style={[
        styles.text,
        bold ? styles[bold] : null,
        fontSize ? styles[fontSize] : null,
        italic ? styles.italic : null,
        color ? styles[color] : null,
        style,
      ]}
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      numberOfLines={numberOfLines}
      onPress={onPress}
      onLayout={onLayout}
      ellipsizeMode={ellipsizeMode}
      onTextLayout={onTextLayout}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
    >
      {children}
    </Text>
  );
}
