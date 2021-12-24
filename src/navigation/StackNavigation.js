import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
