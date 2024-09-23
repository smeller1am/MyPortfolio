import { OrderModel } from '@/shared/contracts';
import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';
import { useSendOrderAgainMutation, useSendOrderMutation } from '@/shared/clientApi/orderingApi';
import { useAddProductToBasketMutation, useRemoveAllInBasketMutation } from '@/shared/clientApi';

import { useRouter } from 'next/navigation';

interface HistoryCardDetailsProps {
  order: OrderModel;
  // isVisibleDetails: boolean;
  // hideDetails: () => void;
}

export const HistoryCardDetails: FC<HistoryCardDetailsProps> = ({ order }) => {
  // const [sendOrder] = useSendOrderAgainMutation() ;
  const [clearBasket] = useRemoveAllInBasketMutation();
  const [addProductToBasket] = useAddProductToBasketMutation();
  const router = useRouter();
  const handleClick = () => {
    // sendOrder({orderId: order.id ?? 0})
    clearBasket().then(() =>
      order.productsToOrder.forEach(el => {
        for (let i = 0; el?.count && i < el?.count; i++) {
          addProductToBasket(el.productId);
        }
      }),
    );

    router.push('/cart');
  };
  return (
    <div className={'history__details'}>
      <div className="history__details-title">Состав</div>
      <div className="order order--history">
        {order.productsToOrder.map(product => (
          <div className="order__item" key={product.id}>
            <Image
              width={40}
              height={40}
              className="miniCard"
              src={product.product?.photoPath || '/img/defaultCard.png'}
              alt=""
            />
            <div className="order__itemText">
              <div className="order__itemTitle">{product.product?.name}</div>
            </div>
            <div className="order__plusMinus">
              <div className="order__block">
                <div className="order__digital">{`${product.count} x ${product.product.price} ₽`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="paragraph">Адрес доставки</p>
      <div className="history__details-text">{order.address}</div>
      <div className="history__details-info">
        <div className="history__details-infoItem">
          <p className="paragraph">Дата</p>
          <div className="history__details-text">
            {dayjs.unix(Number(order.deliveryTime)).format('DD.MM.YYYY')}
          </div>
        </div>
        {/*<div className="history__details-infoItem">*/}
        {/*  <p className="paragraph">Доставка</p>*/}
        {/*  <div className="history__details-text">{"920"}</div>*/}
        {/*</div>*/}
        <div className="history__details-infoItem">
          <p className="paragraph">Баллы</p>
          <div className="history__details-text">{order.points}</div>
        </div>
        <div className="history__details-infoItem">
          <p className="paragraph">Итого</p>
          <div className="history__details-text history__details-text--big">
            {`${order.productsToOrder.reduce(
              (acc, product) =>
                acc +
                ((product.product.price && product.product.price) ?? 0) * (product.count ?? 0),
              0,
            )} ₽`}
          </div>
        </div>
      </div>
      <div onClick={handleClick} className="likeInfo__itemInfo-buttonBasket">
        Повторить заказ
      </div>
    </div>
  );
};
