import { login, logout } from '@/app/store/authSlice';
import { emptySplitApi } from '@/shared/clientApi/base';
import {
  LoginRequest,
  LoginResponse,
  LoginResponseRestApiResponse,
  LogoutRequest,
  LogoutResponseRestApiResponse,
  SendOneTimePasswordReponseRestApiResponse,
  SendOneTimePasswordRequest,
} from '@/shared/contracts';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/src/query/baseQueryTypes';

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getPassword: builder.mutation<
      SendOneTimePasswordReponseRestApiResponse,
      SendOneTimePasswordRequest
    >({
      query: userData => ({
        url: `/Authentication/SendOneTimePassword`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Authorization'],
    }),
    getToken: builder.mutation<LoginResponseRestApiResponse, LoginRequest>({
      queryFn: async (body, { dispatch }, _, baseQuery) => {
        const loginRes = (await baseQuery({
          url: `/Authentication/Login`,
          method: 'POST',
          body,
        })) as any;

        if (loginRes.error) return loginRes;

        const accessToken = loginRes.data?.payload?.accessToken;
        accessToken && dispatch(login({ accessToken }));
        return loginRes;
      },
      invalidatesTags: ['Authorization'],
    }),
    setLogout: builder.mutation<LogoutResponseRestApiResponse, LogoutRequest>({
      queryFn: async (body, { dispatch }, _, baseQuery) => {
        const loginRes = (await baseQuery({
          url: `/Authentication/Logout`,
          method: 'POST',
          body,
        })) as QueryReturnValue<LogoutResponseRestApiResponse, FetchBaseQueryError>;

        if (loginRes.error) return loginRes;
        dispatch(logout());
        return loginRes;
      },
      invalidatesTags: ['Authorization'],
    }),
  }),
});

export const { useGetTokenMutation, useGetPasswordMutation, useSetLogoutMutation } = authApi;
