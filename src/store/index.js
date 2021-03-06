import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {comicsApi} from '../api/comics';
import {charactersApi} from '../api/characters';

export const createStore = options =>
  configureStore({
    reducer: {
      [comicsApi.reducerPath]: comicsApi.reducer,
      [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        comicsApi.middleware,
        charactersApi.middleware,
      ),
    devTools: true,
    ...options,
  });

export const useAppDispatch = () => useDispatch();
export const useTypedSelector = useSelector;

export default createStore();
