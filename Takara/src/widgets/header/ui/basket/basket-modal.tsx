'use client';
import {
  useAddProductToBasketMutation,
  useRemoveAllInBasketMutation,
  useRemoveProductFromBasketMutation,
} from '@/shared/clientApi';
import { BasketItemModel, ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '@/app/store/menuSlice';
import { closeModal } from '@/app/store/modalSlice';

interface BasketModalProps {
  isOpen: boolean;
  basketItems: BasketItemModel[];
  count: number;
  onClose: () => void;
}

export const BasketModal: FC<BasketModalProps> = ({ isOpen, basketItems, count, onClose }) => {
  const totalPrice = basketItems?.reduce(
    (acc, { product, count }) => acc + (product?.price ?? 0) * (count ?? 1),
    0,
  );
  useEffect(() => {
    document.body.classList.toggle('12312');
  }, [isOpen]);
  const dispatch = useDispatch();
  const [addProductToBasket] = useAddProductToBasketMutation();
  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();
  const [clearBasket] = useRemoveAllInBasketMutation();
  const handleClick = () => {
    dispatch(closeModal());
  };
  const handleDecreaseBasketProductCount = async (productId: ProductModel['id']) =>
    await removeProductFromBasket(productId);

  const handleIncreaseBasketProductCount = async (productId: ProductModel['id']) =>
    await addProductToBasket(productId);

  const handleClearBasket = async () => await clearBasket();

  return (
    <div
      className={cn('modalBasket', {
        'modalBasket--visible': isOpen,
        'modalBasket--empty': count == 0,
      })}
    >
      <div className="modalBasket__container">
        <div onClick={handleClick} className="modalBasket__close">
          <div className="icon-x"></div>
        </div>
        {count > 0 ? (
          <>
            <div className="order">
              {basketItems?.map(({ product: { id, photoPath, name, price }, count }) => (
                <div className="order__item" key={id}>
                  <Image src={photoPath ?? '/img/defaultCard.png'} alt="" width={72} height={72} />
                  <div className="order__itemText">
                    <div className="order__itemTitle">{name}</div>
                    <div className="order__itemPrice">{utils.renderPrice(price)}</div>
                  </div>
                  <div className="order__plusMinus">
                    <div className="order__block">
                      <button
                        className="order__minus"
                        onClick={() => handleDecreaseBasketProductCount(id)}
                      >
                        -
                      </button>
                      <div className="order__digital">{count}</div>
                      <button
                        className="order__plus"
                        onClick={() => handleIncreaseBasketProductCount(id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="buttonOrder">
              <Link onClick={onClose} href="/cart" className="buttonOrder__checkout">
                <div className="buttonOrder__price">{utils.renderPrice(totalPrice)}</div>
                <p>Оформить заказ</p>
              </Link>
              <button
                className="buttonOrder__checkout buttonOrder__checkout--dark"
                onClick={handleClearBasket}
              >
                Очистить корзину
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="modalBasket__empty">
              <div className="historyNot__block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <g clipPath="url(#clip0_212_3909)">
                    <path
                      d="M29.8842 28.7088V27.1836C29.8842 26.1435 29.041 25.3003 28.0009 25.3003C26.9607 25.3003 26.1176 26.1435 26.1176 27.1836V28.7088C20.4663 29.5986 16.0112 34.4384 15.3347 40.4906H14.6489C13.5451 40.4906 12.6504 41.3854 12.6504 42.4891C12.6504 43.5928 13.5451 44.4876 14.6489 44.4876H41.3515C42.4553 44.4876 43.35 43.5928 43.35 42.4891C43.35 41.3854 42.4553 40.4906 41.3515 40.4906H40.667C39.9906 34.4384 35.5355 29.6 29.8842 28.7088ZM19.1388 40.492C19.8608 35.9948 23.5605 32.5593 28.0009 32.5593C32.4413 32.5593 36.1409 35.9948 36.8629 40.492H19.1388Z"
                      fill="#484C5C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.1186 0.109656C27.0419 -0.0288667 28.8614 -0.0440407 29.8852 0.109656C36.0533 1.03559 39.9902 5.8171 40.6667 11.8694H51.0246C53.1439 11.8694 54.862 13.5875 54.862 15.7068V52.1626C54.862 54.2819 53.1439 56 51.0246 56H4.97515C2.85578 56 1.1377 54.2819 1.1377 52.1626V15.7068C1.1377 13.5875 2.85578 11.8694 4.97514 11.8694H15.3344C16.0108 5.8171 19.9505 1.03508 26.1186 0.109656ZM36.8623 11.8694H19.1387C19.8613 7.37276 23.5606 3.7786 28.0005 3.7786C32.4404 3.7786 36.1398 7.37276 36.8623 11.8694ZM51.1086 50.483C51.1086 51.5427 50.2496 52.4018 49.1899 52.4018H6.80978C5.7501 52.4018 4.89106 51.5427 4.89106 50.4831V17.3863C4.89106 16.3267 5.7501 15.4676 6.80978 15.4676H49.1887C50.2483 15.4676 51.1074 16.3266 51.1074 17.3863L51.1086 50.483Z"
                      fill="#484C5C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_212_3909">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="historyNot__block-text">
                  <p>Ваша корзина пока пуста.</p>
                  <p>Пройдите в каталог для выбора блюд.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
