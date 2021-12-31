import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../../components/buttons/headerButtons';
import { LinearGradient } from 'expo-linear-gradient';


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

      <View style={styles.tagCard}>
          <LinearGradient colors={['#1D90FF', '#8307FF']} style={styles.linearGradient}>
              <Ionicons name="md-briefcase-outline" size={15} color="white" />
          </LinearGradient>

          <Text style={styles.titleTagCard}>Bloom Store 36 Merl...</Text>

          <Text style={styles.pharmaTagCard}>CHANGE PHARMACY</Text>
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
  pharmaTagCard: {
    color: '#FE3C28'
  },
  titleTagCard: {
    fontWeight: 'bold', 
    fontSize:12, 
    paddingHorizontal: 10
  },
  tagCard: {
    flexDirection:'row', 
    width: width/1.15, 
    backgroundColor:'white', 
    height: 50, 
    alignItems:'center', 
    paddingHorizontal: width/20, 
    borderRadius: 10, 
    elevation:15
  },
  linearGradient: {
    elevation:5,
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
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
