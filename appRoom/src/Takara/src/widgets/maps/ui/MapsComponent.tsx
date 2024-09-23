'use client';
import Maps from '@/widgets/maps/ui/maps';
import { YMaps } from '@pbe/react-yandex-maps';
import { FC } from 'react';

const MapsComponent: FC = () => {
  return (
    <YMaps>
      <Maps />
    </YMaps>
  );
};

export default MapsComponent;
