import React from 'react';
import uuid from 'react-native-uuid';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MovieCard from '../MovieCard';

const ComicsList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data.data.results}
      keyExtractor={item => item.id.toString()}
      renderItem={() =>
        data.data.results.map(item => (
          <MovieCard
            key={uuid.v4()}
            item={item}
            onComicPressed={() => {
              navigation.navigate('ComicDetail', item.id);
            }}
          />
        ))
      }
    />
  );
};

export default ComicsList;
