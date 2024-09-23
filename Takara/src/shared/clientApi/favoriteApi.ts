import {
  CreateFavoritesRequest,
  CreateFavoritesResponseRestApiResponse,
  GetProductsResponseRestApiResponse,
  RemoveFromFavoritesResponseRestApiResponse,
} from '../contracts';
import { emptySplitApi } from './base';

export const favoritesApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAllFavorites: builder.query<GetProductsResponseRestApiResponse, void>({
      query: () => ({
        url: '/Favorites/GetUsersFavorites',
      }),
      providesTags: ['Favorites'],
    }),

    createFavorites: builder.mutation<
      CreateFavoritesResponseRestApiResponse,
      CreateFavoritesRequest
    >({
      query: body => ({
        url: `/Favorites/CreateFavorites`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Favorites'],
    }),

    removeFavorites: builder.mutation<RemoveFromFavoritesResponseRestApiResponse, number>({
      query: productId => ({
        url: `/Favorites/RemoveFromFavorites`,
        params: { productId },
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites'],
    }),
  }),
});

export const {
  useGetAllFavoritesQuery,
  useCreateFavoritesMutation,
  useRemoveFavoritesMutation,
} = favoritesApi;
