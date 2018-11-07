import React from 'react'
import { Text, View, AsyncStorage, Image, Button } from 'react-native'
import personImage from '../../../assets/person.png'
import logOut from '../../utils/logout'

class ProfileView extends React.Component {
  user = ''
  photo = ''
  name = ''

  async UNSAFE_componentWillMount(){
    this.user = await AsyncStorage.getItem('email')
    this.photo = await AsyncStorage.getItem('photoUrl')
    this.name = await AsyncStorage.getItem('name')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 0.3 }}>
            <Image source={personImage} style={{ width: 100, height: 100, borderRadius: 50 }}></Image>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text style={{ flex: 0.2 }}>Correo Electronico: {this.user}</Text>
            <Text style={{ flex: 0.2 }}>Nombre de Usuario: {this.name}</Text>
            <View style={{ flex: 0.6 }}>
              <Button title='LogOut' onPress={() => {
                logOut(this.props.screenProps.setLogOut)
              }} color='red'></Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ProfileView