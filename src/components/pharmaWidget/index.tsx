import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

export default function PharmaWidget() {
  return (
    <>
    <LinearGradient colors={['#e9ffe5', '#c7fcd9', '#c7fce6']} style={styles.pharmacistsView}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
            <Text style={styles.titleWidget}>Chat OR Book an Appointment</Text>
            <Text style={{fontSize:12}}>Connect with our pharmacists</Text>
          </View>

          <TouchableOpacity style={{backgroundColor: "#FF8831", justifyContent:'center', alignItems:'center', padding:10, marginLeft: width/14, borderRadius:13, height: 39}}>
            <Text style={{color:'white', fontSize: 13}}>VIEW OTHERS</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: height / 30, flexWrap:'wrap'}}>
          <Image source={{uri:"https://www.controlledreleasesociety.org/sites/default/files/inline-images/Juan%20Paris%20-%201_0.jpg"}} style={{width: 146, height: 146, borderRadius: 9}}/>
          <Image source={{uri:"https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"}} style={{width: 146, height: 146, borderRadius: 9}}/>
          <Image source={{uri:"https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg"}} style={{width: 146, height: 146, borderRadius: 9, marginTop: 10}}/>
          <Image source={{uri:"https://reviews.tn/pt/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg"}} style={{width: 146, height: 146, borderRadius: 9, marginTop: 10}}/>
        </View>
      </LinearGradient>

      <LinearGradient colors={['transparent', 'transparent', '#000']} style={{position:'absolute', width: 146, height: 146, borderRadius: 9, flexDirection:'row', top: height/3.21, left: width/9.90}}>
        <View style={{marginTop: height/10}}>
          <Text style={{color:'#fff', fontWeight:'bold', paddingHorizontal: 10}}>David Ninh</Text>
          <Text style={{color:'#fff', fontSize:10, padding:10}}>28 Him/his</Text>
        </View>
        
        <View style={{marginTop: height/9, flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="star" size={15} color="yellow" />
          <Text style={{color:'yellow', fontSize:10, margin: 5}}>4.3</Text>
        </View>
      </LinearGradient>




      <LinearGradient colors={['transparent', 'transparent', '#000']} style={{position:'absolute', width: 146, height: 146, borderRadius: 9, flexDirection:'row', top: height/3.21, right: width/9.90}}>
        <View style={{marginTop: height/10}}>
          <Text style={{color:'#fff', fontWeight:'bold', paddingHorizontal: 10}}>Nikole Vultz</Text>
          <Text style={{color:'#fff', fontSize:10, padding:10}}>28 Her</Text>
        </View>
        
        <View style={{marginTop: height/9, flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="star" size={15} color="yellow" />
          <Text style={{color:'yellow', fontSize:10, margin: 5}}>4.5</Text>
        </View>
      </LinearGradient>



      <LinearGradient colors={['transparent', 'transparent', '#000']} style={{position:'absolute', width: 146, height: 146, borderRadius: 9, flexDirection:'row', bottom: height/2.94, right: width/9.90}}>
        <View style={{marginTop: height/10}}>
          <Text style={{color:'#fff', fontWeight:'bold', paddingHorizontal: 10}}>Humbert T.</Text>
          <Text style={{color:'#fff', fontSize:10, padding:10}}>28 Her</Text>
        </View>
        
        <View style={{marginTop: height/9, flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="star" size={15} color="yellow" />
          <Text style={{color:'yellow', fontSize:10, margin: 5}}>2.5</Text>
        </View>
      </LinearGradient>



      <LinearGradient colors={['transparent', 'transparent', '#000']} style={{position:'absolute', width: 146, height: 146, borderRadius: 9, flexDirection:'row', bottom: height/2.94, left: width/9.90}}>
        <View style={{marginTop: height/10}}>
          <Text style={{color:'#fff', fontWeight:'bold', paddingHorizontal: 10}}>Sabrina Sat</Text>
          <Text style={{color:'#fff', fontSize:10, padding:10}}>28 Her</Text>
        </View>
        
        <View style={{marginTop: height/9, flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="star" size={15} color="yellow" />
          <Text style={{color:'yellow', fontSize:10, margin: 5}}>2.5</Text>
        </View>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  pharmacistsView: {
    flex: .53,
    marginTop: height / 20,
    borderRadius:28,
    padding: 20
  },
  titleWidget: {
    fontWeight:'bold', 
    fontSize: 13
  }
})
