import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './MovieCard.styles';

const MovieCard = ({item, onComicPressed, onFavPress}) => (
  <TouchableOpacity onPress={onComicPressed}>
    <Card>
      <Card.Title title={item.title} />

      {item.creators.items.map(i => {
        return (
          <Card.Content key={i.id} style={styles.creator_container}>
            <Text key={i.id} style={styles.row}>
              {i.name}
            </Text>
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
