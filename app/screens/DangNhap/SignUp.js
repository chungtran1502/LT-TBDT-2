import { Text, View, Button, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './signUp.style'; // Giả sử file style đã được cấu hình giống với trang SignIn

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSignIn = () => {
        //hàm xử lí
        navigation.replace("SignIn");
    };

    const handleSignUp = () => {
        //hàm xử lí đăng ký
    };

    return (
        <View style={styles.container}>
            {/* Ảnh banner */}
            <Image
                source={require("../../../assets/images/1.jpg")}
                resizeMode="cover"
                style={styles.image}
            />

            {/* Tiêu đề đăng ký */}
            <Text style={styles.title}>Đăng ký</Text>

            <View style={styles.view}>
                {/* Trường nhập email */}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={username}
                    onChangeText={setUsername}
                />

                {/* Trường nhập mật khẩu */}
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {/* Trường nhập lại mật khẩu */}
                <TextInput
                    style={styles.input}
                    placeholder="Nhập lại mật khẩu"
                    value={repeatPassword}
                    onChangeText={setRepeatPassword}
                    secureTextEntry
                />

                {/* Nút đăng ký */}
                <Button
                    onPress={handleSignUp}
                    title="Đăng ký"
                    color="#00bfff" // Màu xanh dương nhạt
                />
            </View>

            <View style={{ marginTop: 20 }}>
                {/* Nút điều hướng sang trang đăng nhập */}
                <Button
                    onPress={handleSignIn}
                    title="Bạn đã có tài khoản?"
                    color="#00bfff" // Màu xanh dương nhạt
                />
            </View>
        </View>
    );
};

export default SignUp;
