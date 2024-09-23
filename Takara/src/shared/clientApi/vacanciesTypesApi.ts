import { emptySplitApi } from './base';

export const vacanciesTypesApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAllVacancyTypes: builder.query({
      query: () => ({
        url: '/VacancyTypes/GetVacancyTypes',
      }),
      providesTags: ['VacanciesType'],
    }),
  }),
});

export const { useGetAllVacancyTypesQuery } = vacanciesTypesApi;
