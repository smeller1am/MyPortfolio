'use client';
import { closeMenu } from '@/app/store/menuSlice';
import { MenuLinkWithProvider } from '@/features/menu-link';
import Link from 'next/link';
import { FC } from 'react';
import {usePathname, useRouter} from 'next/navigation';
import cn from 'classnames';
import { staticMenuItems } from '@/entities/menu/';
import {useDispatch, useSelector} from 'react-redux';
import {closeModal, ModalType, openModal} from "@/app/store/modalSlice";
import {RootState} from "@/app/store/types";
import {ProfileWithProvider} from "@/widgets/header/ui/profile/profile";
import {BasketWithProvider} from "@/widgets/header/ui/basket/basket";

interface NavProps {
  active: boolean;
}

export const Nav: FC<NavProps> = ({ active }) => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const getAccessTokenState = (state: RootState) => state.accessToken;
  const onClose = () => {
    dispatch(closeMenu());
  };

  const router = useRouter();
  const { accessToken } = useSelector(getAccessTokenState);
  const onAuthorizationClick = () => {
    dispatch(closeMenu());
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      router.push('/profile');
    }
  };

  return (
    <ul className={!active ? 'list' : 'list active'}>
      <li className="list__menu">
        <MenuLinkWithProvider />
      </li>
      {staticMenuItems.map(({ title, link }, idx) => {
        const isActive = pathName === link;

        return (
          <li className="list__item" key={idx}>
            <Link
              className={cn('list__item-link', {
                'list__item-link--active': isActive,
              })}
              href={link}
              onClick={onClose}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
