import React from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'
import AuthService from '../../services/auth.service'

class Registro extends React.Component {
  authService = new AuthService

  state = {
    email: 'roelmdza@gmail.com',
    phoneNumber: '812116438',
    password: 'ekizcosa97',
    nickname: 'roelmdzaaa'
  }

  _onPress = async () => {
    let {email, phoneNumber, password, nickname} = this.state
    let obj = {
      email,
      phoneNumber,
      verified: 'false',
      password,
      displayName: nickname,
      isEnable: 'true'
    }

    this.authService.signUp(obj).then(res => {console.log(res)}).catch(error => {console.log(error)})
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
            <Button
              title="Registrarse"
              onPress={this._onPress}
            />
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