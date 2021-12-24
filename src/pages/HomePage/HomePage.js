import React from 'react';

import {SafeAreaView} from 'react-native';
import ComicsFilter from '../../components/ComicsFilter';
import ComicsList from '../../components/ComicsList';

import styles from './HomePage.styles';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ComicsList />
      <ComicsFilter />
    </SafeAreaView>
  );
};

export default HomePage;
