import {StyleSheet} from 'react-native';
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
  container: {
    marginLeft: 0,
    marginRight: SIZES.radius,
  },
  image: {
    width: 250,
    height: 300,
    borderRadius: 15,
  },
  inner_container: {
    marginTop: SIZES.radius,
    marginLeft: SIZES.padding,
  },
  text: {
    ...FONTS.h2,
    color: COLORS.gray1,
  },
  description: {
    ...FONTS.h3,
    color: COLORS.lightGray,
  },
});
