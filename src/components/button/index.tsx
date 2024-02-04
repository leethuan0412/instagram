/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ColorValue,
  GestureResponderEvent,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  TextProps,
} from 'react-native';
import { Colors, Fonts, Metrics } from 'src/themes';
import { DebugHelper } from 'src/utils';
import Text from '../text';

const defaultLoadingProps = (
  type: 'solid' | 'clear' | 'outline',
): ActivityIndicatorProps => ({
  color: type === 'solid' ? 'white' : Colors.primary,
  size: 'small',
});

const positionStyle = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'row',
  right: 'row-reverse',
};

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /** Add button title. */
  title?: string | React.ReactElement<{}>;

  /** Add additional styling for title component. */
  titleStyle?: StyleProp<TextStyle>;

  /** Add additional props for Text component. */
  titleProps?: TextProps;

  /** Add additional styling for button component. */
  buttonStyle?: StyleProp<ViewStyle>;

  /** Type of button. */
  type?: 'solid' | 'clear' | 'outline';

  /** Prop to display a loading spinner. */
  loading?: boolean;

  /** Add additional styling for loading component. */
  loadingStyle?: StyleProp<ViewStyle>;

  /** Add additional props for ActivityIndicator component. */
  loadingProps?: ActivityIndicatorProps;

  /** Styling for Component container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well). Can be an object or a custom component. */
  icon?: ReactElement;

  /** Styling for Icon Component container. */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /** Displays Icon to the right of title. Needs to be used along with `icon` prop. */
  iconRight?: boolean;

  /** Displays a linear gradient. See [usage](#linear-gradient). */
  linearGradientProps?: object;

  /** Component for user interaction. */
  TouchableComponent?: typeof React.Component;

  /** Component for container. */
  ViewComponent?: typeof React.Component;

  /** Disables user interaction. */
  disabled?: boolean;

  /** Style of the button when disabled. */
  disabledStyle?: StyleProp<ViewStyle>;

  /** Style of the title when disabled. */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /** Add raised button styling (optional). Has no effect if `type="clear"`. */
  raised?: boolean;

  /** Displays Icon to the position mentioned. Needs to be used along with `icon` prop. */
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';

  /** Uppercase button title */
  uppercase?: boolean;

  /** Radius of button
   * @type   number | sm | md | lg
   */
  radius?: number;

  /** Button size */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Color of Button
   * @type   string | primary | secondary | success | warning | error
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'disabled';
}

export default function Button({
  TouchableComponent,
  containerStyle,
  onPress = () => {},
  buttonStyle,
  type = 'solid',
  loading = false,
  loadingStyle,
  loadingProps: passedLoadingProps,
  radius = 8,
  uppercase = false,
  color = 'primary',
  title = '',
  titleProps = {},
  titleStyle: passedTitleStyle,
  icon,
  iconContainerStyle,
  iconRight = false,
  disabled = false,
  disabledStyle,
  disabledTitleStyle,
  raised = false,
  linearGradientProps,
  ViewComponent = View,
  iconPosition = 'left',
  children = title,
  ...rest
}: ButtonProps) {
  useEffect(() => {
    if (linearGradientProps && !ViewComponent) {
      DebugHelper.LOG_IF_DEV(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}",
      );
    }
  });

  const handleOnPress = useCallback(
    (evt: GestureResponderEvent) => {
      if (!loading && !disabled) {
        onPress(evt);
      }
    },
    [loading, onPress, disabled],
  );

  // Refactor to Pressable
  const TouchableComponentInternal =
    TouchableComponent ||
    Platform.select({
      android: linearGradientProps ? TouchableOpacity : TouchableNativeFeedback,
      default: TouchableOpacity,
    });

  const titleStyle: StyleProp<TextStyle> = useMemo(
    () =>
      StyleSheet.flatten([
        {
          color: type === 'solid' ? 'white' : Colors.primary,
        },
        uppercase && { textTransform: 'uppercase' },
        styles.title,
        passedTitleStyle,
        disabled && {
          color: Colors.gray[100],
        },
        disabled && disabledTitleStyle,
      ]),
    [disabled, disabledTitleStyle, passedTitleStyle, type, uppercase],
  );

  const background =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple(titleStyle?.color as ColorValue, false)
      : undefined;

  const loadingProps: ActivityIndicatorProps = useMemo(
    () => ({
      ...defaultLoadingProps(type),
      ...passedLoadingProps,
    }),
    [passedLoadingProps, type],
  );

  const accessibilityState = useMemo(
    () => ({
      disabled: !!disabled,
      busy: !!loading,
    }),
    [disabled, loading],
  );

  const borderRadius = radius;

  const buttonColor = useMemo(() => {
    switch (color) {
      case 'primary':
        return Colors.primary;
      case 'error':
        return Colors.state.error;
      case 'success':
        return Colors.state.success;
      case 'secondary':
        return Colors.secondary;
      case 'warning':
        return Colors.state.warning;
      case 'disabled':
        return Colors.gray[400];

      default:
        return Colors.primary;
    }
  }, [color]);

  return (
    <View
      style={[
        styles.container,
        { borderRadius },
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
      ]}
      testID="RNE_BUTTON_WRAPPER"
    >
      <TouchableComponentInternal
        onPress={handleOnPress}
        delayPressIn={0}
        activeOpacity={0.3}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled}
        background={background}
        {...rest}
      >
        <ViewComponent
          {...linearGradientProps}
          style={StyleSheet.flatten([
            styles.button,
            {
              padding: 16,
              paddingHorizontal: Metrics.baseMargin + 2,
              // paddingVertical: 16,
              borderRadius,
              // flex direction based on iconPosition
              // if iconRight is true, default to right
              flexDirection:
                positionStyle[iconRight ? 'right' : iconPosition] || 'row',
              backgroundColor:
                type === 'solid'
                  ? buttonColor || Colors.primary
                  : 'transparent',
              borderColor: Colors.primary,
              borderWidth: type === 'outline' ? 1 : 0,
            },
            buttonStyle,
            disabled &&
              type === 'solid' && {
                backgroundColor: Colors.gray[300],
              },
            disabled &&
              type === 'outline' && {
                borderColor: Colors.gray[300],
              },
            disabled && disabledStyle,
          ])}
        >
          {/* Activity Indicator on loading */}
          {loading && (
            <ActivityIndicator
              style={StyleSheet.flatten([styles.loading, loadingStyle])}
              color={loadingProps.color}
              size={loadingProps.size}
              {...loadingProps}
            />
          )}
          {/* Button Icon, hide Icon while loading */}
          {/* {!loading &&
            icon &&
            renderNode(Icon, icon, {
              containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
              ]),
            })} */}
          {/* Title for Button, hide while loading */}
          {!loading &&
            React.Children.toArray(children).map((child, index) => (
              <React.Fragment key={String(index)}>
                {typeof child === 'string' ? (
                  <Text bold="bold" style={[titleStyle, titleProps]}>
                    {child}
                  </Text>
                ) : (
                  child
                )}
              </React.Fragment>
            ))}
        </ViewComponent>
      </TouchableComponentInternal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: Metrics.baseMargin,
  },
  container: {
    overflow: 'hidden',
  },
  title: {
    fontSize: Fonts.size.H2,
    textAlign: 'center',
    paddingVertical: 1,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      default: {
        fontSize: 18,
      },
    }),
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: {
    backgroundColor: '#fff',
    overflow: 'visible',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  loading: {
    marginVertical: 2,
  },
});

Button.displayName = 'Button';
