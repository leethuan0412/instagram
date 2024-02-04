export interface IOption {
  id: string;
  optionName: null | string;
  price: number;
  capacity: number;
  stock: number;
  discount: number;
  discountType: string;
}

export interface ILevel {
  id: number;
  levelName: null | string;
  startAt: null | string;
  endAt: null | string;
  brief: null | string;
  options: IOption[];
}

export interface IProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  firstPrice: number;
  lastPrice: number;
  startAt: null | string;
  endAt: null | string;
  type: string;
  imageUrl: string[];
  promoteChannel: string[];
  signUpFee: number;
  chargingDateType: string;
  tax: string;
  taxType: string;
  levels: ILevel[];
  agreement: string;
}

export interface ICart {
  optionId: string;
  quantity: number;
  product: IProduct;
  startDate: string;
  note: string;
  promoteChannel: string[];
  participantId: string;
}

export enum ProductType {
  RETAIL = 'Retail',
  EVENT = 'Event',
  TRIAL = 'Trial',
  PROGRAM = 'Program',
}
