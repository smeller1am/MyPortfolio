import { useGetOrderHistoryQuery } from '@/shared/clientApi/orderingApi';
import { HistoryCard } from '@/widgets/orders-history/ui/history-card';
import { Loader } from '@/shared/ui';

export const OrdersHistory = () => {
  const { data: history, isLoading } = useGetOrderHistoryQuery();

  const halfOrders = history?.payload?.orders.length && history?.payload?.orders.length / 2;

  return (
    <div className="history">
      {isLoading ? (
        <div className="loaderWrapper">
          <Loader />
        </div>
      ) : (
        <div className="history__container">
          <div className="history__grid">
            {history?.payload?.orders
              .slice(3)
              .slice(halfOrders)
              .reverse()
              .map(order => <HistoryCard order={order} key={order.id} />)}
          </div>
          <div className="history__grid">
            {history?.payload?.orders
              .slice(3)
              .slice(0, halfOrders)
              .reverse()
              .map(order => <HistoryCard order={order} key={order.id} />)}
          </div>
        </div>
      )}
    </div>
  );
};
