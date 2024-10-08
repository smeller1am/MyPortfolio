import store from '@/app/store';
import { ModalType } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import Button from '@/shared/ui/button/button';
import { Basket } from '@/widgets/header/ui/basket/basket';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { Provider, useSelector } from 'react-redux';

interface Modal extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  className?: string;
  type?: string;
  isOpen?: boolean;
  closeModal?: object;
}

const Modal: FC<Modal> = ({ subtitle, title, children, className, type }) => {
  let getModalState;
  if (type === 'address') {
    getModalState = (state: RootState) => state.modal.isOpen === ModalType.Address;
  } else if (type === 'species') {
    getModalState = (state: RootState) => state.modal.isOpen === ModalType.Species;
  } else if (type === 'success') {
    getModalState = (state: RootState) => state.modal.isOpen === ModalType.Success;
  } else {
    getModalState = (state: RootState) => state.modal.isOpen === ModalType.Authorization;
  }

  const isModalOpen = useSelector(getModalState);
  return (
    <div
      className={classNames('modal', {
        'modal--visible': isModalOpen,
      })}
    >
      {title && <h2 className="modal__title">{title}</h2>}
      {subtitle && (
        <p className={`modal__subtitle ${className ? `modal__subtitle--${className}` : ''}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export const ModalWithProvider: FC<Modal> = ({ ...props }) => (
  <Provider store={store}>
    <Modal {...props} />
  </Provider>
);
