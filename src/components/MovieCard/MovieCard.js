import * as React from 'react';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = ({item, onClick}) => (
  <Card>
    <Card.Title title={item.title} left={LeftContent} />
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{item.textObjects.text}</Paragraph>
    </Card.Content>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    <Card.Actions>
      <Button
        onClick={onClick}
        left={props => <Button.Icon {...props} icon="favorite-border" />}>
        Add Favorite
      </Button>
    </Card.Actions>
  </Card>
);

export default MovieCard;
