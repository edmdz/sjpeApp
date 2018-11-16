import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import headerStyles from '../../../assets/headerStyles'
import portada from '../../../assets/invitacion1.jpg'
import ImageView from 'react-native-image-view';
import portada2 from '../../../assets/invitacion.jpg'
const images = [
  {
    source: portada,
    title: 'Algo',
    width: 300,
    height: 200,
  },
  {
    source: portada2,
    title: 'Algo',
    width: 300,
    height: 200,
  }
];

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

  state = {
    isImageViewVisible: false
  }

  static navigationOptions = {
    header: InvitacionesHeader
  }

  onImagePress = () => {
    this.setState({
      isImageViewVisible: true
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
        {this.invitations.map((element, index) => {
          return <Invitacion 
          society={element.society} 
          place={element.place} 
          key={index}
          onImagePress = {this.onImagePress}
          ></Invitacion>
        })}
        <ImageView
          images={images}
          imageIndex={0}
          isVisible={this.state.isImageViewVisible}
        />
      </View>
    )
  }
}

const Invitacion = (props) => <View style={{
  height: 250,
  flex: 0.45,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#971108',
  borderWidth: 0.1,
  borderRadius: 1,
  elevation: 5
}}>
  <View style={{ height: 80, width: 120, borderWidth: 1 }}>
    <TouchableOpacity onPress={props.onImagePress}>
      <Image source={portada} style={{ height: 80, width: 120 }}></Image>
    </TouchableOpacity>
  </View>
  <Text style={{ fontSize: 14, fontFamily: 'QuickSand-Regular', fontWeight: 'bold', marginTop: 10, color: 'white' }}>Sociedad  Juvenil</Text>
  <Text style={{ fontSize: 12, fontFamily: 'QuickSand-Regular', textAlign: 'center', color: 'white' }}>{props.society}</Text>
  <Text style={{ fontSize: 14, fontFamily: 'QuickSand-Regular', fontWeight: 'bold', marginTop: 10, color: 'white' }}>Lugar</Text>
  <Text style={{ fontSize: 12, fontFamily: 'QuickSand-Regular', textAlign: 'center', color: 'white' }}>{props.place}</Text>
  <Text style={{ marginTop: 10, fontFamily: 'QuickSand-Regular', color: 'white' }}>Fecha: 24/06</Text>
</View>

export default InvitacionesView