import React from 'react';
import {Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {useGetCharacterByIdQuery} from '../../api/characters/';
import CharDetail from '../../components/CharDetail';

function CharacterDetailPage({route}) {
  const characterId = route.params;
  const {data, error, isFetching, isLoading} =
    useGetCharacterByIdQuery(characterId);

  if (error) return <Text>Error</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    const charResults = data.data.results[0];

    return <CharDetail item={charResults} />;
  }
  return <Text>No content </Text>;
}

export default CharacterDetailPage;
