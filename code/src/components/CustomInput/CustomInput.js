import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
     <TextInput placeholder={placeholder}
     value={value}
     onChangeText={setValue}
     style={styles.input} placeholderTextColor={"black"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      marginVertical: 10
    },
    input: {
        backgroundColor: 'lightblue',
        fontWeight: "900",
        width: 350,
        height: 50,
        textAlign: "center",
       borderRadius:50
      

        
    }
})

export default CustomInput  