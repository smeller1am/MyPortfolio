'use client';

import React, { FC, PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

import { useGetSlidesQuery } from '@/shared/clientApi/mainSliderApi';
import { useGetAllFavoritesQuery } from '@/shared/clientApi';
import { Provider } from 'react-redux';
import store from '@/app/store';
import { LoaderWithWrapper } from '@/shared/ui';
import { WrapperWithProvider } from '@/shared/modal';

export const HomePage: FC = () => {
  // const slides = await getSlides();
  const { data: slides, isLoading, isFetching } = useGetSlidesQuery();
  return (
    <div className="wrapperMain" style={{ position: 'relative' }}>
      {/*<WrapperWithProvider />*/}
      {isLoading ? (
        <LoaderWithWrapper />
      ) : (
        <Swiper
          className="swiperMain"
          direction="vertical"
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {slides?.payload?.mainSliderItems?.map(slide => (
            <SwiperSlide className="swiperMain__slide" key={slide.id}>
              <Image src={slide.photoPath} alt="" width="1500" height="875" />
              <div className="swiperMain__slide-block">
                <div className="swiperMain__slide-info">
                  {slide.description.replace('В ПОДАРОК', '')}
                  {slide.description.indexOf('В ПОДАРОК') !== -1 ? (
                    <p className="swiperMain__slide-info--orange">В ПОДАРОК</p>
                  ) : (
                    ''
                  )}
                </div>
                <p className="swiperMain__slide-text">{slide.title}</p>
                <Link href={slide.link} className="swiperMain__slide-button">
                  Подробнее
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export const HomePageWithProvider: FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};
