import { useGetGiftsQuery } from '@/shared/clientApi';
import { useMemo } from 'react';

export const useGifts = () => {
  const { data: giftsList, isLoading } = useGetGiftsQuery();

  const gifts = useMemo(
    () =>
      giftsList?.payload?.gifts
        .filter(({ active }) => active),
    [giftsList],
  );

  return {
    gifts,
    isLoading,
  };
};
