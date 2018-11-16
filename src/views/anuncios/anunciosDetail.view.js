import React from 'react'
import { View, Text } from 'react-native'

class AnunciosDetail extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    const title = this.props.navigation.getParam('title', 'Sin titulo espesificado')
    const date = this.props.navigation.getParam('date', 'Sin fecha')
    const time = this.props.navigation.getParam('time', '00:00')
    const description = this.props.navigation.getParam('description', 'Sin descripcion')
    return (<View style={{ flex: 1, padding: 10 }}>
      <View style={{ width: '80%', marginBottom: 15 }}>
        <Text style={{
          fontFamily: 'QuickSand-Regular',
          fontSize: 30,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 5
        }}>{title}</Text>
        <Text style={{ fontSize: 14, fontFamily: 'QuickSand-Regular' }}>Fecha: {date}</Text>
        <Text style={{ fontSize: 14, fontFamily: 'QuickSand-Regular' }}>Hora: {time}</Text>
      </View>
      <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 24, fontFamily: 'QuickSand-Regular' }}>Descripción </Text>
          <Text style={{ fontSize: 18, fontFamily: 'QuickSand-Regular' }}>{description}</Text>
        </View>
    </View>)
  }
}

export default AnunciosDetail