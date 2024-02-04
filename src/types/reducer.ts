import { IChatState } from './chat';
import { AuthState } from './auth';
import { AppState } from './app';
import { ISearchState } from './search';
import { ICartState } from './cart';

export interface RootState {
  chat: IChatState;
  auth: AuthState;
  app: AppState;
  search: ISearchState;
  cart: ICartState;
}
