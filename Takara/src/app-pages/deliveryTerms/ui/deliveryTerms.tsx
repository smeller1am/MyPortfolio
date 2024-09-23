import {getDeliveryTerms} from '@/shared/serverApi/deliveryTerms';
import Image from 'next/image';
import {FC} from 'react';
import {log} from "util";

export const DeliveryTermsPage: FC = async () => {
    const terms = await getDeliveryTerms().then((res) => {
        console.log(res)
        return res
    });
    return (
        <div className="container">
            <div className="wrapper"></div>
            <Image width={600} height={600} className="fish" src="/img/delivery/noCutt.png" alt=""/>
            <div className="titleMain">
                <h1 className="titleMain__title">Условия доставки</h1>
            </div>
            <div className="deliveryCards">
                <div className="deliveryCards__card">
                    <div className="deliveryCards__card-title">Принимаем заказы</div>
                    <div className="deliveryCards__card-text">{terms?.takingOrders}</div>
                </div>
                <div className="deliveryCards__card">
                    <div className="deliveryCards__card-title">
                        Минимальная сумма заказа
                    </div>
                    <div className="deliveryCards__card-text">
                        {terms?.minimumSumOrder}
                    </div>
                </div>
                <div className="deliveryCards__card">
                    <div className="deliveryCards__card-title">Стоимость доставки</div>
                    <div className="deliveryCards__card-text">{terms?.deliveryCost}</div>
                </div>
            </div>
            <div className="deliveryInfo">
                <div className="deliveryInfo__item">
                    <Image
                        width={100}
                        height={100}
                        className={'deliveryInfo__item-img'}
                        src="/img/iconSVG/1.png"
                        alt=""
                    />
                    <div className="deliveryInfo__item-info">
                        <div className="deliveryInfo__item-infoTitle">Время доставки</div>
                        <div className="deliveryInfo__item-infoText">
                            {terms?.deliveryTime}
                        </div>
                    </div>
                </div>
                <div className="deliveryInfo__item">
                    <Image
                        width={100}
                        height={100}
                        className={'deliveryInfo__item-img'}
                        src="/img/iconSVG/2.png"
                        alt=""
                    />
                    <div className="deliveryInfo__item-info">
                        <div className="deliveryInfo__item-infoTitle">
                            Доставка курьером
                        </div>
                        <div className="deliveryInfo__item-infoText">
                            {terms?.courierDelivery.split('.').map((el, index) => {
                                return (<p key={index}>
                                    {el}
                                </p>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="deliveryInfo__item">
                    <Image
                        width={100}
                        height={100}
                        className={'deliveryInfo__item-img'}
                        src="/img/iconSVG/3.png"
                        alt=""
                    />
                    <div className="deliveryInfo__item-info">
                        <div className="deliveryInfo__item-infoTitle">Самовывоз</div>
                        <div className="deliveryInfo__item-infoText">
                            {terms?.selfDelivery}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
