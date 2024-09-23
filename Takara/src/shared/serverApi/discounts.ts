import { api } from '@/shared/serverApi/config';
import {
  GetPromoResponse,
  GetPromoResponseRestApiResponse,
} from '@/shared/contracts';

export const getPromo = async () => {
  const res = await api.get<GetPromoResponseRestApiResponse>('/Promo/GetPromotions', {});

  if (!res.data.isSuccess) return;

  return res.data.payload?.promos;
};
