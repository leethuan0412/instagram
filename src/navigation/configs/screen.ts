import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { KeyboardType } from 'react-native';
import { MainStackScreenProps } from 'src/navigation/configs/screen-props';
import { NumberSchema, StringSchema } from 'yup';
import { SingleChoiceOption } from 'src/types/controls';

enum Screen {
  HOME = 'HOME_SCREEN',
  CHAT = 'CHAT',
  LOGIN = 'LOGIN',
  STORY = 'STORY',
}

export type ScreenPropsWithNavigation<
  TScreen extends keyof MainStackScreenProps = any,
  ScreenProps extends ParamListBase = MainStackScreenProps,
> = NativeStackScreenProps<ScreenProps, TScreen>;

export type ScreenPropsWithRoute<
  TScreen extends keyof MainStackScreenProps = any,
  ScreenProps extends ParamListBase = MainStackScreenProps,
> = {
  route: RouteProp<ScreenProps, TScreen>;
} & ScreenPropsWithNavigation<TScreen, ScreenProps>;

export enum ScreenPropsType {
  Default,
  WithRoute,
  Any,
}

export type MainScreenProps<
  TScreen extends keyof MainStackScreenProps = any,
  TScreenPropsType extends ScreenPropsType = ScreenPropsType.Default,
  ScreenProps extends ParamListBase = MainStackScreenProps,
> = TScreenPropsType extends ScreenPropsType.Default
  ? ScreenPropsWithNavigation<TScreen, ScreenProps>
  : TScreenPropsType extends ScreenPropsType.WithRoute
  ? ScreenPropsWithRoute<TScreen, ScreenProps>
  : ScreenPropsWithRoute<any, any>;

export type SingleChoiceSelectionProps = {
  onSelected: (data: SingleChoiceOption, index: number) => void;
  listOfOptions: SingleChoiceOption[];
  screenTitle: string;
  searchable?: boolean;
};

export type TextInputProps = {
  screenTitle: string;
  rules: StringSchema | NumberSchema;
  onSubmit: (value: string) => void;
  multiline?: boolean;
  keyboardType?: KeyboardType;
  placeholder?: string;
};

export enum NavigatorRouter {
  BOTTOM_TAB = 'TAB',
  NO_BOTTOM_TAB = 'NO_BOTTOM',
}

export enum Tabs {
  HOME = 'HOME_TAB',
  ADD = 'ADD',
  ACCOUNT = 'ACCOUNT_TAB',
  SEARCH = 'SEARCH',
  MEDIA = 'MEDIA',
}

export enum HeaderTitles {
  CART = '장바구니',
}

export default Screen;
