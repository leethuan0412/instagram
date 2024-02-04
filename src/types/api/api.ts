export interface ResponseListFormat<T> {
  metadata: {
    page: number;
    limit: number;
    totalPages: number;
    totalRecords: number;
  };
  data: T[];
}

export interface ResponseMessageFormat<T> {
  metadata: {
    page: number;
    limit: number;
    totalPages: number;
    totalRecords: number;
  };
  data: {
    groupId: string;
    messages: T[];
    user: {
      id: string;
      image: string | null;
      title: string | null;
      userName: string;
    };
  };
}

export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}
