import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Home from './Home'
const Getstart = ({ navigation }) => {
  return (
    <View style={{flex:1, alignItems:"center"}}>
        <Image  source={require("../../assets/images/2.jpg")}style={{width: 450, height: 300,resizeMode: 'contain'}}/>
        <Image  source={require("../../assets/images/1.jpg")}style={{width: 450, height: 300,resizeMode: 'contain'}}/>

      <Text style={{color:"#f96163",fontSize:18,fontWeight:'bold'}}>40k+ Đồ điện nam chính hãng</Text>
      <Text
        style={{
          fontSize: 24, // Kích thước chữ nhỏ hơn
          fontWeight: "bold",
          color: "#f96163", // Màu đỏ
          marginTop: 40,
          marginBottom: 20,
          textAlign: "center" // Căn giữa
        }}>
        Thế giới của quý ông thời thượng
      </Text>

      <TouchableOpacity 
      onPress={()=> navigation.replace("SignIn")}
      style={{
        backgroundColor:"#f96163",
        borderRadius:18,
        paddingVertical:18,
        width:"100%",
        alignItems:"center",
        padding:20
      }}>
            <Text style={{ fontSize:18,color:"#ffff",fontWeight:"700"}}>Truy cập</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Getstart

const styles = StyleSheet.create({})