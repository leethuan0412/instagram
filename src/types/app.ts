import { AnyAction } from 'redux';

export interface AppState {
  isConnected: boolean;
}

export interface AppActions {
  setConnection: (isConnected: boolean) => AnyAction;
}

export type AppTypes = {
  SET_CONNECTION: 'SET_CONNECTION';
};

export enum Category {
  RETAIL = 'Retail',
  PROGRAM = 'Program',
  TRIAL = 'Trial',
  EVENT = 'Event',
}
