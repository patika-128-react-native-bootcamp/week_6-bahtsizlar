import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IconButton, Colors} from 'react-native-paper';
import styles from './CharacterList.style';
import {readData} from '../../utils';

const CharacterList = ({res, onPress}) => {
  const navigation = useNavigation();
  const isFavorite = true;

  const [data, setData] = useState([]);

  const clickHandler = async (itemId, itemName) => {
    let temp = {
      id: `${itemId}`,
      name: `${itemName}`,
    };

    try {
      await AsyncStorage.setItem('@FAV_CHARS', JSON.stringify([...data, temp]));
      setData([...data, temp]);
      AsyncStorage?.getItem('@FAV_CHARS').then(userData =>
        console.log('Send data:' + JSON.stringify(JSON.parse(userData))),
      );
    } catch (e) {
      console.log('handle:', e);
    }
  };

  useEffect(() => {
    readData();
  }, []);
  return (
    <FlatList
      data={res.data.results}
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
              <IconButton
                icon={isFavorite ? 'heart' : 'heart-outline'}
                color={Colors.red500}
                size={20}
                onPress={() => clickHandler(item.id, item.name)}
              />
            </View>
          </>
        );
      }}
    />
  );
};

export default CharacterList;
