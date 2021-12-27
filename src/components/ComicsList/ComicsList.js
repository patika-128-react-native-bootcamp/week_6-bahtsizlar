import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';

import MovieCard from '../MovieCard';
import uuid from 'react-native-uuid';

const ComicsList = ({data}) => {
  const navigation = useNavigation();
  function handleAddFavorite() {
    console.log('giz');
  }
  return (
    <FlatList
      data={data.data.results}
      keyExtractor={item => item.id.toString()}
      renderItem={() =>
        data.data.results.map(item => (
          <MovieCard
            key={uuid.v4()}
            item={item}
            onFavPress={handleAddFavorite}
            onComicPressed={() => {
              navigation.navigate('ComicDetail', item.id);
            }}
          />
        ))
      }
    />
  );
};

// function goDetailPage(selectedComic) {
//   navigation.navigate(routes.COMIC_DETAIL_PAGE, {comic: selectedComic});
// }

export default ComicsList;
