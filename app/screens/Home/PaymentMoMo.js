// src/screens/PaymentMoMo.js
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../Home/CartContext'; // Import CartContext

export default function PaymentMoMo() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigation = useNavigation();
  const { clearCart } = useContext(CartContext); // Sử dụng hàm clearCart từ CartContext

  const handleConfirmPayment = () => {
    if (!phoneNumber || !amount) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin!');
    } else {
      // Khi nhập đầy đủ, hiển thị form OTP
      setShowOtpInput(true);
    }
  };

  const handleConfirmOtp = () => {
    if (!otp) {
      Alert.alert('Vui lòng nhập mã OTP!');
    } else {
      // Sau khi OTP chính xác, thực hiện thanh toán
      Alert.alert('Xác nhận thanh toán thành công!');
      clearCart(); // Xóa giỏ hàng sau khi thanh toán thành công
      navigation.navigate('Feed'); // Điều hướng về trang giỏ hàng (Carts)
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Thanh toán qua Ví MoMo</Text>

      {/* Form nhập số điện thoại và số tiền */}
      {!showOtpInput && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại MoMo"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <TextInput
            style={styles.input}
            placeholder="Nhập số tiền thanh toán"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmPayment}
          >
            <Text style={styles.confirmButtonText}>Xác nhận thanh toán</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Form nhập OTP */}
      {showOtpInput && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmOtp}
          >
            <Text style={styles.confirmButtonText}>Xác nhận OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#ff4040',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
