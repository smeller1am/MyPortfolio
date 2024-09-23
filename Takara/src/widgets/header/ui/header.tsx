'use client';
import store from '@/app/store';
import { closeMenu, MenuType, openMenu } from '@/app/store/menuSlice';
import { RootState } from '@/app/store/types';
import { ProfileWithProvider } from '@/widgets/header/ui/profile/profile';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BasketWithProvider } from './basket/basket';
import { Nav } from './nav';
import { closeModal } from '@/app/store/modalSlice';

const getMenuState = (state: RootState) =>
  state.menu.isOpen === MenuType.Burger || state.menu.isOpen === MenuType.Menu;

const Header: FC<PropsWithChildren> = ({ children }) => {
  const isMenuOpen = useSelector(getMenuState);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(isMenuOpen ? closeMenu() : openMenu(MenuType.Burger));
    dispatch(closeModal());
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <div
          className={isMenuOpen ? 'header__burger active' : 'header__burger'}
          onClick={handleClick}
        >
          <div className="header__burger-line"></div>
        </div>
        <Link href="/" className="logo">
          <Image src="/img/logo/1.svg" alt="" width="207" height="60" />
        </Link>
        <Nav active={isMenuOpen} />
        {children}
        <ProfileWithProvider isMenu={false} />
        <BasketWithProvider isMenu={false} />
      </div>
    </header>
  );
};

export const HeaderWithProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <Header>{children} </Header>
    </Provider>
  );
};
