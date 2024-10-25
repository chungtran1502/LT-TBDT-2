// src/screens/DonHangChoXacNhan.js

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const orders = [
  { id: '1', name: 'Đơn hàng 1', status: 'Chờ xác nhận' },
  { id: '2', name: 'Đơn hàng 2', status: 'Chờ xác nhận' },
  // Thêm nhiều đơn hàng hơn nếu cần
];

const DonHangChoXacNhan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đơn hàng đang chờ xác nhận</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.orderName}>{item.name}</Text>
            <Text style={styles.orderStatus}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderName: {
    fontSize: 18,
  },
  orderStatus: {
    color: '#888',
  },
});

export default DonHangChoXacNhan;
