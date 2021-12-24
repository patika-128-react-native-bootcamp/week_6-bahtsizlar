import React, {useState} from 'react';
import {View} from 'react-native';

import AllCharacterList from './AllCharacterList';
import CharacterFilter from '../../components/CharacterFilter';
import SearchedCharacterList from './SearchedCharacterList';

const CharactersListPage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View>
      <CharacterFilter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {searchValue === '' ? (
        <AllCharacterList />
      ) : (
        <SearchedCharacterList searchValue={searchValue} />
      )}
    </View>
  );
};

export default CharactersListPage;
