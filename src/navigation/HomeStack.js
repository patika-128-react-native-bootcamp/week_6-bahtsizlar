import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComicDetailPage from '../pages/ComicDetailPage';
import HomePage from '../pages/HomePage';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ComicDetail" component={ComicDetailPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;
