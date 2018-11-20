import React from 'react'
import { View, TextInput, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import AuthService from '../../services/auth.service'

class Registro extends React.Component {
  authService = new AuthService

  state = {
    email: '',
    phoneNumber: '',
    password: '',
    nickname: '',
    isLoading: false
  }

  _onPress = async () => {
    this.setState({
      isLoading: true
    })
    let {email, phoneNumber, password, nickname} = this.state
    let obj = {
      email,
      phone: `+52${phoneNumber}`,
      verified: false,
      password,
      nickname,
      disabled: false
    }

    this.authService.signUp(obj).then(res => {
      console.log('====>',res)
      res.json()
    }).then(body => {
      console.log(body)
      this.setState({
        isLoading: false
      })
      alert('Registrado Correctamente')
      this.props.navigation.navigate('Login')
    }).catch(err => console.log(err))
  }
  
  render() {
    return <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Profeta Elias</Text>
        </View>
        <View style={styles.inputMargin}>
          <TextInput
            keyboardType='email-address'
            style={inputStyles}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Correo electrónico'
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({
                email: text
              })
            }}
          ></TextInput>
        </View>
        <View style={styles.inputMargin}>
          <TextInput
            style={inputStyles}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Nombre de Usuario'
            value={this.state.nickname}
            onChangeText={(text) => {
              this.setState({
                nickname: text
              })
            }}
          ></TextInput>
        </View>
        <View style={styles.inputMargin}>
          <TextInput
            keyboardType='numeric'
            style={inputStyles}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Telefono'
            value={this.state.phoneNumber}
            onChangeText={(text) => {
              this.setState({
                phoneNumber: text
              })
            }}
          ></TextInput>
        </View>
        <View style={styles.inputMargin}>
          <TextInput
            style={inputStyles}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Contraseña'
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text
              })
            }}
            secureTextEntry={true}
          ></TextInput>
          <View style={styles.buttonContainer}>
            {this.state.isLoading ? <ActivityIndicator size='large'/>: <Button
              title="Registrarse"
              onPress={this._onPress}
            />}
          </View>
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 55,
    fontFamily: 'Oraqle'
  },
  textContainer: {
    alignItems: 'center'
  },
  inputMargin: {
    marginTop: 10
  },
  buttonContainer: {
    marginTop: 20
  }
})

const inputStyles = {
  borderWidth: 1,
  borderColor: '#e1e1d0',
  borderRadius: 3.5,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: '#f5f5f0',
  height: 50,
  fontSize: 14
}

export default Registro