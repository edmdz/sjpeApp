import {StyleSheet} from 'react-native'

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.09,
    backgroundColor: '#fefeff',
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'white',
    borderRightWidth: 2,
    borderRadius: 30
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { color: 'black', fontSize: 45, fontFamily: 'Oraqle', marginTop: 10, marginRight:40 }
})

export default headerStyles