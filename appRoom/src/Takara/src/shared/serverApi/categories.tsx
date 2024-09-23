import Image from 'next/image';
import { GetCategoryResponseRestApiResponse } from '../contracts';
import { IMenuItem } from '../types';
import { api } from './config';

export const getCategories = async () => {
  // await new Promise(res => setTimeout(res, 100_000));
  const res = await api.get<GetCategoryResponseRestApiResponse>('/Category/GetCategories');

  if (!res.data.isSuccess) return;

  return res.data.payload?.categories;
};

export const getMenuItems = async () => {
  const categories = await getCategories();

  return categories
    ?.sort((a, b) => (a.sortNumber ?? 0) - (b.sortNumber ?? 0))
    ?.map<IMenuItem>(({ id, name, photoPath }) => ({
      key: id,
      title: name,
      link: `/category/${id}`,
      icon: (
        <Image
          src={photoPath ? `${photoPath}` : '/img/menu/1.png'}
          width={64}
          height={64}
          alt="Картинка категории"
        />
      ),
    }));
};
