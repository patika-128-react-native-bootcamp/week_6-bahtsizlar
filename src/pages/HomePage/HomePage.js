import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useGetAllComicsQuery} from '../../api/comics/';
import {SafeAreaView, Text} from 'react-native';
import ComicsList from '../../components/ComicsList';

import styles from './HomePage.styles';

const HomePage = () => {
  const navigation = useNavigation();
  const {data, error, isFetching, isLoading} = useGetAllComicsQuery();
  if (error) return <Text>No content</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <ComicsList data={data} />
      </SafeAreaView>
    );
  }
};

export default HomePage;
