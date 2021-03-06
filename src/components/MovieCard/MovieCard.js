import * as React from 'react';
import uuid from 'react-native-uuid';
import {TouchableOpacity, Image, Text, View, ScrollView} from 'react-native';

import styles from './MovieCard.styles';

const MovieCard = ({item, onComicPressed}) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={onComicPressed} style={styles.container}>
      <Image
        source={{uri: `${item.thumbnail.path}.jpg`}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.image_container}></View>
      <View style={styles.inner_container}>
        <Text style={styles.text}>{item.title}</Text>
        <ScrollView horizontal>
          {item.creators.items.map(i => {
            return (
              <View key={uuid.v4()} style={styles.creator_container}>
                <Text style={styles.row}>{i.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </TouchableOpacity>
  </View>
);
export default MovieCard;
