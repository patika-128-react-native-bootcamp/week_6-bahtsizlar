import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CharacterList = ({data}) => {
  return (
    <FlatList
      data={data.data.results}
      renderItem={({item}) => {
        return (
          <>
            <Card>
              <Card.Title title={item.name} subtitle={item.description} />
              <Card.Content>
                <Title>{item.thumbnail.path}.jpg</Title>
              </Card.Content>
              <Card.Cover source={{uri: `${item.thumbnail.path}.jpg`}} />
              <Card.Actions>
                <Button>
                  <Text>Add to favorites</Text>
                  <Icon name="heart" />
                </Button>

                {/* 
                if favorites
                <Button>
                  <Text>Remove from favorites</Text>
                  <Icon name="heart-outline" />
                </Button> */}
              </Card.Actions>
            </Card>
          </>
        );
      }}
    />
  );
};

export default CharacterList;
