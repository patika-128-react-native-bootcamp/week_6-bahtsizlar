import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Comics from '../pages/Comics';
import routes from './routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.COMICS_PAGE}
          component={Comics}
          options={{
            headerTitle: 'Comics',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#rgba(0,0,0,0.7)',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
