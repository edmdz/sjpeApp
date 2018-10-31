import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

class Registro extends React.Component {
  state = {
    email: '',
    phoneNumber: '',
    password: '',
    nickname: ''
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Profeta Elias</Text>
        </View>
        <View>
          <TextInput
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
        <View>
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
        <View>
          <TextInput
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
        <View>
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
  textContainer:{
    alignItems: 'center'
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