'use client';
import store from '@/app/store';
import { closeMenu, MenuType, openMenu } from '@/app/store/menuSlice';
import { RootState } from '@/app/store/types';
import { IMenuItem } from '@/shared/types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

export interface SideMenuProps {
  sideMenuItems: IMenuItem[] | undefined;
}
const getMenuState = (state: RootState) => state.menu.isOpen === MenuType.Menu;

const SideMenu: FC<SideMenuProps> = ({ sideMenuItems: menuItems }) => {
  const pathName = usePathname();
  const isMenuOpen = useSelector(getMenuState);
  const dispatch = useDispatch();

  const onBack = () => {
    dispatch(openMenu(MenuType.Burger));
  };
  const onClose = () => {
    dispatch(closeMenu());
  };

  return (
    <div className={isMenuOpen ? 'menu open' : 'menu'}>
      <div className="menu__item foodMenu" onClick={onBack}>
        <div className="menu__item-linkMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.92889 10.0077L11.1753 18.2872C11.5656 18.679 11.5655 19.3142 11.1751 19.7059C10.7845 20.0978 10.1511 20.0977 9.76066 19.7057L0.809266 10.7184C0.437305 10.345 0.419913 9.75061 0.75702 9.3565C0.778057 9.33069 0.800569 9.30569 0.824554 9.28161L9.77595 0.29435C10.1664 -0.0977022 10.7998 -0.0978038 11.1904 0.294122C11.5808 0.685868 11.5809 1.32098 11.1906 1.71286L2.92889 10.0077Z"
              fill="white"
            />
          </svg>
          <p>Меню</p>
        </div>
      </div>
      {!menuItems && 'Failed to load menu items'}
      {menuItems &&
        menuItems.map(({ key: id, title, icon, link }) => {
          const isActive = pathName === link;

          return (
            <Link
              className={cn('menu__item', {
                'menu__item--active': isActive,
              })}
              href={link}
              key={id}
              onClick={onClose}
            >
              {icon}
              <div className="menu__item-link">{title}</div>
            </Link>
          );
        })}
    </div>
  );
};

export const SideMenuWithProvider: FC<SideMenuProps> = ({ sideMenuItems }) => {
  return (
    <Provider store={store}>
      <SideMenu sideMenuItems={sideMenuItems} />
    </Provider>
  );
};
