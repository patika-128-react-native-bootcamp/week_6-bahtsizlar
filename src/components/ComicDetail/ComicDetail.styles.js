import {StyleSheet, Dimension} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../constants/theme';

export default StyleSheet.create({
  img_background: {
    width: '100%',
    height: '100%',
  },
  info_container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: SIZES.font,
    paddingHorizontal: SIZES.font,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.lightGray,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 230,
    height: 310,
    margin: SIZES.h1,
  },
  text_info: {
    width: 80,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  creators: {
    ...FONTS.body3,
    color: COLORS.lightGray,
  },
  description: {
    ...FONTS.body3,
    color: COLORS.lightGray,
  },
});
