import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const CustomBottom = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Send</Text>
    </Pressable>
  )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#3B71f3',
        width: 200,
        padding:15,
        alignItems:"center",
        borderRadius: 30
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})
export default CustomBottom