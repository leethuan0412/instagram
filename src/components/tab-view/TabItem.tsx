import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors } from 'src/themes';
import Button, { ButtonProps } from '../button';

export interface ParentProps {
  /**
   * Dense Tab Item
   * @default none
   */
  dense?: boolean;
  /**
   * Additional button style
   * @default none
   * @type `ViewStyle or (active: boolean) => ViewStyle`
   */
  buttonStyle?: ActiveTabItemStyle<ViewStyle>;

  /**
   * Additional button title style
   * @default none
   *  @type TextStyle or (active: boolean) => TextStyle
   */
  titleStyle?: ActiveTabItemStyle<TextStyle>;

  /**
   * Additional Styling for button container.
   * @default none
   * @type ViewStyle or (active: boolean) => ViewStyle
   */
  containerStyle?: ActiveTabItemStyle<ViewStyle>;
  /**
   * @default none
   *
   */
  iconPosition?: ButtonProps['iconPosition'];
}

type ActiveTabItemStyle<T = {}> =
  | ((active: boolean) => StyleProp<T>)
  | StyleProp<T>;

export interface TabItemProps
  extends Omit<
      ButtonProps,
      'buttonStyle' | 'titleStyle' | 'containerStyle' | 'iconContainerStyle'
    >,
    ParentProps {
  /** Allows to define if TabItem is active. */
  active?: boolean;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';

  /**
   * Additional Styling for Icon Component container.
   * @type ViewStyle or (active: boolean) => ViewStyle
   */
  iconContainerStyle?: ActiveTabItemStyle<ViewStyle>;

  /**
   * @hidden true
   */
  _parentProps?: ParentProps;
}

/**
 * They are individual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * @usage
 *
 * ### Active Tab Items
 * ```tsx
 *   <Tab.Item
 *     containerStyle={(active) => ({
 *       backgroundColor: active ? 'red' : undefined,
 *     })}
 *   >
 *     Tab
 *   </Tab.Item>
 * ```
 *
 *  */
export const TabItem = ({
  active,
  _parentProps,
  titleStyle = _parentProps?.titleStyle,
  containerStyle = _parentProps?.containerStyle,
  buttonStyle = _parentProps?.buttonStyle,
  iconPosition = _parentProps?.iconPosition || 'top',
  dense = _parentProps?.dense,
  iconContainerStyle,
  variant,
  title,
  icon,
  ...rest
}: TabItemProps) => {
  /**
   * Allow user to define custom style for active Tab Item.
   * buttonStyle={(active) => ({ backgroundColor: active ? 'red' : 'blue' })}
   */
  const activeProp = React.useCallback(
    (prop: any) => (typeof prop === 'function' ? prop(active) : prop),
    [active],
  );

  const style = useMemo(() => {
    if (variant !== 'primary') {
      return {};
    }

    if (active) {
      return {
        backgroundColor: Colors.state.success,
      };
    }

    return {
      backgroundColor: 'transparent',
    };
  }, [active, variant]);

  return (
    <Button
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityValue={
        typeof title === 'string' ? { text: title } : undefined
      }
      buttonStyle={[styles.buttonStyle, activeProp(buttonStyle)]}
      titleStyle={[
        !dense && styles.titleStyle,
        {
          // color: variant === 'primary' ? 'white' : colors.primary,
          // paddingVertical: !dense && !icon ? 8 : 2,
        },
        activeProp(titleStyle),
      ]}
      containerStyle={[
        styles.containerStyle,
        style,
        activeProp(containerStyle),
      ]}
      iconContainerStyle={activeProp(iconContainerStyle)}
      icon={activeProp(icon)}
      iconPosition={iconPosition}
      title={title}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    paddingVertical: 14,
  },
  containerStyle: {
    flex: 1,
    borderRadius: 0,
  },
  active: {
    backgroundColor: Colors.state.success,
  },
  inactive: {
    backgroundColor: 'transparent',
  },
});

TabItem.displayName = 'Tab.Item';
