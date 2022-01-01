import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FavoritesPage from '../pages/FavoritesPage';

const Stack = createNativeStackNavigator();

function FavoriteStack() {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="FavoriteList"
        component={FavoritesPage}
      />
    </Stack.Navigator>
  );
}

export default FavoriteStack;
