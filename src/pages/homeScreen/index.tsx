import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../../components/buttons/headerButtons';


const { width, height } = Dimensions.get("screen");

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{flex:0.1, flexDirection:'row', alignItems:"center", alignContent:'center'}}>
        <HeaderButton iconName={'grid'}/>
        <Image source={require('../../assets/images/jarvislg.png')} style={styles.logo}/>
        
        <HeaderButton iconName={'notifications-outline'} style={{marginLeft: 60}}/>
        <Image source={require('../../assets/images/profile.png')} style={styles.profile}/>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecffd9',
    padding:20
  },
  header: {
    flex:0.1, 
    flexDirection:'row', 
    alignItems:"center", 
    alignContent:'center'
  },
  logo: {
    width: 150,
    height:25,
    resizeMode:'contain'
  },
  profile: {
    marginTop: 10,
  }
});
