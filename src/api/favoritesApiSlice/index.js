import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAllCharacters, getCharacterById} from '../characters';
import {AsyncStorageSave} from '../../helpers/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSingleFavCharById = createAsyncThunk(
  'anonym/getOneFav',
  async productId => {
    try {
      console.log('Single State');
      await AsyncStorage.setItem('Character', productId.toString());
    } catch (error) {
      console.log('Error');
    }
    console.log('DONE');
  },
);
export const getFavoritesList = createAsyncThunk('anonymFav/list', async () => {
  console.log('Favorites List State');
  try {
    const userData = AsyncStorage.getItem('anonymUser');
    if (userData) {
      const userObj = JSON.parse(userData);
      const favoriteList = Object.keys(userObj.favoriteList);
      if (favoriteList.length !== 0) {
        const originalIdList = favoriteList.map(
          el => userObj.favoriteList[el].originalId,
        );
        const response = await getAllCharacters(originalIdList);
        return response?.data;
      }
      if (favoriteList.length === 0) {
        return null;
      }
    }
  } catch (e) {
    throw e;
  }
});

const initialState = {
  userFav: {
    anonymUserId: '',
    favoriteList: {},
  },
  isEmpty: false,
  loading: true,
};

const favoritesSlice = createSlice({
  name: 'anonymFav',
  initialState,
  reducers: {
    removeFavorite(state, action) {
      console.log('1'); // const id = action.payload.replace(/-/g, '');
      // delete state.userFav.favoriteList[id];
      // const anonymUser = AsyncStorage.getItem('anonymUser');
      // anonymUser && AsyncStorageSave(anonymUser, id);
      if (Object.keys(state.userFav.favoriteList).length === 0) {
        state.isEmpty = true;
      } else {
        state.isEmpty = false;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getSingleFavCharById.fulfilled, (state, action) => {
      console.log('single fav char');
    });
    builder.addCase(getFavoritesList.fulfilled, (state, action) => {
      console.log('3');
      const userData = AsyncStorage.getItem('anonymUser');
      if (userData && action.payload) {
        const userObj = JSON.parse(userData);
        if (
          Object.keys(userObj.favoriteList).length !== 0 &&
          action.payload !== null
        ) {
          action.payload.forEach(el => {
            state.userFav.favoriteList[el.id.replace(/-/g, '')] = {
              productData: el,
              productId: el.id,
            };
          });
          state.loading = false;
          if (Object.keys(state.userFav.favoriteList).length === 0) {
            state.isEmpty = true;
          } else {
            state.isEmpty = false;
          }
        }
      }
      if (action.payload === null) {
        state.loading = false;
        state.isEmpty = true;
      }
    });
  },
});

export default favoritesSlice.reducer;
export const {removeFavorite} = favoritesSlice.actions;
