import store from '@/app/store';
import { MenuType, openMenu } from '@/app/store/menuSlice';
import React, { FC } from 'react';
import { Provider, useDispatch } from 'react-redux';

const MenuLink: FC = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openMenu(MenuType.Menu));
  };
  return (
    <div className="list__item-link" onClick={handleClick}>
      Меню
    </div>
  );
};

export const MenuLinkWithProvider: FC = () => {
  return (
    <Provider store={store}>
      <MenuLink />
    </Provider>
  );
};
