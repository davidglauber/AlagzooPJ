import React from 'react'
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreenHeader from '../../components/headers/homeScreenHeader';
import TagCard from '../../components/headers/tagCard';
import PharmaWidget from '../../components/pharmaWidget';

export default function Home() {
  return (
    <View style={styles.container}>
      <HomeScreenHeader/>
      {/* This component is the header */}

      <TagCard/>
      {/* This is the white card with CHANGE PHARMACY TEXT */}

      <PharmaWidget/>
      {/* This is the widget where shows all pharmacists */}

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
  }
});
