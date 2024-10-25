import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { CartContext } from '../Home/CartContext'; // Import CartContext để thêm sản phẩm vào giỏ hàng

// Lấy chiều rộng màn hình
const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width / 2) - 20; // Trừ đi khoảng cách giữa các item và padding

const SanPham = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext); // Dùng context giỏ hàng
  const [products, setProducts] = useState([]); // Trạng thái để lưu danh sách sản phẩm

  // Hàm lấy dữ liệu sản phẩm từ Fake Store API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products'); // Gọi API từ Fake Store API
      console.log(response.data);
      setProducts(response.data.slice(0, 8)); // Lưu 8 sản phẩm vào state
    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm:', error);
    }
  };

  // Gọi hàm khi component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <Text style={styles.noProductsText}>Không có sản phẩm nào để hiển thị.</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image 
                source={{ uri: item.image }} // Sử dụng trường 'image' từ Fake Store API
                style={styles.image}
              />
              <Text style={styles.productName} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text> {/* Giới hạn tên sản phẩm */}
              <View style={styles.ratingContainer}>
                <Text>Rating:</Text>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>{item.rating.rate}</Text> {/* Hiển thị xếp hạng sản phẩm */}
                  <FontAwesome
                    name="star"
                    size={16}
                    color="gold"
                  />                         
                </View>
              </View>
              <Text style={styles.price}>{item.price.toLocaleString()}₫</Text> {/* Hiển thị giá sản phẩm */}
  
              {/* Nút Chi tiết sản phẩm */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetailSanPham', { id: item.id })} // Gửi id sản phẩm
              >
                <Text style={styles.buttonText}>Chi tiết sản phẩm</Text>
              </TouchableOpacity>
  
              {/* Nút Thêm vào giỏ hàng */}
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#4CAF50' }]}
                onPress={() => addToCart(item)} // Thêm sản phẩm vào giỏ hàng
              >
                <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            </View>
          )}
          horizontal // Thiết lập chế độ cuộn ngang
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

export default SanPham;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 20,
    width: ITEM_WIDTH,
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productName: {
    fontWeight: 'bold',
    marginVertical: 5,
    width: '90%', // Giới hạn chiều rộng của tên sản phẩm
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  rating: {
    flexDirection: "row",
  },
  ratingText: {
    marginRight: 4,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    width: '80%', // Chiều rộng của nút
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
