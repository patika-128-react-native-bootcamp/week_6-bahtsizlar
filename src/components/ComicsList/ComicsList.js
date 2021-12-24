import React from 'react';
import {Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useGetAllComicsQuery} from '../../api/comics/';
import MovieCard from '../MovieCard';

const ComicsList = () => {
  const {data, error, isFetching, isLoading} = useGetAllComicsQuery();
  if (error) return <Text>No content</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    console.log(data);
    return <Text>{data.data.count}</Text>;
  }
  console.log(data);
  const renderMovieCard = ({item}) => {
    <MovieCard item={item} onClick={handleAddFavorite} />;
  };
  function handleAddFavorite() {
    console.log('giz');
  }
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderMovieCard}
    />
  );
};

export default ComicsList;
