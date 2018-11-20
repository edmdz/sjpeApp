import React from 'react'
import { Text, View, AsyncStorage, Image, Button, StatusBar } from 'react-native'
import personImage from '../../../assets/person.png'
import logOut from '../../utils/logout'
import { firebaseAuth } from '../../services/firebase.service'
class ProfileView extends React.Component {
  state = {
    user: '',
    photo: '',
    name: ''
  }

  async UNSAFE_componentWillMount() {
    let user = await AsyncStorage.getItem('email')
    let photo = await AsyncStorage.getItem('photoUrl')
    let name = await AsyncStorage.getItem('name')
    this.setState({
      user,
      photo,
      name
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar backgroundColor='#0b2f7c' barStyle="light-content" />
        <View style={{ flex: 0.3, width: '100%', backgroundColor: '#0b2f7c', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={personImage} style={{ width: 125, height: 125, borderRadius: 75 }}></Image>
        </View>
        <View style={{ flex: 0.7, width: '80%' }}>
          <View style={{ flex: 0.2 }}>
            <Text style={{ borderBottomWidth: 0.4, paddingBottom: 10, paddingTop: 10, fontSize: 18 }}>Correo Electronico  </Text>
            <Text style={{ paddingTop: 10, fontSize: 14 }}>{this.state.user}</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Text style={{ borderBottomWidth: 0.4, paddingBottom: 10, paddingTop: 10, fontSize: 18 }}>Nombre de Usuario  </Text>
            <Text style={{ paddingTop: 10, fontSize: 14 }}>{this.state.name}</Text>
          </View>
          <View style={{ flex: 0.6, justifyContent: 'flex-end' }}>
            <View style={{paddingBottom: 20}}>
              <Button title='LogOut' onPress={async () => {
                await firebaseAuth.signOut()
                logOut(this.props.screenProps.setLogOut)
              }} color='#a1154d'></Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ProfileView