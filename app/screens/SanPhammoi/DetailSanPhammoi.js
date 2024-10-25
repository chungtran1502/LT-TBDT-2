import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CartContext } from '../Home/CartContext'; // Đảm bảo import CartContext

const DetailSanPham = ({ route, navigation }) => {
  const { id } = route.params; // Lấy id sản phẩm từ route params
  const [sanPham, setSanPham] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Gọi API để lấy chi tiết sản phẩm từ Fake Store API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setSanPham(productData); // Cập nhật dữ liệu sản phẩm
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (sanPham) {
      addToCart(sanPham, quantity);

      Alert.alert(
        "Thành công!",
        `${quantity} sản phẩm đã được thêm vào giỏ hàng!`,
        [
          { text: "Tiếp tục mua hàng", onPress: () => console.log("Tiếp tục mua hàng") },
          { text: "Xem giỏ hàng", onPress: () => navigation.navigate('Cart') }
        ]
      );
    }
  };

  // Nếu sản phẩm chưa được tải về từ API, hiển thị màn hình loading
  if (!sanPham) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Đang tải...</Text>
      </View>
    );
  }

  const data = [
    { key: 'image', content: <Image source={{ uri: sanPham.image }} style={styles.image} /> },
    { key: 'title', content: <Text style={styles.title}>{sanPham.title}</Text> },
    { key: 'info', content: <Text style={styles.info}>{sanPham.description}</Text> },
    { key: 'price', content: <Text style={styles.price}>{sanPham.price.toLocaleString()}₫</Text> },
    {
      key: 'color',
      content: (
        <View>
          <Text style={styles.color}>
            Màu sắc: {sanPham.color || 'N/A'} | 
            <Text style={styles.rating}>{sanPham.rating?.rate || 'N/A'}
              <FontAwesome name="star" size={16} color="#ff9900" />
            </Text>
          </Text>
        </View>
      )
    },
    {
      key: 'quantity',
      content: (
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={quantity.toString()}
            keyboardType="numeric"
            onChangeText={text => setQuantity(Math.max(1, parseInt(text) || 1))}
          />
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      )
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => item.content}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DetailSanPham;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  color: {
    fontSize: 16,
    marginVertical: 5,
  },
  rating: {
    fontWeight: 'bold',
    color: '#ff9900',
    marginLeft: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    fontSize: 24,
    padding: 10,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 50,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    paddingBottom: 100, // Để tránh chồng lên nút thêm vào giỏ hàng
  },
});
