import { AddressModel, CreateAddressRequest } from '@/shared/contracts';

('useClient');

import React, { FC, useEffect, useRef, useState } from 'react';
import store from '@/app/store';
import { ModalType, closeModal, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import {
  useAddAddressMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from '@/shared/clientApi/userApi';
import { IAddressModal, ModalAddAddres } from '@/widgets/modal-add-address';
import 'animate.css/animate.css';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ModalWithProvider } from '@/shared/modal';
import { Input } from '@/widgets/Input';

export const AddressForm: FC<{
  data?: AddressModel;
  index?: number;
  submit?: boolean;
  isModal?: boolean;
  setIsSubmitFalse?: () => void;
  disabled?: boolean;
}> = ({ data, index, submit, isModal = false, disabled = false, setIsSubmitFalse }) => {
  const [addAddress] = useAddAddressMutation();
  const [updateAddress] = useAddAddressMutation();
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  const renderUserAddress = () => {
    return `${data?.street} ${data?.house ? `д. ${data?.house}` : ''}`;
  };

  const formik = useFormik({
    initialValues: {
      city: data?.city ?? '',
      address: data?.fullAddress ?? '',
      entrance: data?.entrance ?? 0,
      floor: data?.floor ?? 0,
      apartament: data?.apartament ?? '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        isModal ? await addAddress(values).unwrap() : '';
        dispatch(closeModal());
        resetForm();
      } catch (err) {}
    },
  });
  useEffect(() => {
    if (submit) {
      formik.submitForm();
      setIsSubmitFalse && setIsSubmitFalse();
    }
  }, [submit]);
  return (
    <form onSubmit={formik.handleSubmit} ref={formRef}>
      {isModal ? (
        <>
          <p className="paragraph">Город</p>
          <input
            className="inputForm"
            type="text"
            name="city"
            disabled={disabled}
            placeholder="Укажите"
            onChange={formik.handleChange}
            defaultValue={data?.city ?? ''}
          />
        </>
      ) : (
        <div className="personalInfo__formItem-container">
          <p className="paragraph">Адрес {index ? index + 1 : ''} </p>
        </div>
      )}
      <p className="paragraph">Адрес</p>
      <input
        className="inputForm"
        type="text"
        name="address"
        placeholder="Укажите"
        disabled={disabled}
        onChange={formik.handleChange}
        defaultValue={data?.fullAddress ?? ''}
      />
      <div className="personalInfo__formItem-containerHome">
        <div className="personalInfo__formItem-containerItem">
          <p className="paragraph">Квартира</p>
          <input
            className="inputForm"
            type="text"
            placeholder="Укажите"
            disabled={disabled}
            onChange={formik.handleChange}
            name="apartament"
            defaultValue={data?.apartament ?? ''}
          />
        </div>
        <div className="personalInfo__formItem-containerItem">
          <p className="paragraph">Подъезд</p>
          <input
            className="inputForm"
            type="number"
            name="entrance"
            placeholder="Укажите"
            disabled={disabled}
            onChange={formik.handleChange}
            defaultValue={data?.entrance ?? ''}
          />
        </div>
        <div className="personalInfo__formItem-containerItem">
          <p className="paragraph">Этаж</p>
          <input
            className="inputForm"
            type="number"
            placeholder="Укажите"
            disabled={disabled}
            name="floor"
            onChange={formik.handleChange}
            defaultValue={data?.floor ?? ''}
          />
        </div>
      </div>
      {isModal && (
        <button type="submit" className="dontForget__cards-infoBtn">
          Сохранить
        </button>
      )}
    </form>
  );
};
