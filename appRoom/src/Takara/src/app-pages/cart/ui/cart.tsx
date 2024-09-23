'use client';

import {
  useAddProductToBasketMutation,
  useGetBasketProductsQuery,
  useRemoveFavoritesMutation,
  useRemoveProductFromBasketMutation,
} from '@/shared/clientApi';
import dayjs from 'dayjs';
import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import store from '@/app/store';
import { ModalType, closeModal, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { deliveryTime, userAddresses } from '@/entities/cart/ui/mock';
import {
  useGetReccomendationsQuery,
  useGetRestaurantsQuery,
  useSendOrderMutation,
} from '@/shared/clientApi/orderingApi';
import { useGetUserQuery } from '@/shared/clientApi/userApi';
import { CreateUserOrderRequest, GiftModel, ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import { WrapperWithProvider } from '@/shared/modal';
import { ModalAddAddres } from '@/widgets/modal-add-address';
import cn from 'classnames';
import { useFormik } from 'formik';
import Image from 'next/image';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import GiftsBlock from './gifts-block';
import { declination, getFormattedData } from '@/shared/lib/utils';
import { any } from 'prop-types';
import { Loader, LoaderWithWrapper } from '@/shared/ui';
import { ModalAddSpecies } from '@/widgets/modal-species';
import { ModalSuccessOrder } from '@/widgets/modal-succes-order';

let selectAddressValue: number;
let selectRestarantValue: string | null | undefined;
let selectTimeValue: number;

enum WayOfDeliveryTypes {
  Courier = 0,
  SelfDelivery,
}

enum ChoiceOfDeliveryTime {
  ByTime = 0,
  Asap,
}

enum WayOfPayment {
  InCash = 0,
  ByCard,
}

interface AdaptedCreateUserOrderRequest
  extends Omit<CreateUserOrderRequest, 'wayOfDelivery' | 'choiceOfDeliveryTime' | 'wayOfPayment'> {
  wayOfDelivery: WayOfDeliveryTypes;
  choiceOfDeliveryTime: ChoiceOfDeliveryTime;
  wayOfPayment: WayOfPayment;
}

const getModalState = (state: RootState) => state.modal.isOpen !== null;

const CartPage: FC = () => {
  const getAccessTokenState = (state: RootState) => state.accessToken;
  const { accessToken } = useSelector(getAccessTokenState);
  const dispatch = useDispatch();
  const suggestBlock = useRef(null);
  const selectRef = useRef<any>(null);
  const [resText, setResText] = useState('');
  const isModalOpen = useSelector(getModalState);

  const { data: basketProducts, refetch } = useGetBasketProductsQuery();
  const { data: recomendedProducts } = useGetReccomendationsQuery();
  const { data: reustarants } = useGetRestaurantsQuery();
  const { data: user, isLoading: userLoading } = useGetUserQuery();

  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();
  const [addProductToBasket] = useAddProductToBasketMutation();
  const [sendOrder, { isLoading }] = useSendOrderMutation({});
  const [removeFav] = useRemoveFavoritesMutation();

  const totalCount = useMemo(
    () => basketProducts?.payload?.basketItems.reduce((acc, { count }) => acc + (count ?? 0), 0),
    [basketProducts],
  );

  const [dishesAmount, setDishesAmount] = useState(3);
  const [giftId, setGiftId] = useState<number>();
  const [isSpeciesShown, setIsSpeciesShown] = useState(false);
  const [wayOfDelivery, setWayOfDelivery] = useState<number>(WayOfDeliveryTypes.Courier);
  const [choiceOfDeliveryTime, setChoiceOfDeliveryTime] = useState<number>(
    ChoiceOfDeliveryTime.Asap,
  );
  const [wayOfPayment, setWayOfPayment] = useState<number>(WayOfPayment.InCash);

  const totalPrice = useMemo(
    () =>
      basketProducts?.payload?.basketItems?.reduce(
        (acc, { product, count }) => acc + (product?.price ?? 0) * (count ?? 1),
        0,
      ),
    [basketProducts],
  );

  const calculateDeliveryTime = () => {
    let currentTime = new Date();
    return deliveryTime.filter(el => Number(el.label.split(':')[0]) > currentTime.getHours());
  };

  const handleDecreaseBasketProductCount =
    (productId: ProductModel['id']): MouseEventHandler =>
    async () =>
      await removeProductFromBasket(productId);

  // const handleIncreaseBasketProductCount =
  //     (productId: ProductModel['id']): MouseEventHandler =>
  //         async () =>
  //             await addProductToBasket(productId);

  const selectAddressChangeFunction = (e: any) => {
    selectAddressValue = e.value?.id;
    selectRestarantValue = e.value?.rkObjectId;
  };

  const selectTimeChangeFunction = (e?: any) => {
    const today = new Date();
    const goalTime = e
      ? new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          e.value.split(':')[0],
          e.value.split(':')[1],
          0,
          0,
        )
      : new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), 0, 0);
    selectTimeValue = goalTime.getTime() / 1000;
    return goalTime.getTime() / 1000;
  };
  useEffect(() => {
    selectTimeChangeFunction();
  }, []);

  const renderNumberOfDishes = (number: number) => {
    const dishes = [];

    for (let i = 0; i <= number; i++) {
      const handleDishesClick = (e: any) => {
        setDishesAmount(e.target.innerHTML);
      };

      dishes.push(
        <div
          key={i}
          className={cn('orderingForm__quantity-number', {
            'orderingForm__quantity-number--active': i == dishesAmount,
          })}
          onClick={e => handleDishesClick(e)}
        >
          {i}
        </div>,
      );
    }

    return dishes;
  };

  const handleWayOfDeliveryChange: ChangeEventHandler<HTMLInputElement> = e => {
    setWayOfDelivery(+e.target.value);
    selectRef.current?.setValue('');
  };

  const handleSelfWayOfDeliveryChange: ChangeEventHandler<HTMLInputElement> = e => {
    wayOfPayment === WayOfPayment.ByCard && setWayOfPayment(WayOfPayment.ByCard);
    setWayOfDelivery(+e.target.value);
    selectRef.current?.setValue('');
  };

  const handleTimeOfDeliveryChange: ChangeEventHandler<HTMLInputElement> = e => {
    setChoiceOfDeliveryTime(+e.target.value);
  };

  const handleTypeOfPaymentChange: ChangeEventHandler<HTMLInputElement> = e => {
    setWayOfPayment(+e.target.value);
  };

  const { Option, MenuList } = components;

  const openAddressModal = () => {
    dispatch(openModal(ModalType.Address));
  };

  const closeAddressModal = () => {
    dispatch(closeModal());
  };
  const openSpeciesModal = () => {
    dispatch(openModal(ModalType.Species));
    setIsSpeciesShown(true);
  };
  const openSuccessOrderModal = () => {
    dispatch(openModal(ModalType.Success));
  };

  const handleAddToBasketClick = (id: ProductModel['id']) => {
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      addProductToBasket(id);
    }
  };

  const handleRemoveFavoritesClick = (id: number) => {
    removeFav(id);
  };
  const handleChoice = (product?: ProductModel) => setGiftId(product?.id);

  const formatOptionLabel = ({ value, label }: { value: string; label: string }) => (
    <div className="selectCart__option ">
      {getFormattedData()}
      <span>{label}</span>
    </div>
  );

  const CustomSelectOption = (props: any) => <Option {...props}>{props.children}</Option>;

  const CustomSelectMenuList = (props: any) => (
    <MenuList {...props}>
      {props.children}
      <p className="borderTop paragraph" onClick={() => openAddressModal()}>
        + Добавить адрес
      </p>
    </MenuList>
  );

  const formik = useFormik<CreateUserOrderRequest | any>({
    initialValues: {
      recipient: user?.payload?.user.firstName ?? '',
      recipientPhone: user?.payload?.user.phone ?? '',
      numberOfDevices: 0,
      wayOfDelivery: 0,
      addressId: 0,
      choiceOfDeliveryTime: 0,
      deliveryTime: selectTimeValue,
      wayOfPayment: wayOfPayment,
      points: 0,
      individualNumber: '1111111111',
      orderComment: '',
      giftId: 0,
      productsToOrder: [],
      restaurantId: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        values.wayOfDelivery = wayOfDelivery;
        values.choiceOfDeliveryTime = choiceOfDeliveryTime;
        values.wayOfPayment = wayOfPayment;
        values.addressId = selectAddressValue;
        values.restaurantId = selectRestarantValue;
        values.deliveryTime =
          wayOfDelivery === WayOfDeliveryTypes.Courier
            ? selectTimeValue
            : selectTimeChangeFunction();
        // values.productsToOrder = basketProducts?.payload?.basketItems.map((item) => ({ count: item.count, productId: item.product.id })) ?? [];
        values.numberOfDevices = dishesAmount;
        values.recipient = user?.payload?.user.firstName ?? '';
        values.recipientPhone = user?.payload?.user.phone ?? '';
        values.giftId = giftId;
        values.productsToOrder =
          basketProducts?.payload?.basketItems.map(item => ({
            count: item.count,
            productId: item.product.id,
            product: item.product,
          })) ?? [];

        if (isSpeciesShown) {
          await sendOrder(values)
            .unwrap()
            .then(() => {
              resetForm();
              openSuccessOrderModal();
              setResText('Заявка отправлена');
            });
        } else {
          openSpeciesModal();
        }
      } catch (err) {
      } finally {
        refetch();
      }
    },
  });
  const time = dayjs().locale('ru_RU');

  return (
    <div className="container">
      <WrapperWithProvider />
      {userLoading ? (
        <LoaderWithWrapper />
      ) : (
        <form onSubmit={formik.handleSubmit} className="containerPage">
          <div className="containerPage__item containerPage__item--order firstItem">
            <div className="titleMain titleProfile">
              <h1 className="titleMain__title">Оформление заказа</h1>
            </div>
            <div className="formContainer">
              <div className="orderingForm">
                <div className="orderingForm__item">
                  <p className="paragraph">Получатель</p>
                  <input
                    className="inputForm"
                    name="recipient"
                    type="text"
                    placeholder="Введите имя"
                    onChange={formik.handleChange}
                    defaultValue={user?.payload?.user.firstName ?? ''}
                  />
                  <p className="paragraph">Телефон</p>
                  <input
                    className="inputForm"
                    name="recipientPhone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    onChange={formik.handleChange}
                    defaultValue={user?.payload?.user.phone}
                  />
                  <p className="paragraph">Количество приборов</p>
                  <div className="orderingForm__quantity">{renderNumberOfDishes(8)}</div>
                  <p className="paragraph">Способ доставки</p>
                  <div className="orderingForm__delivery">
                    <div className="orderingForm__delivery-radio">
                      <div className="orderingForm__delivery-radioContainer">
                        <div className="orderingForm__delivery-radioBtn">
                          <input
                            id="radio-1"
                            type="radio"
                            name="radio"
                            value={WayOfDeliveryTypes.Courier}
                            defaultChecked={true}
                            onChange={handleWayOfDeliveryChange}
                          />
                          <label htmlFor="radio-1">Курьер</label>
                        </div>
                        <span>Стоимость доставки 0 ₽</span>
                      </div>
                      <div className="orderingForm__delivery-radioBtn">
                        <input
                          id="radio-2"
                          type="radio"
                          name="radio"
                          value={WayOfDeliveryTypes.SelfDelivery}
                          onChange={handleSelfWayOfDeliveryChange}
                        />
                        <label htmlFor="radio-2">Самовывоз</label>
                      </div>
                    </div>
                  </div>
                  <p className="paragraph">
                    {wayOfDelivery === WayOfDeliveryTypes.Courier
                      ? 'Укажите адрес'
                      : 'Выберите адрес'}
                  </p>
                  <div className="select">
                    <svg
                      className="rotate"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <path
                        d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z"
                        fill="#8B8E9E"
                      />
                    </svg>
                    <Select
                      ref={selectRef}
                      required={true}
                      classNamePrefix="selectCart"
                      options={
                        wayOfDelivery === WayOfDeliveryTypes.Courier
                          ? user?.payload?.user.addresses.map(item => {
                              return { label: item.fullAddress, value: { id: item.id } };
                            })
                          : (reustarants?.payload?.restaurants.map(item => {
                              return (
                                item.restaurantId && {
                                  label: item.address,
                                  value: { rkObjectId: item.restaurantId, id: item.rkObjectId },
                                }
                              );
                            }) as any)
                      }
                      placeholder={'Укажите'}
                      onChange={selectAddressChangeFunction}
                      noOptionsMessage={() => 'Добавьте адрес'}
                      components={
                        wayOfDelivery === WayOfDeliveryTypes.Courier
                          ? {
                              Option: CustomSelectOption,
                              MenuList: CustomSelectMenuList,
                            }
                          : {}
                      }
                    />
                  </div>
                </div>

                <div
                  className={
                    wayOfDelivery === WayOfDeliveryTypes.Courier
                      ? 'orderingForm__item'
                      : 'orderingForm__item orderingForm__item--fs'
                  }
                >
                  {wayOfDelivery === WayOfDeliveryTypes.Courier && (
                    <>
                      <p className="paragraph">Время доставки</p>
                      <div className="orderingForm__delivery orderingForm__delivery--mb">
                        <div className="orderingForm__delivery-radio">
                          <div className="orderingForm__delivery-radioContainer">
                            <div className="orderingForm__delivery-radioBtn">
                              <input
                                id="radio1"
                                type="radio"
                                name="radio2"
                                value={ChoiceOfDeliveryTime.Asap}
                                defaultChecked={true}
                                onChange={handleTimeOfDeliveryChange}
                              />
                              <label htmlFor="radio1">Как можно раньше</label>
                            </div>

                            {!!choiceOfDeliveryTime && (
                              <span>
                                Примерное время {dayjs().add(70, 'minutes').format('HH:mm')}
                              </span>
                            )}
                          </div>
                          <div className="orderingForm__delivery-radioBtn">
                            <input
                              id="radio2"
                              type="radio"
                              name="radio2"
                              value={ChoiceOfDeliveryTime.ByTime}
                              onChange={handleTimeOfDeliveryChange}
                            />
                            <label htmlFor="radio2">
                              Ко времени
                              <span>Фактическое время доставки может отличаться на ± 10 минут</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn('select', {
                          'select--opacity': choiceOfDeliveryTime === ChoiceOfDeliveryTime.Asap,
                        })}
                      >
                        <svg
                          className="rotate"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <path
                            d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z"
                            fill="#8B8E9E"
                          />
                        </svg>
                        <Select
                          required={choiceOfDeliveryTime === ChoiceOfDeliveryTime.ByTime}
                          classNamePrefix="selectCart"
                          options={calculateDeliveryTime()}
                          placeholder={'Выберите'}
                          // defaultMenuIsOpen={true}
                          formatOptionLabel={formatOptionLabel}
                          // closeMenuOnSelect={false}
                          // closeMenuOnScroll={false}
                          // defaultMenuIsOpen={true}
                          onChange={selectTimeChangeFunction}
                        />
                        <input type="hidden" id="select" />
                      </div>
                    </>
                  )}
                  <p className="topSelect paragraph">Оплата</p>
                  <div className="orderingForm__delivery">
                    <div className="orderingForm__delivery-radio">
                      {wayOfDelivery === WayOfDeliveryTypes.SelfDelivery && (
                        <div className="orderingForm__delivery-radioBtn">
                          <input
                            id="radio-3"
                            type="radio"
                            name="radio3"
                            // value="1"
                            // checked={wayOfPayment === }
                            // defaultChecked={true}
                            value={WayOfPayment.ByCard}
                            onChange={handleTypeOfPaymentChange}
                          />
                          <label htmlFor="radio-3">Банковская карта</label>
                        </div>
                      )}
                      <div className="orderingForm__delivery-radioBtn">
                        <input
                          id="radio-4"
                          type="radio"
                          name="radio3"
                          defaultChecked={true}
                          value={WayOfPayment.InCash}
                          // checked={wayOfPayment == 2}
                          onChange={handleTypeOfPaymentChange}
                        />
                        <label htmlFor="radio-4">Наличными</label>
                      </div>
                      {wayOfDelivery === WayOfDeliveryTypes.Courier && (
                        <div className="orderingForm__delivery-radioBtn">
                          <input
                            id="radio-5"
                            type="radio"
                            name="radio3"
                            value={WayOfPayment.ByCard}
                            // checked={wayOfPayment == 3}
                            onChange={handleTypeOfPaymentChange}
                          />
                          <label htmlFor="radio-5">Картой курьеру</label>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="orderingForm__points paragraph">
                    Использовать баллы (до 740 ₽){' '}
                    <span>
                      У вас {user?.payload?.user.points} {declination(user?.payload?.user.points)}
                    </span>
                  </p>
                  <input
                    className="inputForm inputForm--mb0"
                    type="number"
                    placeholder="Введите"
                    onChange={formik.handleChange}
                    name="points"
                  />
                </div>
              </div>
              <div className="orderingForm__item orderingForm__item--bottom">
                <p className="paragraph">Комментарий к заказу</p>
                <input
                  className="inputForm"
                  type="text"
                  name="orderComment"
                  onChange={formik.handleChange}
                  placeholder="Введите комментарий"
                />
              </div>
            </div>
            <GiftsBlock totalPrice={totalPrice ?? 0} onClick={handleChoice} />
            <div className="dontForget" ref={suggestBlock}>
              <h2 className="miniTitle">Рекомендуем попробовать</h2>
              <div className="dontForget__cards">
                {recomendedProducts?.payload?.products?.map((product: ProductModel) => {
                  return (
                    <div key={product.id} className="dontForget__cards-item">
                      <Image
                        className="dontForget__cards-img"
                        width={160}
                        height={124}
                        src={product.photoPath || '/img/defaultCard.png'}
                        alt=""
                      />
                      <div className="dontForget__cards-info">
                        <div className="dontForget__cards-infoTitle">{product.name}</div>
                        <div className="dontForget__cards-infoSubtitle">{`${product.price} ₽`}</div>
                        <div
                          className="dontForget__cards-infoBtn"
                          onClick={() => handleAddToBasketClick(product.id)}
                        >
                          <div className="dontForget__cards-icon icon-basket"></div>В корзину
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="containerPage__item secondItem">
            <h2 className="containerPage__item-ourOrder miniTitle">Ваш заказ</h2>
            <div className="order order--margin">
              {basketProducts?.payload?.basketItems.map(
                ({ product: { id, photoPath, name, price }, count }) => (
                  <div key={id} className="order__item">
                    <Image
                      src={photoPath || '/img/defaultCard.png'}
                      width={100}
                      height={100}
                      alt=""
                    />
                    <div className="order__itemText">
                      <div className="order__itemTitle">{name}</div>
                      <div className="order__itemPrice">{price} ₽</div>
                    </div>
                    <div className="order__plusMinus">
                      <div className="order__block">
                        <div className="order__plus" onClick={handleDecreaseBasketProductCount(id)}>
                          <span>-</span>
                        </div>
                        <div className="order__digital">{count}</div>
                        <div className="order__minus" onClick={() => handleAddToBasketClick(id)}>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
            <div className="containerPage__item-priceOrder">
              <p>Итого</p>
              {utils.renderPrice(totalPrice)}
            </div>
            <div className="paragraph paragraph--big">{resText}</div>
            <button
              type="submit"
              className={cn('buttonOrder buttonOrder--cart', {
                'buttonOrder--disable': basketProducts
                  ? basketProducts?.payload?.basketItems.length == 0
                  : true,
              })}
            >
              <div className="buttonOrder__checkout buttonOrder__checkout--width orderClick">
                {isLoading ? (
                  <Loader small={true} />
                ) : (
                  <>
                    <div className="buttonOrder__price">{utils.renderPrice(totalPrice)}</div>
                    <p>Оформить заказ</p>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
      )}

      <ModalAddAddres type="address" isOpen={true} closeModal={closeAddressModal} />
      <ModalAddSpecies
        type="species"
        anchorBlock={suggestBlock}
        isOpen={isModalOpen}
        closeModal={closeAddressModal}
      />
      <ModalSuccessOrder isOpen={isModalOpen} closeModal={closeAddressModal} type="success" />
    </div>
  );
};

export const CartPageWithProvider = () => (
  <Provider store={store}>
    <CartPage />
  </Provider>
);
