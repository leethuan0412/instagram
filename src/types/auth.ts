import { AnyAction } from 'redux';

export interface User {
  accessToken?: string;
}

export interface IAppConfig {
  id: string;
  code: string;
  name: string;
  logo: string;
  businessName: string;
  companyEmail: string;
  phone: string;
  address: string;
  links: [
    {
      title: string;
      text: string;
      type: string;
    },
  ];
  homepage: {
    banner: string;
    trialTagline: string;
    programTagline: string;
    retailTagline: string;
    eventTagline: string;
  };
}

export interface AuthState {
  accessToken?: string;
  refreshToken?: string;
}

export interface AuthActions {
  setAccessToken: (accessToken: string) => AnyAction;
  setRefreshToken: (refreshToken: string) => AnyAction;
  clearAccessToken: () => AnyAction;
}

export type AuthTypes = {
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN';
  SET_REFRESH_TOKEN: 'SET_REFRESH_TOKEN';
  CLEAR_ACCESS_TOKEN: 'CLEAR_ACCESS_TOKEN';
};

export const NON_MEMBER_TOKEN = 'non-member';
