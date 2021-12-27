import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import styles from './CharacterList.style';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector, useAppDispatch} from '../../store';
import {
  getFavoritesList,
  removeFavorite,
  getSingleFavCharById,
} from '../../api/favoritesApiSlice';

const CharacterList = ({data, onPress}) => {
  const navigation = useNavigation();
  const isFavorite = true;
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getFavoritesList());
  // }, []);

  const clickHandler = item => {
    dispatch(getSingleFavCharById(item)).then(() => {
      console.log('--->', getMyObject());
    });
  };
  // listelerken dispatchten kıyaslamalı favla
  return (
    <FlatList
      data={data.data.results}
      renderItem={({item}) => {
        return (
          <>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CharacterDetail', item.id)}
                style={styles.container}>
                <View style={styles.image_container}></View>
                <View style={styles.inner_container}>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>

              {/* <Icon name="heart" size={25} /> */}

              <IconButton
                icon={isFavorite ? 'heart' : 'heart-outline'}
                color={Colors.red500}
                size={20}
                onPress={() => clickHandler(item.id)}
                // onPress={() => dispatch(removeFavorite(item.id))}
              />
            </View>
          </>
        );
      }}
    />
  );
};

export default CharacterList;

const getMyObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('Character');
    console.log('jsondeger', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
  }

  console.log('Done.');
};
