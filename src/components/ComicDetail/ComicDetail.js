import React from 'react';
import {View, Text, ImageBackground, StatusBar, ScrollView} from 'react-native';
import styles from './ComicDetail.styles';
import {useGetComicByIdToStoriesQuery} from '../../api/comics';
import {ActivityIndicator, Colors} from 'react-native-paper';

export default function ComicDetail({comicId, item}) {
  const {data, error, isFetching, isLoading} =
    useGetComicByIdToStoriesQuery(comicId);

  console.log('SONUÇ', item.series.name);

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
        {/* <StatusBar backgroundColor="#202020" barStyle="light-content" />
      <ScrollView style={styles.info_container}>
        <Text style={styles.title}>{item.series.name}</Text>
        <View style={styles.inner_container}>
          <View style={styles.text_info}>
            <Text style={styles.creators}>Writer:</Text>
            {item.creators.items.map(item => (
              <Text style={styles.creators}>{item.name}</Text>
            ))}
          </View>
        </View>
        <View style={styles.description}>
          {item.items.textObjects.map(item => (
            <Text style={styles.text_description}>{item.description}</Text>
          ))}
        </View>
      </ScrollView> */}
      </>
    );
  }
}
