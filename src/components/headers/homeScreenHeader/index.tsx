import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import HeaderButton from '../../buttons/headerButtons'

export default function HomeScreenHeader() {
  return (
    <View style={{flex:0.1, flexDirection:'row', alignItems:"center", alignContent:'center'}}>
      <HeaderButton iconName={'grid'}/>
      <Image source={require('../../../assets/images/jarvislg.png')} style={styles.logo}/>
      
      <HeaderButton iconName={'notifications-outline'} style={{marginLeft: 60}}/>
      <Image source={require('../../../assets/images/profile.png')} style={styles.profile}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height:25,
    resizeMode:'contain'
  },
  profile: {
    marginTop: 10,
  }
})
