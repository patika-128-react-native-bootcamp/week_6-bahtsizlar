import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async favChars => {
  try {
    const userData = await AsyncStorage?.getItem('@FAV_CHARS');
    if (userData != null) {
      favChars(JSON.parse(userData));
    }
  } catch (e) {
    console.log(e);
  }
};
