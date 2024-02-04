export interface IProfileState {
  profileData?: IProfileInfo;
  participantData?: IStudent[];
  participantInfo?: IStudent;
}
export interface IProfileInfo {
  platform: 'apple' | 'google' | 'facebook';
  id: string;
  email: string;
  clientCode: string;
  name: string;
  profileImageUrl?: string;
  emailVerified?: boolean;
  countryCode?: string;
  phoneNumber?: string;
  address?: string;
  isActive?: boolean;
  deliveryAddress?: string;
  isOrderDefaultAddress?: boolean;
}

export interface IParticipants {
  metadata?: Metadata;
  data?: IStudent[];
}

export interface Metadata {
  page: number;
  limit: number;
  totalRecords: number;
  totalPages: number;
}

export interface IStudent {
  id?: string;
  name?: string;
  dateOfBirth?: string;
  countryCode?: string;
  phoneNumber?: string;
  profileImageUrl?: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface ICustomerClient {
  id: string;
  code: string;
  name: string;
  logo: string;
  businessName: string;
  companyEmail: string;
  companyPhone: string;
  address: string;
  links: {
    title: string;
    text: string;
    type: string;
  }[];
  homepage: {
    banner: string;
  };
  lightLogo: string;
  darkLogo: string;
}
