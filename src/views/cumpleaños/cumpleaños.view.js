import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import headerStyles from '../../../assets/headerStyles'

const CumpleañosHeader = ({ navigation }) => {
  return (<View style={headerStyles.container}>
    <View style={headerStyles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }} style={{ width: 50, flex: 1, justifyContent: 'center', paddingTop:10, paddingLeft:10 }}>
        <Ionicons name='ios-menu' size={32} color='black' />
      </TouchableOpacity>
    </View>
    <View style={headerStyles.textContainer}>
      <Text style={headerStyles.text}>Cumpleanos</Text>
    </View>
  </View>)
}

class CumpleañosView extends React.Component {
  static navigationOptions = {
    header: CumpleañosHeader
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Cumpleaos</Text>
      </View>
    )
  }
}

export default CumpleañosView