'use client';

import store from '@/app/store';
import { closeModal, ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { ProductModel } from '@/shared/contracts';
import { ProductList, ProductListProps } from '@/widgets/product-list';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ProductModal } from './product-modal';

export interface CategoryContentProps extends Pick<ProductListProps, 'products'> {}

const getModalState = (state: RootState) => state.modal.isOpen === ModalType.Product;

export const CategoryContent: FC<CategoryContentProps> = ({ products }) => {
  const isModalOpen = useSelector(getModalState);
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);

  const openProductModal = (product: ProductModel) => {
    setSelectedProduct(product);

    dispatch(openModal(ModalType.Product));
  };

  const closeProductModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <ProductList products={products} onProductClick={openProductModal} />
      {typeof document !== 'undefined' &&
        document.body &&
        createPortal(
          <ProductModal
            isOpen={isModalOpen}
            product={selectedProduct}
            onClose={closeProductModal}
          />,
          document?.body,
        )}
    </>
  );
};

export const CategoryWithProvider: FC<CategoryContentProps> = props => (
  <Provider store={store}>
    <CategoryContent {...props} />
  </Provider>
);
