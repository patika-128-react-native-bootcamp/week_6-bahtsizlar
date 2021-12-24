import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StackNavigation from './StackNavigation';
import CharactersListPage from '../pages/CharactersListPage';

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
        <Tab.Screen
          options={{
            tabBarIcon: ({...rest}) => (
              <Icon name="account-search-outline" {...rest} />
            ),
            tabBarLabel: 'Hero Search',
          }}
          name="Search"
          component={CharactersListPage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
