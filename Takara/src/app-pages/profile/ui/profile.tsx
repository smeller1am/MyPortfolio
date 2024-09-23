'use client';

import React, { FC, useEffect, useState } from 'react';
import {
  FavoriteContent,
  FavoriteContentWithProvider,
} from '@/app-pages/profile/ui/profileContent/FavoriteContent';
import { HistoryWithProvider } from '@/app-pages/profile/ui/profileContent/HistoryContent';
import { ProfileContentWithProvider } from '@/app-pages/profile/ui/profileContent/ProfileContent';
import { ProfileTabsWithProvider } from '@/app-pages/profile/ui/profileTabs/ProfileTabs';
import { WrapperWithProvider } from '@/shared/modal';
import { useGetUserQuery } from '@/shared/clientApi/userApi';
import store from '@/app/store';
import { Provider, useSelector } from 'react-redux';
import { Loader, LoaderWithWrapper } from '@/shared/ui';
import { RootState } from '@/app/store/types';

export enum ProfileEntities {
  Profile,
  Favorite,
  History,
}
export const ProfilePage: FC = () => {
  const [ActiveCategory, SetActiveCategory] = useState<ProfileEntities>(ProfileEntities.Profile);
  const { data: user, isLoading, isFetching, refetch } = useGetUserQuery();
  const getAccessTokenState = (state: RootState) => state.accessToken;
  const { accessToken } = useSelector(getAccessTokenState);
  useEffect(() => {
    refetch();
  }, [accessToken]);
  return (
    <div className="container">
      {isLoading ? (
        <LoaderWithWrapper />
      ) : (
        <>
          <WrapperWithProvider />
          <div className="wrapper"></div>
          <div className="containerPage containerPage--gap">
            <div className="containerPage__item firstItem">
              <div className="titleMain titleProfile">
                <h1 className="titleMain__title">Профиль</h1>
              </div>
              <ProfileTabsWithProvider
                data={user}
                changeCategoryIndex={SetActiveCategory}
                activeCategory={ActiveCategory}
              />
            </div>
            <div className="containerPage__item secondItem">
              {ActiveCategory === ProfileEntities.Profile && (
                <ProfileContentWithProvider user={user} />
              )}
              {ActiveCategory === ProfileEntities.Favorite && <FavoriteContentWithProvider />}
              {ActiveCategory === ProfileEntities.History && <HistoryWithProvider />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const ProfilePageWithProvider: FC = () => {
  return (
    <Provider store={store}>
      <ProfilePage />
    </Provider>
  );
};
