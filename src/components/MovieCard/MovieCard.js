import * as React from 'react';
import {
  TouchableOpacity,
  Button,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MovieCard.styles';
import uuid from 'react-native-uuid';

const MovieCard = ({item, onComicPressed, onFavPress}) => (
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
        {/* <TouchableHighlight style={styles.btn} onPress={onFavPress}>
          <Icon name="favorite-border" size={32} />
        </TouchableHighlight> */}
      </View>
    </TouchableOpacity>
  </View>
);
export default MovieCard;
