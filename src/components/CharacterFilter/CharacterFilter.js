import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CharacterFilter = ({searchValue, setSearchValue}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={30} color="#900" />
      <TextInput
        onChangeText={setSearchValue}
        value={searchValue}
        placeholder="Search"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
  },
  icon: {
    padding: 5,
  },
  input: {
    fontSize: 18,
    padding: 5,
  },
});

export default CharacterFilter;
