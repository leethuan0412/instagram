import { useDispatch, useSelector } from 'react-redux';
import { createActions, createReducer } from 'reduxsauce';
import { AppActions, AppState, AppTypes } from 'src/types/app';
import { RootState } from 'src/types/reducer';

const INITIAL_STATE: AppState = {
  isConnected: false,
};

const { Types, Creators } = createActions<AppTypes, AppActions>({
  setConnection: ['isConnected'],
});

export default Creators;

function setConnection(state: AppState, { isConnected }: any) {
  return {
    ...state,
    isConnected,
  };
}

export const reducer = createReducer<AppState>(INITIAL_STATE, {
  [Types.SET_CONNECTION]: setConnection,
});

export function useAppState(): [AppState, AppActions] {
  const dispatch = useDispatch();
  const chatState = useSelector<RootState, AppState>((state) => state.app);
  const actions = {
    setConnection: (isConnected: boolean) =>
      dispatch(Creators.setConnection(isConnected)),
  };

  return [chatState, actions];
}
