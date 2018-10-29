import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo'
import Login from './src/views/login/login.view'
import { DashboardStack, AnunciosStack, InvitacionesStack, CumpleañosStack } from './src/routes/navigators'

let MainStack = createDrawerNavigator({
  DashboardNavigator: {
    screen: DashboardStack
  },
  AnunciosNavigator: {
    screen: AnunciosStack
  },
  InvitacionesNavigator: {
    screen: InvitacionesStack
  },
  CumpleañosNavigator: {
    screen: CumpleañosStack
  }
}, {
    drawerBackgroundColor: 'gray',
    drawerWidth: 250,
    contentOptions: {
      labelStyle: {
        color: 'white'
      }
    }
  })

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    isLogged: false
  }

 async componentDidMount() {
    Font.loadAsync({
      'MrGrieves': require('./assets/MrGrieves-Regular.otf'),
      'Oraqle': require('./assets/Oraqle-Script.otf'),
      'Rustico': require('./assets/Rustico-Regular.otf')
    }).then(() => {
      this.setState({
        fontLoaded: true
      })
    })
    let user = await AsyncStorage.getItem('email')
    if(user){
      this.setState({
        isLogged: true
      })
    }
  }

  render() {
    let app = <View style={styles.container}>
      <MainStack></MainStack>
    </View>

    let loggin = <Login />
    let content = this.state.isLogged ? app : loggin

    return (
      < View style={{ flex: 1 }}>
        <StatusBar backgroundColor='white' barStyle="dark-content" />
        {this.state.fontLoaded ? content : null}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
