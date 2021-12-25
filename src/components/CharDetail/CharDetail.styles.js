import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../constants/theme';

export default StyleSheet.create({
  card: {
    marginVertical: SIZES.base,
    marginLeft: SIZES.base,
    marginRight: SIZES.base,
    borderColor: COLORS.gray,
    borderWidth: 3,
    borderRadius: 10,
  },
  inner_container: {
    marginTop: SIZES.radius,
    marginLeft: SIZES.padding,
  },
  text: {
    ...FONTS.h2,
    color: COLORS.gray1,
  },
  comics_container: {
    backgroundColor: 'grey',
    margin: 3,
    borderRadius: 10,
    padding: 5,
  },
});
