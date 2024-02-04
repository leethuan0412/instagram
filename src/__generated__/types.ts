/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdminSignInRequestBodyDto {
  email: string;
  password: string;
  fmcToken?: string;
}

export interface AdminSignInResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface AdminRefreshRequestBodyDto {
  refreshToken: string;
}

export interface AdminRefreshResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface ClientSignUpRequestBodyDto {
  email: string;
  password: string;
}

export interface ClientSignInRequestBodyDto {
  email: string;
  password: string;
  fmcToken?: string;
}

export interface ClientSignInResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface ClientRefreshRequestBodyDto {
  refreshToken: string;
}

export interface ClientRefreshResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface ClientForgotPasswordRequestBodyDto {
  email: string;
}

export interface CustomerResetPasswordRequestBodyDto {
  password: string;
}

export interface ClientGetProfileResponseDto {
  id: string;
  email: string;
  code?: string;
  name: string;
  emailVerified: boolean;
}

export interface Metadata {
  /**
   * current page of request
   * @example 0
   */
  page: number;
  /**
   * limit resources per page of request
   * @example 10
   */
  limit: number;
  /**
   * number of resources
   * @example 12
   */
  totalRecords: number;
  /**
   * number of pages
   * @example 112
   */
  totalPages: number;
}

export interface LevelOption {
  id: number;
  optionName: string;
  price: number;
  capacity?: number;
  discount?: number;
  discountType?: 'Flat' | 'Percent';
  levelId: number;
}

export interface ProductLevel {
  id: number;
  levelName: string;
  /** @format date-time */
  startAt?: string;
  /** @format date-time */
  endAt?: string;
  firstPrice?: number;
  lastPrice?: number;
  brief?: string;
  productId: string;
  options: LevelOption[];
}

export interface Product {
  id: string;
  name: string;
  clientId: string;
  subtitle?: string;
  description: string;
  firstPrice: number;
  lastPrice: number;
  /** @format date-time */
  startAt?: string;
  /** @format date-time */
  endAt?: string;
  type: 'Event' | 'Trial' | 'Program' | 'Retail';
  imageUrl?: string[];
  firstCharge?: number;
  tax?: number;
  taxType?: 'Flat' | 'Percent';
  agreement: string;
  isPublish?: boolean;
  levels: ProductLevel[];
  promoteChannel?: string[];
}

export interface GetListProductsResponseDto {
  metadata: Metadata;
  data: Product[];
}

export interface LevelOptionDto {
  id?: number;
  optionName: string;
  price: number;
  capacity?: number;
  discount?: number;
  discountType?: 'Flat' | 'Percent';
}

export interface ProductLevelDto {
  id?: number;
  levelName: string;
  /** @format date-time */
  startAt?: string;
  /** @format date-time */
  endAt?: string;
  brief?: string;
  options: LevelOptionDto[];
}

export interface CreateProductRequestBodyDto {
  name: string;
  description: string;
  subtitle?: string;
  firstPrice?: number;
  lastPrice?: number;
  type: 'Event' | 'Trial' | 'Program' | 'Retail';
  imageUrl?: string;
  agreement: string;
  levels?: ProductLevelDto[];
}

export interface UpdateProductRequestBodyDto {
  name: string;
  description: string;
  subtitle?: string;
  firstPrice?: number;
  lastPrice?: number;
  type: 'Event' | 'Trial' | 'Program' | 'Retail';
  imageUrl?: string;
  agreement: string;
  levels?: ProductLevelDto[];
  isPublish?: boolean;
}

export interface ClientSendMessageRequestBodyDto {
  /** @default "456920a3-9327-4e59-9057-ac863cfe2f81" */
  messageId?: string;
  customerId: string;
  type: 'text' | 'url' | 'media';
  content: string;
}

export interface CustomerSignInRequestBodyDto {
  email: string;
  password: string;
  clientCode: string;
  fmcToken?: string;
}

export interface CustomerSignInResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface CustomerSignUpRequestBodyDto {
  email: string;
  password: string;
  clientCode: string;
}

export interface SendVerificationEmailRequestBodyDto {
  email?: string;
}

export interface CustomerForgotPasswordRequestBodyDto {
  email: string;
  clientCode: string;
}

export interface SignInSocialRequestBodyDto {
  platform?: 'google' | 'facebook' | 'apple';
  code: string;
  state: string;
  fcmToken?: string;
}

export interface CustomerRefreshRequestBodyDto {
  refreshToken: string;
}

export interface CustomerRefreshResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface GetProfileResponseDto {
  /** @format uri */
  profileImageUrl?: string;
  email: string;
  platform?: 'google' | 'facebook' | 'apple';
  name?: string;
  countryCode?: string;
  phoneNumber?: string;
  address?: string;
  emailVerified: boolean;
}

export interface UpdateProfileRequestBodyDto {
  name: string;
  profileImageUrl?: string;
  countryCode: string;
  phoneNumber: string;
  address?: string;
}

export interface UpdatePasswordRequestBodyDto {
  oldPassword: string;
  newPassword: string;
}

export interface Participant {
  id: string;
  name: string;
  /** @format date-time */
  birthOfDate: string;
  countryCode?: string;
  phoneNumber?: string;
}

export interface GetListParticipantsResponseDto {
  metadata: Metadata;
  data: Participant[];
}

export interface CreateParticipantRequestBodyDto {
  name: string;
  /** @format date-time */
  birthOfDate: string;
  countryCode?: string;
  phoneNumber: string;
  profileImageUrl?: string;
}

export interface CreateParticipantResponseDto {
  id: string;
}

export interface GetDetailParticipantResponseDto {
  id: string;
  name: string;
  /** @format date-time */
  birthOfDate: string;
  countryCode?: string;
  phoneNumber?: string;
  profileImageUrl?: string;
}

export interface UpdateParticipantRequestBodyDto {
  name: string;
  /** @format date-time */
  birthOfDate: string;
  countryCode?: string;
  phoneNumber: string;
  profileImageUrl?: string;
}

export interface GetClientResponseDto {
  id: string;
  code?: string;
  name: string;
}

export interface GetListProductsCustomerResponseDto {
  metadata: Metadata;
  data: Product[];
}

export interface CustomerSendMessageRequestBodyDto {
  /** @default "24ffccf5-2266-4ba5-b248-f852bf4fb302" */
  messageId?: string;
  type: 'text' | 'url' | 'media';
  content: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Best One API
 * @version 1.0
 * @contact
 *
 * The Best One API documents
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  admins = {
    /**
     * No description
     *
     * @tags Admin
     * @name AuthsControllerSignIn
     * @request POST:/admins/auths/sign-in
     */
    authsControllerSignIn: (
      data: AdminSignInRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<AdminSignInResponseDto, any>({
        path: `/admins/auths/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AuthsControllerSignOut
     * @request POST:/admins/auths/sign-out
     */
    authsControllerSignOut: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admins/auths/sign-out`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AuthsControllerRefresh
     * @request POST:/admins/auths/refresh
     * @secure
     */
    authsControllerRefresh: (
      data: AdminRefreshRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<AdminRefreshResponseDto, any>({
        path: `/admins/auths/refresh`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  clients = {
    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerSignUp
     * @request POST:/clients/auths/sign-up
     */
    authsControllerSignUp: (
      data: ClientSignUpRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/auths/sign-up`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerSignIn
     * @request POST:/clients/auths/sign-in
     */
    authsControllerSignIn: (
      data: ClientSignInRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<ClientSignInResponseDto, any>({
        path: `/clients/auths/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerSignOut
     * @request POST:/clients/auths/sign-out
     * @secure
     */
    authsControllerSignOut: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/clients/auths/sign-out`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerRefresh
     * @request POST:/clients/auths/refresh
     */
    authsControllerRefresh: (
      data: ClientRefreshRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<ClientRefreshResponseDto, any>({
        path: `/clients/auths/refresh`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerForgotPassword
     * @request POST:/clients/auths/forgot-password
     */
    authsControllerForgotPassword: (
      data: ClientForgotPasswordRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/auths/forgot-password`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerResetPassword
     * @request POST:/clients/auths/reset-password
     * @secure
     */
    authsControllerResetPassword: (
      data: CustomerResetPasswordRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/auths/reset-password`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerGetProfile
     * @request GET:/clients/auths/profiles
     * @secure
     */
    authsControllerGetProfile: (params: RequestParams = {}) =>
      this.request<ClientGetProfileResponseDto, any>({
        path: `/clients/auths/profiles`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerSendVerificationEmail
     * @request POST:/clients/auths/send-verification-email
     * @secure
     */
    authsControllerSendVerificationEmail: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/clients/auths/send-verification-email`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name AuthsControllerVerifyEmail
     * @request POST:/clients/auths/verification-email
     * @secure
     */
    authsControllerVerifyEmail: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/clients/auths/verification-email`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ProductsControllerGetListProducts
     * @request GET:/clients/products
     * @secure
     */
    productsControllerGetListProducts: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number;
        /**
         * number of resources per page
         * @min 10
         * @max 100
         * @default 10
         */
        limit?: number;
        /** @default [] */
        types?: string;
        search?: string;
        /** @default "DESC" */
        sortCreatedDate?: 'ASC' | 'DESC';
        sortPrice?: 'ASC' | 'DESC';
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListProductsResponseDto, any>({
        path: `/clients/products`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ProductsControllerCreateProduct
     * @request POST:/clients/products
     * @secure
     */
    productsControllerCreateProduct: (
      data: CreateProductRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/products`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ProductsControllerGetProduct
     * @request GET:/clients/products/{productId}
     * @secure
     */
    productsControllerGetProduct: (
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<Product, any>({
        path: `/clients/products/${productId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ProductsControllerUpdateProduct
     * @request PUT:/clients/products/{productId}
     * @secure
     */
    productsControllerUpdateProduct: (
      productId: string,
      data: UpdateProductRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/products/${productId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ProductsControllerDeleteProduct
     * @request DELETE:/clients/products/{productId}
     * @secure
     */
    productsControllerDeleteProduct: (
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/products/${productId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ChatsControllerGetChatGroupList
     * @request GET:/clients/chats
     * @secure
     */
    chatsControllerGetChatGroupList: (
      query: {
        /**
         * order of page
         * @default 0
         */
        page?: number;
        /**
         * number of resources per page
         * @min 10
         * @max 100
         * @default 10
         */
        limit?: number;
        /** @default "" */
        search?: string;
        /** @default "all" */
        status: 'read' | 'unread' | 'all';
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/chats`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ChatsControllerSendMessage
     * @request POST:/clients/chats
     * @secure
     */
    chatsControllerSendMessage: (
      data: ClientSendMessageRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/chats`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ChatsControllerMarkReadMessage
     * @request POST:/clients/chats/{groupId}/read
     * @secure
     */
    chatsControllerMarkReadMessage: (
      groupId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/clients/chats/${groupId}/read`,
        method: 'POST',
        secure: true,
        ...params,
      }),
  };
  customers = {
    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerSignIn
     * @request POST:/customers/auths/sign-in
     */
    authsControllerSignIn: (
      data: CustomerSignInRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<CustomerSignInResponseDto, any>({
        path: `/customers/auths/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerSignUp
     * @request POST:/customers/auths/sign-up
     */
    authsControllerSignUp: (
      data: CustomerSignUpRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/sign-up`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerSendVerificationEmail
     * @request POST:/customers/auths/send-verification-email
     * @secure
     */
    authsControllerSendVerificationEmail: (
      data: SendVerificationEmailRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/send-verification-email`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerVerifyEmail
     * @request POST:/customers/auths/verification-email
     * @secure
     */
    authsControllerVerifyEmail: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/customers/auths/verification-email`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerForgotPassword
     * @request POST:/customers/auths/forgot-password
     */
    authsControllerForgotPassword: (
      data: CustomerForgotPasswordRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/forgot-password`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerResetPassword
     * @request POST:/customers/auths/reset-password
     * @secure
     */
    authsControllerResetPassword: (
      data: CustomerResetPasswordRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/reset-password`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerSignInWithSocial
     * @request POST:/customers/auths/sign-in/socials
     */
    authsControllerSignInWithSocial: (
      data: SignInSocialRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/sign-in/socials`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerSignOut
     * @request POST:/customers/auths/sign-out
     * @secure
     */
    authsControllerSignOut: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/customers/auths/sign-out`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerRefresh
     * @request POST:/customers/auths/refresh
     */
    authsControllerRefresh: (
      data: CustomerRefreshRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<CustomerRefreshResponseDto, any>({
        path: `/customers/auths/refresh`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerGetProfile
     * @request GET:/customers/auths/profiles
     * @secure
     */
    authsControllerGetProfile: (params: RequestParams = {}) =>
      this.request<GetProfileResponseDto, any>({
        path: `/customers/auths/profiles`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerUpdateProfile
     * @request PUT:/customers/auths/profiles
     * @secure
     */
    authsControllerUpdateProfile: (
      data: UpdateProfileRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/profiles`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerDeleteAccount
     * @request DELETE:/customers/auths/profiles
     * @secure
     */
    authsControllerDeleteAccount: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/customers/auths/profiles`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name AuthsControllerUpdatePassword
     * @request POST:/customers/auths/profiles/passwords
     * @secure
     */
    authsControllerUpdatePassword: (
      data: UpdatePasswordRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/auths/profiles/passwords`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ParticipantsControllerGetListParticipants
     * @request GET:/customers/participants
     * @secure
     */
    participantsControllerGetListParticipants: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number;
        /**
         * number of resources per page
         * @min 10
         * @max 100
         * @default 10
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListParticipantsResponseDto, any>({
        path: `/customers/participants`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ParticipantsControllerCreateParticipant
     * @request POST:/customers/participants
     * @secure
     */
    participantsControllerCreateParticipant: (
      data: CreateParticipantRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<CreateParticipantResponseDto, any>({
        path: `/customers/participants`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ParticipantsControllerGetDetailParticipant
     * @request GET:/customers/participants/{participantId}
     * @secure
     */
    participantsControllerGetDetailParticipant: (
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<GetDetailParticipantResponseDto, any>({
        path: `/customers/participants/${participantId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ParticipantsControllerUpdateParticipant
     * @request PUT:/customers/participants/{participantId}
     * @secure
     */
    participantsControllerUpdateParticipant: (
      participantId: string,
      data: UpdateParticipantRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/participants/${participantId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ParticipantsControllerDeleteParticipant
     * @request DELETE:/customers/participants/{participantId}
     * @secure
     */
    participantsControllerDeleteParticipant: (
      participantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/participants/${participantId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ClientsControllerGetClientCode
     * @request GET:/customers/clients/{clientCode}
     */
    clientsControllerGetClientCode: (
      clientCode: string,
      params: RequestParams = {},
    ) =>
      this.request<GetClientResponseDto, any>({
        path: `/customers/clients/${clientCode}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ProductsControllerGetListProducts
     * @request GET:/customers/products
     * @secure
     */
    productsControllerGetListProducts: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number;
        /**
         * number of resources per page
         * @min 10
         * @max 100
         * @default 10
         */
        limit?: number;
        /** @default [] */
        types?: string;
        search?: string;
        /** @default "DESC" */
        sortCreatedDate?: 'ASC' | 'DESC';
        sortPrice?: 'ASC' | 'DESC';
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListProductsCustomerResponseDto, any>({
        path: `/customers/products`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ProductsControllerGetProduct
     * @request GET:/customers/products/{productId}
     * @secure
     */
    productsControllerGetProduct: (
      productId: string,
      params: RequestParams = {},
    ) =>
      this.request<Product, any>({
        path: `/customers/products/${productId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ChatsControllerSendMessage
     * @request POST:/customers/chats
     * @secure
     */
    chatsControllerSendMessage: (
      data: CustomerSendMessageRequestBodyDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customers/chats`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name ChatsControllerMarkReadMessage
     * @request POST:/customers/chats/read
     * @secure
     */
    chatsControllerMarkReadMessage: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/customers/chats/read`,
        method: 'POST',
        secure: true,
        ...params,
      }),
  };
}
