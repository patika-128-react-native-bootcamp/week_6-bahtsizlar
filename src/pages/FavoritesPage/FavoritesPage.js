import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import {readData} from '../../utils';

const FavoritesPage = () => {
  const [favChars, setFavChars] = useState([]);
  useEffect(() => {
    readData(setFavChars);
  }, []);
  for (const [key, value] of Object.entries(favChars)) {
    console.log(` ${value.name}`);
  }
  return <Text>Favorite Page </Text>;
};

export default FavoritesPage;
