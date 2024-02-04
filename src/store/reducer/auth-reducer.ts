import { useDispatch, useSelector } from 'react-redux';
import { createActions, createReducer } from 'reduxsauce';
import { AuthActions, AuthState, AuthTypes } from 'src/types/auth';
import { RootState } from 'src/types/reducer';
// import Api from 'src/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE: AuthState = {
  accessToken: undefined,
  refreshToken: undefined,
};

const { Types, Creators } = createActions<AuthTypes, AuthActions>({
  setAccessToken: ['accessToken'],
  setRefreshToken: ['refreshToken'],
  clearAccessToken: [],
});

export default Creators;

export function setAccessToken(
  state: AuthState,
  { accessToken }: { accessToken: string },
): AuthState {
  return {
    ...state,
    accessToken,
  };
}

export function setRefreshToken(
  state: AuthState,
  { refreshToken }: { refreshToken: string },
): AuthState {
  return {
    ...state,
    refreshToken,
  };
}

export function clearAccessToken(state: AuthState): AuthState {
  return {
    ...state,
    accessToken: undefined,
    refreshToken: undefined,
  };
}

export const reducer = createReducer<AuthState>(INITIAL_STATE, {
  [Types.SET_ACCESS_TOKEN]: setAccessToken,
  [Types.SET_REFRESH_TOKEN]: setRefreshToken,
  [Types.CLEAR_ACCESS_TOKEN]: clearAccessToken,
});

export function useAuthState(): [AuthState, AuthActions] {
  const dispatch = useDispatch();
  const chatState = useSelector<RootState, AuthState>((state) => state.auth);
  const actions = {
    setAccessToken: (token: string) => {
      // Api.setAuthorizationToken(token);
      AsyncStorage.setItem('access_token', token);
      return dispatch(Creators.setAccessToken(token));
    },
    setRefreshToken: (token: string) => {
      AsyncStorage.setItem('refetch_token', token);
      return dispatch(Creators.setRefreshToken(token));
    },
    clearAccessToken: () => {
      // Api.setAuthorizationToken(undefined);

      AsyncStorage.removeItem('access_token');
      return dispatch(Creators.clearAccessToken());
    },
  };

  return [chatState, actions];
}
