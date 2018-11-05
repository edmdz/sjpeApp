import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo'
import { MainStack, LoginStack } from './src/routes/navigators'



export default class App extends React.Component {
  state = {
    fontLoaded: false,
    isLogged: false
  }

  async componentDidMount() {
    await AsyncStorage.removeItem('email')
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
    if (user) {
      this.setState({
        isLogged: true
      })
    }
  }

  render() {
    let app = <View style={styles.container}>
      <MainStack></MainStack>
    </View>

    let login = <LoginStack screenProps={
      {
        setLogin: () => {
          this.setState({ isLogged: true })
        }
      }
    }></LoginStack>
    let content = this.state.isLogged ? app : login

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
