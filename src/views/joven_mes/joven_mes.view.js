import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import headerStyles from '../../../assets/headerStyles'
import person from '../../../assets/person.png'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const JovenMesHeader = ({ navigation }) => {
  return (<View style={headerStyles.container}>
    <View style={headerStyles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }} style={{ width: 50, flex: 1, justifyContent: 'center', paddingTop: 10, paddingLeft: 10 }}>
        <Ionicons name='ios-menu' size={32} color='black' />
      </TouchableOpacity>
    </View>
    <View style={headerStyles.textContainer}>
      <Text style={headerStyles.text}>Joven del Mes</Text>
    </View>
  </View>)
}

class JovenMesView extends React.Component {
  static navigationOptions = {
    header: JovenMesHeader
  }

  render() {
    return <View style={{ flex: 1 }}>
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 250, height: 250, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Image source={person} style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 5 }} />
          <Text style={{ fontSize: 30, fontFamily: 'QuickSand-Regular'}}>1st</Text>
        </View>
      </View>
      <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around' }}>
        <View style={{ width: 250, height: 250, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={person} style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 5 }} />
          <Text style={{ fontSize: 30, fontFamily: 'QuickSand-Regular'}}>2nd</Text>
        </View>
        <View style={{ width: 250, height: 250, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={person} style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 5 }} />
          <Text style={{ fontSize: 30, fontFamily: 'QuickSand-Regular'}}>3rd</Text>
        </View>
      </View>
    </View>
  }
}

export default JovenMesView