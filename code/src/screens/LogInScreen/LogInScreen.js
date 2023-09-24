import { View, Text ,Image,StyleSheet, useWindowDimensions} from 'react-native'
import React,{useState} from 'react'
import Logo from '../../../assets/images/Stu.jpeg'
import CustomInput from '../../components/CustomInput'
import CustomBottom from '../../components/CustomBotton/CustomBottom'
const LogInScreen = () => {
const [secretCode, setSecretCode] = useState('')
const {height} = useWindowDimensions()
const onSendPressed = () =>{
  console.warn("Send clicked")
}
  return (

    <View style={styles.root}> 
     <Image source={Logo} style={[styles.logo,{height: height * 0.3}]} resizeMode="contain"/>

     <CustomInput placeholder="Enter your secret code here" value={secretCode} setValue={setSecretCode} />
     <CustomBottom onPress={onSendPressed} />
    </View>
  )
}
const styles = StyleSheet.create({
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 200,
    },
    root: {
        alignItems: "center",
        padding: 20
    }
})

export default LogInScreen