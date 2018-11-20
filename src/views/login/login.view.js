import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, Button, AsyncStorage, ActivityIndicator } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import vintage from '../../../assets/vintage-logo.png'
import { firebaseAuth } from '../../services/firebase.service'

class LoginView extends React.Component {

  state = {
    email: 'roelmdz@gmail.com',
    password: 'ekizcosa97',
    isLoading: false
  }

  Buttons = () => <View style={{ marginTop: 20, width: 290, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
    <View style={{ flex: 0.45 }}>
      <Button
        title='Iniciar Sesión'
        onPress={async () => {
          this.setState({
            isLoading: true
          })
          let response = await firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(err => this._handleAuthError(err.code))
          let user = firebaseAuth.currentUser
          if (user) {
            let name = user.displayName;
            let email = user.email;
            let photoUrl = user.photoURL;
            let emailVerified = user.emailVerified;
            let uid = user.uid
            if (email)
              await AsyncStorage.setItem('email', email);
            if (photoUrl)
              await AsyncStorage.setItem('photoUrl', photoUrl);
            if (uid)
              await AsyncStorage.setItem('uid', uid);
            if (name)
              await AsyncStorage.setItem('name', name);
            if (emailVerified)
              await AsyncStorage.setItem('emailVerified', emailVerified);
            this.setState({
              isLoading: false
            })
            this.props.screenProps.setLogin()
          }
        }}
      />
    </View>
    <View style={{ flex: 0.45 }}>
      <Button title='Registrarse' onPress={() => { this.props.navigation.navigate('Registro') }} color='gray' />
    </View>
  </View>

  _handleAuthError(errorCode) {
    switch (errorCode) {
      case 'auth/invalid-email':
        alert('Correo electronico ingresado incorrecto')
        break;

      case 'auth/wrong-password':
        alert('Contraseña ingresada incorrecta')
        break;
      case 'auth/user-disabled':
        alert('Este usuario no esta activado, por favor contacta al administrador de la aplicacion')
        break;
      case 'auth/user-not-found':
        alert('El usuario ingresado no existe')
        break;
    }
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <Image source={vintage} style={{ height: 120, width: 120 }}></Image>
          </View>
          <Text style={styles.title}>Profeta Elias</Text>
        </View>
        <View style={{ marginTop: 25 }} >
          <TextInput
            style={inputStyles}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Correo electrónico'
            ref={this.getNameInputRef}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({
                email: text
              })
            }}
          ></TextInput>
        </View>
        <View style={{ marginTop: 20 }} >
          <TextInput
            style={inputStyles}
            underlineColorAndroid='rgba(0,0,0,0)'
            secureTextEntry={true}
            placeholder='Contraseña'
            ref={this.getPasswordInpuRef}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text
              })
            }}
          ></TextInput>
        </View>
        {!this.state.isLoading ? <this.Buttons /> : <View style={{ marginTop: 20, width: 290, flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
          <ActivityIndicator size='large' />
        </View>}
      </View>
    </View>)
  }
}


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  formContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center'
  },
  title: {
    fontSize: 55,
    fontFamily: 'Oraqle'
  }
})

export default LoginView