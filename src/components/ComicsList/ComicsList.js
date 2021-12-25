import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useGetAllComicsQuery} from '../../api/comics/';
import MovieCard from '../MovieCard';

const ComicsList = ({data}) => {
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
            item={item}
            onFavPress={handleAddFavorite}
            //   onComicPressed={() => goDetailPage(item)}
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
