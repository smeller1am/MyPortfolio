import {
  CreateUserOrderRequest,
  CreateUserOrderResponseRestApiResponse,
  GetOrdersResponseRestApiResponse,
  GetProductsResponseRestApiResponse, GetRestaurantsResponseRestApiResponse, RestaurantDto,
} from '@/shared/contracts';
import { emptySplitApi } from './base';

export const orderingFormsApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    sendOrder: builder.mutation<CreateUserOrderResponseRestApiResponse, CreateUserOrderRequest>({
      query: createOrder => ({
        url: `/Order/CreateUserOrder`,
        method: 'POST',
        body: createOrder,
      }),
      invalidatesTags: ['Orders'],
    }),

    getReccomendations: builder.query<GetProductsResponseRestApiResponse, void>({
      query: () => ({
        url: '/Product/GetRecommendations',
      }),
      providesTags: ['Orders'],
    }),

    getOrderHistory: builder.query<GetOrdersResponseRestApiResponse, void>({
      query: () => ({
        url: '/Order/GetUserOrders',
      }),
      providesTags: ['OrdersHistory'],
    }),
    getRestaurants: builder.query<GetRestaurantsResponseRestApiResponse, void>({
      query: () => ({
        url: '/Order/GetRestaurants',
      }),
      providesTags: ['OrdersHistory'],
    }),
    sendOrderAgain: builder.mutation<CreateUserOrderResponseRestApiResponse, {orderId: number}>({
      query: createOrder => ({
        url: `/Order/CreateOrderAgain`,
        method: 'POST',
        body: createOrder,
      }),
      invalidatesTags: ['OrdersHistory'],
    }),
  }),
});

export const { useSendOrderMutation, useGetReccomendationsQuery, useSendOrderAgainMutation, useGetOrderHistoryQuery, useGetRestaurantsQuery } =
  orderingFormsApi;
