import { OrderModel } from '@/shared/contracts';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';
import { FC, useState } from 'react';
import { HistoryCardDetails } from './history-card-details';
import { declination } from '@/shared/lib/utils';

interface HistoryCardProps {
  order: OrderModel;
}

export const HistoryCard: FC<HistoryCardProps> = ({ order }) => {
  const [isVisibleDetails, setIsVisibleDetails] = useState<boolean>(false);

  const showOrderDetails = () => {
    setIsVisibleDetails(true);
  };

  const hideOrderDetails = () => {
    setIsVisibleDetails(false);
  };

  return (
    <div
      className={classNames({
        ['history__item']: true,
        ['history__item-details']: isVisibleDetails,
      })}
      onClick={() => setIsVisibleDetails(!isVisibleDetails)}
    >
      <div className="history__item-numberOrder">
        <div className="history__item-number">№ {order.individualNumber}</div>
        <div className="history__item-stage">{order.orderStatus}</div>
      </div>
      <div className="history__item-dateOrder">
        <div className="history__item-date">
          Заказ от {dayjs.unix(Number(order.deliveryTime)).format('DD.MM.YYYY')}
        </div>
        <div className="history__item-money">
          {`${order.productsToOrder.reduce(
            (acc, product) => acc + (product.product.price ?? 0) * (product.count ?? 0),
            0,
          )} ₽`}
        </div>
      </div>
      <div
        className={classNames('history__item-imageOrder', {
          ['history__item-imageOrder--hidden']: isVisibleDetails,
        })}
      >
        <div className="history__item-gallery">
          {order.productsToOrder.map(product => (
            <Image
              className="history__item-img"
              width={40}
              height={40}
              src={product.product?.photoPath || '/img/defaultCard.png'}
              key={product.id}
              alt=""
            />
          ))}
        </div>
        <div
          className={classNames('history__item-stage', {
            ['history__item-stage--red']: order.points && order.points < 0,
            ['history__item-stage--green']: order.points && order.points > 0,
          })}
        >
          {order.points ? `${order.points} ${declination(order.points)}` : ''}
        </div>
      </div>
      {isVisibleDetails && <HistoryCardDetails order={order} />}
    </div>
  );
};
