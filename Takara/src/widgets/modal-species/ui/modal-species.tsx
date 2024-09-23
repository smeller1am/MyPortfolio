'use client';
import { useRouter } from 'next/navigation';
import React, { FC, MutableRefObject } from 'react';
import { useAddAddressMutation } from '@/shared/clientApi/userApi';
import { useFormik } from 'formik';
import { ModalWithProvider } from '@/shared/modal';
import { Input } from '@/widgets/Input';
import { AddressForm } from '@/entities/AddressForm';
import { closeModal } from '@/app/store/modalSlice';
import Button from '@/shared/ui/button/button';
import { useDispatch } from 'react-redux';

export interface IAddressModal {
  isOpen: boolean;
  type: string;
  closeModal: any;
  anchorBlock: MutableRefObject<HTMLDivElement | null>;
}

const AddSpeciesForm: FC<{ anchorBlock: MutableRefObject<HTMLDivElement | null> }> = ({
  anchorBlock,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  const scrollToBlock = () => {
    dispatch(closeModal());
    router.push('/category/10');
  };
  return (
    <div className="modal__buttons modal__buttons--horizontal">
      <Button text={'К специям'} onClick={scrollToBlock} />
      <Button text={'Не хочу'} type={'secondary'} onClick={onClose} />
    </div>
  );
};
export const ModalAddSpecies: FC<IAddressModal> = ({ closeModal, isOpen, type, anchorBlock }) => {
  return (
    <ModalWithProvider
      title="Вы не выбрали специи"
      subtitle="Добавьте к заказу специи"
      type={type}
      isOpen={isOpen}
    >
      <AddSpeciesForm anchorBlock={anchorBlock} />
    </ModalWithProvider>
  );
};
