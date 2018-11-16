import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image, AsyncStorage } from 'react-native'
import Slider from './slider.view.js'
import Icon from '../../../assets/logo_sjpe.png'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo'

const user = ''
AsyncStorage.getItem('email').then(userRes => {
  user = userRes
})

let DashboardHeader = ({ navigation }) => {
  return (<View style={headerStyles.container}>
    <View style={headerStyles.textContainer}>
      <Image source={Icon} style={{ width: 40, height: 40 }}></Image>
      <Text style={headerStyles.text}>Profeta Elias</Text>
      <TouchableOpacity style={{ position: 'relative', top: 4, right: -65 }} onPress={() => {
        navigation.navigate('Profile')
      }}>
        <Ionicons name='ios-person' size={32}></Ionicons>
      </TouchableOpacity>
    </View>
  </View>)
}

/*
<View style={headerStyles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }} style={{ width: 50, flex: 1, justifyContent: 'center' }}>
        <Ionicons name='ios-menu' size={32} color='white' />
      </TouchableOpacity>
    </View>
*/
class Dashboard extends React.Component {
  static navigationOptions = {
    header: DashboardHeader
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.lemaContainer}>
          <Text style={styles.lemaText}>"Jheova es el Dios sirvamosle de corazón!"</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 0.95, paddingTop: 10, paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('AnunciosNavigator') }}>
              <View style={{ flex: 0.6, alignItems: 'center' }}>
                <Card style={{ width: 345, height: 240 }} title='Avisos y anuncios' color="brown"></Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('InvitacionesNavigator') }}>
              <View style={{ flex: 0.6, alignItems: 'center', marginTop: 15 }}>
                <Card style={{ width: 345, height: 240 }} title='Invitaciones' color="darkblue"></Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CumpleañosNavigator') }}>
              <View style={{ flex: 0.6, alignItems: 'center', marginTop: 15 }}>
                <Card style={{ width: 345, height: 240 }} title='Cumpleaños' color="#407058"></Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('JovenMesNavigator') }}>
              <View style={{ flex: 0.6, alignItems: 'center', marginTop: 15 }}>
                <Card style={{ width: 345, height: 240 }} title='Joven del Mes' color="gray"></Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('AnunciosNavigator') }}>
              <View style={{ flex: 0.6, alignItems: 'center', marginTop: 15 }}>
                <Card style={{ width: 345, height: 240 }} title='Acuerdos' color="darkred"></Card>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lemaContainer: {
    flex: 0.05,
    backgroundColor: '#fefeff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1.5,
    borderBottomWidth: 0.01,
    borderTopWidth: 0.01
  },
  lemaText: {
    color: 'black',
    fontFamily: 'Rustico',
    fontSize: 15
  }
})

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
  text: { color: 'black', fontSize: 45, fontFamily: 'Oraqle', marginTop: 10 }
})

const Card = (props) => {
  let styleObj = {
    borderWidth: 0.10,
    backgroundColor: '#dbdbdb',
    shadowOffset: { width: 500, height: 500 },
    elevation: 5,
    alignItems: 'center'
  }
  return (<View style={Object.assign({}, styleObj, props.style)}>
    <LinearGradient
      colors={['rgba(0,0,0,0.8)', props.color]}
      style={{
        flex: 1,
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View style={{ flex: 0.50, width: '80%', borderBottomColor: 'white', borderBottomWidth: 0.20, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 35, color: 'white' }}>{props.title}</Text>
      </View>
    </LinearGradient>
  </View>)
}