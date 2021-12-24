import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import {useGetAllCharactersQuery} from '../../api/characters';
import {ActivityIndicator, Colors} from 'react-native-paper';

import CharacterList from '../../components/CharacterList';

const AllCharacterList = () => {
  const {data, error, isFetching, isLoading} = useGetAllCharactersQuery();

  if (error) return <Text>Error</Text>;
  if (isFetching)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (!data) return null;
  if (data) {
    return (
      <SafeAreaView>
        <CharacterList data={data} />
      </SafeAreaView>
    );
  }
  return <Text>No content </Text>;
};

export default AllCharacterList;
