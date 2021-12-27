import React from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useGetComicByIdQuery} from '../../api/comics';
import ComicDetail from '../../components/ComicDetail';

export default function ComicDetailPage({route}) {
  const comicId = route.params;
  const {data, error, isFetching, isLoading} = useGetComicByIdQuery(comicId);

  if (error) return <Text>Error</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    console.log(data);
    const comicResults = data.data.results[0];
    return (
      <View>
        <ComicDetail comicId={comicId} item={comicResults} />
      </View>
    );
  }
  return <Text>No content </Text>;
}
