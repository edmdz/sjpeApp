import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import headerStyles from '../../../assets/headerStyles'
import person from '../../../assets/person.png'

const CumpleañosHeader = ({ navigation }) => {
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
      <Text style={headerStyles.text}>Cumpleanos</Text>
    </View>
  </View>)
}

const Cumpleaños = [
  {
    name: 'Salvador Mata',
    number: 9
  },
  {
    name: 'Alan Mendoza',
    number: 15
  },
  {
    name: 'Rocio Hernandez',
    number: 21
  },
  {
    name: 'Carlos Palacios',
    number: 23
  }
]

class CumpleañosView extends React.Component {
  static navigationOptions = {
    header: CumpleañosHeader
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
        <Text style={{
          fontFamily: 'QuickSand-Regular',
          fontSize: 34,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 10,
          alignSelf: 'flex-start',
          width: '85%',
          fontWeight: '400'
        }}>Noviembre</Text>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          {Cumpleaños.map((element, index) => {
            return <CumpleañosComponent name={element.name} number={element.number} key={index} />
          })}
        </ScrollView>
      </View>
    )
  }
}

const CumpleañosComponent = (props) => <View style={{ height: 160, width: '100%', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
  <View style={{ flex: 0.4, alignItems: 'flex-end'}}>
    <Text style={{ fontSize: 120, fontFamily: 'Oraqle' }}>{props.number}</Text>
  </View>
  <View style={{ height: 150, flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={person} style={{ height: 120, width: 120, borderRadius: 80 }}></Image>
    <Text style={{ fontSize: 24, fontFamily: 'QuickSand-Regular', paddingTop: 5 }}>{props.name}</Text>
  </View>
</View>

export default CumpleañosView