'use client';
import React, { FC, MutableRefObject } from 'react';
import { useAddAddressMutation } from '@/shared/clientApi/userApi';
import { useFormik } from 'formik';
import { ModalWithProvider } from '@/shared/modal';
import { Input } from '@/widgets/Input';
import { AddressForm } from '@/entities/AddressForm';
import { closeModal } from '@/app/store/modalSlice';
import Button from '@/shared/ui/button/button';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export interface IAddressModal {
  isOpen: boolean;
  type: string;
  closeModal: any;
}

const SuccessOrderForm: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const redirectOnIndex = () => {
    dispatch(closeModal());
    router.push('/');
  };
  return (
    <div className="modal__buttons modal__buttons--horizontal">
      <Button text={'Ок'} onClick={redirectOnIndex} />
    </div>
  );
};
export const ModalSuccessOrder: FC<IAddressModal> = ({ closeModal, isOpen, type }) => {
  return (
    <ModalWithProvider title="Ожидайте подтверждения оператора" type={type} isOpen={isOpen}>
      <SuccessOrderForm />
    </ModalWithProvider>
  );
};
