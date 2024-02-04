import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import Api from 'src/services/api';
import { RootState } from 'src/types/reducer';
import PersistConfig from './configs/Persistor';
import RootReducer from './reducer';

const persistedReducer = persistReducer(PersistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: [thunk],
});

const persistor = persistStore(store, undefined, () => {
  const { auth } = store.getState() as unknown as RootState;
  Api.setAuthorizationToken(auth.accessToken);
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;
export default {
  persistor,
  store,
};
