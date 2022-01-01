import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './CharDetail.styles';

const CharDetail = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.inner_container}>
        <Text style={styles.text}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};
export default CharDetail;
