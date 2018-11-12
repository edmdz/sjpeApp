import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import headerStyles from '../../../assets/headerStyles'

const InvitacionesHeader = ({ navigation }) => {
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
      <Text style={headerStyles.text}>Invitaciones</Text>
    </View>
  </View>)
}

class InvitacionesView extends React.Component {
  invitations = [
    {
      society: 'Simiente de Abraham',
      place: 'Guadalupe, Zacatecas'
    },
    {
      society: 'Profeta Elias',
      place: 'Monterrey, Nuevo Leon'
    }
  ]

  static navigationOptions = {
    header: InvitacionesHeader
  }

  renderView(){

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        {this.invitations.map( (element, index) => {
          return <Invitacion society={element.society} place={element.place} key={index} ></Invitacion>
        })}
      </View>
    )
  }
}

const Invitacion = (props) => <View style={{ 
  height: 250, 
  flex: 0.45,  
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor:'#971108',
  borderWidth:0.1,
  borderRadius: 1,
  elevation: 5
  }}>
  <View style={{ height: 120, width: 84, borderWidth: 1 }}>
  </View>
  <Text style={{fontSize: 14, fontFamily: 'QuickSand-Regular', fontWeight: 'bold', marginTop: 10,color:'white'}}>Sociedad  Juvenil</Text>
  <Text style={{fontSize: 12, fontFamily: 'QuickSand-Regular', textAlign: 'center',color:'white'}}>{props.society}</Text>
  <Text style={{fontSize: 14, fontFamily: 'QuickSand-Regular', fontWeight: 'bold', marginTop: 10,color:'white'}}>Lugar</Text>
  <Text style={{fontSize: 12, fontFamily: 'QuickSand-Regular', textAlign: 'center',color:'white'}}>{props.place}</Text>
  <Text style={{marginTop: 10, fontFamily: 'QuickSand-Regular',color:'white'}}>Fecha: 24/06</Text>
</View>

export default InvitacionesView