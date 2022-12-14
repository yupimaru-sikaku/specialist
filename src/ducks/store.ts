import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { blogApi } from 'src/ducks/blog/query';
import { charityApi } from 'src/ducks/charity/query';
import { charityDetailApi } from 'src/ducks/charityDetail/query';
import { charityImageApi } from 'src/ducks/charityImage/query';

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [charityApi.reducerPath]: charityApi.reducer,
    [charityDetailApi.reducerPath]: charityDetailApi.reducer,
    [charityImageApi.reducerPath]: charityImageApi.reducer,
  },
  // 使い方が不明
  // preloadedState: load(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      charityApi.middleware,
      charityDetailApi.middleware,
      charityImageApi.middleware
    ),
});

// 追記は任意ですが、refetchOnFocus/refetchOnReconnectという機能を利用するためには下記が必要です
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
