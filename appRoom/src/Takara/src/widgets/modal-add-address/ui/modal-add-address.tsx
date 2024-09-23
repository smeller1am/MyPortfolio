import React, {FC} from 'react';
import {useAddAddressMutation} from '@/shared/clientApi/userApi';
import {useFormik} from 'formik';
import {ModalWithProvider} from '@/shared/modal';
import {Input} from '@/widgets/Input';
import {AddressForm} from "@/entities/AddressForm";

export interface IAddressModal {
    isOpen: boolean;
    type: string;
    closeModal: any;
}

export const ModalAddAddres: FC<IAddressModal> = ({
                                                      closeModal,
                                                      isOpen,
                                                      type,
                                                  }) => {
    return (
        <ModalWithProvider title="Добавить адрес" type={type} isOpen={isOpen}>
            < AddressForm isModal={true}/>
        </ModalWithProvider>
    );
};
