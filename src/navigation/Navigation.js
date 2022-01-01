import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './HomeStack';

import CharacterStack from './CharacterStack';
import FavoriteStack from './FavoriteStack';

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
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({...rest}) => (
              <Icon name="account-search-outline" {...rest} />
            ),
            tabBarLabel: 'Hero Search',
          }}
          name="CharacterStack"
          component={CharacterStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({...rest}) => <Icon name="heart-outline" {...rest} />,
            tabBarLabel: 'Favorites',
          }}
          name="FavoriteStack"
          component={FavoriteStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
