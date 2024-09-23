import { FC, useEffect, useState } from 'react';
import { useGifts } from '../lib/hooks/use-gifts';
import GiftCard from './gift-card';
import { ProductModel } from '@/shared/contracts';
import { Loader } from '@/shared/ui';

interface GiftsBlockProps {
  totalPrice: number;
  onClick: (gift?: ProductModel) => void;
}

const GiftsBlock: FC<GiftsBlockProps> = ({ totalPrice, onClick }) => {
  const [choicedGift, setChoicedGift] = useState<ProductModel>();
  const { gifts, isLoading } = useGifts();

  const handleChoice = (product?: ProductModel) => {
    onClick(product);
    setChoicedGift(product);
  };

  return (
    gifts?.length && (
      <div className="gift">
        <h2 className="miniTitle">Выберите подарок</h2>
        <div className="gift__cards">
          {isLoading ? (
            <Loader />
          ) : (
            gifts?.map(gift => (
              <GiftCard
                gift={gift}
                isChoiced={choicedGift?.id === gift.product.id}
                isAvailable={gift.availableBill <= totalPrice}
                onClick={handleChoice}
                key={gift.id}
              />
            ))
          )}
        </div>
      </div>
    )
  );
};

export default GiftsBlock;
