import React from 'react';
import {Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {useGetAllComicsQuery} from '../../api/comics/';

const ComicsFilter = () => {
  const {data, error, isFetching, isLoading} = useGetAllComicsQuery();
  if (error) return <Text>ERROR</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    return <Text>FILTER RESULTS</Text>;
  }
  return <Text>FILTER RESULTS</Text>;
};

export default ComicsFilter;
