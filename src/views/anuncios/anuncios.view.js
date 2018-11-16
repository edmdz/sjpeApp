import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo'
import headerStyles from '../../../assets/headerStyles'


const Anuncios = [
  {
    title: 'Noche Mexicana',
    date: '16/9/18',
    time: '17:00',
    description: 'Paz de Dios Jovenes se les recuerda que el dia 16 de Septiembre se dara inicio a la noche Mexicana desde las 5 pm, estaremos preparando los alimentos y posteriormente la comida se servira alrededor de las 7 pm, esperamos contar con su presencia.'
  },
  {
    title: 'Ensayo ExtraOrdinario',
    date: '16/11/18',
    time: '20:00',
    description: 'Por motivo del clima se cancelara el ensayo del dia de mañana y convocamos a todos para reunirnos hoy a la hora indicada en el anuncio para ensayar los himnos que teniamos pendientes'
  },
  {
    title: 'Ultimo dia cooperacion para el convivio',
    date: '24/11/18',
    time: '20:00',
    description: 'A todos los Jovenes que no han entregado su cooperacion para el convivo de navidad se les recuerda que hoy es el ultimo dia para hacerlo, de lo contario no tendran su platillo para la posada navideña'
  }
]
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
          {Anuncios.map((element, index) => {
            return <AnunciosCard 
            title={element.title} 
            date={element.date} 
            time={element.time}
            onPress={ () => {
              this.props.navigation.navigate('AnunciosDetail', {
                title: element.title,
                date: element.date,
                time: element.time,
                description: element.description
              })
            }}
            style={index!==0 ? {marginTop: 10}: {}}
            key={index}
            />
          })}
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
    <Text style={{ fontSize: 16, color: 'white' }}>Fecha: {props.date}  Hora: {props.time}</Text>
  </LinearGradient>
</View>

const AnunciosCard = (props) => <TouchableOpacity onPress={props.onPress}>
  <AnunciosCardView {...props} />
</TouchableOpacity>

export default AnunciosView