import AnunciosView from '../../src/views/anuncios/anuncios.view';
import InvitacionesView from '../../src/views/invitaciones/invitaciones.view';
import CumpleañosView from '../../src/views/cumplea\u00F1os/cumplea\u00F1os.view';
import Dashboard from '../../src/views/dashboard/dashboard.view'
import { StyleSheet } from 'react-native'
import { createStackNavigator, create } from 'react-navigation'
import Login from '../views/login/login.view'
import Registro from '../views/registro/registro.view';

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

let HeaderComponent = () => {
  return (<View style={headerStyles.container}>
    <View style={headerStyles.textContainer}>
      <Text style={headerStyles.text}>Profeta Elias</Text>
    </View>
  </View>)
}

const DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    navigationOptions: {
      header: HeaderComponent
    }
  }
)

const AnunciosStack = createStackNavigator(
  {
    Anuncios: {
      screen: AnunciosView
    }
  }
)

const InvitacionesStack = createStackNavigator(
  {
    Invitaciones: {
      screen: InvitacionesView
    }
  }
)

const CumpleañosStack = createStackNavigator(
  {
    Cumpleaños: {
      screen: CumpleañosView
    }
  }
)

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Registro: {
      screen: Registro
    }
  },
  {
    navigationOptions:{
      header: null
    }
  }
)

export {
  DashboardStack,
  AnunciosStack,
  InvitacionesStack,
  CumpleañosStack,
  LoginStack
}