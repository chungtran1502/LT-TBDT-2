import { Text, View, Button, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './signUp.style';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [otpVisible, setOtpVisible] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [showSuccess, setShowSuccess] = useState(false); // Biến để kiểm soát hiển thị thông báo thành công

    const handleSignIn = () => {
        navigation.replace("SignIn");
    };

    const handleSignUp = () => {
        if (password !== repeatPassword) {
            Alert.alert('Lỗi', 'Mật khẩu và mật khẩu nhập lại không khớp');
            return;
        }
        setOtpVisible(true); // Hiện form OTP sau khi đăng ký
    };

    const handleVerifyOtp = () => {
        if (otpCode.length > 0) {
            setShowSuccess(true); // Hiện thông báo thành công
        } else {
            Alert.alert('Lỗi', 'Vui lòng nhập mã OTP');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/images/1.jpg")}
                resizeMode="cover"
                style={styles.image}
            />
            <Text style={styles.title}>Đăng ký</Text>

            <View style={styles.view}>
                {!otpVisible ? (
                    <>
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
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập lại mật khẩu"
                            value={repeatPassword}
                            onChangeText={setRepeatPassword}
                            secureTextEntry
                        />
                        <Button
                            onPress={handleSignUp}
                            title="Đăng ký"
                            color="#00bfff"
                        />
                    </>
                ) : showSuccess ? ( // Nếu đăng ký thành công
                    <View>
                        <Text style={styles.title}>Đăng ký thành công!</Text>
                        <Button
                            onPress={handleSignIn}
                            title="Đi tới đăng nhập"
                            color="#00bfff"
                        />
                    </View>
                ) : ( // Form xác thực OTP
                    <View>
                        <Text style={styles.title}>Xác thực OTP</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập mã OTP"
                            value={otpCode}
                            onChangeText={setOtpCode}
                        />
                        <Button
                            onPress={handleVerifyOtp}
                            title="Xác thực"
                            color="#00bfff"
                        />
                    </View>
                )}
            </View>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={handleSignIn}>
                    <Text style={{ color: 'black', fontSize: 16 }}>Bạn đã có tài khoản?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUp;
