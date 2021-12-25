import * as React from 'react';
import {
  TouchableOpacity,
  Button,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './CharDetail.styles';
import uuid from 'react-native-uuid';

const CharDetail = ({item}) => {
  console.log(item.id);
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
