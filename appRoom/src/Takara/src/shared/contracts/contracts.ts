/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddressModel {
  /** @format int32 */
  id?: number;
  street: string;
  house: string;
  /** @format int32 */
  entrance?: number | null;
  /** @format int32 */
  floor?: number | null;
  apartament?: string | null;
  /** @format int32 */
  userId?: number;
  city: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  fullAddress?: string | null;
}

export interface AddToBasketRequest {
  /** @format int32 */
  productId: number;
}

export type AddToBasketResponse = object;

export interface AddToBasketResponseRestApiResponse {
  payload?: AddToBasketResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface BasketItemModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  count?: number;
  product: ProductModel;
}

export interface BonusesGetMaxBonusesOrder {
  bonuses?: MaxGetMaxBonusesOrder;
}

export interface BranchModel {
  /** @format int32 */
  id?: number;
  neighborhood: string;
  address: string;
  phoneNumber: string;
  /** @format int32 */
  contactsId?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface CategoryModel {
  /** @format int32 */
  id?: number;
  name: string;
  photoPath: string;
  /** @format int32 */
  parrentCategoryId?: number | null;
  externalId?: string | null;
  isSpice?: boolean;
  /** @format int32 */
  sortNumber?: number;
}

/** @format int32 */
export enum ChoiceOfDeliveryTime {
  Value0 = 0,
  Value1 = 1,
}

export interface ContactsModel {
  /** @format int32 */
  id?: number;
  phoneNumber?: string | null;
  qualityControlPhoneNumber?: string | null;
  workingTime?: string | null;
  branchs?: BranchModel[] | null;
}

export interface CreateAddressRequest {
  city: string;
  address: string;
  /** @format int32 */
  entrance?: number | null;
  /** @format int32 */
  floor?: number | null;
  apartament?: string | null;
}

export interface CreateAddressResponse {
  address: AddressModel;
}

export interface CreateAddressResponseRestApiResponse {
  payload?: CreateAddressResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateBranchRequest {
  neighborhood: string;
  address: string;
  phoneNumber: string;
  /** @format int32 */
  contactsId?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export type CreateBranchResponse = object;

export interface CreateBranchResponseRestApiResponse {
  payload?: CreateBranchResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateContactsRequest {
  phoneNumber: string;
  qualityControlPhoneNumber: string;
  workingTime: string;
}

export type CreateContactsResponse = object;

export interface CreateContactsResponseRestApiResponse {
  payload?: CreateContactsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateDeliveryConditionsRequest {
  takingOrders: string;
  minimumSumOrder: string;
  deliveryCost: string;
  deliveryTime: string;
  courierDelivery: string;
  selfDelivery: string;
}

export type CreateDeliveryConditionsResponse = object;

export interface CreateDeliveryConditionsResponseRestApiResponse {
  payload?: CreateDeliveryConditionsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateFavoritesRequest {
  /** @format int32 */
  productId: number;
}

export type CreateFavoritesResponse = object;

export interface CreateFavoritesResponseRestApiResponse {
  payload?: CreateFavoritesResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateOrderAgainRequest {
  /** @format int32 */
  orderId: number;
}

export type CreateOrderAgainResponse = object;

export interface CreateOrderAgainResponseRestApiResponse {
  payload?: CreateOrderAgainResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreatePromoRequest {
  title: string;
  description: string;
  photoPath: string;
  /** @format date-time */
  expirationDateStart?: string;
  /** @format date-time */
  expirationDateEnd?: string | null;
}

export type CreatePromoResponse = object;

export interface CreatePromoResponseRestApiResponse {
  payload?: CreatePromoResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateSettingRequest {
  key: string;
  value: string;
}

export type CreateSettingResponse = object;

export interface CreateSettingResponseRestApiResponse {
  payload?: CreateSettingResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateUserOrderRequest {
  recipient: string;
  recipientPhone: string;
  /** @format int32 */
  numberOfDevices: number;
  wayOfDelivery: WayOfDelivery;
  choiceOfDeliveryTime: ChoiceOfDeliveryTime;
  /** @format date-time */
  deliveryTime: string;
  wayOfPayment: WayOfPayment;
  /** @format int32 */
  points?: number | null;
  /** @format int32 */
  addressId?: number | null;
  restaurantId?: string | null;
  individualNumber?: string | null;
  orderComment?: string | null;
  /** @format int32 */
  giftId?: number | null;
  productsToOrder: ProductsToOrderModel[];
}

export interface CreateUserOrderResponse {
  /** @format int32 */
  id: number;
  /** @format date-time */
  time: string;
}

export interface CreateUserOrderResponseRestApiResponse {
  payload?: CreateUserOrderResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateVacancyFormRequest {
  firstName: string;
  lastName: string;
  /** @format date-time */
  birthDate?: string;
  /** @format int32 */
  vacancyTypeId?: number;
  phoneNumber: string;
  previousJob?: string | null;
}

export type CreateVacancyFormResponse = object;

export interface CreateVacancyFormResponseRestApiResponse {
  payload?: CreateVacancyFormResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface CreateVacancyTypeRequest {
  vacancyName: string;
}

export type CreateVacancyTypeResponse = object;

export interface CreateVacancyTypeResponseRestApiResponse {
  payload?: CreateVacancyTypeResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface DadataResponse {
  places: string[];
}

export interface DadataResponseRestApiResponse {
  payload?: DadataResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type DeleteBranchResponse = object;

export interface DeleteBranchResponseRestApiResponse {
  payload?: DeleteBranchResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type DeletePromoResponse = object;

export interface DeletePromoResponseRestApiResponse {
  payload?: DeletePromoResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type DeleteSettingResponse = object;

export interface DeleteSettingResponseRestApiResponse {
  payload?: DeleteSettingResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type DeleteUserResponse = object;

export interface DeleteUserResponseRestApiResponse {
  payload?: DeleteUserResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface DeliveryConditionsModel {
  /** @format int32 */
  id?: number;
  takingOrders: string;
  minimumSumOrder: string;
  deliveryCost: string;
  deliveryTime: string;
  courierDelivery: string;
  selfDelivery: string;
}

export interface DetailsGetMaxBonusesOrder {
  details?: BonusesGetMaxBonusesOrder;
  fingerprint?: string | null;
}

export interface DetailsGetMaxBonusesOrderRestApiResponse {
  payload?: DetailsGetMaxBonusesOrder;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface DocumentModel {
  /** @format int32 */
  id?: number;
  link: string;
  documentType: DocumentType;
}

/** @format int32 */
export enum DocumentType {
  Value0 = 0,
  Value1 = 1,
}

export interface DoubleRestApiResponse {
  /** @format double */
  payload?: number;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface Failure {
  errors?: Record<string, string[]>;
}

export interface FavoritesModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  productId?: number;
  product: ProductModel;
}

export interface GetAddressResponse {
  address: AddressModel[];
}

export interface GetAddressResponseRestApiResponse {
  payload?: GetAddressResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetAllSettingsResponse {
  settings: SettingModel[];
}

export interface GetAllSettingsResponseRestApiResponse {
  payload?: GetAllSettingsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetBasketItemsResponse {
  basketItems: BasketItemModel[];
}

export interface GetBasketItemsResponseRestApiResponse {
  payload?: GetBasketItemsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetBranchResponse {
  branchs: BranchModel[];
}

export interface GetBranchResponseRestApiResponse {
  payload?: GetBranchResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetCategoryResponse {
  categories: CategoryModel[];
}

export interface GetCategoryResponseRestApiResponse {
  payload?: GetCategoryResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetContactsResponse {
  contacts: ContactsModel;
}

export interface GetContactsResponseRestApiResponse {
  payload?: GetContactsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetDeliveryConditionsResponse {
  deliveryConditions: DeliveryConditionsModel;
}

export interface GetDeliveryConditionsResponseRestApiResponse {
  payload?: GetDeliveryConditionsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetDocumentResponse {
  documentModels: DocumentModel[];
}

export interface GetDocumentResponseRestApiResponse {
  payload?: GetDocumentResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetGiftsResponse {
  gifts: GiftModel[];
}

export interface GetGiftsResponseRestApiResponse {
  payload?: GetGiftsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetGuestOrdersResponse {
  guestOrderModels?: GuestOrderElementDto[] | null;
}

export interface GetGuestOrdersResponseRestApiResponse {
  payload?: GetGuestOrdersResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetMainSliderItemByIdRequest {
  /** @format int32 */
  id: number;
}

export interface GetMainSliderItemResponse {
  mainSliderItem?: MainSliderItemModel;
}

export interface GetMainSliderItemResponseRestApiResponse {
  payload?: GetMainSliderItemResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetMainSliderItemsResponse {
  mainSliderItems?: MainSliderItemModel[] | null;
}

export interface GetMainSliderItemsResponseRestApiResponse {
  payload?: GetMainSliderItemsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetOrdersResponse {
  orders: OrderModel[];
}

export interface GetOrdersResponseRestApiResponse {
  payload?: GetOrdersResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetProductsResponse {
  products: ProductModel[];
}

export interface GetProductsResponseRestApiResponse {
  payload?: GetProductsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetProductsToOrderResponse {
  productsToOrders: ProductsToOrderModel[];
}

export interface GetProductsToOrderResponseRestApiResponse {
  payload?: GetProductsToOrderResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetPromoResponse {
  promos: PromoModel[];
}

export interface GetPromoResponseRestApiResponse {
  payload?: GetPromoResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetRandomPredictResponse {
  prediction: PredictionModel;
}

export interface GetRandomPredictResponseRestApiResponse {
  payload?: GetRandomPredictResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetRestaurantsResponse {
  restaurants: RestaurantDto[];
}

export interface GetRestaurantsResponseRestApiResponse {
  payload?: GetRestaurantsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetSocialNetworksResponse {
  socialNetworks: SocialNetworkModel[];
}

export interface GetSocialNetworksResponseRestApiResponse {
  payload?: GetSocialNetworksResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetUserResponse {
  user: UserModel;
}

export interface GetUserResponseRestApiResponse {
  payload?: GetUserResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetVacancyFormsByVacancyTypeId {
  /** @format int32 */
  vacancyTypeId: number;
}

export interface GetVacancyFormsResponse {
  vacancyForms: VacancyFormModel[];
}

export interface GetVacancyFormsResponseRestApiResponse {
  payload?: GetVacancyFormsResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GetVacancyTypesResponse {
  vacancyTypes: VacancyTypeModel[];
}

export interface GetVacancyTypesResponseRestApiResponse {
  payload?: GetVacancyTypesResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface GiftModel {
  /** @format int32 */
  id?: number;
  active: boolean;
  /** @format int32 */
  availableBill: number;
  product: ProductModel;
}

export interface GuestDto {
  phone?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  email?: string | null;
  birthday?: string | null;
  sex?: string | null;
  loyaltyCardDto?: LoyaltyCardDto[] | null;
}

export interface GuestOrderElementDto {
  id?: string | null;
  /** @format int32 */
  number?: number;
  /** @format double */
  fullSum?: number;
  /** @format double */
  sumToPay?: number;
  /** @format double */
  freeProductSum?: number;
  /** @format double */
  paidWithBonuses?: number;
  /** @format double */
  earnedBonuses?: number;
  /** @format double */
  bonusPaymentRollbackSum?: number;
  /** @format date-time */
  openTime?: string;
  /** @format date-time */
  closeTime?: string;
  status?: string | null;
  organizationId?: string | null;
  source?: string | null;
}

export interface GuestResponse {
  guests?: GuestDto[] | null;
}

export interface GuestResponseRestApiResponse {
  payload?: GuestResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface Int32NullableRestApiResponse {
  /** @format int32 */
  payload?: number | null;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface LoginRequest {
  phone: string;
  oneTimePassword: string;
}

export interface LoginResponse {
  accessToken?: string | null;
  loginStatus?: LoginStatus;
  isNewUser?: boolean;
}

export interface LoginResponseRestApiResponse {
  payload?: LoginResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

/** @format int32 */
export enum LoginStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
}

export type LogoutRequest = object;

export interface LogoutResponse {
  responseMessage?: string | null;
}

export interface LogoutResponseRestApiResponse {
  payload?: LogoutResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface LoyaltyCardDto {
  track?: string | null;
  number?: string | null;
  isVirtual?: boolean;
}

export interface MainSliderItemModel {
  /** @format int32 */
  id?: number;
  title: string;
  description: string;
  photoPath: string;
  link: string;
}

export interface MaxGetMaxBonusesOrder {
  max?: PaymentsGetMaxBonusesOrder;
}

export interface OrderModel {
  /** @format int32 */
  id?: number;
  recipient: string;
  recipientPhone: string;
  /** @format int32 */
  numberOfDevices?: number;
  choiceOfDeliveryTime?: ChoiceOfDeliveryTime;
  wayOfDelivery?: WayOfDelivery;
  wayOfPayment?: WayOfPayment;
  orderStatus?: OrderStatus;
  /** @format date-time */
  deliveryTime: string;
  individualNumber: string;
  orderComment?: string | null;
  /** @format int32 */
  points?: number | null;
  /** @format int32 */
  earnPoints?: number | null;
  /** @format int32 */
  deliveryPrice?: number | null;
  /** @format int32 */
  userId?: number;
  address: string;
  productsToOrder: ProductsToOrderModel[];
}

/** @format int32 */
export enum OrderStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface PaymentsGetMaxBonusesOrder {
  payments?: TotalGetMaxBonusesOrder;
}

export interface PredictionModel {
  /** @format int32 */
  id?: number;
  text: string;
}

export interface ProductModel {
  /** @format int32 */
  id?: number;
  name: string;
  composition: string;
  description: string;
  /** @format int32 */
  price?: number;
  /** @format int32 */
  weight?: number;
  /** @format int32 */
  kcal?: number;
  /** @format int32 */
  proteins?: number;
  /** @format int32 */
  fats?: number;
  /** @format int32 */
  carbohydrates?: number;
  /** @format int32 */
  categoryId?: number;
  photoPath: string;
  portion?: string | null;
  externalId?: string | null;
  isRecommendation?: boolean;
  category: CategoryModel;
}

export interface ProductsToOrderModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  orderId?: number;
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  count?: number;
  /** @format int32 */
  fullPrice?: number;
  product: ProductModel;
}

export interface PromoModel {
  /** @format int32 */
  id?: number;
  title: string;
  description: string;
  photoPath: string;
  /** @format date-time */
  expirationDateStart?: string | null;
  /** @format date-time */
  expirationDateEnd?: string | null;
}

export type RemoveAllInBasketResponse = object;

export interface RemoveAllInBasketResponseRestApiResponse {
  payload?: RemoveAllInBasketResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type RemoveFromBasketResponse = object;

export interface RemoveFromBasketResponseRestApiResponse {
  payload?: RemoveFromBasketResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export type RemoveFromFavoritesResponse = object;

export interface RemoveFromFavoritesResponseRestApiResponse {
  payload?: RemoveFromFavoritesResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface RestaurantDto {
  /** @format int32 */
  id?: number;
  restaurantId?: string | null;
  name?: string | null;
  address?: string | null;
  city?: string | null;
  rkObjectId?: string | null;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface SendOneTimePasswordReponse {
  message: string;
}

export interface SendOneTimePasswordReponseRestApiResponse {
  payload?: SendOneTimePasswordReponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface SendOneTimePasswordRequest {
  phone: string;
}

export interface SettingModel {
  /** @format int32 */
  id?: number;
  key: string;
  value: string;
}

export interface SocialNetworkModel {
  /** @format int32 */
  id?: number;
  link: string;
  socialNetworksType: SocialNetworksType;
}

/** @format int32 */
export enum SocialNetworksType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface TotalGetMaxBonusesOrder {
  /** @format double */
  total?: number;
}

export interface UpdateBranchRequest {
  /** @format int32 */
  id?: number;
  neighborhood: string;
  address: string;
  phoneNumber: string;
  /** @format int32 */
  contactsId?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export type UpdateBranchResponse = object;

export interface UpdateBranchResponseRestApiResponse {
  payload?: UpdateBranchResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface UpdatePromoRequest {
  /** @format int32 */
  id: number;
  title: string;
  description: string;
  photoPath: string;
  /** @format date-time */
  expirationDateStart: string;
  /** @format date-time */
  expirationDateEnd?: string | null;
}

export type UpdatePromoResponse = object;

export interface UpdatePromoResponseRestApiResponse {
  payload?: UpdatePromoResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface UpdateSettingRequest {
  /** @format int32 */
  id: number;
  key: string;
  value: string;
}

export type UpdateSettingResponse = object;

export interface UpdateSettingResponseRestApiResponse {
  payload?: UpdateSettingResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface UpdateUserRequest {
  firstName?: string | null;
  lastName?: string | null;
  mail?: string | null;
  /** @format date-time */
  birthDate?: string;
}

export type UpdateUserResponse = object;

export interface UpdateUserResponseRestApiResponse {
  payload?: UpdateUserResponse;
  failure?: Failure;
  isSuccess?: boolean;
}

export interface UserModel {
  /** @format int32 */
  id?: number;
  phone: string;
  firstName?: string | null;
  lastName?: string | null;
  isBlocked?: boolean;
  /** @format int32 */
  lastPasswordId?: number | null;
  apiUserToken?: string | null;
  userRole?: UserRoles;
  /** @format int32 */
  points?: number;
  registrationStatus?: UserRegistrationStatus;
  /** @format date-time */
  lastLoginDate: string;
  mail?: string | null;
  /** @format date-time */
  birthDate?: string | null;
  /** @format date-time */
  registrationDate?: string | null;
  addresses: AddressModel[];
  favorites: FavoritesModel[];
  orders: OrderModel[];
  basketItems: BasketItemModel[];
}

/** @format int32 */
export enum UserRegistrationStatus {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum UserRoles {
  Value0 = 0,
}

export interface VacancyFormModel {
  /** @format int32 */
  id?: number;
  firstName: string;
  lastName: string;
  /** @format date-time */
  birthDate?: string;
  /** @format date-time */
  registrationFormDate?: string;
  /** @format int32 */
  vacancyTypeId?: number;
  phoneNumber: string;
  previousJob?: string | null;
  vacancyType?: VacancyTypeModel;
}

export interface VacancyTypeModel {
  /** @format int32 */
  id?: number;
  name: string;
}

/** @format int32 */
export enum WayOfDelivery {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum WayOfPayment {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}
