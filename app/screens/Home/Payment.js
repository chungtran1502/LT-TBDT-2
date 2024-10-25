import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function Payment({ navigation }) { // Thêm navigation vào props
  const handlePaymentMethodSelect = (method) => {
    if (method === 'MoMo') {
      navigation.navigate('PaymentMoMo'); // Chuyển đến màn hình PaymentMoMo
    } else if (method === 'Ngân hàng') {
      navigation.navigate('PaymentBank'); // Chuyển đến màn hình PaymentBank
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán đơn hàng</Text>

      <View style={styles.paymentContainer}>
        <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>

        <TouchableOpacity
          style={styles.paymentMethod}
          onPress={() => handlePaymentMethodSelect('MoMo')}
        >
          <Text style={styles.paymentMethodText}>Ví MoMo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentMethod}
          onPress={() => handlePaymentMethodSelect('Ngân hàng')}
        >
          <Text style={styles.paymentMethodText}>Chuyển khoản ngân hàng</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => Alert.alert('Thanh toán thành công!')}
      >
        <Text style={styles.confirmButtonText}>Xác nhận thanh toán</Text>
      </TouchableOpacity>
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
  paymentContainer: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentMethod: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#ff4040',
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
