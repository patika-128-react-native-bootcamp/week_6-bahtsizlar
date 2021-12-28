import React from 'react';
import {Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {useGetComicByIdToStoriesQuery} from '../../api/comics';

export default function ComicDetail({comicId, item}) {
  const {data, error, isFetching, isLoading} =
    useGetComicByIdToStoriesQuery(comicId);
  if (error) return <Text>Error</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    console.log(data);
    return (
      <>
        <Text>{item.series.name}</Text>
      </>
    );
  }
}
