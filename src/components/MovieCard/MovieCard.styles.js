import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  creator: {
    fontWeight: '200',
    fontSize: 25,
    flexDirection: 'row',
  },
  creator_container: {
    backgroundColor: 'grey',
    margin: 3,
    borderRadius: 10,
    padding: 5,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
  },
});
