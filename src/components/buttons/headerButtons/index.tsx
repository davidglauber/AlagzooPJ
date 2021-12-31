import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function HeaderButton(props: any) {
  return (
    <TouchableOpacity style={props.style ? [props.style, styles.menuButton] : styles.menuButton}>
      <Ionicons name={props.iconName} size={20} color="orange" />
    </TouchableOpacity>
  )
}

// export function HeaderButtonWithoutShadow(props: any) {
//   return (
//     <TouchableOpacity style={props.style ? [props.style, styles.menuButtonNoShadow] : styles.menuButtonNoShadow}>
//       <Ionicons name={props.iconName} size={20} color="orange" />
//     </TouchableOpacity>
//   )
// }

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: '#fff',
    width:40,
    height: 40,
    elevation:10,
    borderRadius:50,
    alignItems:"center",
    justifyContent:'center'
  },

  // menuButtonNoShadow: {
  //   width:40,
  //   height: 40,
  //   borderRadius:50,
  //   alignItems:"center",
  //   justifyContent:'center'
  // },
})
