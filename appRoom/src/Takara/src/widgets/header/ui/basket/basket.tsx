'use client';

import store from '@/app/store';
import { closeModal, ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { useGetBasketProductsQuery } from '@/shared/clientApi/basketApi';
import cn from 'classnames';
import React, { FC, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BasketModal } from './basket-modal';
import { closeMenu } from '@/app/store/menuSlice';

const getModalState = (state: RootState) => state.modal.isOpen === ModalType.Basket;

export const Basket: FC<{ isMenu?: boolean }> = isMenu => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalState);

  const onBasketClick = () => {
    if (!isModalOpen) {
      dispatch(closeMenu());
      dispatch(openModal(ModalType.Basket));
    } else {
      dispatch(closeModal());
    }
  };

  const { data: basketProducts } = useGetBasketProductsQuery();

  const count = useMemo(
    () =>
      basketProducts?.payload
        ? basketProducts?.payload?.basketItems.reduce((acc, { count }) => acc + (count ?? 0), 0)
        : 0,
    [basketProducts],
  );

  return (
    <>
      <div
        onClick={onBasketClick}
        className={cn('basket', {
          userBasket__icon: isMenu.isMenu,
        })}
      >
        <span className="basket__icon icon-basket"></span>
        {count > 0 && (
          <div className="basket__digital">
            <p>{count}</p>
          </div>
        )}
      </div>
      {typeof document !== 'undefined' &&
        document.body &&
        createPortal(
          <BasketModal
            isOpen={isModalOpen}
            basketItems={basketProducts?.payload?.basketItems ?? []}
            count={count}
            onClose={onBasketClick}
          />,
          document.body,
        )}
    </>
  );
};

export const BasketWithProvider: FC<{ isMenu?: boolean }> = ({ isMenu }) => (
  <Provider store={store}>
    <Basket isMenu={isMenu} />
  </Provider>
);
