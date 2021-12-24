import React from 'react';

import {SafeAreaView} from 'react-native';
import ComicsList from '../../components/ComicsList';

import styles from './HomePage.styles';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ComicsList />
    </SafeAreaView>
  );
};

export default HomePage;
