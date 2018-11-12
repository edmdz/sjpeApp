import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo'
import headerStyles from '../../../assets/headerStyles'

const AnunciosHeader = ({ navigation }) => {
  return (<View style={headerStyles.container}>
    <View style={headerStyles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }} style={{ width: 50, flex: 1, justifyContent: 'center', paddingTop: 10, paddingLeft: 10 }}>
        <Ionicons name='ios-menu' size={32} color='black' />
      </TouchableOpacity>
    </View>
    <View style={headerStyles.textContainer}>
      <Text style={headerStyles.text}>Anuncios</Text>
    </View>
  </View>)
}

class AnunciosView extends React.Component {
  static navigationOptions = {
    header: AnunciosHeader
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AnunciosCard title='Noche Mexicana' onPress={() => alert('Clickado')}/>
          <AnunciosCard title='Ensayo Extraordinario' onPress={() => alert('ClickadoS')} style={{ marginTop: 10 }} />
          <AnunciosCard title='Cooperacion para el convivio' onPress={() => alert('ClickadoS2')} style={{ marginTop: 10 }} />
        </ScrollView>
      </View>
    )
  }
}

const AnunciosCardView = (props) => <View style={Object.assign({
  width: 340,
  height: 200,
  borderWidth: 0.1,
  elevation: 2.5
}, props.style)}>
  <LinearGradient
    colors={['rgba(0,0,0,0.8)', '#407058']}
    style={{
      flex: 1,
      padding: 10
    }}
  >
    <Text style={{ fontSize: 30, color: 'white' }}>{props.title}</Text>
    <Text style={{ fontSize: 16, color: 'white' }}>Fecha: 16/10/18  Hora: 17:00</Text>
  </LinearGradient>
</View>

const AnunciosCard = (props) => <TouchableOpacity onPress={props.onPress}>
  <AnunciosCardView {...props} />
</TouchableOpacity>

export default AnunciosView