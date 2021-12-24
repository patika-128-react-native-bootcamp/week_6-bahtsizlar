import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useGetAllComicsQuery} from '../../api/comics/';
import MovieCard from '../MovieCard';

const ComicsList = () => {
  const navigation = useNavigation();
  const {data, error, isFetching, isLoading} = useGetAllComicsQuery();
  if (error) return <Text>No content</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;

  if (data) {
    console.log(data.data.results);
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
  }

  function handleAddFavorite() {
    console.log('giz');
  }

  // function goDetailPage(selectedComic) {
  //   navigation.navigate(routes.COMIC_DETAIL_PAGE, {comic: selectedComic});
  // }
};

export default ComicsList;
