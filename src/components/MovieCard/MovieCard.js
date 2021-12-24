import * as React from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, Text} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MovieCard.styles';

const MovieCard = ({item, onComicPressed, onFavPress}) => (
  <TouchableOpacity onPress={onComicPressed}>
    <Card>
      <Card.Title title={item.title} />

      {item.creators.items.map(i => {
        return (
          <Card.Content style={styles.creator_container}>
            <Text style={styles.row}>{i.name}</Text>
          </Card.Content>
        );
      })}

      <Card.Cover
        style={styles.image}
        source={{uri: `${item.thumbnail.path}.jpg`}}
      />
      <Card.Actions>
        {/* <TouchableOpacity onPress={onFavPress}>
          <Icon name="favorite-border" size={30} />
        </TouchableOpacity> */}
      </Card.Actions>
    </Card>
  </TouchableOpacity>
);

export default MovieCard;
