'use client';

import { useYMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { FC, useEffect, useRef } from 'react';
const Maps: FC = () => {
  const points = [
    ['', '51.609458', '46.016686'],
    ['', '51.525382', '46.028651'],
    ['', '51.567059', '45.985613'],
    ['', '51.600660', '45.928597'],
    ['', '51.503214', '45.944712'],
    ['', '51.575327', '46.072731'],
  ];

  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'control.ZoomControl', 'Placemark', 'GeoObjectCollection']);
  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }
    let myCollection = new ymaps.GeoObjectCollection();

    let myMap = new ymaps.Map(mapRef.current, {
      center: [51.57, 46.05],
      zoom: 11,
      controls: ['zoomControl'],
    });

    for (let i = 0; i < points.length; i++) {
      const myPlacemark = new ymaps.Placemark(
        [points[i][1], points[i][2]],
        {
          hintContent: points[i][0],
          balloonContent: points[i][0],
        },
        {
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/img/contact/mapIcon.svg',
          hideIconOnBalloonOpen: false,
          iconImageSize: [26, 26],
        },
      );
      myCollection.add(myPlacemark);
      myMap.geoObjects.add(myPlacemark);
    }

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myCollection);
  }, [ymaps]);
  return <div ref={mapRef} className={'map'}></div>;
};

export default Maps;
