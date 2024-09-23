import {
  AddToBasketResponseRestApiResponse,
  GetBasketItemsResponseRestApiResponse,
  ProductModel,
  RemoveAllInBasketResponseRestApiResponse,
  RemoveFromBasketResponseRestApiResponse,
} from '../contracts';
import { emptySplitApi } from './base';

export const basketApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    getBasketProducts: build.query<GetBasketItemsResponseRestApiResponse, void>({
      query: () => ({
        url: '/Basket/GetBasket',
      }),
      providesTags: ['basketProducts'],

      // transformResponse: (response: GetBasketItemsResponseRestApiResponse) => {
      //   return response.payload.basketItems;
      // },
    }),

    addProductToBasket: build.mutation<AddToBasketResponseRestApiResponse, ProductModel['id']>({
      query: productId => ({
        url: 'Basket/AddToBasket',
        method: 'POST',
        body: { productId },
      }),
      invalidatesTags: ['basketProducts'],
    }),

    removeProductFromBasket: build.mutation<
      RemoveFromBasketResponseRestApiResponse,
      ProductModel['id']
    >({
      query: productId => ({
        url: 'Basket/RemoveFromBasket',
        params: {
          productId,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['basketProducts'],
    }),

    removeAllInBasket: build.mutation<RemoveAllInBasketResponseRestApiResponse, void>({
      query: () => ({
        url: 'Basket/RemoveAllInBasket',
        method: 'DELETE',
      }),
      invalidatesTags: ['basketProducts'],
    }),
  }),
});

export const {
  useGetBasketProductsQuery,
  useAddProductToBasketMutation,
  useRemoveProductFromBasketMutation,
  useRemoveAllInBasketMutation,
} = basketApi;
