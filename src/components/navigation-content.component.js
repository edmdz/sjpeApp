import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native'
import { SafeAreaView, DrawerItems } from 'react-navigation'

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...{...props, onItemPress: () => {console.log(props.items)}}} />
    </SafeAreaView>
  </ScrollView>
);

const onItemPressFunc = (route) => {
  
}
export default CustomDrawerContentComponent
