import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './signIn.style';

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Hàm xử lí
        navigation.replace("Home")
    }

    const handleSignUp = () => {
        // Hàm xử lí
        navigation.replace("SignUp")
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require("../../../assets/images/3.jpg")} 
                resizeMode='cover' 
                style={{ 
                    width: 400, 
                    height: 250, 
                    marginBottom: 30, 
                    borderRadius: 20 // Bo cạnh cho ảnh
                }} 
            />
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', marginBottom: 30 }}>Đăng nhập</Text>

            <View style={styles.view}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Email" 
                    value={username} 
                    onChangeText={setUsername} 
                />

                <TextInput 
                    style={styles.input} 
                    placeholder="Mật khẩu" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                />

                <TouchableOpacity 
                    style={{
                        backgroundColor: '#ADD8E6', // Màu xanh lục nhạt
                        padding: 10, 
                        borderRadius: 10, // Bo góc nút bấm
                        alignItems: 'center', 
                        marginTop: 20
                    }}
                    onPress={handleSignIn}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={{ color: 'black', fontSize: 16 }}>Bạn chưa có tài khoản?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn;
