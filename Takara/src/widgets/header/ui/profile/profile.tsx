'use client';

import store from '@/app/store';
import { ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { closeMenu } from '@/app/store/menuSlice';
const getAccessTokenState = (state: RootState) => state.accessToken;

const Profile: FC<{ isMenu?: boolean }> = isMenu => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { accessToken } = useSelector(getAccessTokenState);
  useEffect(() => {
    if (accessToken === '') {
      router.push('/');
    }
  }, [accessToken]);
  const onAuthorizationClick = () => {
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
      dispatch(closeMenu());
    } else {
      router.push('/profile');
      dispatch(closeMenu());
    }
  };
  return (
    <div
      onClick={onAuthorizationClick}
      className={cn('user', {
        userBasket__icon: isMenu.isMenu,
      })}
    >
      <div className="user__icon icon-user"></div>
    </div>
  );
};

export const ProfileWithProvider: FC<{ isMenu?: boolean }> = ({ isMenu }) => (
  <Provider store={store}>
    <Profile isMenu={isMenu} />
  </Provider>
);
