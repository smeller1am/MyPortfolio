'useClient';

import authSlice from '@/app/store/authSlice';
import menuSlice from '@/app/store/menuSlice';
import modalSlice from '@/app/store/modalSlice';
import { basketApi } from '@/shared/clientApi';
import { emptySplitApi } from '@/shared/clientApi/base';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// todo move to shared
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [emptySplitApi.reducerPath],
};

const rootReducer = combineReducers({
  modal: modalSlice,
  accessToken: authSlice,
  menu: menuSlice,
  [basketApi.reducerPath]: basketApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([emptySplitApi.middleware]),
});
export const persistor = persistStore(store);
export default store;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
