import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

export default function TagCard() {
  
  return (
    <View style={styles.tagCard}>
      <LinearGradient colors={['#1D90FF', '#8307FF']} style={styles.linearGradient}>
          <Ionicons name="md-briefcase-outline" size={15} color="white" />
      </LinearGradient>

      <Text style={styles.titleTagCard}>Bloom Store 36 Merl...</Text>
      <Text style={styles.pharmaTagCard}>CHANGE PHARMACY</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    elevation:5,
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
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
  pharmaTagCard: {
    color: '#FE3C28'
  },
  titleTagCard: {
    fontWeight: 'bold', 
    fontSize:12, 
    paddingHorizontal: 10
  },
})
