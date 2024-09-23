import { emptySplitApi } from './base';
import {GetUserResponseRestApiResponse, UserModel} from "@/shared/contracts";

export const addressFormsApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    addAddress: builder.mutation({
      query: create => ({
        url: `/Address/CreateAddress`,
        method: 'POST',
        body: create,
      }),
      invalidatesTags: ['UserData'],
    }),
    updateAddress: builder.mutation({
      query: create => ({
        url: `/Address/CreateAddress`,
        method: 'POST',
        body: create,
      }),
      invalidatesTags: ['UserData'],
    }),
    updateUser: builder.mutation({
      query: update => ({
        url: `/User/UpdateUser`,
        method: 'POST',
        body: update,
      }),
      invalidatesTags: ['UserData'],
    }),
    getUser: builder.query<GetUserResponseRestApiResponse, void>({
      query: () => ({
        url: '/User/GetUserInformation',
      }),
      providesTags: ['UserData'],
    }),
  }),
});

export const { useAddAddressMutation, useUpdateUserMutation, useGetUserQuery } = addressFormsApi;
