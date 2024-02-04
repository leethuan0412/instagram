export interface ListProductState {
  isError: boolean;
  isLoading: boolean;
  isLastPage: boolean;
  isLoadMore: boolean;
  data: ListProductData[];
}
export type ListProductData = {
  metadata: any;
  id: number;
  name: string;
  clientId: string;
  description: string;
  firstPrice: number;
  type: string;
  lastPrice: number;
  imageUrl: string;
  firstCharge: number | string;
  tax: number | string;
  taxType: string;
  agreement: string;
  isPublish: boolean;
  levels: any[];
};
