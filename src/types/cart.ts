import { AnyAction } from 'redux';
import { Product } from 'src/__generated__/types';
import { IProduct } from 'src/features/product-cart/types';
import Screen from 'src/navigation/configs/screen';

export interface IShoppingCart {
  id: number;
  type: string;
  name: string;
  price: number;
  oldPrice: number;
  summary: string;
  startDate?: string;
  user?: {
    id: number;
    name: string;
  };
  optionData: {
    title: string;
    defaultValue: string;
    options: {
      label: string;
      value: string;
    }[];
  }[];
}

export interface ICartState {
  shoppingCart: IProduct[];
}

export interface CartActions {
  addShoppingCart: (cart: IProduct) => AnyAction;
  removeShoppingCart: (cartId: string) => AnyAction;
  setShoppingCart: (data: IProduct[]) => AnyAction;
}

export type CartTypes = {
  ADD_SHOPPING_CART: 'ADD_SHOPPING_CART';
  REMOVE_SHOPPING_CART: 'REMOVE_SHOPPING_CART';
  SET_SHOPPING_CART: 'SET_SHOPPING_CART';
};

export interface ProductConfirmRouteParams {
  data: Product;
  type: string;
  level: any;
}

export interface ProductDetailRouteParams {
  data: string;
  screen: Screen;
  type: undefined | string;
}

export interface CheckoutRouteParams {
  selectedCart: string[];
}

export interface RequestOrder {
  name?: string;
  deliveryAddress?: string;
  detailDeliveryAddress?: string;
  countryCode?: string;
  phoneNumber?: string;
  paymentMethod: string;
  products: [
    {
      productId: string;
      quantity: number;
      optionId: string;
      participantId: string;
      promoteChannel: string[];
      startDate: string;
      note: string;
    },
  ];
}
