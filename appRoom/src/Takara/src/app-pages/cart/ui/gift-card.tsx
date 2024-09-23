import { GiftModel, ProductModel } from '@/shared/contracts';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, useEffect } from 'react';

interface GiftCardProps {
  gift: GiftModel;
  isChoiced: boolean;
  isAvailable: boolean;
  onClick: (gift?: ProductModel) => void;
}

const GiftCard: FC<GiftCardProps> = ({ gift, isChoiced, isAvailable, onClick }) => {
  const handleClick = () => (isChoiced ? onClick() : onClick(gift.product));

  useEffect(() => {
    if (!isAvailable) {
      onClick();
    }
  }, [isAvailable]);

  return (
    <div
      className={classNames('gift__cards-item', {
        'gift__cards-item--active': isChoiced,
        'gift__cards-item--unactive': !isAvailable,
      })}
    >
      <Image
        className="gift__cards-img"
        src={gift.product.photoPath || '/img/defaultCard.png'}
        alt={gift.product.description}
        width={640}
        height={100}
      />
      <div className="gift__cards-textBtn">
        <div className="gift__cards-text">{gift.product.name}</div>
        <button
          type="button"
          className="gift__cards-btn"
          disabled={!isAvailable}
          onClick={handleClick}
        >
          {isChoiced ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
            >
              <path
                d="M12.4697 0.464463C12.0791 0.0739388 11.446 0.0739388 11.0554 0.464463L6.1058 5.4141L2.57039 1.87868C2.17986 1.48815 1.5467 1.48815 1.15617 1.87868C0.76565 2.2692 0.76565 2.90237 1.15617 3.29289L5.38585 7.52256C5.39004 7.52692 5.39429 7.53124 5.39858 7.53553C5.59159 7.72853 5.84386 7.82615 6.09681 7.82839C6.35576 7.83073 6.61545 7.73311 6.81303 7.53553C6.81737 7.53119 6.82167 7.52681 6.82592 7.52241L12.4697 1.87868C12.8602 1.48815 12.8602 0.854988 12.4697 0.464463Z"
                fill="white"
              />
            </svg>
          ) : isAvailable ? (
            'Выбрать'
          ) : (
            `от ${gift.availableBill}р.`
          )}
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
