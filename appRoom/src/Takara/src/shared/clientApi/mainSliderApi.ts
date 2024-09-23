import {
  GetGiftsResponseRestApiResponse,
  GetMainSliderItemsResponseRestApiResponse,
} from '../contracts';
import { emptySplitApi } from './base';

export const mainSliderApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getSlides: builder.query<GetMainSliderItemsResponseRestApiResponse, void>({
      query: () => ({
        url: 'MainSliderItem/GetMainSliderItems',
      }),
      providesTags: ['Gifts'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSlidesQuery } = mainSliderApi;
