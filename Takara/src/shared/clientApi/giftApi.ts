import { GetGiftsResponseRestApiResponse } from "../contracts";
import { emptySplitApi } from "./base";

export const giftApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getGifts: builder.query<GetGiftsResponseRestApiResponse, void>({
      query: () => ({
        url: 'Gift/GetGifts',
      }),
      providesTags: ['Gifts'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetGiftsQuery } = giftApi;
