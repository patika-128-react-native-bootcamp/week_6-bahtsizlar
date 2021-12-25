import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './CharacterList.style';

const CharacterList = ({data}) => {
  const navigation = useNavigation();
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
                  <Icon name="heart" />
                </View>
              </TouchableOpacity>
            </View>

            {/* 
                if favorites
                <Button>
                  <Text>Remove from favorites</Text>
                  <Icon name="heart-outline" />
                </Button> */}
          </>
        );
      }}
    />
  );
};

export default CharacterList;
