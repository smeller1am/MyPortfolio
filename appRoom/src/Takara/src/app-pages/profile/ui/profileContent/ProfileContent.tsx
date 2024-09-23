import { GetUserResponseRestApiResponse } from '@/shared/contracts';

import { AddressModel } from '@/shared/contracts';

('useClient');

import { FC, useEffect, useState } from 'react';
import store from '@/app/store';
import { ModalType, closeModal, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import {
  useAddAddressMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from '@/shared/clientApi/userApi';
import { ModalAddAddres } from '@/widgets/modal-add-address';
import 'animate.css/animate.css';
import dayjs from 'dayjs';
import { Field, useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ProfileEntities } from '@/app-pages/profile';
import { AddressForm } from '@/entities/AddressForm';
import { log } from 'util';

const getModalState = (state: RootState) => state.modal.isOpen === ModalType.Address;

export interface ProfileContentProps {
  user?: GetUserResponseRestApiResponse;
}

const ProfileContent: FC<{ user?: GetUserResponseRestApiResponse }> = ({ user }) => {
  const dispatch = useDispatch();
  const [phoneInputValue, setPhoneInputValue] = useState('');
  const [dateInputValue, setDateInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    user?.payload && setPhoneInputValue(user?.payload?.user.phone);
    // user?.payload && setEmailValue(user?.payload?.user.mail);
    user?.payload?.user?.birthDate &&
      setDateInputValue(dayjs(user?.payload?.user?.birthDate).format('YYYY-MM-DD'));
    formik.setValues({
      firstName: user?.payload?.user.firstName,
      lastName: user?.payload?.user.lastName,
      birthDate: 0,
      mail: user?.payload?.user.mail,
      city: '',
      address: '',
      entrance: 0,
      floor: 0,
      apartament: '',
    });
  }, [user]);

  const isModalOpen = useSelector(getModalState);

  const openAddressModal = () => {
    dispatch(openModal(ModalType.Address));
  };
  const closeAddressModal = () => {
    dispatch(closeModal());
  };
  const [updateUser] = useUpdateUserMutation();

  const setIsSubmitFalse = () => {
    setIsSubmit(false);
  };
  const onChangePhoneInput = (e: string) => {
    formik.handleChange;
    setPhoneInputValue(e);
  };
  const onChangeDateInput = (e: any) => {
    setDateInputValue(e.target.value);
  };
  const formik = useFormik({
    initialValues: {
      firstName: user?.payload?.user.firstName,
      lastName: user?.payload?.user.lastName,
      birthDate: 0,
      mail: user?.payload?.user.mail,
      city: '',
      address: '',
      entrance: 0,
      floor: 0,
      apartament: '',
    },
    onSubmit: async values => {
      try {
        const date = dayjs(dateInputValue);
        values.birthDate = date.unix() * 1000;
        await updateUser(values).unwrap();
        setIsSubmit(true);
      } catch (err) {}
    },
  });

  return (
    // <Animate appear="fadeIn" durationAppear={100}>
    <>
      <div
        data-info="target1"
        className="profile__target profile__target--active profile__target--opacity"
      >
        <h2 className="miniTitle miniTitle--profile">Личные данные</h2>
        <div className="personalInfo">
          <form onSubmit={formik.handleSubmit}>
            <div className="personalInfo__form">
              <div className="personalInfo__formItem">
                <p className="paragraph">Имя</p>
                <input
                  required={true}
                  className="inputForm"
                  type="text"
                  placeholder="Введите имя"
                  name="firstName"
                  value={formik.values.firstName ?? ''}
                  onChange={formik.handleChange}
                />
                <p className="paragraph">Фамилия</p>
                <input
                  required={true}
                  className="inputForm"
                  type="text"
                  placeholder="Введите фамилию"
                  name="lastName"
                  value={formik.values.lastName ?? ''}
                  onChange={formik.handleChange}
                />
                <p className="paragraph">Дата рождения</p>
                <input
                  required={true}
                  className="inputForm"
                  type="date"
                  placeholder="Введите дату рождения"
                  value={dateInputValue}
                  name="birthDate"
                  onChange={e => onChangeDateInput(e)}
                />
                <p className="paragraph">Телефон</p>
                <InputMask
                  name="phone"
                  required={true}
                  className="inputForm"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phoneInputValue}
                  onChange={e => onChangePhoneInput(e.target.value)}
                  mask={'+7 (999) 999-99-99'}
                ></InputMask>
              </div>
              <div className="personalInfo__formItem">
                <p className="paragraph">E-mail</p>
                <input
                  required={true}
                  className="inputForm"
                  type="email"
                  placeholder="Введите E-mail"
                  name="mail"
                  value={formik.values.mail ?? ''}
                  onChange={formik.handleChange}
                />
                <div className="personalInfo__list">
                  {user?.payload?.user?.addresses.map((el: AddressModel, index: number) => {
                    return (
                      <AddressForm
                        key={index}
                        data={el ?? {}}
                        index={index}
                        submit={isSubmit}
                        setIsSubmitFalse={setIsSubmitFalse}
                        disabled={true}
                      />
                    );
                  })}
                </div>
                <p onClick={() => openAddressModal()} className="paragraph newAdress">
                  + Добавить адрес
                </p>
              </div>
            </div>
            <button type="submit" className="personalInfo__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <ModalAddAddres type="address" isOpen={isModalOpen} closeModal={closeAddressModal} />
    </>
    // </Animate>
  );
};
export const ProfileContentWithProvider: FC<ProfileContentProps> = props => (
  <Provider store={store}>
    <ProfileContent {...props} />
  </Provider>
);
