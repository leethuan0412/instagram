import Text from './text';
import KeyboardLayout from './keyboard-layout';
import Message from './message';
import ChatSection from './chat-section';
import RouterControls from './router-controls';
import Button from './button';
import AlertNetworkFailed from './alert-network-failed';
import DismissKeyboard from './dismiss-keyboard';
import DatePicker, { ModalizeRefType } from './date-picker';
import WrapperModal, { WrapperModalRef } from './wrapper-modal';
import ActionBar from './action-bar';
import BottomSheet, { BottomSheetRef } from './bottom-sheet';
import AppInput from './app-input';
import TextInput from './text-input';
import Modal from './modal';
import Badge from './badge';
import { showLoading, hideLoading } from './loading/LoadingProgressRef';
import ModalBanGuestMode from './modal-ban-guest-mode';
import RibbonAlert, { RibbonAlertRef } from './ribbon-alert';
import MessageBox from './message-box';

export {
  Text,
  KeyboardLayout,
  Message,
  ChatSection,
  RouterControls,
  Button,
  AlertNetworkFailed,
  DismissKeyboard,
  DatePicker,
  WrapperModal,
  ActionBar,
  BottomSheet,
  AppInput,
  TextInput,
  Modal,
  Badge,
  showLoading,
  hideLoading,
  ModalBanGuestMode,
  // showBanGuestMode,
  // hideBanGuestMode,
  RibbonAlert,
  MessageBox,
};

export type { BottomSheetRef, RibbonAlertRef };

export type { ModalizeRefType, WrapperModalRef };
