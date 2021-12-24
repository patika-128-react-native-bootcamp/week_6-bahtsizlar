import * as React from 'react';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = ({item, onComicPressed, onFavPress}) => (
  <TouchableOpacity onPress={onComicPressed}>
    <Card>
      <Card.Title title={item.title} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.textObjects.text}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: `${item.thumbnail.path}.jpg`}} />
      <Card.Actions>
        {/* <TouchableOpacity onPress={onFavPress}>
          <Icon name="favorite-border" size={30} />
        </TouchableOpacity> */}
      </Card.Actions>
    </Card>
  </TouchableOpacity>
);

export default MovieCard;
