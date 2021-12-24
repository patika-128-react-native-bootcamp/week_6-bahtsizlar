import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({...rest}) => <Icon name="home-outline" {...rest} />,
            tabBarLabel: 'Home',
          }}
          name="HomePage"
          component={StackNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
