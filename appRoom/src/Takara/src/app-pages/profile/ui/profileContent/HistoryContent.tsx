'use client';
import { FC } from 'react';
import store from '@/app/store';

import { Provider } from 'react-redux';
import { OrdersHistory } from '@/widgets/orders-history';

const HistoryContent: FC = () => {
  return (
    // <Animate appear="fadeIn" durationAppear={100}>
    <>
      <div className="profile__target profile__target--active profile__target--opacity">
        <h2 className="miniTitle miniTitle--profile">История заказов</h2>
        <OrdersHistory />

      </div>
      <div className="likeInfo__gradient"></div>
    </>
    // </Animate>
  );
};
export const HistoryWithProvider: FC = () => (
  <Provider store={store}>
    <HistoryContent />
  </Provider>
);
