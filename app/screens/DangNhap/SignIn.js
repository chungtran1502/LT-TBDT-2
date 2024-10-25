import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import styles from './signIn.style';

// URL của Fake Store API cho đăng nhập
const API_URL = 'https://fakestoreapi.com/auth/login';

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');  // Lưu tên đăng nhập
    const [password, setPassword] = useState('');  // Lưu mật khẩu
    const [error, setError] = useState(null);      // Lưu trạng thái lỗi

    const handleSignIn = async () => {
        try {
            // Gửi yêu cầu POST tới Fake Store API
            const response = await axios.post(`${API_URL}`, {
                username,
                password,
            });

            // Giả sử API trả về token khi đăng nhập thành công
            const { token } = response.data;

            // Log token để kiểm tra (bạn có thể lưu token này vào AsyncStorage nếu cần)
            console.log('Token:', token);

            // Điều hướng đến trang Home sau khi đăng nhập thành công
            navigation.replace("Home");
        } catch (error) {
            // Xử lý lỗi đăng nhập
            setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.'); // Hiển thị thông báo lỗi
            console.error('Lỗi đăng nhập:', error);
        }
    };

    const handleSignUp = () => {
        // Điều hướng đến trang đăng ký
        navigation.replace("SignUp");
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require("../../../assets/images/3.jpg")} 
                resizeMode='cover' 
                style={{ 
                    width: 400, 
                    height: 250, 
                    marginBottom: 30, 
                    borderRadius: 20 
                }} 
            />
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', marginBottom: 30 }}>Đăng nhập</Text>

            {/* Hiển thị lỗi nếu có */}
            {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>} 

            <View style={styles.view}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Tên đăng nhập" 
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
                        backgroundColor: '#ADD8E6', 
                        padding: 10, 
                        borderRadius: 10, 
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
    );
};

export default SignIn;
