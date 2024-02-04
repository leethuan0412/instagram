import { SingleChoiceOption } from 'src/types/controls';
import { ResponseListFormat } from './api';

export interface User {
  id: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
}
export interface AddressWallet {
  result: {
    id: string;
    address: string;
    state: string;
  };
}
export interface OTPEmail {
  result: {
    success: boolean;
  };
}
export interface Terms {
  result: {
    id: number;
    date: string;
    content: string;
    type: number;
  };
}
export interface FaqDetail {
  result: {
    id: number;
    title: string;
    content: string;
    type: number;
  };
}
export interface Faq {
  success: boolean;
  result: FaqItem[];
}

export interface FaqItem {
  id: string;
  title: string;
  type: string;
}
export interface NoticeItem {
  title: string;
  id: number | string | undefined;
  created_at: string;
}

export interface Notice {
  success: boolean;
  result: NoticeItem[];
}
export interface NoticeDetails {
  result: {
    id: number;
    title: string;
    content: string;
    created_at: string;
  };
}
export interface WalletBalance {
  result: wallet;
}
export interface wallet {
  amount: string;
  spendable_amount: string;
  price: string;
  rate: string;
  symbol: string;
  img: string;
}

export interface UserInformation {
  id: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  phone: string;

  // fake
  username: string;
  status: string;
  country?: SingleChoiceOption;
  birthDate: Date;
  phoneNumber: string;
}

export interface ContactForChat {
  groupId: string;
  user: {
    id: string;
    userName: string;
    title: string;
    phone: string;
    image: string;
  };
}

export interface GetUserChatResponseSuccess
  extends ResponseListFormat<ContactForChat> {}
