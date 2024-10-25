import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../Home/CartContext'; // Import CartContext


export default function PaymentBank() {
  const navigation = useNavigation();
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [amount, setAmount] = useState('');
  const [isOTPVisible, setIsOTPVisible] = useState(false); // Hiển thị form OTP
  const [otp, setOtp] = useState('');

  const { clearCart } = useContext(CartContext); // Lấy hàm clearCart từ CartContext

  const handlePayment = () => {
    // Kiểm tra thông tin thanh toán trước khi chuyển đến OTP
    if (!accountNumber || !accountHolder || !amount) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin thanh toán');
      return;
    }
    setIsOTPVisible(true); // Hiển thị form OTP sau khi xác nhận thanh toán
  };

  const handleConfirmOTP = () => {
    if (!otp) {
      Alert.alert('Lỗi', 'Vui lòng nhập mã OTP');
      return;
    }
    // Giả lập xử lý OTP
    Alert.alert('Thanh toán thành công!');
    clearCart(); 
    // Xóa hết giỏ hàng sau khi thanh toán thành công
    navigation.navigate('Feed'); // Chuyển hướng về Notifications.js sau khi thanh toán thành công
  };

  return (
    <View style={styles.container}>
      {!isOTPVisible ? (
        <View>
          <Text style={styles.title}>Thanh toán qua Ngân hàng</Text>

          <TextInput
            style={styles.input}
            placeholder="Số tài khoản"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Tên chủ tài khoản"
            value={accountHolder}
            onChangeText={setAccountHolder}
          />
          <TextInput
            style={styles.input}
            placeholder="Số tiền"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.confirmButton} onPress={handlePayment}>
            <Text style={styles.confirmButtonText}>Xác nhận thanh toán</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Nhập mã OTP</Text>

          <TextInput
            style={styles.input}
            placeholder="Mã OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOTP}>
            <Text style={styles.confirmButtonText}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
