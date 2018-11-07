import { AsyncStorage } from 'react-native'

const logOut = async (func) => {
  await AsyncStorage.removeItem('email');
  await AsyncStorage.removeItem('photoUrl');
  await AsyncStorage.removeItem('uid');
  await AsyncStorage.removeItem('name');
  await AsyncStorage.removeItem('emailVerified');
  func()
}

export default logOut