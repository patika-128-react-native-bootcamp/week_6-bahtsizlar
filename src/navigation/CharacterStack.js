import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CharactersListPage from '../pages/CharactersListPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';

const Stack = createNativeStackNavigator();

function CharacterStack() {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen name="CharacterList" component={CharactersListPage} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailPage} />
    </Stack.Navigator>
  );
}

export default CharacterStack;
