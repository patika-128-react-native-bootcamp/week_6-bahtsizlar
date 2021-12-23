import React from 'react';

import {SafeAreaView} from 'react-native';
import ComicsFilter from '../../components/ComicsFilter';
import styles from './Comics.styles';

export default function Comics() {
  return (
    <SafeAreaView style={styles.container}>
      <ComicsFilter />
    </SafeAreaView>
  );
}
